import React from 'react';
import { 
  Users, 
  Brain, 
  Shield, 
  Globe, 
  TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyBloomin = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-bloomin-blue" />,
      title: "Holistic Community",
      description: "Bringing together students, doctors, researchers, institutions, and patients in one place."
    },
    {
      icon: <Brain className="h-8 w-8 text-bloomin-blue" />,
      title: "AI-Driven Insights",
      description: "Personalized recommendations for learning, diagnosis support, and research breakthroughs."
    },
    {
      icon: <Shield className="h-8 w-8 text-bloomin-blue" />,
      title: "Secure & Compliant",
      description: "Prioritizing patient data protection with HIPAA/GDPR adherence."
    },
    {
      icon: <Globe className="h-8 w-8 text-bloomin-blue" />,
      title: "Global Reach",
      description: "Expand your professional network and collaborate with peers worldwide."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-bloomin-blue" />,
      title: "Scalable & Future-Focused",
      description: "Built to handle tens of thousands of users and rapidly evolving medical technologies."
    }
  ];

  return (
    <section id="why-bloomin" className="py-12 bg-bloomin-sage">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-0 pb-0 text-left text-bloomin-blue">
          Why bloomin?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-bloomin-blue/10 p-2 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bloomin-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/features" 
            className="inline-flex items-center justify-center px-6 py-3 bg-bloomin-blue text-white font-medium rounded-lg hover:bg-bloomin-blue/90 transition-colors"
          >
            View All Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyBloomin; 