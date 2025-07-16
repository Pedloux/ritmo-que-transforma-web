import Hero from "@/components/Hero";
import BigNumbers from "@/components/BigNumbers";
import PartyPackages from "@/components/PartyPackages";
import PartyGallery from "@/components/PartyGallery";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import ContactFormB2C from "@/components/ContactFormB2C";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BigNumbers />
      <PartyPackages />
      <PartyGallery />
      <ValueProposition />
      <FAQ />
      <ContactFormB2C />
      <Footer />
    </div>
  );
};

export default Index;
