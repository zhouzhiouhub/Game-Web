import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-base">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Gaming RGB Software"
                width={28}
                height={28}
              />
              <span className="text-lg font-bold rgb-full bg-clip-text text-transparent">
                Gaming RGB
              </span>
            </Link>
            <p className="mt-3 text-sm text-fg-muted">
              One Software. Every Light.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fg-primary">Product</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg-muted hover:text-fg-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fg-primary">Resources</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg-muted hover:text-fg-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fg-primary">Community</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted hover:text-fg-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fg-primary">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg-muted hover:text-fg-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-fg-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Open source under MIT.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.githubRepo} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-fg-muted hover:text-fg-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
