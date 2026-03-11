import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Hero />
      <Philosophy /> 
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}