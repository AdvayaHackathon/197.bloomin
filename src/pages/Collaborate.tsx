import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Microscope, 
  Building2, 
  Stethoscope, 
  Globe, 
  Brain, 
  Shield, 
  Laptop, 
  GraduationCap,
  LightbulbIcon,
  Network,
  DatabaseIcon,
  Trophy,
  Mail
} from 'lucide-react';

const Collaborate = () => {
  useEffect(() => {
    // Page title
    document.title = "Collaborate with Bloomin - Medical Networking Platform";
  }, []);

  return (
    <div className="min-h-screen bg-bloomin-sage text-bloomin-navy">
      <Navbar />
      <SideNav />
      <div className="ml-0 md:ml-64 pt-24">
        {/* Hero section */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl sm:text-5xl font-bold mb-4 md:mb-6">Join Us in Transforming Healthcare</h1>
              <p className="text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                At Bloomin, we believe that innovation thrives when medical professionals, researchers, institutions, and industry leaders unite under a shared vision. Our goal is to redefine healthcare by providing a platform that encourages collaboration, knowledge exchange, and the seamless integration of cutting-edge technologies. But we can't do it alone—we need your expertise, insight, and support to make this vision a reality.
              </p>
              <a 
                href="mailto:raghav@pesce.ac.in" 
                className="inline-flex items-center bg-white text-bloomin-blue px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-medium hover:bg-white/90 transition-colors"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Contact Us Now
              </a>
            </div>
          </div>
        </section>

        {/* Why Collaborate section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-bloomin-blue text-center">Why Collaborate with Bloomin?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {/* Global Network card */}
              <div className="bg-gray-50 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-bloomin-navy">Global Network & Reach</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Connect with thousands of medical professionals, researchers, and students worldwide.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Expand your institutional influence and professional network on an international scale.</span>
                  </li>
                </ul>
              </div>

              {/* Research & Innovation card */}
              <div className="bg-gray-50 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-bloomin-navy">Cutting-Edge Research & Innovation</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Leverage AI-powered tools for advanced data analysis and medical research.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Collaborate on clinical studies and pilot new healthcare solutions.</span>
                  </li>
                </ul>
              </div>

              {/* Future Generations card */}
              <div className="bg-gray-50 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-bloomin-navy">Empowering Future Generations</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Mentor aspiring medical students and shape the next generation of healthcare leaders.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Share your expertise and help bridge the knowledge gap in underserved areas.</span>
                  </li>
                </ul>
              </div>

              {/* Shared Resources card */}
              <div className="bg-gray-50 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-bloomin-navy">Shared Resources & Data</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Access and contribute to diverse medical datasets for evidence-based insights.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Foster open collaboration that accelerates discoveries and drives better patient outcomes.</span>
                  </li>
                </ul>
              </div>

              {/* Mutual Growth card */}
              <div className="bg-gray-50 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Trophy className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-bloomin-navy">Mutual Growth & Recognition</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Build your professional reputation and institutional credibility through meaningful partnerships.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-2 h-2 bg-bloomin-blue rounded-full"></span>
                    </span>
                    <span>Showcase your innovations, success stories, and research to a broader audience.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Contribute section */}
        <section className="py-8 md:py-16 bg-bloomin-sage">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-bloomin-blue text-center">Ways You Can Contribute</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {/* Expertise card */}
              <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-bloomin-navy">Expertise & Thought Leadership</h3>
                <p className="text-gray-700 text-sm md:text-base">Share your clinical insights, research findings, and best practices in community forums, webinars, or guest articles.</p>
              </div>

              {/* Research card */}
              <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-bloomin-navy">Research Collaborations</h3>
                <p className="text-gray-700 text-sm md:text-base">Partner with academic institutions, hospitals, and private organizations to advance medical research, pilot new treatments, or explore innovative technologies.</p>
              </div>

              {/* Mentorship card */}
              <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-bloomin-navy">Mentorship & Education</h3>
                <p className="text-gray-700 text-sm md:text-base">Guide medical students, junior doctors, and emerging researchers through virtual mentorship sessions, case discussions, and training workshops.</p>
              </div>

              {/* Data card */}
              <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-bloomin-navy">Open Data & Shared Resources</h3>
                <p className="text-gray-700 text-sm md:text-base">Contribute anonymized datasets, references, or specialized tools that accelerate scientific progress and help develop new AI models.</p>
              </div>

              {/* Financial card */}
              <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-bloomin-navy">Financial Support & Grants</h3>
                <p className="text-gray-700 text-sm md:text-base">Sponsor clinical studies, pilot programs, or platform enhancements to ensure long-term sustainability and a broader impact on healthcare.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-bloomin-blue text-center">Who We're Looking For</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Doctors */}
              <div className="flex items-start bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="bg-blue-50 rounded-full p-3 md:p-4 mr-3 md:mr-4">
                  <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-bloomin-navy">Doctors & Specialists</h3>
                  <p className="text-gray-700 text-sm md:text-base">Contribute real-world expertise, validate AI-driven diagnoses, and mentor the next generation.</p>
                </div>
              </div>

              {/* Researchers */}
              <div className="flex items-start bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="bg-blue-50 rounded-full p-3 md:p-4 mr-3 md:mr-4">
                  <Microscope className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-bloomin-navy">Medical Researchers & Innovators</h3>
                  <p className="text-gray-700 text-sm md:text-base">Collaborate on multidisciplinary research projects and drive evidence-based breakthroughs.</p>
                </div>
              </div>

              {/* Institutions */}
              <div className="flex items-start bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="bg-blue-50 rounded-full p-3 md:p-4 mr-3 md:mr-4">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-bloomin-navy">Healthcare Institutions & Organizations</h3>
                  <p className="text-gray-700 text-sm md:text-base">Partner to scale up training programs, manage student communities, and host medical events on a global platform.</p>
                </div>
              </div>

              {/* Tech Partners */}
              <div className="flex items-start bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="bg-blue-50 rounded-full p-3 md:p-4 mr-3 md:mr-4">
                  <Laptop className="w-6 h-6 md:w-8 md:h-8 text-bloomin-blue" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-bloomin-navy">Technology Partners & Industry Leaders</h3>
                  <p className="text-gray-700 text-sm md:text-base">Help us integrate advanced tools and AI solutions that revolutionize healthcare delivery and research.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-bloomin-blue text-center">Our Commitment to You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-bloomin-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-bloomin-navy">A Trusted Platform</h3>
                <p className="text-gray-700">Data security and privacy are at the forefront of everything we do, ensuring compliance with global healthcare standards.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-bloomin-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-bloomin-navy">Transparent Collaboration</h3>
                <p className="text-gray-700">We foster an open environment where all collaborators can share ideas, track progress, and celebrate milestones together.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-bloomin-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-bloomin-navy">Meaningful Impact</h3>
                <p className="text-gray-700">Our ultimate goal is to improve patient outcomes, elevate medical education, and drive research innovations that benefit the entire medical community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">Whether you're a leading specialist, a forward-thinking researcher, or a progressive institution, we invite you to join Bloomin and co-create the future of healthcare.</p>
            <p className="text-2xl font-light mb-8">Let's make a lasting impact—together.</p>
            
            <a href="mailto:raghav@pesce.ac.in" className="inline-flex items-center bg-white text-bloomin-blue px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Collaborate; 