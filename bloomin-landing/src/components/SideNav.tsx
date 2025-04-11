import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Heart,
  Building2,
  FlaskConical,
  LogIn,
  UserPlus,
  ChevronRight,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Role {
  icon: React.ReactElement;
  label: string;
  description: string;
  role: string;
  skipHref?: string;
}

const SideNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const roles: Role[] = [
    {
      icon: <GraduationCap size={20} />,
      label: "Medical Students",
      description: "Join thousands of medical students",
      role: "student",
      skipHref: "https://medstudent-dashboard-frontend.netlify.app/"
    },
    {
      icon: <Users size={20} />,
      label: "Doctors",
      description: "Connect with fellow doctors, help students and grow your network",
      role: "doctor",
      skipHref: "https://bloomin-doctor.netlify.app/"
    },
    {
      icon: <Heart size={20} />,
      label: "Patients",
      description: "Get AI-assisted health insights & consult verified doctors",
      role: "patient",
      skipHref: "https://bloomin-patients.netlify.app/"
    },
    {
      icon: <Building2 size={20} />,
      label: "Medical Institutions",
      description: "Manage your students, research, and professional network in one place",
      role: "institution",
      skipHref: "https://bloomin-institutions.netlify.app/"
    },
    {
      icon: <FlaskConical size={20} />,
      label: "Medical Researchers",
      description: "Collaborate on cutting-edge research with global experts",
      role: "researcher",
      skipHref: "https://bloomin-researchers.netlify.app/"
    }
  ];

  const handleLogin = (role: string) => {
    navigate(`/auth/login?role=${role}`);
    setMobileNavOpen(false);
  };

  const handleRegister = () => {
    navigate('/auth/register');
    setMobileNavOpen(false);
  };

  const handleSkip = (href: string) => {
    window.location.href = href;
  };

  return (
    <>
      {/* Mobile toggle button - hidden when sidebar is open */}
      <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className={`md:hidden fixed left-0 top-[85px] bg-[#1a237e] text-white p-2 rounded-r-lg shadow-lg z-40 ${
          mobileNavOpen ? 'hidden' : 'block'
        }`}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="text-xs font-medium">Roles</span>
      </button>

      {/* Navigation sidebar - responsive */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-[#1a237e] text-white flex flex-col z-50 transform transition-transform duration-300 md:translate-x-0 md:top-[80px] md:h-[calc(100vh-80px)] md:z-30 ${
        mobileNavOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold">Choose Your Role</h2>
          {/* Close button - only visible on mobile */}
          <button 
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden text-white/70 hover:text-white p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="space-y-2 p-4">
            {roles.map((role, index) => (
              <div key={index} className="group">
                <div className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-white/80">
                      {role.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-white">
                        {role.label}
                      </h3>
                      <p className="text-xs text-white/60 mt-1 line-clamp-2">
                        {role.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          className="inline-flex items-center text-white bg-white/10 hover:bg-white/15 rounded-full px-3 py-1 text-xs"
                          onClick={() => handleLogin(role.role)}
                        >
                          <LogIn className="mr-1.5 h-3 w-3" />
                          Login
                        </button>
                        {role.skipHref && (
                          <button
                            className="text-white/40 hover:text-white/60 transition-colors text-xs"
                            onClick={() => {
                              setMobileNavOpen(false);
                              handleSkip(role.skipHref!);
                            }}
                          >
                            Skip
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-white/10">
          <Button 
            className="w-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-medium py-2 rounded-full text-sm"
            onClick={handleRegister}
          >
            <UserPlus className="mr-1.5 h-3.5 w-3.5" />
            Register Now
          </Button>
        </div>
      </div>

      {/* Overlay for mobile - closes sidebar when clicking outside */}
      {mobileNavOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}
    </>
  );
};

export default SideNav; 