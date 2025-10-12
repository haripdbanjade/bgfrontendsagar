import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 px-4 sm:px-6 md:px-20 py-12 mt-10">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white tracking-wide">GameVerse</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Dive into the world of gaming with GameVerse — where innovation meets passion.
            We bring together players, creators, and dreamers under one digital universe.
          </p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400 transition">Privacy Notices</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Our Policies</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Cookie Notice</a></li>
          </ul>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Butwal, Rupandehi, Nepal</li>
            <li>+977 9742365415</li>
            <li>hello@example.com</li>
          </ul>
        </div>

        {/* Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 text-white p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="rounded-lg overflow-hidden shadow-xl mb-10 border border-gray-800">
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            title="Butwal Map"
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.1361654225306!2d83.44580511506225!3d27.671732382801923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968508cdf97a43%3A0xb6e4cc06f7cbd652!2sButwal%2C%20Nepal!5e0!3m2!1sen!2snp!4v1696488983541!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Socials & Copyright */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          © 2025{' '}
          <span className="font-semibold">
            <span className="text-red-500">Game</span>
            <span className="text-white">Verse</span>
          </span>
          . All rights reserved.
        </p>

        <div className="flex space-x-4 text-2xl justify-center mt-4">
          <a href="#" className="hover:text-red-500 transition transform hover:scale-110"><FaFacebookF /></a>
          <a href="#" className="hover:text-red-400 transition transform hover:scale-110"><FaTwitterSquare /></a>
          <a href="#" className="hover:text-red-700 transition transform hover:scale-110"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-red-500 transition transform hover:scale-110"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
