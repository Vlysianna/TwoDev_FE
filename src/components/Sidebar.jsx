import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  GraduationCap, 
  UserCheck, 
  UserPlus, 
  UserCircle, 
  LogOut,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      title: 'Kelola Asesmen',
      icon: FileText,
      path: '/kelola-asesmen'
    },
    {
      title: 'Kelola Skema',
      icon: Users,
      path: '/kelola-skema'
    },
    {
      title: 'Kelola Jurusan',
      icon: GraduationCap,
      path: '/kelola-jurusan'
    }
  ];

  const managementItems = [
    {
      title: 'Akun Asesi',
      icon: UserCheck,
      path: '/akun-asesi'
    },
    {
      title: 'Akun Asesor',
      icon: UserPlus,
      path: '/akun-asesor'
    },
    {
      title: 'Register',
      icon: UserCircle,
      path: '/register'
    }
  ];

  const handleMenuClick = (title) => {
    setActiveMenu(title);
  };

  return (
    <div className="w-64 h-screen bg-teal-600 text-white flex flex-col">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-teal-500">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-teal-600 font-bold text-lg">S</span>
          </div>
          <span className="font-semibold text-lg">SertifikasiI</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-4">
        <div className="px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.title;
            
            return (
              <button
                key={item.title}
                onClick={() => handleMenuClick(item.title)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-teal-700 text-white' 
                    : 'text-teal-100 hover:bg-teal-500 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Management Section */}
        <div className="mt-8 px-4">
          <h3 className="text-teal-200 text-sm font-semibold uppercase tracking-wider mb-3 px-4">
            Manajemen
          </h3>
          <div className="space-y-1">
            {managementItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.title;
              
              return (
                <button
                  key={item.title}
                  onClick={() => handleMenuClick(item.title)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive 
                      ? 'bg-teal-700 text-white' 
                      : 'text-teal-100 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Logout Section */}
      <div className="border-t border-teal-500 p-4">
        <button 
          onClick={() => handleMenuClick('Logout')}
          className="w-full flex items-center space-x-3 px-4 py-3 text-teal-100 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;