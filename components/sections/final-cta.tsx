import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MailtoLink } from "@/components/mailto-link";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Parlons de votre enjeu
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Vous avez un projet de transformation, une problématique d'exécution
            ou simplement des questions sur notre approche ? Échangeons.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <MailtoLink className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full">
              Demander un échange
              <ArrowUpRight className="w-4 h-4" />
            </MailtoLink>
            <Link
              href="https://www.linkedin.com/in/heleneperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-brand inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full transition-colors"
            >
              Contacter via LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
