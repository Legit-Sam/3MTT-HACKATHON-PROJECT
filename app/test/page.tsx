// "use client";
// import { Button } from "@/components/ui/button";
// import { SignInButton, useUser } from "@clerk/nextjs";
// import Link from "next/link";
// import React, { useState } from "react";

// const page = () => {
// const [menuOpen, setMenuOpen] = useState(false);
// const { user, isSignedIn } = useUser (); 

//   return (
//     <div>
//         <header className="bg-darkGreen text-white py-4 fixed top-0 left-0 right-0 z-20">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="logo">
//           <img src="/logo.png" alt="Logo" />
//         </div>

//         <nav className="hidden lg:flex space-x-4">
//           <a href="#" className="text-lg hover:underline">
//             Home
//           </a>
//           <a href="#" className="text-lg hover:underline">
//             About
//           </a>
//           <a href="#" className="text-lg hover:underline">
//             Services
//           </a>
//           <a href="#" className="text-lg hover:underline">
//             Contact
//           </a>
//         </nav>

//         {/* Mobile Toggle Button */}
//         <button
//           className="block lg:hidden p-2 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Sliding Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-green-800 text-white transition-transform duration-500 ease-in-out z-30 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } w-2/3 md:w-1/3 lg:hidden`}
//       >
//         <button
//           className="absolute top-4 right-4 text-white focus:outline-none"
//           onClick={() => setMenuOpen(false)}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             ></path>
//           </svg>
//         </button>
//         <nav className="flex flex-col items-center justify-center space-y-8 h-full">
//           <Link className="text-lg hover:underline" href="/">
         
//             Home
        
//           </Link>
//           <a href="#" className="text-lg hover:underline">
//             About
//           </a>
//           <a href="#" className="text-lg hover:underline">
//             Services
//           </a>
//           <a href="#" className="text-lg hover:underline">
//             Contact
//           </a>

//           <Link className="text-lg hover:underline" href="/">
//          {isSignedIn ? (
//           <Link href={"/dashboard"} className="text-lg hover:underline" >
//             Dashboard
//           </Link>
//          ): (
//           <Button>
//             <SignInButton />
//           </Button>
//          )}
     
//        </Link>
//         </nav>
//       </div>
//     </header>

//     <section className="relative">
//   <img
//     src="/first.jpg"
//     alt="Worker with garbage truck"
//     className="w-full h-screen object-cover"
//   />
//   <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
//     <h1 className="text-6x7 font-bold">Innovative Solutions for a Cleaner Planet</h1>
//     <p className="mt-6 text-lg max-w-2xl">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
//       turpis non magna.
//     </p>
//    {isSignedIn ? (
//  <button className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg">
//  <Link href={"/dashboard"} className="text-lg" >
//            Make a Request
//           </Link>
// </button>
//    ): (
    
// <Button className="mt-5 w-[160px] h-[50px]">
// <SignInButton />

// </Button>
//    )}
     
   
  
//   </div>
// </section>




//               <section className="bg-green-800 text-white py-8">
//                         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center p-4">
//                             <div>
//                                 <i className="fas fa-recycle text-4xl mb-2"></i>
//                                 <h3 className="text-xl font-bold">Reliable Collection</h3>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis non magna.</p>
//                             </div>
//                             <div>
//                                 <i className="fas fa-recycle text-4xl mb-2"></i>
//                                 <h3 className="text-xl font-bold">Extensive Recycling</h3>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis non magna.</p>
//                             </div>
//                             <div>
//                                 <i className="fas fa-recycle text-4xl mb-2"></i>
//                                 <h3 className="text-xl font-bold">Safe Disposal</h3>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis non magna.</p>
//                             </div>
//                         </div>
//                     </section>

//                  {/* Section 1: Vision for Cleaner Planet */}
//       <section className="bg-white py-16">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left: Image and Quote */}
//           <div className="relative">
//             <img
//               src="/second.jpg"
//               alt="Worker collecting trash"
//               className="rounded-lg shadow-md w-full"
//             />
//             <div className="bg-yellow-500 text-black absolute top-0 left-0 px-6 py-3 font-bold text-lg">
//               24+ <br />
//               <span className="text-sm font-normal">Years Experience</span>
//             </div>
//             <blockquote className="bg-green-900 text-white p-6 mt-6 rounded-lg shadow-md">
//               <p>
//                 "Pellentesque sit amet lectus consequat molestie. Nulla at nisl
//                 aliquet."
//               </p>
//               <cite className="block mt-4 font-bold">- Team Wast Tracker</cite>
//             </blockquote>
//           </div>

