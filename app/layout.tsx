"use client";

import { useState, useEffect } from "react";
import { Inter, Poppins } from 'next/font/google'; // Import Poppins
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { getAvailableRewards, getUserByEmail } from "@/utils/db/actions";
import { ClerkProvider } from "@clerk/nextjs";

// Configure the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    const fetchTotalEarnings = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
          const user = await getUserByEmail(userEmail);
          console.log("user from layout", user);

          if (user) {
            const availableRewards = (await getAvailableRewards(user.id)) as any;
            console.log("availableRewards from layout", availableRewards);
            setTotalEarnings(availableRewards);
          }
        }
      } catch (error) {
        console.error("Error fetching total earnings:", error);
      }
    };

    fetchTotalEarnings();
  }, []);

  return (
    <ClerkProvider>
      <html lang="en" className={poppins.variable}> {/* Apply the Poppins font to the HTML class */}
        <body className="font-sans"> {/* This can stay if you want a fallback or to apply general styles */}
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
