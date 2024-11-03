import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors ${
          isActive ? 'text-green-600 bg-green-50' : ''
        }`
      }
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="ml-3 font-medium">{label}</span>
    </NavLink>
  );
};

export default NavItem; 