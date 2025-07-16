import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ValueProposition from "@/components/ValueProposition";
import BigNumbers from "@/components/BigNumbers";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import ServicesMatrix from "@/components/ServicesMatrix";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientLogos />
      <ValueProposition />
      <BigNumbers />
      <Portfolio />
      <Testimonial />
      <ServicesMatrix />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
