import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Hero from '@/components/Hero';
import WhyBloomin from '@/components/WhyBloomin';
import RoleFeatures from '@/components/RoleFeatures';
import Testimonials from '@/components/Testimonials';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Page title
    document.title = "bloomin - AI-Powered Medical Networking Platform";
  }, []);

  return (
    <div className="min-h-screen bg-bloomin-sage text-bloomin-navy">
      <Navbar />
      <SideNav />
      {/* Adjust margin based on screen size */}
      <div className="ml-0 md:ml-64 pt-24">
        <Hero />
        <WhyBloomin />
        <RoleFeatures />
        <Testimonials />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
