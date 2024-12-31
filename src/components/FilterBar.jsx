import React from 'react';

    function FilterBar({ filters, onFilterChange }) {
      return (
        <div className="flex flex-wrap gap-2 mb-4">
          <input
            type="text"
            placeholder="Filter by name"
            className="p-2 border rounded w-full sm:w-auto"
            value={filters.name}
            onChange={(e) => onFilterChange('name', e.target.value)}
          />
          <select
            className="p-2 border rounded w-full sm:w-auto"
            value={filters.feature}
            onChange={(e) => onFilterChange('feature', e.target.value)}
          >
            <option value="">All Features</option>
            <option value="Live Betting">Live Betting</option>
            <option value="Casino">Casino</option>
            <option value="Poker">Poker</option>
            <option value="Racebook">Racebook</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Daily Fantasy Sports">Daily Fantasy Sports</option>
          </select>
          <select
            className="p-2 border rounded w-full sm:w-auto"
            value={filters.country}
            onChange={(e) => onFilterChange('country', e.target.value)}
          >
            <option value="">All Countries</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>
      );
    }

    export default FilterBar;
