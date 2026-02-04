import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import SVGLogo from "@/svgs/components/SVGLogo";
import SvgWithGradient from "@/components/ui/SvgWithGradient";
import { MailtoLink } from "@/components/mailto-link";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/heleneperez/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/offres", label: "Offres" },
  { href: "/a-propos", label: "À propos" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex">
              <SvgWithGradient
                svg={SVGLogo}
                colors={[["#203eec", "#00d4ff"]]}
                angle={135}
                className="h-5 w-auto"
              />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs leading-relaxed">
              Conseil en stratégie et innovation pédagogique. Conception
              d'expériences d'apprentissage engageantes basées sur les sciences
              cognitives.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary transition-colors hover-bg-brand"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-brand" />
                </Link>
              ))}
              <MailtoLink
                className="p-2 rounded-full bg-secondary transition-colors hover-bg-brand"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-brand" />
              </MailtoLink>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h4 className="text-sm font-semibold mb-4">Restez informé</h4>
            <p className="text-sm text-muted-foreground mb-4">Recevez mes actualités et conseils directement dans votre boîte mail.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2.5 text-sm bg-secondary rounded-lg border-0 focus:ring-2 outline-none"
                style={{ ["--tw-ring-color" as any]: "#203eec" }}
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-medium text-white rounded-lg transition-all relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(32, 62, 236, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                S'inscrire
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-6">
            {/* <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link> */}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Learnee. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
