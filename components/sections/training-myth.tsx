export function TrainingMyth() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            La formation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            La formation est souvent une réponse… à la mauvaise question.
          </h2>

          <div className="mt-8 text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quand l'exécution échoue, la réponse réflexe est souvent : <em>"il faut former"</em>.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Mais si le problème vient de la charge cognitive, de l'organisation du travail,
              de règles implicites, d'une dépendance aux experts ou encore d'un système saturé,
              <strong className="text-foreground"> former ne résout rien</strong>. Pire, cela ajoute de la complexité.
            </p>
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-border bg-background text-left">
            <p className="text-lg">
              Chez Learnee, on ne forme pas pour rassurer.
              On forme <strong>uniquement quand c'est le bon levier</strong> et
              avec des critères d'impact observables.
            </p>
          </div>

          <div className="mt-8 p-6 rounded-2xl inline-block bg-brand-gradient">
            <p className="text-xl font-semibold text-white">
              Le risque n'est pas de mal former.<br />
              Le risque est de former pour de mauvaises raisons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
