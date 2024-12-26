import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-300">
      <div className="p-10">
        <header className="text-center mb-16">
          {/* Title Section */}
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800 drop-shadow-lg">
            API Fetching, Dynamic Routing, and Rendering Practice <br /> Using JSON Placeholder
          </h1>
          {/* Navigation Links */}
          <nav className="flex justify-center mt-16 space-x-8">
            <Link href="/album">
              <h2 className="text-xl font-medium text-gray-900 bg-white px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-200">
                Albums
              </h2>
            </Link>
            <Link href="/post">
              <h2 className="text-xl font-medium text-gray-900 bg-white px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-200">
                Posts
              </h2>
            </Link>
            <Link href="/comment">
              <h2 className="text-xl font-medium text-gray-900 bg-white px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-200">
                Comments
              </h2>
            </Link>
            <Link href="/todo">
              <h2 className="text-xl font-medium text-gray-900 bg-white px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-200">
                Todos
              </h2>
            </Link>
            <Link href="/photo">
              <h2 className="text-xl font-medium text-gray-900 bg-white px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-200">
                Photos
              </h2>
            </Link>
            <Link href="/user">
              <h2 className="text-xl font-medium text-gray-900 bg-white px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-200">
                Users
              </h2>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
