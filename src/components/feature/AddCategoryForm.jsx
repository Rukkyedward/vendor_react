import React from 'react'
import { Save, X } from 'lucide-react';

const AddCategoryForm = ({ newCategory, onChange, onSubmit, onCancel, loading }) => (
  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Category</h3>
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Category name"
        value={newCategory.name}
        onChange={(e) => onChange({...newCategory, name: e.target.value})}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <div className="flex gap-2">
        <input
          type="color"
          value={newCategory.color}
          onChange={(e) => onChange({...newCategory, color: e.target.value})}
          className="w-12 h-10 rounded-lg border border-gray-300"
        />
        <button 
          onClick={onSubmit}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
        </button>
        <button 
          onClick={onCancel}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

export default AddCategoryForm