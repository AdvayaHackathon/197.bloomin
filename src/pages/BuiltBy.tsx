import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';

const BuiltBy = () => {
  useEffect(() => {
    document.title = "Built By - bloomin";
  }, []);

  return (
    <div className="min-h-screen bg-bloomin-sage text-bloomin-navy">
      <Navbar />
      <SideNav />
      <div className="ml-0 md:ml-64 pt-24">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Built with Passion</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Meet the dedicated team and partners building bloomin for the global medical community.
              </p>
            </div>
          </div>
        </section>

        {/* Content coming soon */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-bloomin-blue">Coming Soon</h2>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                We're working on bringing you more information about our team and mission. Check back soon!
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default BuiltBy; 