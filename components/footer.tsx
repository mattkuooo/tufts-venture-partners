import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading font-bold tracking-tight text-white">
            {site.name}
          </p>
          <p className="mt-1 max-w-sm text-sm text-neutral-400">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-white hover:decoration-tufts-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-sm">
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-600 underline-offset-4 hover:text-white hover:decoration-tufts-blue"
          >
            LinkedIn
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-600 underline-offset-4 hover:text-white hover:decoration-tufts-blue"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-6 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.name}. Not an SEC-registered
        investment adviser.
      </div>
    </footer>
  );
}
