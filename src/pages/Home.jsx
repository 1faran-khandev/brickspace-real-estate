import React from 'react';

const Home = () => {
  const properties = [
    {
      id: 151,
      title: 'Luxury Villa with Garden',
      description: '4 Bed • 3 Bath • 3200 sqft',
      price: 'PKR 1.5 Crore',
      image: '/images/property151.jpg',
    },
    {
      id: 152,
      title: 'Modern City Apartment',
      description: '2 Bed • 2 Bath • 1100 sqft',
      price: 'PKR 95 Lakh',
      image: '/images/property152.jpg',
    },
    {
      id: 153,
      title: 'Cozy Suburban House',
      description: '3 Bed • 2 Bath • 1500 sqft',
      price: 'PKR 75 Lakh',
      image: '/images/property153.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/property151.jpg')", // FIXED path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg md:text-2xl mb-8">Explore top real estate listings in your area</p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300">
            Browse Properties
          </button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
                <p className="text-gray-600 mb-1">{property.description}</p>
                <p className="text-blue-600 font-bold mb-4">{property.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a Visit or Contact Us</h2>
          <p className="text-gray-700 mb-6">Let’s help you take the next step toward your dream property.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
