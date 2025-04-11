import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog", "Contact"]
    },
    {
      title: "Features",
      links: ["AI Diagnosis", "Medical Networking", "Learning Hub", "Research Tools", "Telemedicine"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Guides", "API", "Case Studies", "Support"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Data Security", "Accessibility"]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-4 w-4 md:h-5 md:w-5" />, name: "Twitter" },
    { icon: <Facebook className="h-4 w-4 md:h-5 md:w-5" />, name: "Facebook" },
    { icon: <Instagram className="h-4 w-4 md:h-5 md:w-5" />, name: "Instagram" },
    { icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />, name: "LinkedIn" }
  ];

  return (
    <footer className="bg-bloomin-navy-light pt-10 md:pt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2">
            <div className="mb-4 md:mb-6">
              <a href="#" className="text-2xl md:text-3xl font-bold gradient-text">bloomin</a>
            </div>
            <p className="text-bloomin-gray mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Revolutionizing healthcare through AI-powered networking, diagnosis, and collaboration tools for medical professionals worldwide.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-bloomin-gray hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-span-1">
              <h4 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">{section.title}</h4>
              <ul className="space-y-1 md:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-bloomin-gray hover:text-white transition-colors duration-300 text-xs md:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card p-4 sm:p-6 md:p-8 mb-8 md:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-center">
            <div className="sm:col-span-2">
              <h4 className="text-lg md:text-xl font-bold mb-2 gradient-text">Join Our Newsletter</h4>
              <p className="text-bloomin-gray mb-4 sm:mb-0 text-sm md:text-base">
                Stay updated with the latest in AI healthcare and exclusive insights.
              </p>
            </div>
            <div>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-l-full bg-white/10 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
                <Button className="gradient-bg rounded-r-full">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-bloomin-gray text-xs md:text-sm mb-3 md:mb-0">
              © {currentYear} bloomin. All rights reserved.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="text-bloomin-gray hover:text-white transition-colors duration-300 text-xs md:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-bloomin-gray hover:text-white transition-colors duration-300 text-xs md:text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-bloomin-gray hover:text-white transition-colors duration-300 text-xs md:text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
