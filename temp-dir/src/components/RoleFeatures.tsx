import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import RoleNav from '@/components/RoleNav';
import { 
  Stethoscope, 
  GraduationCap, 
  HeartPulse, 
  Microscope, 
  CheckCircle,
  Building2
} from "lucide-react";

const RoleFeatures = () => {
  const roleContent = {
    students: {
      icon: <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-bloomin-blue" />,
      title: "For Medical Students",
      subtitle: "Study, Network & Grow",
      description: "Connect with peers, access expert insights, and leverage AI-powered study tools to accelerate your medical education journey.",
      cta: "Join as Student",
      features: [
        "AI-powered study tools and flashcards",
        "Connect with medical students globally",
        "Access expert insights and mentorship",
        "Track your learning progress"
      ]
    },
    doctors: {
      icon: <Stethoscope className="w-12 h-12 md:w-16 md:h-16 text-bloomin-blue" />,
      title: "For Doctors",
      subtitle: "Teach, Share & Impact",
      description: "Share your expertise, mentor future doctors, and contribute to the advancement of medical education worldwide.",
      cta: "Join as Doctor",
      features: [
        "Create and share educational content",
        "Mentor medical students",
        "Network with colleagues globally",
        "Earn recognition for contributions"
      ]
    },
    patients: {
      icon: <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-bloomin-blue" />,
      title: "For Patients",
      subtitle: "Learn, Connect & Thrive",
      description: "Access reliable health information, connect with healthcare providers, and take control of your health journey.",
      cta: "Join as Patient",
      features: [
        "Access verified health information",
        "Connect with healthcare providers",
        "Track health metrics and progress",
        "Join supportive communities"
      ]
    },
    institutions: {
      icon: <Building2 className="w-12 h-12 md:w-16 md:h-16 text-bloomin-blue" />,
      title: "For Medical Institutions",
      subtitle: "Innovate & Excel",
      description: "Transform your medical education programs with our comprehensive platform and tools.",
      cta: "Partner with Us",
      features: [
        "Streamline educational programs",
        "Track student progress",
        "Access analytics and insights",
        "Enhance learning outcomes"
      ]
    },
    researchers: {
      icon: <Microscope className="w-12 h-12 md:w-16 md:h-16 text-bloomin-blue" />,
      title: "For Medical Researchers",
      subtitle: "Discover & Collaborate",
      description: "Connect with fellow researchers, access data insights, and contribute to medical advancement.",
      cta: "Join Research Network",
      features: [
        "Collaborate on research projects",
        "Access research tools and data",
        "Share findings and insights",
        "Network with global researchers"
      ]
    }
  };

  return (
    <section id="community" className="pt-20 pb-12 md:py-20 relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-bloomin-blue">
            Bloomin for Everyone
          </h2>
          <p className="text-bloomin-navy/80 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-16">
            Our platform serves multiple roles in the healthcare ecosystem, providing tailored features for each user's specific needs.
          </p>
        </div>

        <Tabs defaultValue="students" className="w-full">
          <div className="md:hidden mb-8">
            <RoleNav 
              onRoleClick={(role) => {
                const trigger = document.querySelector(`[role="tab"][value="${role}"]`) as HTMLButtonElement;
                if (trigger) {
                  trigger.click();
                }
              }}
              activeRole="students"
            />
          </div>
          
          <TabsList className="hidden md:flex md:flex-wrap md:justify-center gap-2 bg-transparent mb-8">
            {Object.entries(roleContent).map(([key, content]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full transition-all duration-300 min-w-[180px] font-medium
                  bg-white text-bloomin-navy border border-gray-200 hover:bg-gray-50
                  data-[state=active]:bg-bloomin-blue data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:border-transparent"
              >
                {content.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(roleContent).map(([key, content]) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 p-6 md:p-12">
                    <div className="mb-6 md:mb-8">
                      {content.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-bloomin-blue">
                      {content.title}
                    </h3>
                    <h4 className="text-lg md:text-xl mb-3 md:mb-4 text-bloomin-navy/80">
                      {content.subtitle}
                    </h4>
                    <p className="text-bloomin-navy/70 mb-6 md:mb-8 text-base md:text-lg">
                      {content.description}
                    </p>
                    <Button className="w-full md:w-auto bg-bloomin-blue text-white font-medium rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg hover:bg-bloomin-blue/90 transition-all duration-300">
                      {content.cta}
                    </Button>
                  </div>
                  <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-12">
                    <h5 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-bloomin-navy">Key Features</h5>
                    <ul className="space-y-3 md:space-y-4">
                      {content.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-bloomin-blue shrink-0 mt-0.5 mr-3" />
                          <span className="text-bloomin-navy/70 text-base md:text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RoleFeatures;
