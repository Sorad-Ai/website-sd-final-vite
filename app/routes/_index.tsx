import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import AboutSection from "~/components/AboutSection";
import ServicesSection from "~/components/ServicesSection";
import ProjectsSection from "~/components/ProjectsSection";
import WhyChooseUsSection from "~/components/WhyChooseUsSection";
import ContactCTASection from "~/components/ContactCTASection";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Sorad Dynamics - Empowering Future with Technology" },
    { name: "description", content: "प्रविधिको शक्तिले नेपालको शिक्षा क्षेत्रलाई आधुनिकीकरण गर्ने। Modern school management software designed for Nepali educational institutions." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-soft-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
}