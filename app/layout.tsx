"use client";

import { useState, useEffect } from "react";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { getAvailableRewards, getUserByEmail } from '@/utils/db/actions';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from '@clerk/nextjs';

// Initialize the Inter font with required weights
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap', // Ensures better loading behavior
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    const fetchTotalEarnings = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
          const user = await getUserByEmail(userEmail);
          console.log('user from layout', user);

          if (user) {
            const availableRewards = await getAvailableRewards(user.id) as any;
            console.log('availableRewards from layout', availableRewards);
            setTotalEarnings(availableRewards);
          }
        }
      } catch (error) {
        console.error('Error fetching total earnings:', error);
      }
    };

    fetchTotalEarnings();
  }, []);

  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body>
          {/* Header, Sidebar, and the children components */}
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
