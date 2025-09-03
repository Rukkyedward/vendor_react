import React  from 'react'
import { Plus } from 'lucide-react';
import AddCategoryForm from '../feature/AddCategoryForm';
import CategoryCard from '../feature/CategoryCard';
import LoadingSpinner from '../utility/LoadingSpinner';

const CategoriesSection = ({ categories, showAddCategory, newCategory, onShowAdd, onCategoryChange, onAddCategory, onCancelAdd, onDeleteCategory, loading }) => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Vendor Categories</h2>
      <button 
        onClick={onShowAdd}
        className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
      >
        <Plus className="h-4 w-4" />
        Add Category
      </button>
    </div>

    {showAddCategory && (
      <AddCategoryForm
        newCategory={newCategory}
        onChange={onCategoryChange}
        onSubmit={onAddCategory}
        onCancel={onCancelAdd}
        loading={loading}
      />
    )}

    {loading ? (
      <LoadingSpinner />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((category) => (
          <CategoryCard 
            key={category.id}
            category={category}
            onDelete={onDeleteCategory}
          />
        ))}
      </div>
    )}
  </div>
);

export default CategoriesSection