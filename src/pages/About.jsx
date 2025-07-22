import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="about-title">
      <div className="text-center mb-10">
        <h2 id="about-title" className="text-4xl font-bold text-blue-600 mb-4">
          About BrickSpace
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          BrickSpace is a modern real estate platform where you can explore the best properties
          for your needs — whether you’re looking to buy, rent, or invest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <figure>
          <img
            src="/images/about.jpg"
            alt="The BrickSpace team collaborating and assisting clients"
            className="w-full rounded-xl shadow-lg"
            loading="lazy"
          />
        </figure>

        <article>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At BrickSpace, we are a team of experienced professionals committed to simplifying
            your real estate journey. With user-friendly search features, high-quality listings,
            and instant scheduling, we aim to be your trusted partner in finding the perfect space.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Why Choose Us?</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-3 leading-relaxed">
            <li>Verified Property Listings</li>
            <li>Instant Visit Scheduling</li>
            <li>Professional Guidance & Support</li>
            <li>Modern UI with AI-Driven Features</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
