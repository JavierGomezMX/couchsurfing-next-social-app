import { Post, User } from "@/types";

// Function to fetch the post
async function getPost(postId: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (!res.ok) {
    throw new Error(
      "Error loading the post. The post was not found or there was a network failure."
    );
  }
  return res.json();
}

async function getAuthor(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Error loading the author's information.");
  }
  return res.json();
}

export default async function PostDetail({
  params,
}: {
  params: { postId: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const { postId } = resolvedParams;
  const post = await getPost(postId);
  const author = await getAuthor(post.userId);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-6 leading-relaxed">{post.body}</p>

      <div className="p-4 border-t mt-6 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          Author Information
        </h2>
        <p className="text-gray-900">
          <strong>Name:</strong> {author.name} (@{author.username})
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {author.email}
        </p>
        <p className="text-gray-600">
          <strong>Company:</strong> {author.company.name}
        </p>
      </div>
    </div>
  );
}
