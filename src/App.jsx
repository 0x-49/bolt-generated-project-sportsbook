import React, { useState, useEffect } from 'react';
    import SportsbookList from './components/SportsbookList';
    import FilterBar from './components/FilterBar';
    import SortOptions from './components/SortOptions';

    const sportsbooksData = [
      {
        id: 1,
        name: 'BetOnline',
        url: 'https://www.betonline.ag',
        features: ['Live Betting', 'Casino', 'Poker'],
        bonuses: ['$1000 Bonus', 'Crypto Bonus'],
        rating: 4.5,
        countries: ['USA', 'Canada', 'UK'],
      },
      {
        id: 2,
        name: 'Bovada',
        url: 'https://www.bovada.lv',
        features: ['Live Betting', 'Casino'],
        bonuses: ['$750 Bonus'],
        rating: 4.2,
        countries: ['USA', 'Canada'],
      },
      {
        id: 3,
        name: 'MyBookie',
        url: 'https://www.mybookie.ag',
        features: ['Live Betting', 'Racebook'],
        bonuses: ['$1000 Bonus'],
        rating: 3.9,
        countries: ['USA'],
      },
      {
        id: 4,
        name: 'BetMGM',
        url: 'https://www.betmgm.com',
        features: ['Live Betting', 'Casino', 'Poker', 'Mobile App'],
        bonuses: ['$1500 Risk-Free Bet'],
        rating: 4.7,
        countries: ['USA'],
      },
      {
        id: 5,
        name: 'DraftKings',
        url: 'https://www.draftkings.com',
        features: ['Live Betting', 'Daily Fantasy Sports', 'Casino', 'Mobile App'],
        bonuses: ['$1000 Deposit Bonus'],
        rating: 4.8,
        countries: ['USA'],
      },
    ];

    function App() {
      const [sportsbooks, setSportsbooks] = useState(sportsbooksData);
      const [filters, setFilters] = useState({
        name: '',
        feature: '',
        country: '',
      });
      const [sortBy, setSortBy] = useState(null);
      const [sortOrder, setSortOrder] = useState('asc');

      useEffect(() => {
        let filteredSportsbooks = sportsbooksData.filter(sb => {
          const nameMatch = sb.name.toLowerCase().includes(filters.name.toLowerCase());
          const featureMatch = filters.feature === '' || sb.features.includes(filters.feature);
          const countryMatch = filters.country === '' || sb.countries.includes(filters.country);
          return nameMatch && featureMatch && countryMatch;
        });

        if (sortBy) {
          filteredSportsbooks = [...filteredSportsbooks].sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];

            if (typeof aValue === 'string') {
              return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number') {
              return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
            }
            return 0;
          });
        }

        setSportsbooks(filteredSportsbooks);
      }, [filters, sortBy, sortOrder]);

      const handleFilterChange = (type, value) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          [type]: value,
        }));
      };

      const handleSortChange = (field) => {
        if (sortBy === field) {
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
          setSortBy(field);
          setSortOrder('asc');
        }
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Advanced Sportsbook Directory</h1>
          <FilterBar filters={filters} onFilterChange={handleFilterChange} />
          <SortOptions sortBy={sortBy} sortOrder={sortOrder} onSortChange={handleSortChange} />
          <SportsbookList sportsbooks={sportsbooks} />
        </div>
      );
    }

    export default App;
