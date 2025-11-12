// src/app/posts/[postId]/loading.tsx

export default function PostDetailLoading() {
  return (
    <div className="container mx-auto p-4 max-w-2xl animate-pulse">
      <div className="h-10 bg-gray-300 w-3/4 mb-6 rounded"></div>

      <div className="space-y-3 mb-8">
        <div className="h-5 bg-gray-200 w-full rounded"></div>
        <div className="h-5 bg-gray-200 w-11/12 rounded"></div>
        <div className="h-5 bg-gray-200 w-full rounded"></div>
        <div className="h-5 bg-gray-200 w-5/6 rounded"></div>
      </div>

      <div className="p-4 border-t mt-6 bg-gray-100 rounded-lg">
        <div className="h-6 bg-gray-300 w-1/3 mb-3 rounded"></div>
        <div className="h-4 bg-gray-200 w-2/3 mb-2 rounded"></div>
        <div className="h-4 bg-gray-200 w-1/2 mb-2 rounded"></div>
      </div>
    </div>
  );
}
