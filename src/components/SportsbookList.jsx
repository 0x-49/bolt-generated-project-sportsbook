import React from 'react';

    function SportsbookList({ sportsbooks }) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sportsbooks.map(sportsbook => (
            <div key={sportsbook.id} className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-semibold mb-2">
                <a href={sportsbook.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {sportsbook.name}
                </a>
              </h3>
              <p className="mb-1">
                <b>Rating:</b> {sportsbook.rating}
              </p>
              <p className="mb-1">
                <b>Features:</b> {sportsbook.features.join(', ')}
              </p>
              <p className="mb-1">
                <b>Bonuses:</b> {sportsbook.bonuses.join(', ')}
              </p>
              <p className="mb-1">
                <b>Countries:</b> {sportsbook.countries.join(', ')}
              </p>
            </div>
          ))}
          {sportsbooks.length === 0 && <div className="text-center col-span-full">No sportsbooks found matching your criteria.</div>}
        </div>
      );
    }

    export default SportsbookList;
