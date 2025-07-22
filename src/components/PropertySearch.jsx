import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

const PropertySearch = ({ properties }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter properties by location (case insensitive)
  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Properties</h2>

      <input
        type="text"
        placeholder="Search by location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 px-4 py-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <div className="text-center text-gray-500 font-medium mb-10">
        50 Lakh - 1 Crore
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 italic">
          No properties found for your search.
        </div>
      )}
    </div>
  );
};

export default PropertySearch;
