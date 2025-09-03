import React from 'react'
import { Shield } from 'lucide-react';
import ToggleSwitch from '../utility/ToggleSwitch';

const PrivacySettings = ({ privacy, onChange }) => (
  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
      <Shield className="h-5 w-5" />
      Privacy Settings
    </h3>
    <div className="space-y-4">
      {Object.entries(privacy).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            {key === 'profileVisible' ? 'Profile Visible' : 'Contact Information Visible'}
          </label>
          <ToggleSwitch 
            checked={value}
            onChange={(checked) => onChange(key, checked)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default PrivacySettings