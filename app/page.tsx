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
import { metadata } from "./metadata";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
const { user, isSignedIn } = useUser (); 

const [ref, inView] = useInView({
  triggerOnce: true, // Animation triggers only once when in view
  threshold: 0.5, // Adjust based on when you want the animation to start
});

useEffect(() => {
  AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once
  });
}, []);

useEffect(() => {
  document.title = metadata.title; // Set the document title
}, []);

const cardVariants = {
  offscreen: {
    opacity: 0,
    rotate: -360,
  },
  onscreen: (i) => ({
    opacity: 1,
    rotate: 0,
    transition: {
      delay: i * 0.2, // Stagger effect for each card
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 1,
    },
  }),
};

// const sectionVariants = {
//   hidden: { opacity: 0, x: -100 }, // Hidden off-screen to the left
//   visible: {
//     opacity: 1,
//     x: 0, // Comes back to its position
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//       duration: 1,
//     },
//   },
// };


const blogs = [
  {
    title: "Eco-Friendly Practices for a Greener...",
    date: "March 25, 2024",
    category: "Team Waste Tracker",
    image: "/1.jpg", // Replace with actual image paths
    description:
      "Discover practical tips for reducing waste, conserving resources, and adopting eco-friendly habits to create a more sustainable environment.",
  },
  {
    title: "Innovative Waste Management Solutions",
    date: "March 25, 2024",
    category: "Team Waste Tracker",
    image: "/use.jpg",
    description:
      "Explore groundbreaking technologies and strategies revolutionizing how we collect, process, and recycle waste for a cleaner future.",
  },
  {
    title: "Top Tips for Effective Recycling...",
    date: "March 25, 2024",
    category: "Team Waste Tracker",
    image: "/coll.jpg",
    description:
      "Learn how to recycle efficiently, identify recyclable materials, and reduce contamination to make your efforts truly impactful.",
  },
];
const [isAnimated, setIsAnimated] = useState(false);
  
useEffect(() => {
  // Set to true to trigger animation after component is mounted
  const timer = setTimeout(() => setIsAnimated(true), 100); // Delay to ensure sections are at full width
  return () => clearTimeout(timer);
}, []);


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
  src="/first.jpg"
  alt="Worker with garbage truck"
  className="w-full h-[600px] lg:h-screen sm:h-[400px] md:h-[500px] xl:h-screen object-cover" />
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">Innovative Solutions for a Cleaner Planet</h1>
<p className="mt-6 text-lg max-w-2xl">
  Join us in creating a sustainable future through innovative practices and technologies. Together, we can make a lasting impact on our environment and communities.
</p>

   {isSignedIn ? (
 <button className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg">
 <Link href="/dashboard" className="text-lg" >
           Make a Request
          </Link>
</button>
   ): (
    
<Button className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg uppercase">
  <SignInButton className="capitalize" />
</Button>

   )}
     
   
  
  </div>
</section>




              <section className="bg-green-800 text-white py-8">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center p-4">
                        <div>
    <i className="fas fa-recycle text-4xl mb-2"></i>
    <h3 className="text-xl font-bold">Reliable Collection</h3>
    <p>We ensure timely and dependable waste collection services, designed to keep your environment clean and sustainable.</p>
</div>
<div>
    <i className="fas fa-recycle text-4xl mb-2"></i>
    <h3 className="text-xl font-bold">Extensive Recycling</h3>
    <p>Our recycling solutions help transform waste into reusable materials, reducing landfill impact and promoting sustainability.</p>
</div>
<div>
    <i className="fas fa-recycle text-4xl mb-2"></i>
    <h3 className="text-xl font-bold">Safe Disposal</h3>
    <p>We prioritize eco-friendly disposal methods to handle hazardous and non-hazardous waste with utmost care and compliance.</p>
</div>

                        </div>
                    </section>

                 {/* Section 1: Vision for Cleaner Planet */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Image and Quote */}
          <div className="relative">
            <img
              src="/second.jpg"
              alt="Worker collecting trash"
              className="rounded-lg shadow-md w-full"
            />
            <div className="bg-yellow-500 text-black absolute top-0 left-0 px-6 py-3 font-bold text-lg">
              12+ <br />
              <span className="text-sm font-normal">Years Experience</span>
            </div>
            <blockquote className="bg-green-900 text-white p-6 mt-6 rounded-lg shadow-md">
           <p>
                "Our mission is to empower communities to embrace sustainable practices, transforming waste into opportunities for a cleaner future."
  </p>
  <cite className="block mt-4 font-bold">- Team Waste Tracker</cite>
