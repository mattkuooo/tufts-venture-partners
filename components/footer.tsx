import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-tufts-blue text-white/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Image
            src="/images/tvp_logo_with_text_resized_transparentBG.png"
            alt={site.name}
            width={318}
            height={102}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-2 max-w-sm text-sm text-white/60">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-tufts-brown"
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
            className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-tufts-brown"
          >
            LinkedIn
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-tufts-brown"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. Not an SEC-registered
        investment adviser.
      </div>
    </footer>
  );
}
