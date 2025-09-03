import React from 'react'
import { X } from 'lucide-react';

const ErrorMessage = ({ error, onClose }) => {
  if (!error) return null;
  
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
      {error}
      <button 
        onClick={onClose}
        className="float-right text-red-400 hover:text-red-600"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ErrorMessage