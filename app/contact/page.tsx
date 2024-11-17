"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavigationLinks = ({ isSignedIn }: { isSignedIn: boolean }) => (
  <>
    <Link href="/" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
      Home
    </Link>
    <Link href="/about" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
      About
    </Link>
    <Link href="/services" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
      Services
    </Link>
    <Link href="/contact" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
      Contact
    </Link>

    {isSignedIn ? (
      <Link href="/dashboard" className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
        Dashboard
      </Link>
    ) : (
        <div className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105" >
          <SignInButton />

        </div>
    )}
  </>
);

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className={`section ${isAnimated ? 'animate' : ''}`} style={{ width: '100%' }}>
      <header className="bg-darkGreen text-white py-4 fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <img src="/logo.png" alt="Logo" className="w-32 md:w-40 lg:w-48" />
          </div>

          <nav className="hidden lg:flex space-x-4">
            <NavigationLinks isSignedIn={isSignedIn || false} />
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="block lg:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-green-800 text-white transition-transform duration-500 ease-in-out z-30 ${menuOpen ? "translate-x-0" : "translate-x-full"} w-2/3 md:w-1/3 lg:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col items-center justify-center space-y-8 h-full">
            <NavigationLinks isSignedIn={isSignedIn || false} />
          </nav>
        </div>
      </header>

      <section className="relative">
      <img
  src="/custormer.jpg"
  alt="Worker with garbage truck"
  className="w-full h-64 object-cover" // Set height to 16rem (or any size you prefer)
/>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
          <h1 className="text-7xl font-bold">Contact
          </h1>
        </div>
      </section>

      <section className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 gap-6 mt-12 p-5">
  <div className="border border-green-900 p-4 flex items-center space-x-4">
    <div className="bg-yellow-500 rounded-full p-4 flex-shrink-0">
    <Phone className="text-white w-6 h-6" />
    </div>
    <div>
      <p className="text-green-900 font-semibold">Call Us Now</p>
      <p className="text-green-900 font-bold text-lg">070-2535-5327</p>
    </div>
  </div>
  <div className="border border-green-900 p-4 flex items-center space-x-4">
    <div className="bg-yellow-500 rounded-full p-4 flex-shrink-0">
    <Mail className="text-white w-6 h-6" />
    </div>
    <div>
      <p className="text-green-900 font-semibold">Make a Quote</p>
      <p className="text-green-900 font-bold text-lg">wastetracker@gmail.com</p>
    </div>
  </div>
  <div className="border border-green-900 p-4 flex items-center space-x-4">
    <div className="bg-yellow-500 rounded-full p-4 flex-shrink-0">
    <MapPin className="text-white w-6 h-6" />
    </div>
    <div>
      <p className="text-green-900 font-semibold">Work Station</p>
      <p className="text-green-900 font-bold text-lg">Lokoja, Kogi State</p>
    </div>
  </div>
</section>



<section className="flex items-center justify-center h-screen px-4">
  {/* Form with background */}
  <div
    className="relative bg-cover bg-center bg-no-repeat w-full max-w-3xl rounded-lg p-6 sm:p-8 md:p-10 lg:p-12"
    style={{ backgroundImage: "url('/peps.jpg')" }} // Replace with your image path
  >
    {/* Dim overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

    {/* Content */}
    <div className="relative z-10 text-white">
      <h2 className="text-yellow-500 text-center text-lg sm:text-xl font-semibold mb-2">
        Get in Touch
      </h2>
      <h1 className="text-white text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
  Get in Touch for Expert Waste Management Services
</h1>
<p className="text-white text-center text-sm sm:text-base lg:text-lg mb-8">
  We're committed to providing sustainable and efficient waste management solutions. Whether you're looking to manage waste at home, business, or community level, our team is here to offer expert services that ensure a cleaner and greener environment for all.
</p>

      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-yellow-500 bg-transparent text-white placeholder-white rounded-md"
            />
            <p className="text-yellow-500 text-xs sm:text-sm mt-1">
              This field is required
            </p>
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-yellow-500 bg-transparent text-white placeholder-white rounded-md"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Subject"
            className="w-full p-3 border border-yellow-500 bg-transparent text-white placeholder-white rounded-md"
          />
        </div>
        <div>
          <textarea
            placeholder="Input Message Here"
            className="w-full p-3 border border-yellow-500 bg-transparent text-white placeholder-white rounded-md h-32"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-white font-bold hover:bg-yellow-600 rounded-md transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

<section className="w-full h-auto p-4">
  <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px]">
    <iframe
      id="map"
      className="absolute inset-0 w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.000000000004!2d-0.119543!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0x3333333333333333!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1633333333333!5m2!1sen!2suk"
      allowFullScreen={true}
      loading="lazy"
      title="Google Map"
    ></iframe>
  </div>
</section>


<footer className="bg-green-900 text-white py-10">
  <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Diligent Section */}
    <div className="text-center sm:text-left">
      <h3 className="text-xl font-bold mb-4">TEAM WASTE TRACKER</h3>
      <p className="text-sm leading-relaxed">
        The Waste Tracker team is dedicated to revolutionizing waste management by providing efficient tracking solutions. We are committed to improving waste collection, processing, and recycling efforts for a more sustainable future. Our team leverages technology to optimize waste management and reduce environmental impact, ensuring that waste is properly handled from start to finish.
      </p>
    </div>

    {/* Quick Links Section */}
    <div className="text-center sm:text-left">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            About
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Services
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Services Section */}
    <div className="text-center sm:text-left">
      <h3 className="text-xl font-bold mb-4">Services</h3>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Residential Waste Collection
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Commercial Waste Management
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Industrial Waste Disposal
          </a>
        </li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div className="text-center sm:text-left">
      <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
      <form>
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 mb-4 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-black py-2 px-4 rounded-md w-full font-bold hover:bg-yellow-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm">
    <p>&copy; 2024 Team Waste Trackers. All Rights Reserved.</p>
  </div>
</footer>



    </div>
  );
}
