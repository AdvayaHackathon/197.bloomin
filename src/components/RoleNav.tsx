import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Heart, 
  Building2, 
  FlaskConical 
} from 'lucide-react';

interface RoleNavProps {
  onRoleClick?: (role: string) => void;
  activeRole?: string;
}

const RoleNav = ({ onRoleClick, activeRole }: RoleNavProps) => {
  const roles = [
    {
      icon: <GraduationCap size={20} className="text-white/80 group-hover:text-white" />,
      label: "For Medical Students",
      value: "students"
    },
    {
      icon: <Users size={20} className="text-white group-hover:text-white" />,
      label: "For Doctors",
      value: "doctors"
    },
    {
      icon: <Heart size={20} className="text-white/80 group-hover:text-white" />,
      label: "For Patients",
      value: "patients"
    },
    {
      icon: <Building2 size={20} className="text-white/80 group-hover:text-white" />,
      label: "For Medical Institutions",
      value: "institutions"
    },
    {
      icon: <FlaskConical size={20} className="text-white/80 group-hover:text-white" />,
      label: "For Medical Researchers",
      value: "researchers"
    }
  ];

  return (
    <div className="bg-bloomin-navy py-2 rounded-lg">
      <div className="flex flex-col gap-1">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => onRoleClick?.(role.value)}
            className={`group flex items-center space-x-2 text-white/80 hover:text-white transition-colors py-2 px-4 text-sm
              ${role.value === activeRole ? 'bg-bloomin-blue !text-white rounded-md' : ''}`}
          >
            {role.icon}
            <span className="font-medium">{role.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleNav; 