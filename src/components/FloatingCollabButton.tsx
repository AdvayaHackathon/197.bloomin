import React from 'react';
import { Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCollabButton = () => {
  return (
    <Link 
      to="/collaborate" 
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-white p-2 sm:p-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl group transition-all duration-300 flex items-center"
    >
      <div className="bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white p-1.5 sm:p-2 rounded-full mr-1.5 sm:mr-2">
        <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
      <div className="pr-1">
        <h4 className="text-bloomin-navy font-bold text-[10px] sm:text-xs">Collaborate With Us</h4>
        <p className="text-[8px] sm:text-[10px] text-gray-600 hidden xs:block">Join our healthcare mission</p>
      </div>
    </Link>
  );
};

export default FloatingCollabButton; 