</blockquote>

          </div>

          {/* Right: Vision Content */}
          <div>
  <h3 className="text-lg text-yellow-500 font-medium">About Diligent</h3>
  <h2 className="text-3xl font-bold mt-2 mb-4">
    Building a Sustainable Future for Our Planet
  </h2>
  <p className="text-gray-600 mb-6">
    At Diligent, we are committed to redefining waste management by combining innovative solutions with community engagement to create a cleaner, greener planet for generations to come.
  </p>
  <ul className="space-y-4">
    <li className="flex items-start">
      <span className="bg-yellow-500 text-white p-3 rounded-full">✓</span>
      <div className="ml-4">
        <h4 className="font-bold">Our Vision</h4>
        <p className="text-gray-600">
          To lead the way in sustainable practices, turning waste into valuable resources and fostering a culture of environmental responsibility.
        </p>
      </div>
    </li>
    <li className="flex items-start">
      <span className="bg-yellow-500 text-white p-3 rounded-full">✓</span>
      <div className="ml-4">
        <h4 className="font-bold">Our Mission</h4>
        <p className="text-gray-600">
          To provide innovative waste management solutions that reduce environmental impact while empowering communities to embrace sustainability.
        </p>
      </div>
    </li>
  </ul>
  <button className="bg-yellow-500 text-black px-6 py-3 mt-6 rounded-lg font-bold hover:bg-yellow-600 transition">
    Read More
  </button>
</div>

        </div>
      </section>
      <section className="bg-green-900 text-white py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="text-yellow-500 text-4xl font-bold">
            {inView && <CountUp start={0} end={12} duration={2} />}+
          </span>
          <p className="mt-2">Years Experience</p>
        </div>
        <div>
          <span className="text-yellow-500 text-4xl font-bold">
            {inView && <CountUp start={0} end={120000} duration={2.5} separator="," />}+
          </span>
          <p className="mt-2">Happy Customers</p>
        </div>
        <div>
          <span className="text-yellow-500 text-4xl font-bold">
            {inView && <CountUp start={0} end={520} duration={2.5} />}
          </span>
          <p className="mt-2">Projects Done</p>
        </div>
        <div>
          <span className="text-yellow-500 text-4xl font-bold">
            {inView && <CountUp start={0} end={225} duration={2} />}
          </span>
          <p className="mt-2">Collection Vehicles</p>
        </div>
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

   

    <section className="bg-white py-16">
    <div className="max-w-screen-xl mx-auto px-6 text-center">
      <h3 className="text-yellow-500 font-medium text-lg">Management</h3>
      <h1 className="text-3xl font-bold mt-2">
        Smart Solutions for Waste and Recycling
      </h1>
      <p className="text-gray-600 mt-4">
        Our approach to waste and recycling management ensures a sustainable
        future through smart solutions that streamline processes, promote
        recycling, and minimize environmental impact. We focus on efficiency
        and long-term ecological benefits for communities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          {
            icon: <Package className="text-xl font-bold" />,
            title: "Operations Management",
            text: "We optimize waste collection, sorting, and processing with advanced technologies to improve efficiency and reduce operational costs.",
          },
          {
            icon: <Users className="text-xl font-bold" />,
            title: "Customer Service",
            text: "Our customer service team is dedicated to providing excellent support, ensuring that all inquiries and requests are addressed promptly and professionally.",
          },
          {
            icon: <Shield className="text-xl font-bold" />,
            title: "Environmental Compliance",
            text: "We ensure strict adherence to environmental regulations, focusing on waste diversion and safe disposal methods that protect the environment.",
          },
          {
            icon: <RefreshCcw className="text-xl font-bold" />,
            title: "Sustainability and Innovation",
            text: "We drive innovation in waste management and recycling technologies, ensuring a sustainable approach to resource recovery and reuse.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg"
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <div className="w-16 h-16 bg-green-700 flex items-center justify-center rounded-full text-white">
              {card.icon}
            </div>
            <h2 className="text-lg font-bold mt-4">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.text}</p>
          </motion.div>
        ))}
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

    <section className="bg-gray-599 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
            Read Our Latest News & Blog
          </h2>
          <p className="text-gray-700">
            Stay updated with the latest innovations in waste management and
            sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
              data-aos={
                index === 0
                  ? "fade-up" // Slide up for the first card
                  : index === 1
                  ? "fade-left" // Slide left for the second card
                  : "fade-right" // Slide right for the third card
              }
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-green-700 mb-2">
                  {blog.category} • {blog.date}
                </p>
                <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-md font-semibold transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
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