//           {/* Right: Vision Content */}
//           <div>
//             <h3 className="text-lg text-yellow-500 font-medium">
//               About Diligent
//             </h3>
//             <h2 className="text-3xl font-bold mt-2 mb-4">
//               Our Vision for Cleaner Planet
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//               faucibus cursus magna, eget posuere ligula suscipit ut. Vestibulum
//               in felis bibendum, fermentum erat vel, aliquam leo.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <span className="bg-yellow-500 text-white p-3 rounded-full">
//                   ✓
//                 </span>
//                 <div className="ml-4">
//                   <h4 className="font-bold">Our Vision</h4>
//                   <p className="text-gray-600">
//                     We bring the right people together to challenge established
//                     thinking and drive transformation in 2020.
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <span className="bg-yellow-500 text-white p-3 rounded-full">
//                   ✓
//                 </span>
//                 <div className="ml-4">
//                   <h4 className="font-bold">Our Mission</h4>
//                   <p className="text-gray-600">
//                     We bring the right people together to challenge established
//                     thinking and drive transformation in 2020.
//                   </p>
//                 </div>
//               </li>
//             </ul>
//             <button className="bg-yellow-500 text-black px-6 py-3 mt-6 rounded-lg font-bold hover:bg-yellow-600 transition">
//               Read More
//             </button>
//           </div>
//         </div>
//       </section>
//       <section className="bg-green-900 text-white py-12">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           <div>
//             <span className="text-yellow-500 text-4xl font-bold">24+</span>
//             <p className="mt-2">Years Experience</p>
//           </div>
//           <div>
//             <span className="text-yellow-500 text-4xl font-bold">9.2k</span>
//             <p className="mt-2">Happy Customers</p>
//           </div>
//           <div>
//             <span className="text-yellow-500 text-4xl font-bold">520</span>
//             <p className="mt-2">Project Done</p>
//           </div>
//           <div>
//             <span className="text-yellow-500 text-4xl font-bold">225</span>
//             <p className="mt-2">Collection Vehicles</p>
//           </div>
//         </div>
//       </section>

//                     <section className="bg-gray-100 py-16">
//                         <div className="container mx-auto text-center">
//                             <h2 className="text-3xl font-bold mb-8">Efficient Solutions for a Greener Tomorrow</h2>
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                                 <div className="bg-white p-4 shadow">
//                                     <img src="/waste.jpg" alt="Residential Waste Collection" className="mb-4"/>
//                                     <h3 className="text-xl font-bold mb-2">Residential Waste Collection</h3>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis non magna.</p>
//                                 </div>
//                                 <div className="bg-white p-4 shadow">
//                                     <img src="/cath.jpg" alt="Commercial Waste Management" className="mb-4"/>
//                                     <h3 className="text-xl font-bold mb-2">Commercial Waste Management</h3>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis non magna.</p>
//                                 </div>
//                                 <div className="bg-white p-4 shadow">
//                                     <img src="/first.jpg" alt="Industrial Waste Disposal" className="mb-4"/>
//                                     <h3 className="text-xl font-bold mb-2">Industrial Waste Disposal</h3>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis non magna.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h3 className="text-yellow-500 font-medium text-lg">Management</h3>
//         <h1 className="text-3xl font-bold mt-2">
//           Smart Solutions for Waste and Recycling
//         </h1>
//         <p className="text-gray-600 mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
//           tristique congue orci ac hendrerit. Vivamus eu varius metus ut dui
//           justo.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {/* Operations Management */}
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-green-700 flex items-center justify-center rounded-full text-white">
//               {/* Replace with an actual SVG icon */}
//               <span className="text-xl font-bold">OM</span>
//             </div>
//             <h2 className="text-lg font-bold mt-4">Operations Management</h2>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               vehicula tellus nec ullamcorper mattis.
//             </p>
//           </div>
//           {/* Customer Service */}
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-green-700 flex items-center justify-center rounded-full text-white">
//               {/* Replace with an actual SVG icon */}
//               <span className="text-xl font-bold">CS</span>
//             </div>
//             <h2 className="text-lg font-bold mt-4">Customer Service</h2>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               vehicula tellus nec ullamcorper mattis.
//             </p>
//           </div>
//           {/* Environmental Compliance */}
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-green-700 flex items-center justify-center rounded-full text-white">
//               {/* Replace with an actual SVG icon */}
//               <span className="text-xl font-bold">EC</span>
//             </div>
//             <h2 className="text-lg font-bold mt-4">Environmental Compliance</h2>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               vehicula tellus nec ullamcorper mattis.
//             </p>
//           </div>
//           {/* Sustainability and Innovation */}
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-green-700 flex items-center justify-center rounded-full text-white">
//               {/* Replace with an actual SVG icon */}
//               <span className="text-xl font-bold">SI</span>
//             </div>
//             <h2 className="text-lg font-bold mt-4">Sustainability and Innovation</h2>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               vehicula tellus nec ullamcorper mattis.
//             </p>
//           </div>
//         </div>
//         {/* Image */}
//         {/* <div className="mt-12 flex justify-center">
//           <img
//             src="/path-to-your-image.jpg"
//             alt="Recycling"
//             className="w-full max-w-lg"
//           />
//         </div> */}
//       </div>
//     </section>
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Left: Request Your Quote Form */}
//         <div className="bg-green-900 text-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-6">Request Your Quote</h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Freight Type"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Street Address Line 2"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Postal Code"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="State / Province / Region"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Country"
//                 className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//               />
//             </div>
//             <textarea
//               placeholder="Write Your Question or Suggestion..."
//               className="w-full p-3 bg-green-800 text-white border border-green-700 rounded-lg focus:outline-none"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
//             >
//               Submit Your Request
//             </button>
//           </form>
//         </div>

