import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PricingGuide } from "@/components/PricingGuide";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <PricingGuide />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
