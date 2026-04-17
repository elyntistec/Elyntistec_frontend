import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CoreFeatures from "@/components/CoreFeatures";
import DashboardPreview from "@/components/DashboardPreview";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CoreFeatures />
      <DashboardPreview />
      <UseCases />
      <Testimonials />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
