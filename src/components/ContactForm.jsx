// src/components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    // Here you can integrate an API call or backend logic
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16 rounded-xl shadow-md max-w-5xl mx-auto my-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Schedule a Visit / Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="e.g., Muhammad Faran"
            className="border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="e.g., you@example.com"
            className="border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="e.g., +92 300 1234567"
            className="border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Message / Preferred Time
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Let us know when you're available or what you're looking for..."
            className="border border-gray-300 px-4 py-3 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Submit Request
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