//         {/* Right: FAQ Section */}
//         <div>
//           <h3 className="text-lg text-gray-500 font-medium">Have a Question?</h3>
//           <h2 className="text-3xl font-bold mt-2 mb-4">
//             Any Questions? Don't Hesitate to Ask Us
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//             faucibus cursus magna, eget posuere ligula suscipit ut.
//           </p>
//           <div className="space-y-4">
//             {/* FAQ Item */}
//             <div>
//               <h4 className="font-bold text-yellow-500 mb-1">
//                 What types of waste do you collect?
//               </h4>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//                 non lacus id eros rutrum vehicula.
//               </p>
//             </div>
//             <div className="border-t border-gray-300"></div>
//             {/* FAQ Item */}
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-gray-800">
//                 How do I schedule a waste pickup?
//               </span>
//               <span className="text-yellow-500 font-bold text-xl">→</span>
//             </div>
//             <div className="border-t border-gray-300"></div>
//             {/* FAQ Item */}
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-gray-800">
//                 What items can be recycled?
//               </span>
//               <span className="text-yellow-500 font-bold text-xl">→</span>
//             </div>
//             <div className="border-t border-gray-300"></div>
//             {/* FAQ Item */}
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-gray-800">
//                 How should I prepare my recyclables?
//               </span>
//               <span className="text-yellow-500 font-bold text-xl">→</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="bg-green-800 text-white py-16">
//   <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//     {/* Text Section */}
//     <div className="text-center md:text-left">
//       <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
//         Take the First Step Towards Sustainability
//       </h2>
//       <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-md font-semibold transition">
//         Get Started
//       </button>
//     </div>

//     {/* Image Section */}
//     <div className="flex justify-center">
//       <img
//         src="/man.png"
//         alt="Person promoting sustainability"
//         className="w-3/4 md:w-full max-w-md md:max-w-none"
//       />
//     </div>
//   </div>
// </section>


//                     <footer className="bg-green-900 text-white py-10">
//   <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     {/* Diligent Section */}
//     <div>
//       <h3 className="text-xl font-bold mb-4">Diligent</h3>
//       <p className="text-sm leading-relaxed">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
//         turpis non magna.
//       </p>
//     </div>

//     {/* Quick Links Section */}
//     <div>
//       <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//       <ul>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             Home
//           </a>
//         </li>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             About
//           </a>
//         </li>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             Services
//           </a>
//         </li>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>

//     {/* Services Section */}
//     <div>
//       <h3 className="text-xl font-bold mb-4">Services</h3>
//       <ul>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             Residential Waste Collection
//           </a>
//         </li>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             Commercial Waste Management
//           </a>
//         </li>
//         <li className="mb-2">
//           <a href="#" className="hover:underline">
//             Industrial Waste Disposal
//           </a>
//         </li>
//       </ul>
//     </div>

//     {/* Newsletter Section */}
//     <div>
//       <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
//       <form>
//         <input
//           type="email"
//           placeholder="Your email"
//           className="w-full p-3 mb-4 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />
//         <button
//           type="submit"
//           className="bg-yellow-500 text-black py-2 px-4 rounded-md w-full font-bold hover:bg-yellow-600 transition"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   </div>

//   {/* Bottom Section */}
//   <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm">
//     <p>&copy; 2023 Diligent. All Rights Reserved.</p>
//   </div>
// </footer>

//                 </div>
//             );
//         };


// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

