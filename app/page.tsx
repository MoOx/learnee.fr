import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { GradientBar } from "@/components/ui/gradient-bar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
      <GradientBar />
    </>
  );
}
