import { safeUrl } from "@/lib/projects";
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string | null;
  children: React.ReactNode;
  className?: string;
}) {
  const url = safeUrl(href);
  return url ? (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <span
      className={className}
      role="link"
      aria-disabled="true"
      title="Not available yet"
    >
      {children}
      <span className="sr-only"> — not available yet</span>
    </span>
  );
}
