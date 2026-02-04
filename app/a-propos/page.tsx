import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { Brain, GraduationCap, Ban, Linkedin } from "lucide-react";

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  À propos
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                  Je suis{" "}
                  <span className="gradient-text-hero">Hélène Perez</span>
                </h1>
                <p className="mt-2 text-xl text-muted-foreground">
                  Fondatrice de Learnee
                </p>
                <p className="mt-8 text-xl font-medium text-brand">
                  Je travaille là où la stratégie rencontre la réalité humaine.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl -z-10 bg-brand-gradient-light opacity-50" />
                <Image
                  src="/images/helene.jpg"
                  alt="Hélène Perez - Fondatrice de Learnee"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Ce qui donne du sens à mon travail
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Révéler les ressources et les personnes, comprendre le
                fonctionnement réel du terrain, et aider l'organisation à
                orienter sa stratégie à partir de ce qui est solide —{" "}
                <strong className="text-foreground">
                  pas à partir de ce qu'elle espère
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-border">
                <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-violet-gradient-light">
                  <GraduationCap className="w-8 h-8 text-brand-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Experte des compétences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">15+ ans</strong> dans la
                  formation et le développement des compétences. Je connais les
                  rouages, les pièges et les leviers réels de la montée en
                  compétence en entreprise.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border">
                <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-brand-gradient-light">
                  <Brain className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Regard sciences cognitives
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  J'applique les sciences cognitives pour rendre visible ce que
                  les organisations voient mal : mécanismes décisionnels, charge
                  cognitive, motivation, apprentissage réel, fragilités
                  systémiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parti pris */}
        <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-violet-gradient">
                <Ban className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Mon parti pris est clair
              </h2>
              <p className="mt-8 text-2xl font-medium">
                Je suis{" "}
                <span className="gradient-text-hero">anti-formation par défaut</span>
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Parce que former n'a de sens que si l'organisation peut
                absorber, transférer et exécuter. Sinon, c'est du gaspillage de
                temps, d'énergie et de budget.
              </p>
            </div>
          </div>
        </section>

        {/* LinkedIn CTA */}
        <section className="py-20 md:py-32 border-t border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Envie d'en savoir plus ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Retrouvez mes publications et mon parcours complet sur LinkedIn
              </p>
              <Link
                href="https://www.linkedin.com/in/heleneperez/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin inline-flex items-center justify-center gap-2 px-8 py-4 mt-8 text-base font-medium text-white rounded-full transition-all hover:shadow-2xl"
              >
                <Linkedin className="w-5 h-5" />
                Voir mon profil LinkedIn
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
