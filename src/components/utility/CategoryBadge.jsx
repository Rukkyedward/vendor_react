import React from 'react'

const CategoryBadge = ({ category }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    {category}
  </span>
);

export default CategoryBadge