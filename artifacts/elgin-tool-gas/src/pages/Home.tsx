import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <AboutSection />
      <ProductShowcase />
      <ServiceAreas />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
