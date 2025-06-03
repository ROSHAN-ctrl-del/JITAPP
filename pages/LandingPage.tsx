import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import InsightsSection from '../components/InsightsSection'; // Import InsightsSection

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
      <InsightsSection /> 
      <ContactSection />
    </>
  );
};

export default LandingPage;