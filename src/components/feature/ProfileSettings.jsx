import React from 'react';
import { User } from 'lucide-react';

const ProfileSettings = ({ profile, isEditing, onEdit, onSave, onChange, loading }) => (
  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
        <User className="h-5 w-5" />
        Profile Settings
      </h3>
      <button 
        onClick={isEditing ? onSave : onEdit}
        disabled={loading}
        className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm"
      >
        {isEditing ? (loading ? 'Saving...' : 'Save') : 'Edit'}
      </button>
    </div>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => onChange('name', e.target.value)}
          disabled={!isEditing}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => onChange('email', e.target.value)}
          disabled={!isEditing}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          value={profile.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          disabled={!isEditing}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 text-sm"
        />
      </div>
    </div>
  </div>
);

export default ProfileSettings