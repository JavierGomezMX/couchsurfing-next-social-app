import { Post } from "@/types";
import Link from "next/link";

// --- DATA FETCHING FUNCTION (Server-side) ---

/**
 * Fetches the list of all posts from the mock API.
 * This function utilizes Next.js's extended native fetch capability.
 * Since this is a Server Component function, it runs exclusively on the server.
 * @returns A Promise resolving to an array of Post objects.
 */
async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // The data will be fetched once at build time or on the first request,
    // and then revalidated (refreshed) every 60 seconds.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // If the network response is not 200 (OK), an Error is thrown.
    // This error will be automatically caught by the parent error.tsx boundary
    // (src/app/posts/error.tsx), displaying the fallback UI.
    throw new Error("Error fetching posts.");
  }
  return res.json();
}

/**
 * PostsPage Component.
 * This async Server Component fetches all posts and displays them in a list format.
 * While the data is pending, Next.js automatically renders the loading.tsx component.
 */
export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{`Friends' Post List`}</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-md hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-gray-700 line-clamp-2">{post.body}</p>
            <p className="text-sm text-gray-500 mt-1">User ID: {post.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
