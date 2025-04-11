import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Cpu, 
  Users, 
  Microscope, 
  Phone, 
  Menu, 
  X,
  Mail,
  ChevronLeft,
  Calendar,
  Info,
  Handshake,
  LogIn,
  UserPlus
} from "lucide-react";
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if current page needs a back button
  const needsBackButton = ['/collaborate', '/features', '/happenings', '/built-by'].includes(location.pathname);

  const navItems = [
    { name: 'Home', icon: <Home className="h-6 w-6" />, path: '/' },
    { name: 'Features', icon: <Cpu className="h-6 w-6" />, path: '/features' },
    { name: 'Happenings', icon: <Calendar className="h-6 w-6" />, path: '/happenings' },
    { name: 'Built By', icon: <Info className="h-6 w-6" />, path: '/built-by' },
  ];

  const handleNavigation = (path: string) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      navigate(basePath);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bloomin-blue/90 backdrop-blur-sm h-16 md:h-20">
      <div className="w-full h-full px-0">
        <div className="flex items-center justify-between h-full px-3 sm:px-5 md:px-8 lg:px-10">
          <div className="flex items-center">
            {needsBackButton && (
              <button 
                onClick={() => navigate(-1)} 
                className="mr-2 md:mr-3 p-1.5 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Back"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </button>
            )}
            <Link to="/" className="flex items-center pl-1 md:pl-2">
              <span className="text-3xl md:text-4xl font-bold text-white">
                bloomin
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item, index) => (
              <button 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="text-white/90 hover:text-white flex items-center gap-2 transition-colors duration-300"
              >
                {item.icon}
                <span className="text-base">
                  {item.name}
                </span>
              </button>
            ))}
            
            <button 
              onClick={() => handleNavigation('/collaborate')}
              className="bg-bloomin-teal text-white hover:bg-bloomin-teal/90 transition-colors duration-300 px-5 py-2.5 rounded-full flex items-center gap-2 font-medium"
            >
              <Users className="h-5 w-5" />
              Collaborate with Us
            </button>

            <button
              onClick={() => handleNavigation('/auth/login')}
              className="text-white/90 hover:text-white flex items-center gap-2 transition-colors duration-300"
            >
              <LogIn className="h-5 w-5" />
              <span className="text-base">Login</span>
            </button>

            <button
              onClick={() => handleNavigation('/auth/register')}
              className="bg-white text-bloomin-blue hover:bg-white/90 transition-colors duration-300 px-5 py-2.5 rounded-full flex items-center gap-2 font-medium"
            >
              <UserPlus className="h-5 w-5" />
              Register
            </button>
            
            <a 
              href="mailto:raghav@pesce.ac.in" 
              className="bg-white text-bloomin-blue hover:bg-white/90 transition-colors duration-300 px-5 py-2.5 rounded-full flex items-center gap-2 font-medium"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => handleNavigation('/auth/login')}
              className="text-white/90 hover:text-white p-2"
            >
              <LogIn className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleNavigation('/auth/register')}
              className="text-white/90 hover:text-white p-2"
            >
              <UserPlus className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => handleNavigation('/collaborate')}
              className="bg-bloomin-teal text-white hover:bg-bloomin-teal/90 transition-colors duration-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 mr-1 sm:mr-2 text-xs sm:text-sm font-medium"
            >
              <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Collaborate</span>
            </button>
            
            <a 
              href="mailto:raghav@pesce.ac.in" 
              className="bg-white text-bloomin-blue hover:bg-white/90 transition-colors duration-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 mr-2 sm:mr-3 text-xs sm:text-sm font-medium"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Contact</span>
            </a>
            
            <button
              type="button"
              className="text-white/90 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bloomin-blue/95 backdrop-blur-sm border-t border-white/10 py-2 sm:py-4">
          <div className="px-4">
            <div className="flex flex-col space-y-2 sm:space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors duration-300 px-2 py-1.5 w-full text-left text-sm sm:text-base"
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('/auth/login')}
                className="text-white/90 hover:text-white flex items-center gap-2 transition-colors duration-300 px-2 py-1.5 w-full text-left text-sm sm:text-base"
              >
                <LogIn className="h-5 w-5" />
                Login
              </button>
              <button
                onClick={() => handleNavigation('/auth/register')}
                className="text-white/90 hover:text-white flex items-center gap-2 transition-colors duration-300 px-2 py-1.5 w-full text-left text-sm sm:text-base"
              >
                <UserPlus className="h-5 w-5" />
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
