import React from 'react'
import { User, Bell, Menu, } from 'lucide-react';

const Header = ({ activeTab, onSidebarOpen, userName = "Vendor" }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 p-4 lg:p-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button 
          onClick={onSidebarOpen}
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <p className="text-gray-500 mt-1 text-sm lg:text-base hidden sm:block">
            {activeTab === 'dashboard' && 'Here\'s an overview of your vendor management platform.'}
            {activeTab === 'services' && 'Manage your event categories and organize your events.'}
            {activeTab === 'settings' && 'Manage your account settings and preferences.'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 lg:gap-3 pl-2 lg:pl-3 border-l border-gray-200">
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <User className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">Account</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header