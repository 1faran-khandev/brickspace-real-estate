import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";
import ContactForm from "../components/ContactForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <main className="min-h-screen flex items-center justify-center" role="alert">
        <h2 className="text-2xl font-bold text-blue-700">Property not found</h2>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4" aria-labelledby="property-title">
      <article className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        {/* Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full md:w-1/2 object-cover object-center h-96 md:h-auto"
          loading="lazy"
        />

        {/* Content */}
        <section className="p-6 md:w-1/2">
          <h1 id="property-title" className="text-3xl font-bold text-blue-700 mb-4">{property.title}</h1>

          <div className="space-y-2 text-gray-700 text-base">
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Price:</strong> {property.price}</p>
            {property.area && <p><strong>Area:</strong> {property.area} sq ft</p>}
            {property.bedrooms && <p><strong>Bedrooms:</strong> {property.bedrooms}</p>}
            {property.bathrooms && <p><strong>Bathrooms:</strong> {property.bathrooms}</p>}
            <p className="pt-2 text-gray-600">
              <strong className="text-gray-800">Description:</strong><br />
              {property.description}
            </p>
          </div>
        </section>
      </article>

      {/* Divider */}
      <hr className="my-10 border-gray-200" />

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto" aria-labelledby="contact-title">
        <h2 id="contact-title" className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Schedule a Visit / Contact Us
        </h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default PropertyDetails;
