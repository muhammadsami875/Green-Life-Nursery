import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import PopularPlantsSection from "@/components/home/PopularPlantsSection";
import LandscapingSection from "@/components/home/LandscapingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <WhyChooseUsSection />
        <PopularPlantsSection />
        <LandscapingSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
