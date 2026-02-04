import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none animate-orb-rotate -z-10 scale-125">
        <Image
          src="/images/orb.png"
          alt=""
          width={750}
          height={750}
          className="w-full h-full"
          priority
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-4 pb-4 pt-4 md:pt-32">
        <div className="max-w-4xl">
          <p className="inline-block text-sm font-medium uppercase tracking-wider text-brand bg-brand/10 px-4 py-2 rounded-full mb-6">
            Agence de conseil en sciences cognitives
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-balance">
            Une stratégie n'est efficace que si votre organisation a les{" "}
            <span className="gradient-text-hero">capacités</span> pour
            l'exécuter.
          </h1>

          <p className="mt-8 max-w-2xl leading-relaxed text-left text-lg text-zinc-500">
            Nous sécurisons vos transformations (innovation, réorganisation,
            formation) en une architecture adaptée : standards, outils,
            routines, transfert d'expertise, preuves d'adoption.
          </p>

          <p className="mt-4 text-xl font-medium text-brand">
            Les sciences cognitives pour transformer vos compétences.
          </p>

          <div className="flex flex-row flex-wrap items-start gap-4 mt-10">
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-full"
            >
              Demander un échange
            </Link>
            <Link
              href="/approche"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-brand transition-colors hover:text-brand/80"
            >
              Découvrir l'approche
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
