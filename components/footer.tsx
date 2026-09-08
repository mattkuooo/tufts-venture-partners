import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-tufts-blue text-white/85">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/tvp_logo_text_resized_transparentBG.png"
              alt={site.name}
              width={866}
              height={288}
              className="h-16 w-auto brightness-0 invert"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-5">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="text-sm text-white/70 hover:text-white"
            >
              {site.email}
            </a>

            {/* Both ways to join, side by side. The e-list stays the primary
                action; Slack sits beside it in the outline treatment. */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
              <Button
                size="sm"
                className="bg-white text-tufts-blue hover:bg-white/90"
                nativeButton={false}
                render={
                  <a href={site.elist} target="_blank" rel="noopener noreferrer" />
                }
              >
                Join the E-list
              </Button>
              <Button
                size="sm"
                className="border border-white/40 bg-transparent text-white hover:bg-white/10"
                nativeButton={false}
                render={
                  <a href={site.slack} target="_blank" rel="noopener noreferrer" />
                }
              >
                Join our Slack
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. Not an SEC-registered
        investment adviser.
      </div>
    </footer>
  );
}
