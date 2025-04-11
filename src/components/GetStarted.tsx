
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, UserPlus, ShieldCheck, UserCircle, Rocket } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-bloomin-teal" />,
      title: "Choose Your Role",
      description: "Select your role as a doctor, student, patient, or researcher to get a personalized experience."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-bloomin-teal" />,
      title: "Verify Your Identity",
      description: "Doctors and students get institutional verification for enhanced trust and access."
    },
    {
      icon: <UserCircle className="h-10 w-10 text-bloomin-teal" />,
      title: "Set Up Your Profile",
      description: "Create your profile, join groups, connect with peers, and customize your AI tools."
    },
    {
      icon: <Rocket className="h-10 w-10 text-bloomin-teal" />,
      title: "Start Exploring & Innovating",
      description: "Access AI tools, connect with the community, and transform your healthcare approach."
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-bloomin-navy">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Get Started in Minutes</span>
          </h2>
          <p className="text-bloomin-gray max-w-2xl mx-auto">
            Joining Bloomin is simple. Follow these easy steps to start your journey and transform your healthcare approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bloomin-blue to-bloomin-teal hidden md:block"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-1'} mb-6 md:mb-0`}>
                    <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <h3 className="text-xl font-bold mb-3 gradient-text flex items-center gap-2 justify-center md:justify-start">
                        <span className="inline-block md:hidden mr-2">{step.icon}</span>
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-bloomin-gray">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="z-10 bg-bloomin-navy flex items-center justify-center">
                    <div className="rounded-full w-14 h-14 bg-gradient-to-r from-bloomin-blue to-bloomin-teal flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:pl-12' : 'md:pr-12'} hidden md:block`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Join Bloomin Today
            </h3>
            <p className="text-bloomin-gray mb-6">
              Be part of the future of healthcare. Connect, learn, diagnose, and innovate with Bloomin.
            </p>
            <Button className="bg-gradient-to-r from-bloomin-teal to-bloomin-blue text-white font-medium rounded-full px-8 py-3 text-lg hover:from-bloomin-blue hover:to-bloomin-teal transition-all duration-300">
              Join Now & Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
