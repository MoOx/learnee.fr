import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MailtoLink } from "@/components/mailto-link";
import {
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import SVGIconSuccess from "@/svgs/components/SVGIconSuccess";

const offers = [
  {
    id: "audit-express",
    icon: Zap,
    name: "Audit Express",
    subtitle: "Point de Lucidité",
    objective:
      "Obtenir une image fiable du terrain, rapidement, pour décider sans se tromper de levier.",
    items: [
      "Synthèse exécutive (risques / leviers / priorités)",
      "5–10 recommandations actionnables",
      "Décision : faut-il un audit complet ? Quel périmètre ? Quelle urgence ?",
    ],
    itemsLabel: "Livrables",
    itemsIcon: CheckCircle,
    ideal:
      'Transformation imminente, tensions, retards, "on ne sait pas où agir".',
    highlight: false,
  },
  {
    id: "audit-360",
    icon: SVGIconSuccess,
    name: "Audit 360",
    subtitle: "Diagnostic complet",
    objective:
      "Comprendre les causes profondes des écarts entre stratégie et exécution.",
    items: [
      "Cartographies (capacités / risques / dépendances)",
      "Analyse cognitive & organisationnelle",
      "Feuille de route 90 jours / 6 mois",
      "Plan d'action + gouvernance + KPIs",
    ],
    itemsLabel: "Livrables",
    itemsIcon: CheckCircle,
    ideal:
      "Transformation structurelle, besoin de comprendre en profondeur avant d'agir.",
    highlight: true,
  },
  {
    id: "accompagnement",
    icon: Users,
    name: "Accompagnement",
    subtitle: "Mise en œuvre",
    objective:
      "Construire les capacités nécessaires pour exécuter sans épuiser.",
    items: [
      "Sécurisation des expertises critiques (transmission, standardisation, autonomie)",
      "Accélération de l'exécution (décision, coordination, arbitrage)",
      "Apprentissage intégré au travail (sans surcharge)",
      "Réduction de la charge cognitive (outils, règles, flux, interruptions)",
    ],
    itemsLabel: "Exemples de chantiers",
    itemsIcon: Lightbulb,
    ideal:
      "Vous avez le diagnostic, il faut maintenant construire les capacités.",
    highlight: false,
  },
];

export default function OffresPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Nos offres
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                Des interventions{" "}
                <span className="gradient-text-hero">ciblées et mesurables</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Chaque organisation est unique. Nous adaptons notre intervention
                à votre contexte, vos enjeux et votre niveau de maturité.
              </p>
            </div>
          </div>
        </section>

        {/* Offers + Note */}
        <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className={`p-8 rounded-2xl border flex flex-col ${
                    offer.highlight
                      ? "border-brand bg-background shadow-lg relative"
                      : "border-border bg-background"
                  }`}
                >
                  {offer.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium text-white bg-brand-gradient">
                      Recommandé
                    </div>
                  )}

                  <div
                    className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${
                      offer.highlight ? "bg-brand-gradient" : "bg-brand-gradient-light"
                    }`}
                  >
                    <offer.icon
                      className={`w-7 h-7 ${offer.highlight ? "text-white" : "text-brand"}`}
                    />
                  </div>

                  <h2 className="text-2xl font-semibold">{offer.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {offer.subtitle}
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-secondary/50">
                    <p className="text-sm font-medium">Objectif</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {offer.objective}
                    </p>
                  </div>

                  <div className="mt-6 flex-grow">
                    <p className="text-sm font-medium mb-3">
                      {offer.itemsLabel}
                    </p>
                    <ul className="space-y-2">
                      {offer.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <offer.itemsIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Idéal si :</span>{" "}
                      {offer.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note importante - intégrée dans la section */}
            <div className="mt-16 p-8 rounded-2xl bg-background border border-border flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center bg-violet-gradient-light">
                <BookOpen className="w-8 h-8 text-brand-violet" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  La formation n'entre que si elle est justifiée
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Chez Learnee, la formation n'est jamais une fin en soi. Elle
                  n'entre dans nos préconisations que si elle est justifiée par
                  l'audit et pilotée par des indicateurs de transfert.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Besoin d'un{" "}
                <span className="gradient-text-brand">devis sur mesure</span>{" "}
                ?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Décrivez-nous votre contexte et vos enjeux. Nous vous
                proposerons une intervention adaptée à votre situation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 ">
                <MailtoLink
                  subject="Demande de devis"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-medium text-white rounded-full"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </MailtoLink>
                <Link
                  href="/approche"
                  className="btn-outline-brand inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full transition-colors"
                >
                  Découvrir notre approche
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
