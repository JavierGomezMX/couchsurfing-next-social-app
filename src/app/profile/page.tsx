import { User } from "@/types";

// --- DATA FETCHING FUNCTION (Server-side) ---

/**
 * Fetches the mock profile data for the logged-in user (simulated as ID 1).
 * This function runs entirely on the server.
 * @returns A Promise resolving to the User object.
 */
async function getUserProfile(): Promise<User> {
  // Mocking the logged-in user as ID 1 from the JSONPlaceholder API.
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    // Next.js caching configuration: Revalidate (refresh) the data every hour (60 * 60 seconds).
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    throw new Error("Error fetching user profile data.");
  }
  return res.json();
}

/**
 * UserProfilePage Component.
 * This component is an async Server Component, which allows it to directly
 * await the data fetching function before rendering.
 */
export default async function UserProfilePage() {
  const user = await getUserProfile();

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">
              Basic Information
            </h2>
            <p className="text-lg">
              <strong>Full Name:</strong> {user.name}
            </p>
            <p className="text-lg">
              <strong>Username:</strong> @{user.username}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="text-lg">
              <strong>Website:</strong> {user.website}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">
              Additional Details
            </h2>

            <h3 className="text-xl font-medium mt-3 mb-1">Company</h3>
            <p>
              <strong>Name:</strong> {user.company.name}
            </p>

            <h3 className="text-xl font-medium mt-3 mb-1">Address</h3>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
