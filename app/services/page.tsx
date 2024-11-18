//@ts-nocheck
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useClerk, useUser , SignIn, SignInButton } from '@clerk/nextjs'; // Import Clerk hooks
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Package, Users, Shield, RefreshCcw } from 'lucide-react';
import { metadata } from "../metadata";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
const { user, isSignedIn } = useUser (); 
useEffect(() => {
  document.title = metadata.title; // Set the document title
}, []);
const [isAnimated, setIsAnimated] = useState(false);
  


  return (
    <div
    className={`section ${isAnimated ? 'animate' : ''}`}
    style={{ width: '100%' }}
  >
        <header className="bg-darkGreen text-white py-4 fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
      <div className="logo ml-3 md:ml-2 sm:ml-2 xl:m-0 lg:m-0 ">
      <Link href="/">
 <img 
    src="/logo.png" 
    alt="Logo" 
    className="w-32  md:w-40 lg:w-48" 
  />
 </Link>
</div>


        <nav className="hidden lg:flex space-x-4">
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
          <Link href="/dashboard" className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105" >
            Dashboard
          </Link>
         ): (
          
            <SignInButton  className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"  />
         
         )}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-green-800 text-white transition-transform duration-500 ease-in-out z-30 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-2/3 md:w-1/3 lg:hidden`}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav className="flex flex-col items-center justify-center space-y-8 h-full">
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
      <Link href="/dashboard" className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105" >
        Dashboard
      </Link>
     ): (
      
        <SignInButton className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"  />
     
     )}
        </nav>
      </div>
    </header>

    <section className="relative">
    <img
  src="/peps.jpg"
  alt="Worker with garbage truck"
  className="w-full h-[600px] lg:h-screen sm:h-[400px] md:h-[500px] xl:h-screen object-cover" />
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">Services</h1>
  </div>
</section>

    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-8"
          data-aos="fade-up"
        >
          Efficient Solutions for a Greener Tomorrow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-white p-4 shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/waste.jpg"
              alt="Residential Waste Collection"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Residential Waste Collection</h3>
            <p>
              Providing reliable and eco-friendly collection services for households to promote clean and healthy communities.
            </p>
          </div>
          <div
            className="bg-white p-4 shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/cath.jpg"
              alt="Commercial Waste Management"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Commercial Waste Management</h3>
            <p>
              Tailored waste solutions for businesses to ensure safe and sustainable handling of commercial waste.
            </p>
          </div>
          <div
            className="bg-white p-4 shadow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/first.jpg"
              alt="Industrial Waste Disposal"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Industrial Waste Disposal</h3>
            <p>
              Safe and efficient disposal services designed for large-scale industrial operations, minimizing environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>

   

   

    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Request Your Quote Form */}
        <div className="bg-green-900 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Request Your Quote</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Freight Type"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Street Address Line 2"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="State / Province / Region"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Write Your Question or Suggestion..."
              className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
            >
              Submit Your Request
            </button>
          </form>
        </div>

        {/* Right: FAQ Section */}
        <div>
  <h3 className="text-lg text-gray-500 font-medium">Have a Question?</h3>
  <h2 className="text-3xl font-bold mt-2 mb-4">
    Any Questions? Don't Hesitate to Ask Us
  </h2>
  <p className="text-gray-600 mb-6">
    If you have questions about our waste and recycling services, we are here to help. Reach out to us and we'll provide clear answers and guidance.
  </p>
  <div className="space-y-4">
    {/* FAQ Item */}
    <div>
      <h4 className="font-bold text-yellow-500 mb-1">
        What types of waste do you collect?
      </h4>
      <p className="text-gray-600">
        We collect residential, commercial, and industrial waste, including recyclables, non-recyclables, and organic waste.
      </p>
    </div>
    <div className="border-t border-gray-300"></div>
    {/* FAQ Item */}
    <div className="flex justify-between items-center">
      <span className="font-bold text-gray-800">
        How do I schedule a waste pickup?
      </span>
      <span className="text-yellow-500 font-bold text-xl">→</span>
    </div>
    <div className="border-t border-gray-300"></div>
    {/* FAQ Item */}
    <div className="flex justify-between items-center">
      <span className="font-bold text-gray-800">
        What items can be recycled?
      </span>
      <span className="text-yellow-500 font-bold text-xl">→</span>
    </div>
    <div className="border-t border-gray-300"></div>
    {/* FAQ Item */}
    <div className="flex justify-between items-center">
      <span className="font-bold text-gray-800">
        How should I prepare my recyclables?
      </span>
      <span className="text-yellow-500 font-bold text-xl">→</span>
    </div>
  </div>
</div>



      </div>
    </section>

   



    <section className="bg-green-800 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Take the First Step Towards Sustainability
          </h2>
       {isSignedIn ? (
  
         <Link href="/dashboard" className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-md font-semibold transition"> Proceed to Dashboard</Link>
        
        
       ):
       
       <SignInButton className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-md font-semibold transition" />
    
       }
        </div>

      
        <div
          className="flex justify-center"
          data-aos="zoom-in" // Pop-out effect
        >
          <img
            src="/man.png"
            alt="Person promoting sustainability"
            className="w-3/4 md:w-full max-w-md md:max-w-none animate-bounce-slow"
          />
        </div>
      </div>

      {/* Bouncing Animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
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
        <Link href="/" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
      
      Home
   
  </Link>
        </li>
        <li className="mb-2">
        <Link href="/about" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
              About
   
  </Link>
        </li>
        <li className="mb-2">
        <Link href="/services" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
    Services
  </Link>
        </li>
        <li className="mb-2">
        <Link href="/contact" passHref className="text-lg text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
    Contact
  </Link>
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