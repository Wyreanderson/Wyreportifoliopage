import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects } from "../src/content/projects";
import { featuredProjects, safeUrl } from "../src/lib/projects";
test("content and URL safety", () => {
  expect(projects).toEqual([]);
  for (const url of [
    "",
    "javascript:alert(1)",
    "http://unsafe.test",
    "https://user:pass@example.com",
    "not a URL",
  ])
    expect(safeUrl(url)).toBeUndefined();
  expect(safeUrl("https://github.com/")).toBe("https://github.com/");
  expect(
    featuredProjects([
      {
        id: "test",
        slug: "test",
        title: "Test",
        shortDescription: "Test fixture",
        tags: [],
        categories: [],
        status: "draft",
        featured: true,
      },
    ]),
  ).toEqual([]);
});
for (const [name, width, height] of [
  ["desktop", 1440, 900],
  ["tablet", 768, 1024],
  ["mobile", 390, 844],
  ["small-mobile", 360, 800],
] as const) {
  test(`${name}: layout, empty state, links and accessibility`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Building open-source & self-hosted projects",
    );
    await expect(page.locator(".placeholder")).toHaveCount(4);
    await expect(page.locator('a[href="#"]')).toHaveCount(0);
    await expect(
      page.locator('.hero-actions a[href="https://github.com/Wyreanderson"]'),
    ).toContainText("Visit GitHub");
    for (const href of await page
      .locator('a[href^="#"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!)))
      await expect(page.locator(href)).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({
      path: `docs/screenshots/${name}.png`,
      fullPage: true,
    });
  });
}
test("keyboard navigation and mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Skip to content")).toBeFocused();
  await page.keyboard.press("Enter");
  expect(await page.evaluate(() => location.hash)).toBe("#main");
  const toggle = page.locator("#menu-toggle");
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await page.keyboard.press("Space");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(await page.evaluate(() => location.hash)).toBe("#projects");
});
test("SEO routes", async ({ request }) => {
  const response = await request.get("/");
  const html = await response.text();
  expect(html).toContain("https://wyreanderson.com");
  expect(html).toContain("og:image");
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect(await (await request.get("/sitemap.xml")).text()).toContain(
    "https://wyreanderson.com",
  );
});
