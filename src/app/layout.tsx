import "./globals.css";
import Link from "next/link";
import React from "react";

// --- ROOT LAYOUT COMPONENT ---

/**
 * RootLayout Component.
 * This component wraps the entire application and defines the global structure,
 * including the HTML tags, head elements, navigation, and persistent UI elements.
 * It is a Server Component by default and does not run any client-side hooks.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Global Header/Navigation Bar */}
        <header className="bg-blue-600 p-4 text-white shadow-md">
          <nav className="container mx-auto flex justify-between">
            {/* Main Link to the root page */}
            <Link href="/" className="text-2xl font-bold">
              SocialApp
            </Link>
            {/* Navigation links */}
            <div className="space-x-4">
              <Link href="/posts" className="hover:text-blue-200 transition">
                Posts
              </Link>
              <Link href="/profile" className="hover:text-blue-200 transition">
                My profile
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="min-h-[calc(100vh-64px)] p-4">{children}</main>
      </body>
    </html>
  );
}
