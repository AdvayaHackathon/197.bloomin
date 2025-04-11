import React from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import { 
  GraduationCap, 
  Users, 
  Stethoscope, 
  Microscope,
  LayoutDashboard,
  CheckCircle,
  HeartPulse,
  Building2,
  FlaskConical
} from 'lucide-react';

const FeatureCard = ({ 
  feature, 
  index,
}: { 
  feature: any; 
  index: number; 
}) => {
  // Determine if this card should have content aligned left or right (zig-zag)
  const isEvenCard = index % 2 === 0;

  return (
    <div
      className="feature-card relative overflow-hidden bg-white shadow-lg rounded-xl mx-auto max-w-[95%] md:max-w-full mb-12"
    >
      <div className="h-2 bg-gradient-to-r from-bloomin-blue to-blue-300"></div>
      
      <div className="card-shine"></div>
      <div className="p-4 md:p-6">
        {/* Header - always aligned left on mobile, zig-zag on desktop */}
        <div className={`flex items-center mb-4 ${!isEvenCard && 'md:flex-row-reverse md:justify-start'}`}>
          <div className="bg-gray-50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-2 md:mx-3">
            {feature.icon}
          </div>
          <div className={`${!isEvenCard ? 'md:text-right' : ''}`}>
            <h3 className="text-lg md:text-xl font-bold text-bloomin-navy">{feature.title}</h3>
            <p className="text-bloomin-blue font-medium text-sm md:text-base">{feature.subtitle}</p>
          </div>
        </div>
        
        {/* Main content - stack on mobile, zig-zag on desktop */}
        <div className={`flex flex-col md:flex-row flex-wrap items-start gap-4 ${isEvenCard ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Text content */}
          <div className={`flex-1 min-w-[100%] md:min-w-[50%] ${isEvenCard ? 'md:pr-4' : 'md:pl-4'}`}>
            <p className={`text-gray-600 text-sm md:text-base mb-4 leading-relaxed ${isEvenCard ? 'md:text-left' : 'md:text-right'}`}>
              {feature.description}
            </p>
            <ul className={`space-y-2 md:space-y-3 ${!isEvenCard ? 'md:ml-auto' : ''}`}>
              {feature.features.map((item: string, idx: number) => (
                <li 
                  key={idx} 
                  className={`flex items-start ${!isEvenCard ? 'md:flex-row-reverse' : ''}`}
                >
                  <CheckCircle className={`h-4 w-4 md:h-5 md:w-5 text-bloomin-blue shrink-0 mt-0.5 ${isEvenCard ? 'mr-2 md:mr-3' : 'md:ml-3 mr-2'}`} />
                  <span className="text-gray-600 text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Illustration hidden on smaller screens */}
          <div className="flex-1 hidden md:flex justify-center items-center min-w-[160px]">
            <div className="relative h-40 w-40">
              {getIllustrationForFeature(feature.title, isEvenCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Keep the existing illustration function
const getIllustrationForFeature = (title: string, isEvenCard: boolean) => {
  // Common styling for decorative elements
  const decorStyle = "absolute w-full h-full";
  
  if (title.includes("AI-Powered Medical Study")) {
    return (
      <>
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Brain background */}
          <path 
            d="M100,20 C140,20 160,50 160,90 C160,130 140,160 100,160 C60,160 40,130 40,90 C40,50 60,20 100,20 Z" 
            fill="url(#grad1)"
          />
          {/* Book shape */}
          <rect x="70" y="70" width="60" height="80" rx="2" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="70" y="70" width="30" height="80" rx="2" fill="#3B82F6" fillOpacity="0.3" />
          {/* Lines representing text */}
          <line x1="80" y1="90" x2="120" y2="90" stroke="#3B82F6" strokeWidth="3" strokeOpacity="0.5" />
          <line x1="80" y1="100" x2="110" y2="100" stroke="#3B82F6" strokeWidth="3" strokeOpacity="0.5" />
          <line x1="80" y1="110" x2="120" y2="110" stroke="#3B82F6" strokeWidth="3" strokeOpacity="0.5" />
          <line x1="80" y1="120" x2="100" y2="120" stroke="#3B82F6" strokeWidth="3" strokeOpacity="0.5" />
          {/* Graduation cap */}
          <path d="M50,60 L100,40 L150,60 L100,80 Z" fill="#3B82F6" fillOpacity="0.3" />
          <line x1="100" y1="80" x2="100" y2="95" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <circle cx="100" cy="100" r="5" fill="#3B82F6" fillOpacity="0.5" />
        </svg>
        <div className={`${decorStyle} bg-blue-100 bg-opacity-20 rounded-full`}></div>
      </>
    );
  } 
  else if (title.includes("Real-Time Networking")) {
    return (
      <>
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Network background */}
          <circle cx="100" cy="100" r="70" fill="url(#grad2)" />
          
          {/* Network nodes */}
          <circle cx="100" cy="60" r="15" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="60" cy="100" r="15" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="140" cy="100" r="15" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="100" cy="140" r="15" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="70" cy="70" r="10" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="130" cy="70" r="10" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="70" cy="130" r="10" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="130" cy="130" r="10" fill="#3B82F6" fillOpacity="0.3" />
          
          {/* Connection lines */}
          <line x1="100" y1="60" x2="70" y2="70" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="100" y1="60" x2="130" y2="70" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="60" y1="100" x2="70" y2="70" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="60" y1="100" x2="70" y2="130" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="140" y1="100" x2="130" y2="70" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="140" y1="100" x2="130" y2="130" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="100" y1="140" x2="70" y2="130" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="100" y1="140" x2="130" y2="130" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          
          <circle cx="100" cy="100" r="20" fill="#3B82F6" fillOpacity="0.1" />
        </svg>
      </>
    );
  } 
  else if (title.includes("AI-Verified Diagnosis")) {
    return (
      <>
        {/* AI Diagnosis illustration */}
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Heart pulse monitor background */}
          <rect x="40" y="40" width="120" height="120" rx="10" fill="url(#grad3)" />
          
          {/* Heart rate line */}
          <polyline 
            points="40,100 60,100 70,80 80,120 90,90 100,100 110,100 120,70 130,140 140,100 160,100" 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="3"
            strokeOpacity="0.6"
          />
          
          {/* Stethoscope outline */}
          <circle cx="130" cy="60" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <path d="M130,75 C130,85 120,85 120,95 L110,95 L110,110" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          <circle cx="110" cy="115" r="5" fill="#3B82F6" fillOpacity="0.3" />
          
          {/* Checkmark for verification */}
          <circle cx="60" cy="60" r="15" fill="#3B82F6" fillOpacity="0.2" />
          <polyline points="50,60 58,68 70,53" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.8" />
        </svg>
        <div className={`${decorStyle} bg-blue-100 bg-opacity-10 rounded-full animate-pulse duration-5000`}></div>
      </>
    );
  } 
  else if (title.includes("Exclusive Medical Research")) {
    return (
      <>
        {/* Research & Institution Network illustration */}
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Lab flask background */}
          <path d="M90,40 L110,40 L110,90 L130,130 C130,140 120,150 100,150 C80,150 70,140 70,130 L90,90 Z" fill="url(#grad4)" />
          
          {/* Microscope elements */}
          <rect x="130" y="70" width="30" height="10" rx="2" fill="#3B82F6" fillOpacity="0.3" />
          <rect x="140" y="80" width="10" height="30" rx="2" fill="#3B82F6" fillOpacity="0.3" />
          <circle cx="145" cy="120" r="10" fill="#3B82F6" fillOpacity="0.3" />
          
          {/* Data points and connecting lines (research network) */}
          <circle cx="50" cy="60" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <circle cx="40" cy="100" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <circle cx="60" cy="140" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <line x1="50" y1="60" x2="90" y2="90" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="40" y1="100" x2="80" y2="110" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="60" y1="140" x2="90" y2="130" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
          
          {/* DNA helix suggestion */}
          <path d="M160,40 C170,50 150,60 160,70 C170,80 150,90 160,100" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M180,40 C170,50 190,60 180,70 C170,80 190,90 180,100" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="160" y1="45" x2="180" y2="45" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="160" y1="65" x2="180" y2="65" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="160" y1="85" x2="180" y2="85" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
        <div className={`${decorStyle} bg-blue-100 bg-opacity-10 rounded-full animate-pulse duration-4500`}></div>
      </>
    );
  } 
  else if (title.includes("Role-Based")) {
    return (
      <>
        {/* Role-Based Ecosystem illustration */}
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Central hub */}
          <circle cx="100" cy="100" r="30" fill="url(#grad5)" />
          
          {/* Roles as connected platforms */}
          <rect x="40" y="40" width="30" height="30" rx="4" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="40" y="130" width="30" height="30" rx="4" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="130" y="40" width="30" height="30" rx="4" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="130" y="130" width="30" height="30" rx="4" fill="#3B82F6" fillOpacity="0.2" />
          
          {/* Connection lines */}
          <line x1="70" y1="55" x2="90" y2="85" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,2" strokeOpacity="0.5" />
          <line x1="70" y1="145" x2="90" y2="115" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,2" strokeOpacity="0.5" />
          <line x1="130" y1="55" x2="110" y2="85" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,2" strokeOpacity="0.5" />
          <line x1="130" y1="145" x2="110" y2="115" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,2" strokeOpacity="0.5" />
          
          {/* User icons in the boxes */}
          <circle cx="55" cy="50" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <path d="M55,55 L55,65" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          
          <circle cx="55" cy="140" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <path d="M55,145 L55,155" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          
          <circle cx="145" cy="50" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <path d="M145,55 L145,65" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          
          <circle cx="145" cy="140" r="5" fill="#3B82F6" fillOpacity="0.5" />
          <path d="M145,145 L145,155" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" />
          
          {/* Security shield in center */}
          <path d="M100,85 L115,90 L115,110 L100,120 L85,110 L85,90 Z" fill="#3B82F6" fillOpacity="0.3" />
          <path d="M100,95 L105,105 L95,105 Z" fill="#3B82F6" fillOpacity="0.6" />
        </svg>
        <div className={`${decorStyle} bg-blue-100 bg-opacity-10 rounded-full animate-pulse duration-6000`}></div>
      </>
    );
  }
  
  // Default illustration if none match
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Default illustration */}
    </svg>
  );
};

const FeaturesPage = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-bloomin-blue" />,
      title: "AI-Powered Medical Study & Learning Hub",
      subtitle: "For Students",
      description: "Comprehensive learning tools and AI-powered study resources for medical students.",
      features: [
        "Structured Learning Roadmaps – Step-by-step guides for medical specializations",
        "Detailed Study Materials & AI-Powered Summaries – High-yield notes and guides",
        "Find Study Partners with AI Matching – Connect based on learning styles",
        "Expert-Verified MCQs & Adaptive Exam Prep – AI-powered question bank"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-bloomin-blue" />,
      title: "Real-Time Networking & Case Discussions",
      subtitle: "For Doctors & Students",
      description: "Connect and collaborate with medical professionals worldwide.",
      features: [
        "Cross-Specialty Medical Case Forums – Discuss real-world cases",
        "Doctor-Led Q&A Community – Verified doctors answering queries",
        "Global Medical Collaboration – Connected on one platform"
      ]
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-bloomin-blue" />,
      title: "AI-Verified Diagnosis Cross-Checked by Doctors",
      subtitle: "For Patients & Doctors",
      description: "Advanced AI diagnostics with professional verification.",
      features: [
        "AI-Powered Symptom Checker – Initial health assessments",
        "Doctor Cross-Verification – AI diagnoses reviewed by professionals",
        "Health Tracking & Personalized Alerts – AI-driven reminders"
      ]
    },
    {
      icon: <Building2 className="h-8 w-8 text-bloomin-blue" />,
      title: "Exclusive Medical Research & Institution Network",
      subtitle: "For Researchers & Institutions",
      description: "Collaborative research platform with extensive resources.",
      features: [
        "Collaborative Research Hub – Connect for new studies",
        "Medical Data Repository for AI & ML – Access anonymized datasets",
        "Institution-Led Student & Doctor Communities – Private forums"
      ]
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-bloomin-blue" />,
      title: "Role-Based Medical Ecosystem",
      subtitle: "For All Users",
      description: "Unified platform with personalized experiences for each role.",
      features: [
        "One Platform, Multiple Roles – A unified hub for all users",
        "AI-Powered Personalized Dashboard – Custom recommendations",
        "Secure, HIPAA-Compliant Medical Networking – Verified access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bloomin-sage text-bloomin-navy">
      <Navbar />
      <SideNav />
      <div className="ml-0 md:ml-64 pt-24">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Platform Features</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Explore the innovative features that make bloomin the leading platform for medical networking, education, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features-detail" 
          className="py-10 md:py-16 relative"
        >
          {/* Background pattern for more visual interest */}
          <div className="absolute inset-0 bg-gray-50 opacity-50">
            <div className="absolute inset-0 opacity-5" style={{ 
              backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                index={index}
              />
            ))}
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default FeaturesPage; 