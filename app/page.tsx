import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Testimonials } from "@/components/Testimonials";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyDifferent />
      <Testimonials />
      <GetStarted />
      <Footer />
    </main>
  );
}
