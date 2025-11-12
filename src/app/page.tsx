import { redirect } from "next/navigation";

// --- MAIN SERVER COMPONENT ---

/**
 * HomePage Component (Root Route: '/').
 * This is a default Server Component. Its primary function is to redirect the user
 * immediately to the main content feed.
 */
export default function HomePage() {
  // Redirect the user immediately to the posts page ('/posts').
  // This is the most efficient method in the App Router, as it happens
  // on the server before the HTML payload is sent to the browser.
  redirect("/posts");

  // Next.js should not reach this return statement because 'redirect'
  // throws an internal error that stops rendering.
  // However, it's included here for completeness (to satisfy TypeScript/React component return type).
  return (
    <div className="flex items-center justify-center h-full">
      <p>Redirecting...</p>
    </div>
  );
}
