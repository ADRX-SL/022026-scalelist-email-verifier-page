import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Accuracy from "@/components/Accuracy";
import Testimonial from "@/components/Testimonial";
import WeeklyData from "@/components/WeeklyData";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <div className="flex flex-col gap-16">
        <Features />
        <HowItWorks />
        <Testimonial />
        <Accuracy />
        <WeeklyData />
        <FAQ />
        <FooterCTA />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
