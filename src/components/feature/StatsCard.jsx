import React from 'react'

const StatsCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs lg:text-sm font-medium text-gray-600">{title}</p>
        <p className="text-xl lg:text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <Icon className={`h-6 w-6 lg:h-8 lg:w-8 ${color}`} />
    </div>
    {trend && <p className="text-xs text-green-600 mt-2">↗ {trend}</p>}
  </div>
);

export default StatsCard