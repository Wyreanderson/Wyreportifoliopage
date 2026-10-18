import Image from "next/image";
const features = [
  {
    id: "open-source",
    title: "Open Source",
    text: "Tools and projects built in the open for the community to use and contribute to.",
  },
  {
    id: "self-hosted",
    title: "Self-Hosted",
    text: "Practical, self-hosted solutions for more control and privacy.",
  },
  {
    id: "documentation",
    title: "Documentation",
    text: "Clear guides, setup instructions, and lessons learned along the way.",
  },
];
export function Features() {
  return (
    <section className="features section" aria-labelledby="features-heading">
      <h2 id="features-heading">What you’ll find here</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature" key={feature.id} id={feature.id}>
            <Image
              src={`/assets/icon-${feature.id}.svg`}
              width={64}
              height={64}
              alt=""
            />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
