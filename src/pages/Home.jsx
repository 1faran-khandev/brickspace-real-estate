import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSeeProperties = () => {
    navigate('/properties');
  };

  return (
    <div>
      
      <section
        className="relative h-[90vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/property151.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg md:text-2xl mb-8">Explore top real estate listings in your area</p>
          <button
            onClick={handleSeeProperties}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300"
          >
            See My Properties
          </button>
        </div>
      </section>
      
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
