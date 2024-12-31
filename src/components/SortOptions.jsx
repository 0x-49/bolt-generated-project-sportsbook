import React from 'react';

    function SortOptions({ sortBy, sortOrder, onSortChange }) {
      return (
        <div className="flex gap-4 mb-4">
          <span>Sort By:</span>
          <button onClick={() => onSortChange('name')} className={sortBy === 'name' ? 'font-bold underline' : ''}>
            Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
          <button onClick={() => onSortChange('rating')} className={sortBy === 'rating' ? 'font-bold underline' : ''}>
            Rating {sortBy === 'rating' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
        </div>
      );
    }

    export default SortOptions;
