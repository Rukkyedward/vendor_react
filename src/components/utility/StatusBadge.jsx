import React from 'react'

const StatusBadge = ({ status }) => {
  const statusColors = {
    Active: 'bg-green-100 text-green-800',
    Scheduled: 'bg-yellow-100 text-yellow-800',
    Draft: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status] || statusColors.Draft}`}>
      {status}
    </span>
  );
};

export default StatusBadge