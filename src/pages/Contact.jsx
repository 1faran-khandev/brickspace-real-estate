import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay

    toast.success("Thanks! We'll reach out soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-blue-50 to-white py-16 px-4">
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-6 px-4 rounded-t-xl">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-blue-100 mt-1">Schedule a Visit or Ask a Question</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-8 py-10"
          aria-label="Contact form"
        >
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold mb-1 text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              disabled={isSubmitting}
              required
              className="w-full border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1 text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={isSubmitting}
                required
                className="w-full border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1 text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0300-1234567"
                disabled={isSubmitting}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block font-semibold mb-1 text-gray-700">
              Message or Visit Time
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details or request a visit slot..."
              disabled={isSubmitting}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              disabled={isSubmitting}
              className={`bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
 