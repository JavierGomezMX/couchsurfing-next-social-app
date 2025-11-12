"use client"; // The error.tsx component is a Client Component.

import { useEffect } from "react";

/**
 * Error Component (Error Boundary for /posts route).
 * This component automatically receives the error that occurred during data fetching
 * or rendering in the nested Server Components (e.g., posts/page.tsx).
 * * Props received from Next.js:
 * 1. error: The JavaScript Error object containing the failure details.
 * 2. reset: A function to attempt to re-render the segment (retry data loading).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logging simulation
    console.error("Error captured in the /posts route boundary:", error);
  }, [error]);

  return (
    <div className="container mx-auto p-8 text-center bg-red-50 border-2 border-red-300 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-red-700 mb-4">
        Oops! Something went wrong.
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        {`We are sorry, we couldn't load the publications. This might be a
        temporary network issue.`}
      </p>

      <p className="text-sm text-red-500 mb-6">
        Error Details: {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Retry Loading
      </button>
    </div>
  );
}
