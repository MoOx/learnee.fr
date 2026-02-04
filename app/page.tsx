import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { TrainingMyth } from "@/components/sections/training-myth";
import { Promise } from "@/components/sections/promise";
import { Method } from "@/components/sections/method";
import { FinalCTA } from "@/components/sections/final-cta";
import { GradientBar } from "@/components/ui/gradient-bar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <TrainingMyth />
        <Promise />
        <Method />
        <FinalCTA />
      </main>
      <Footer />
      <GradientBar />
    </>
  );
}
