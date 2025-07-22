import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Home } from 'lucide-react';

// Dynamic label styles
const statusStyles = {
  sale: {
    label: "For Sale",
    bg: "bg-red-600",
  },
  rent: {
    label: "For Rent",
    bg: "bg-blue-600",
  },
};

const PropertyCard = ({ property }) => {
  if (!property) return null;

  const {
    id,
    title,
    location,
    price,
    image,
    status = 'sale', // default fallback
  } = property;

  const statusInfo = statusStyles[status] || statusStyles.sale;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col overflow-hidden"
      aria-label={`Property Card: ${title}`}
    >
      {/* Status Label */}
      <div className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${statusInfo.bg}`}>
        {statusInfo.label}
      </div>

      {/* Property Image */}
      <img
        src={image || "/placeholder.jpg"}
        alt={`Image of ${title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* Property Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
          <p className="flex items-center text-sm text-gray-500">
            <MapPin size={16} className="text-blue-500 mr-1" />
            {location}
          </p>
          <p className="flex items-center text-base font-bold text-blue-700">
            <DollarSign size={16} className="mr-1" />
            {price}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to={`/property/${id}`}
          className="mt-5 w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
          aria-label={`View details for ${title}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
