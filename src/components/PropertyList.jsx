import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

const PropertyList = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Properties</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
