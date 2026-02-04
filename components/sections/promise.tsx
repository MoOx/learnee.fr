import { Lightbulb, Puzzle, Shield } from "lucide-react";

const promises = [
  {
    icon: Lightbulb,
    title: "Lucidité stratégique",
    description: "Ce qui est solide, fragile, et activable.",
  },
  {
    icon: Puzzle,
    title: "Capacités mobilisables",
    description: "Autonomie, transmission, décision, exécution.",
  },
  {
    icon: Shield,
    title: "Transformations sécurisées",
    description: "En respectant le fonctionnement humain réel.",
  },
];

export function Promise() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Notre promesse
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Nous ne développons pas uniquement des compétences.
            Nous développons aussi votre{" "}
            <span className="gradient-text-hero">capacité à mettre en œuvre</span>
            .
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="text-center p-8 rounded-2xl bg-background border border-border"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-brand-gradient-light">
                <promise.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{promise.title}</h3>
              <p className="text-muted-foreground">{promise.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Learnee apporte de la <strong>lucidité stratégique</strong>, construit des{" "}
            <strong>capacités réellement mobilisables</strong>, et{" "}
            <strong>sécurise vos transformations</strong> en respectant le fonctionnement humain réel.
          </p>
        </div>
      </div>
    </section>
  );
}
