import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Intro */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">BrickSpace</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted platform for exploring top real estate properties with modern tools and simple scheduling.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/properties" className="hover:text-white transition">Properties</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: <a href="mailto:info@brickspace.com" className="hover:text-white">info@brickspace.com</a></li>
            <li>Phone: <a href="tel:+923000000000" className="hover:text-white">+92 300 000 0000</a></li>
            <li>Location: Bannu, Pakistan</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BrickSpace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
