import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Grid3X3, Settings } from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import CategoriesSection from '../components/sections/CategoriesSection';
import DashboardSection from '../components/sections/DashboardSection';
import SettingsSection from '../components/sections/SettingsSection';
import Header from '../components/layout/Header';
import ApiService from '../components/service-layer/ApiService';
import ErrorMessage from '../components/utility/ErrorMessage';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({
    profile: { name: '', email: '', phone: '' },
    notifications: { email: true, push: false, sms: true },
    privacy: { profileVisible: true, contactVisible: false }
  });
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalAttendees: 0,
    totalRevenue: 0,
    avgRating: 0
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', color: '#3B82F6' });
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Data fetching hooks
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [eventsData, categoriesData, settingsData] = await Promise.all([
          ApiService.fetchEvents(),
          ApiService.fetchCategories(),
          ApiService.fetchSettings()
        ]);
        
        setEvents(eventsData);
        setCategories(categoriesData);
        setSettings(settingsData);
        
        // Calculate stats
        const totalEvents = eventsData.length;
        const totalAttendees = eventsData.reduce((sum, event) => sum + event.attendees, 0);
        const totalRevenue = eventsData.reduce((sum, event) => sum + event.revenue, 0);
        const avgRating = 4.8;
        
        setStats({ totalEvents, totalAttendees, totalRevenue, avgRating });
        
      } catch (err) {
        setError('Failed to load data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'services', icon: Grid3X3, label: 'Categories' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  // Event handlers
  const handleViewEvent = (id) => {
    console.log('View event:', id);
    // Implement view logic
  };

  const handleEditEvent = (id) => {
    console.log('Edit event:', id);
    // Implement edit logic
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        setLoading(true);
        await ApiService.deleteEvent(id);
        setEvents(prev => prev.filter(event => event.id !== id));
      } catch (err) {
        setError('Failed to delete event');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddCategory = async () => {
    if (newCategory.name.trim()) {
      try {
        setLoading(true);
        const category = await ApiService.createCategory(newCategory);
        setCategories(prev => [...prev, category]);
        setNewCategory({ name: '', color: '#3B82F6' });
        setShowAddCategory(false);
      } catch (err) {
        setError('Failed to create category');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        setLoading(true);
        await ApiService.deleteCategory(id);
        setCategories(prev => prev.filter(cat => cat.id !== id));
      } catch (err) {
        setError('Failed to delete category');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      await ApiService.updateSettings(settings);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }));
  };

  const handleNotificationChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value }
    }));
  };

  const handlePrivacyChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [field]: value }
    }));
  };

  const handleChangePassword = async (oldPassword, newPassword) => {
    try {
      setLoading(true);
      await ApiService.changePassword(oldPassword, newPassword);
      setError(null);
      alert('Password changed successfully!');
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async (password) => {
    try {
      setLoading(true);
      await ApiService.deleteAccount(password);
      // Redirect to login or show confirmation
      alert('Account deleted successfully. You will be redirected.');
      // window.location.href = '/login'; // Adjust as needed
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <DashboardSection 
            events={events}
            stats={stats}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onViewEvent={handleViewEvent}
            onEditEvent={handleEditEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        );
      case 'services':
        return (
          <CategoriesSection 
            categories={categories}
            showAddCategory={showAddCategory}
            newCategory={newCategory}
            onShowAdd={() => setShowAddCategory(true)}
            onCategoryChange={setNewCategory}
            onAddCategory={handleAddCategory}
            onCancelAdd={() => {
              setShowAddCategory(false);
              setNewCategory({ name: '', color: '#3B82F6' });
            }}
            onDeleteCategory={handleDeleteCategory}
            loading={loading}
          />
        );
      case 'settings':
        return (
          <SettingsSection 
            settings={settings}
            isEditing={isEditing}
            onEditProfile={() => setIsEditing(true)}
            onSaveProfile={handleSaveProfile}
            onProfileChange={handleProfileChange}
            onNotificationChange={handleNotificationChange}
            onPrivacyChange={handlePrivacyChange}
            onChangePassword={handleChangePassword}
            onDeleteAccount={handleDeleteAccount}
            loading={loading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sidebarItems={sidebarItems}
      />

      <div className="flex-1 overflow-auto lg:ml-0">
        <Header 
          activeTab={activeTab}
          onSidebarOpen={() => setSidebarOpen(true)}
          userName={settings.profile.name || "Vendor"}
        />

        <main className="p-4 lg:p-6">
          <ErrorMessage error={error} onClose={() => setError(null)} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
};


export default VendorDashboard