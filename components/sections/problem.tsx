import {
  Users,
  TrendingDown,
  Brain,
  HelpCircle,
  Eye,
} from "lucide-react";
import SVGIconError from "@/svgs/components/SVGIconError";

const problems = [
  {
    icon: SVGIconError,
    title: "Exécution qui patine",
    description: "Délais, retards, initiatives qui n'atterrissent pas.",
  },
  {
    icon: Users,
    title: "Dépendance critique aux experts",
    description:
      "Goulots d'étranglement, surcharge, burn-out, départs… et l'organisation devient fragile.",
  },
  {
    icon: TrendingDown,
    title: "ROI formation faible",
    description: "On forme, mais les pratiques ne changent pas.",
  },
  {
    icon: Brain,
    title: "Fatigue organisationnelle",
    description:
      "Surcharge cognitive, injonctions contradictoires, outils inadaptés.",
  },
  {
    icon: HelpCircle,
    title: "Décisions sur des croyances",
    description: '"Ils savent faire", "il suffit de former".',
  },
  {
    icon: Eye,
    title: "Capacités réelles invisibles",
    description:
      "Savoir tacite, coopération, arbitrages, attention, transfert.",
  },
];

export function Problem() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Le problème
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Votre ambition est toujours bonne. Mais qu'en est-il de la capacité
            de votre organisation à la mettre en œuvre ?
          </h2>
        </div>

        <div className="mt-12">
          <p className="text-lg text-muted-foreground mb-8">
            Notre constat sur le terrain :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <problem.icon className="w-8 h-8 mb-4 text-brand" />
                <h3 className="font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 p-4 text-lg font-medium gradient-text-hero">
          Résultat : vous investissez au mauvais endroit, au mauvais moment — et
          vous risquez de répéter le même schéma à chaque transformation.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-border">
            <p className="text-lg leading-relaxed">
              Chez Learnee, on ne rajoute pas des dispositifs. On rend
              l'organisation <strong>lisible</strong> : mécanismes décisionnels,
              charge cognitive, dépendances humaines, apprentissages possibles
              (ou impossibles) dans le travail réel.
            </p>
          </div>
          <div className="p-8 rounded-2xl text-white bg-brand-gradient">
            <p className="text-xl font-semibold">
              Votre organisation n'a pas besoin d'une solution. Elle a besoin
              d'un diagnostic précis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
