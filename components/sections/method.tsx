import Link from "next/link";
import { Search, FileCheck, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit cognitif & organisationnel",
    description: "Capacités, freins, leviers, risques.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Préconisations",
    description: "Arbitrages + conditions de réussite + feuille de route.",
  },
  {
    number: "03",
    icon: Target,
    title: "Plan d'action capacitant",
    description: "Interventions ciblées (pas un catalogue de formation).",
  },
];

export function Method() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Comment on travaille
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Le terrain n'est pas un frein. Il doit orienter la stratégie.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-border to-transparent -translate-x-8 z-0" />
              )}
              <div className="relative z-10 p-8 rounded-2xl border border-border bg-background hover:border-brand/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold gradient-text-brand">
                    {step.number}
                  </span>
                  <step.icon className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full"
          >
            Parler de votre enjeu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
