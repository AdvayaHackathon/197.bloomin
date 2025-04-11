import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  GraduationCap, 
  HeartPulse, 
  Microscope,
  Building2
} from "lucide-react";
import Globe from './Globe';

const Hero = () => {
  const [text, setText] = useState("The Future of Medical Networking & Collaboration");
  const phrases = [
    "The Future of Medical Networking & Collaboration",
    "Connect. Learn. Innovate. Together.",
    "Building Global Medical Communities",
    "Empowering Healthcare Professionals"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const nextIndex = (phraseIndex + 1) % phrases.length;
      
      if (isTyping) {
        setIsTyping(false);
        setTimeout(() => {
          setPhraseIndex(nextIndex);
          setText(phrases[nextIndex]);
          setIsTyping(true);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(typingInterval);
  }, [phraseIndex, isTyping, phrases]);

  const roles = [
    { 
      name: "Doctors", 
      icon: <Stethoscope className="h-8 w-8 mb-2 text-bloomin-blue" />,
      description: "AI-assisted diagnosis & global case discussions",
      section: "doctors"
    },
    { 
      name: "Students", 
      icon: <GraduationCap className="h-8 w-8 mb-2 text-bloomin-blue" />,
      description: "AI learning hub with mentorship & case studies",
      section: "students"
    },
    { 
      name: "Patients", 
      icon: <HeartPulse className="h-8 w-8 mb-2 text-bloomin-blue" />,
      description: "AI symptom checker & instant doctor matching",
      section: "patients"
    },
    { 
      name: "Medical Institutions", 
      icon: <Building2 className="h-8 w-8 mb-2 text-bloomin-blue" />,
      description: "Manage student communities & research initiatives",
      section: "institutions"
    },
    { 
      name: "Researchers", 
      icon: <Microscope className="h-8 w-8 mb-2 text-bloomin-blue" />,
      description: "Access datasets & AI model sandbox",
      section: "researchers"
    }
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById('community');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set the active tab in RoleFeatures
      const event = new CustomEvent('setActiveTab', { detail: section });
      document.dispatchEvent(event);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <span className={`text-bloomin-blue ${isTyping ? 'type-cursor' : ''}`}>
                {text}
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Join a thriving medical network where students, doctors, researchers, and institutions come together to share knowledge, discuss cases, and push the boundaries of healthcare.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white font-medium rounded-full px-6 sm:px-8 py-4 sm:py-6 hover:from-bloomin-teal hover:to-bloomin-blue transition-all duration-300 text-base sm:text-lg">
                Join the Medical Revolution
              </Button>
              <Button variant="outline" className="rounded-full px-6 sm:px-8 py-4 sm:py-6 border-bloomin-blue text-bloomin-blue hover:bg-bloomin-blue/10 text-base sm:text-lg">
                Explore Features
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-[500px] w-full">
            <Globe />
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          <div className="text-center lg:text-right mb-6 my-8 md:my-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bloomin-blue mb-4">One Platform. Many Roles. Endless Possibilities.</h3>
            <p className="text-gray-600 text-lg md:text-xl mt-4">Discover Specialized Features for Your Medical Journey</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-16 md:mt-32">
            {roles.map((role, index) => (
              <button 
                key={index} 
                onClick={() => scrollToSection(role.section)}
                className="role-card flex flex-col items-center text-center p-4 md:p-6 transform hover:scale-105 transition-all duration-300 w-full"
              >
                <div className="mb-2 animate-float">
                  {role.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-bloomin-navy">{role.name}</h3>
                <p className="text-sm md:text-base text-gray-600">{role.description}</p>
              </button>
            ))}
          </div>
          
          <div className="text-center mt-3">
            <p className="text-sm text-gray-500">Click to know more</p>
          </div>
        </div>
      </div>

      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
