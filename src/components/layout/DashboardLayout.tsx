import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import NavItem from './Sidebar/NavItem';

const DashboardLayout: React.FC = () => {
  const navigation = [
    { label: 'Dashboard', icon: <HomeIcon />, to: '/' },
    { label: 'Calls', icon: <PhoneIcon />, to: '/calls' },
    { label: 'Customers', icon: <UserGroupIcon />, to: '/customers' },
    { label: 'Scripts', icon: <DocumentTextIcon />, to: '/scripts' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex h-16 items-center px-6 border-b">
          <h1 className="text-2xl font-bold text-green-600">PestSync</h1>
        </div>
        <nav className="mt-6 space-y-1">
          {navigation.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex flex-col">
        <header className="h-16 bg-white shadow-sm">
          <div className="flex h-full items-center px-6">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 