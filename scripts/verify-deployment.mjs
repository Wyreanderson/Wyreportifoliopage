import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const target = new URL(process.argv[2]);
assert(target.protocol === "https:" && target.hostname.endsWith(".vercel.app"));
const browser = await chromium.launch();
const report = {
  url: target.href,
  viewports: [],
  resourceErrors: [],
  consoleErrors: [],
  secretSignatureMatches: [],
};
const pattern =
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[A-Z0-9]{16}|sk-proj-[A-Za-z0-9_-]{20,}/;
try {
  for (const [label, width, height] of [
    ["desktop", 1440, 900],
    ["mobile", 390, 844],
  ]) {
    const page = await browser.newPage({ viewport: { width, height } });
    const pending = [];
    page.on("pageerror", (error) => report.consoleErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") report.consoleErrors.push(message.text());
    });
    page.on("requestfailed", (request) =>
      report.resourceErrors.push({
        url: request.url(),
        error: request.failure()?.errorText,
      }),
    );
    page.on("response", (response) => {
      if (new URL(response.url()).origin !== target.origin) return;
      if (response.status() >= 400)
        report.resourceErrors.push({
          url: response.url(),
          status: response.status(),
        });
      if (/javascript|json|html/.test(response.headers()["content-type"] ?? ""))
        pending.push(
          response
            .text()
            .then((text) => {
              if (pattern.test(text))
                report.secretSignatureMatches.push(response.url());
            })
            .catch(() => {}),
        );
    });
    const response = await page.goto(target.href, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    assert(
      (await page.locator("h1").innerText()).includes("Building open-source"),
    );
    assert.equal(
      await page.locator(".project-card h3").first().innerText(),
      "WyreFi Cam",
    );
    assert.equal(
      await page.locator(".hero-actions a").nth(1).getAttribute("href"),
      "https://github.com/Wyreanderson",
    );
    assert.equal(
      await page.locator("footer a").last().getAttribute("href"),
      "https://www.instagram.com/wyreanderson/",
    );
    for (const link of await page
      .locator('a[href^="#"]')
      .evaluateAll((elements) => elements.map((e) => e.getAttribute("href"))))
      assert.equal(await page.locator(link).count(), 1);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((image) => image.decode());
      assert(await image.evaluate((image) => image.naturalWidth > 0));
    }
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    if (label === "mobile") {
      await page.locator("#menu-toggle").click();
      assert.equal(
        await page.locator("#menu-toggle").getAttribute("aria-expanded"),
        "true",
      );
      await page.keyboard.press("Escape");
      assert.equal(
        await page.locator("#menu-toggle").getAttribute("aria-expanded"),
        "false",
      );
    }
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    const og = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    assert.equal(canonical, "https://wyreanderson.com");
    assert(og.endsWith("/assets/og-image.png"));
    for (const path of [
      "/assets/og-image.png",
      "/icon.svg",
      "/robots.txt",
      "/sitemap.xml",
      "/assets/projects/wyrefi-cam-pixel.png",
    ])
      assert.equal(
        (await page.request.get(new URL(path, target).href)).status(),
        200,
      );
    await page.evaluate(() => scrollTo(0, 0));
    await mkdir("docs/screenshots/p8.1", { recursive: true });
    await page.screenshot({
      path: `docs/screenshots/p8.1/production-${label}.png`,
      fullPage: true,
    });
    await Promise.all(pending);
    report.viewports.push({
      label,
      width,
      height,
      status: 200,
      imagesLoaded: true,
      noOverflow: true,
      canonical,
      og,
    });
    await page.close();
  }
  assert.deepEqual(report.resourceErrors, []);
  assert.deepEqual(report.consoleErrors, []);
  assert.deepEqual(report.secretSignatureMatches, []);
  report.passed = true;
} finally {
  await browser.close();
  await writeFile(
    "docs/P8.1-public-check.json",
    JSON.stringify(report, null, 2) + "\n",
  );
}
console.log(JSON.stringify(report, null, 2));
