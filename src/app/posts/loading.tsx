/**
 * PostsLoading Component.
 * This component is automatically rendered by Next.js (App Router) when the data
 * fetching for the sibling `page.tsx` is pending (Suspense boundary).
 * It provides a Skeleton UI to indicate that content is loading.
 * It is a Server Component by default, ensuring fast rendering of the loading state.
 */
export default function PostsLoading() {
  return (
    <div className="container mx-auto p-4">
      {/* Loading Title - Uses animate-pulse for visual feedback */}
      <h1 className="text-3xl font-bold mb-6 text-gray-400 animate-pulse">
        Loading Posts...
      </h1>

      <div className="space-y-4">
        {/* Skeleton UI Simulation for multiple posts */}

        <div className="p-4 border rounded-lg shadow-md bg-gray-100 animate-pulse">
          <div className="h-6 bg-gray-300 w-3/4 mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 w-full mb-1 rounded"></div>
          <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-gray-100 animate-pulse">
          <div className="h-6 bg-gray-300 w-2/4 mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 w-full mb-1 rounded"></div>
          <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-gray-100 animate-pulse">
          <div className="h-6 bg-gray-300 w-full mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
        </div>
      </div>
    </div>
  );
}
