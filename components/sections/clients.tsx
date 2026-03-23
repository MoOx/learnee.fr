"use client";

import { getVisualCenterTransform } from "@sanity-labs/logo-soup";
import { LogoSoup } from "@sanity-labs/logo-soup/react";

const clients: {
  src: string;
  alt: string;
  href?: string;
}[] = [
  {
    src: "/companies/cognidia.svg",
    alt: "Cognidia",
    // href: "https://cognidia.fr/",
  },
  {
    src: "/companies/my-mojoo.png",
    alt: "My Moojo",
    // href: "https://www.mymoojo.com",
  },
  {
    src: "/companies/estia.svg",
    alt: "ESTIA",
    // href: "https://www.estia.fr"
  },
  {
    src: "/companies/isae-supmeca.png",
    alt: "ISAE-Supméca",
    // href: "https://www.isae-supmeca.fr",
  },
];

export function Clients() {
  return (
    <section className="py-20 md:py-24 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Ils nous ont fait confiance
          </p>
          <LogoSoup
            logos={clients}
            baseSize={128}
            gap={48}
            renderImage={(logo) => {
              const client = clients.find(
                (c) => logo.src.includes(c.src) || c.src.includes(logo.src),
              );
              if (client) {
                return (
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      {...logo}
                      className="grayscale contrast-150 brightness-80 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-300"
                    />
                  </a>
                );
              }
              return <img {...logo} />;
            }}
          />
        </div>
      </div>
    </section>
  );
}
