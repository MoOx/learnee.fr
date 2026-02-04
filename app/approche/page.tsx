import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import {
  Brain,
  GraduationCap,
  Users,
  FileSearch,
  ClipboardList,
  BarChart3,
  Map,
  AlertTriangle,
  Lightbulb,
  Route,
  FileText,
  MessageSquare,
  Settings,
  Target,
  UserCheck,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";

const cognitiveExpertise = [
  "Mécanismes décisionnels et biais",
  "Motivation, engagement, dynamique collective",
  "Charge cognitive, attention, interruptions",
  "Conditions réelles d'apprentissage et de transfert",
];

const competenceExpertise = [
  "Lecture fine des compétences, du savoir tacite, de la transmissibilité",
  'Diagnostic des écarts entre "niveau attendu" et "capacité réellement mobilisable"',
  "Capacité à transformer un constat terrain en plan d'action opérationnel",
];

const auditMethods = [
  {
    icon: Users,
    text: "Entretiens individuels et collectifs (DG, managers, experts, opérationnels)",
  },
  { icon: FileSearch, text: "Observation terrain & shadowing" },
  {
    icon: ClipboardList,
    text: "Analyse documentaire (process, référentiels, incidents, qualité, projets)",
  },
  {
    icon: BarChart3,
    text: "Analyse data RH (turn-over, absentéisme, mobilité, formation, performance…)",
  },
  { icon: Target, text: "Ateliers de diagnostic et de priorisation" },
];

const deliverables = [
  {
    icon: Map,
    title: "Cartographie des capacités",
    description: "Capacités mobilisables (individuelles + collectives)",
  },
  {
    icon: AlertTriangle,
    title: "Cartographie des risques",
    description: "Risques d'exécution (dépendances, saturations, frictions)",
  },
  {
    icon: Brain,
    title: "Analyse cognitive",
    description:
      "Mécanismes cognitifs à l'œuvre (décision, motivation, apprentissage)",
  },
  {
    icon: Lightbulb,
    title: "Recommandations",
    description: "Priorisées : quick wins / structurants / à éviter",
  },
  {
    icon: Route,
    title: "Feuille de route",
    description: "Capacitaire : 90 jours / 6 mois",
  },
  {
    icon: FileText,
    title: "Plan d'action",
    description:
      "Opérationnel : responsables, jalons, gouvernance, indicateurs",
  },
  {
    icon: MessageSquare,
    title: "Note COMEX",
    description: "Messages clés + arbitrages + scénarios",
  },
  {
    icon: Settings,
    title: "Kit de pilotage",
    description: "(option) Rituels + tableaux de bord + indicateurs",
  },
];

const accompaniments = [
  {
    icon: Target,
    title: "Capacité d'exécution",
    description:
      "Organisation du travail, rituels, outils, collaboration, règles de décision",
  },
  {
    icon: Zap,
    title: "Compétences dans le flux",
    description:
      "Dispositifs de développement des compétences intégrés au travail",
  },
  {
    icon: UserCheck,
    title: "Coaching & transmission",
    description:
      "Coaching managers/experts, mentorat, communautés, standards vivants",
  },
  {
    icon: TrendingUp,
    title: "Sprints de transformation",
    description: "Prototypage sur un périmètre critique",
  },
  {
    icon: Shield,
    title: "Mesure d'impact",
    description: "Indicateurs d'adoption, qualité, délais, robustesse",
  },
];

export default function ApprochePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Notre approche
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                Une méthode de cabinet.
                <br />
                <span className="gradient-text-hero">Un regard sciences cognitives.</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Nous intervenons quand une organisation veut "faire mieux que
                l'existant" pour atteindre ses objectifs stratégiques :
                transformation, industrialisation, innovation, montée en
                expertise, performance opérationnelle.
              </p>
              <p className="mt-4 text-xl font-medium text-brand">
                Notre valeur : rendre visible l'invisible et éviter les
                solutions superficielles.
              </p>
            </div>
          </div>
        </section>

        {/* Les 2 expertises */}
        <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Méthode Learnee
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Audit cognitif et organisationnel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Learnee combine 2 expertises complémentaires
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sciences cognitives */}
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-brand-gradient-light">
                  <Brain className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Sciences cognitives appliquées
                </h3>
                <ul className="space-y-3">
                  {cognitiveExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 bg-brand" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise compétence */}
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-violet-gradient-light">
                  <GraduationCap className="w-8 h-8 text-brand-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Expertise "compétence"
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  15+ ans formation & développement des compétences
                </p>
                <ul className="space-y-3">
                  {competenceExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 bg-brand-violet" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Méthode d'audit */}
        <section className="py-20 md:py-32 border-t border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Étape 1
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Méthode d'audit
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Selon le contexte, nous mobilisons différentes approches :
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {auditMethods.map((method) => (
                <div
                  key={method.text}
                  className="p-6 rounded-2xl border border-border hover:border-brand/30 transition-colors"
                >
                  <method.icon className="w-6 h-6 mb-4 text-brand" />
                  <p className="text-sm">{method.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-secondary/50">
              <h3 className="font-semibold mb-2">
                Relecture critique des plans de formation
              </h3>
              <p className="text-muted-foreground">
                Ce qui est utile vs ce qui est cosmétique. Recommandation :
                former / outiller / réorganiser / alléger / clarifier /
                recruter… selon la cause.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que vous recevez */}
        <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Ce que vous recevez
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Des livrables concrets et actionnables
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {deliverables.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold gradient-text-brand">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accompagnement sur-mesure */}
        <section className="py-20 md:py-32 border-t border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Étape 2
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Accompagnement sur-mesure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Suite à l'audit, nous proposons un accompagnement adapté à vos
                enjeux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accompaniments.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-border hover:border-brand/30 transition-colors"
                >
                  <item.icon className="w-8 h-8 mb-4 text-brand" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
