import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties"; 
import { MapPin, DollarSign } from "lucide-react";

const PropertyCard = ({ property }) => {
  if (!property) return null;

  const { id, title, location, price, image } = property;

  return (
    <div className="relative bg-white rounded-2xl shadow-md transition-transform hover:scale-[1.02] duration-300 border border-gray-100 overflow-hidden flex flex-col">
      {/* Label */}
      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
        For Sale
      </span>

      {/* Image */}
      <img
        src={image || "/placeholder.jpg"}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 flex items-center">
            <MapPin size={16} className="mr-1 text-blue-500" />
            {location}
          </p>
          <p className="text-blue-600 font-bold text-base flex items-center mt-2">
            <DollarSign size={16} className="mr-1" />
            {price}
          </p>
        </div>

        <Link
          to={`/property/${id}`}
          className="mt-6 inline-block text-center bg-blue-700 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter properties by location (case-insensitive)
  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Property Listings
        </h1>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full border border-gray-300 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search properties by location"
          />
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 italic">
            No properties found for "{searchTerm}".
          </p>
        )}
      </div>
    </main>
  );
};

export default PropertyListing;
