import React from 'react'
import { Trash2, Save, X } from 'lucide-react';

const CategoryCard = ({ category, onDelete }) => (
  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div 
          className="w-4 h-4 rounded-full" 
          style={{ backgroundColor: category.color }}
        ></div>
        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
      </div>
      <button 
        onClick={() => onDelete(category.id)}
        className="text-red-600 hover:text-red-900 p-1"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
    <p className="text-2xl font-bold text-gray-900">{category.eventCount}</p>
    <p className="text-sm text-gray-500">Events in category</p>
  </div>
);

export default CategoryCard