'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Recycle, Users, Coins, MapPin, Menu, X } from 'lucide-react'; // Import Menu and X icons
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { useClerk, useUser , SignIn, SignInButton } from '@clerk/nextjs'; // Import Clerk hooks

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

function AnimatedGlobe() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8 mt-10">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 rounded-full bg-green-400 opacity-40 animate-ping"></div>
      <div className="absolute inset-4 rounded-full bg-green-300 opacity-60 animate-spin"></div>
      <div className="absolute inset-6 rounded-full bg-green-200 opacity-80 animate-bounce"></div>
      <Leaf className="absolute inset-0 m-auto h-16 w-16 text-green-600 animate-pulse" />
    </div>
  );
}

export default function Home() {
  const { user, isSignedIn } = useUser (); // Clerk hook to check user status
  const [impactData, setImpactData] = useState({
    wasteCollected: 0,
    reportsSubmitted: 0,
    tokensEarned: 0,
    co2Offset: 0
  });
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    async function fetchImpactData() {
      // Fetch impact data from your database
      try {
        // Your data-fetching logic here
        setImpactData({
          wasteCollected: 100, // Example values
          reportsSubmitted: 50,
          tokensEarned: 200,
          co2Offset: 120
        });
      } catch (error) {
        console.error("Error fetching impact data:", error);
      }
    }

    fetchImpactData();
  }, []);

  return (
    <div className={`container mx-auto px-4 py-16 ${poppins.className}`}>
      
      {/* Navigation Bar */}
      <nav className="bg-green-600 text-white p-4 fixed left-0 right-0 top-0 z-10 w-full">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Waste Management</div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setMenuOpen(!menuOpen)} className="text-white bg-green-600 hover:bg-green-700">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/features">Features</Link>
            {isSignedIn ? (
              <Link href="/dashboard">Dashboard</Link>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'} z-20`}>
        <ul className="flex flex-col items-center p-4 space-y-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/features">Features</Link></li>
          {isSignedIn ? (
            <li><Link href="/dashboard">Dashboard</Link></li> // Show Dashboard if signed in
          ) : (
            <li>
              <SignInButton />
            </li> // Show Login if not signed in
          )}
        </ul>
 {/* Close Button */}
        <div className="flex justify-center mt-4 absolute top-0 right-2">
          <Button onClick={() => setMenuOpen(false)} className="text-black bg-white-600 hover:bg-gray-200">
            X
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-10">
        <AnimatedGlobe />
        <h1 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight">
          <span className="text-green-600">Waste Management</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Join our community in making waste management more efficient and rewarding!
        </p>
        {!isSignedIn ? (
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-10 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <Link href="/report">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-10 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
              Report Waste
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        )}
      </section>


      {/* Impact Section */}
      <section className="bg-white p-10 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <ImpactCard title="Waste Collected" value={`${impactData.wasteCollected} kg`} icon={Recycle} />
          <ImpactCard title="Reports Submitted" value={impactData.reportsSubmitted.toString()} icon={MapPin} />
          <ImpactCard title="Tokens Earned" value={impactData.tokensEarned.toString()} icon={Coins} />
          <ImpactCard title="CO2 Offset" value={`${impactData.co2Offset} kg`} icon={Leaf} />
        </div>
      </section>

      <section className='h-screen w-full flex flex-col items-center justify-center'>
    <h1 className='font-bold text-black text-6xl text-center p-10'>Our Vision</h1>
    <div className='cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-5'>
        <div className='card bg-green-200 p-6 rounded-lg shadow-lg'>
            <h2 className='font-semibold text-xl text-green-800 mb-2'>Sustainable Future</h2>
            <p className='text-gray-700'>Our vision is to create a sustainable future by promoting responsible waste management practices that protect our planet for generations to come.</p>
        </div>

        <div className='card bg-green-200 p-6 rounded-lg shadow-lg'>
            <h2 className='font-semibold text-xl text-green-800 mb-2'>Community Engagement</h2>
            <p className='text-gray-700'>We strive to engage communities in waste reduction efforts, fostering a culture of recycling and sustainability.</p>
        </div>

        <div className='card bg-green-200 p-6 rounded-lg shadow-lg'>
            <h2 className='font-semibold text-xl text-green-800 mb-2'>Innovative Solutions</h2>
            <p className='text-gray-700'>We envision innovative waste management solutions that not only minimize waste but also convert it into valuable resources.</p>
        </div>

        <div className='card bg-green-200 p-6 rounded-lg shadow-lg'>
            <h2 className='font-semibold text-xl text-green-800 mb-2'>Environmental Stewardship</h2>
            <p className='text-gray-700'>Our commitment to environmental stewardship drives us to implement practices that protect natural resources and reduce our carbon footprint.</p>
        </div>
    </div>
</section>
    </div>
  );


}



function ImpactCard({ title, value, icon: Icon }: { title: string; value: string | number; icon: React.ElementType }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-md">
      <Icon className="h-10 w-10 text-green-500 mb-4" />
      <p className="text-3xl font-bold mb-2 text-gray-800">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center">
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}