import React from 'react'
import { Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';
import StatsCard from '../feature/StatsCard';
import EventsTable from '../feature/EventsTable';

const DashboardSection = ({ events, stats, searchTerm, onSearchChange, onViewEvent, onEditEvent, onDeleteEvent }) => {
  const formatCurrency = (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatsCard 
          title="Total Events" 
          value={stats.totalEvents} 
          icon={Calendar} 
          color="text-blue-600" 
          trend="+2 this month" 
        />
        <StatsCard 
          title="Attendees" 
          value={stats.totalAttendees} 
          icon={Users} 
          color="text-green-600" 
          trend="+15% this month" 
        />
        <StatsCard 
          title="Revenue" 
          value={formatCurrency(stats.totalRevenue)} 
          icon={DollarSign} 
          color="text-yellow-600" 
          trend="+8% this month" 
        />
        <StatsCard 
          title="Avg Rating" 
          value={stats.avgRating} 
          icon={TrendingUp} 
          color="text-purple-600" 
          trend="+0.2 this month" 
        />
      </div>
      
      <EventsTable 
        events={events}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onView={onViewEvent}
        onEdit={onEditEvent}
        onDelete={onDeleteEvent}
      />
    </div>
  );
};

export default DashboardSection