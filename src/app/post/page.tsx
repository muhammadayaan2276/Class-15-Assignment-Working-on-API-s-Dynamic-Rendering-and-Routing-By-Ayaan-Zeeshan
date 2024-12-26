import Link from "next/link";

export default async function Post() {
  const postsUrl = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsRes = await postsUrl.json();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
    <div className="p-10">
      {/* Header Section */}
      <header className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 drop-shadow-lg">
          API Fetching, Dynamic Routing, and Rendering Practice <br /> Using JSON Placeholder
        </h1>
        <nav className="flex justify-center mt-12 space-x-10">
          <Link href="/album">
            <h2 className="text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
              Albums
            </h2>
          </Link>
          <Link href="/post">
            <h2 className="text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
              Posts
            </h2>
          </Link>
          <Link href="/comment">
            <h2 className="text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
              Comments
            </h2>
          </Link>
          <Link href="/todo">
            <h2 className="text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
              Todos
            </h2>
          </Link>
          <Link href="/photo">
            <h2 className="text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
              Photos
            </h2>
          </Link>
          <Link href="/user">
            <h2 className="text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
              Users
            </h2>
          </Link>
        </nav>
      </header>

        {/* Main Content */}
        <main>
          <section className="text-center">
            <h2 className="text-3xl font-medium mb-6">All Posts</h2>
            <div className="space-y-1">
              {postsRes.map((post: any) => (
                <div key={post.id} className="flex ml-72 space-x-2">
                  {/* Post ID */}
                  <span className="text-lg font-bold">{post.id}.</span>
                  {/* Post Title */}
                  <Link href={`/posts/${post.id}`}>
                    <h3 className="text-lg  font-serif hover:text-white cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
