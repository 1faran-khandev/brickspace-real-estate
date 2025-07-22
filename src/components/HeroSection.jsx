import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/hero.jpg')" }}
      role="region"
      aria-label="Hero Section: Find Your Dream Home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
          Find Your <span className="text-red-500">Dream Home</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          Explore top-rated properties with modern tools, interactive maps, and trusted agents.
        </p>

        <Link to="/properties" aria-label="Browse Properties">
          <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 text-lg font-semibold rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
            Browse Properties
          </button>
        </Link>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-sm opacity-70">
        <span className="block">Scroll ↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
