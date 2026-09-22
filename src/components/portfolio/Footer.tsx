import { Github, Instagram, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { profile, socialLinks } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-shell flex flex-col items-center gap-8 py-10 sm:flex-row sm:justify-between">
        <div className="order-3 flex flex-col items-center gap-2 sm:order-1 sm:items-start">
          <p className="text-sm text-muted-foreground">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>

        <div
          aria-hidden="true"
          className="order-1 flex h-16 w-16 items-center justify-center rounded-full border border-border font-display text-sm sm:order-2"
        >
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </div>

        <ul className="order-2 flex items-center gap-5 sm:order-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.name] ?? Github;
            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
