import Link from "next/link";

export default async function User() {
  const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await usersResponse.json();
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
            <h2 className="text-3xl font-medium mb-6">Users Data</h2>
            <div className="space-y-1">
              {users.map((user: any) => (
                <div
                  key={user.id}
                  className="text-left max-w-3xl mx-auto space-y-1 p-6  hover:text-yellow-400"
                >
                  {/* User ID and Name */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">{user.id}.</span>
                    <h2 className="text-[23px] font-bold">{user.name}</h2>
                  </div>
                  {/* User Details */}
                  <Link href={`/users/${user.id}`}>
                    <div>
                      <p className="mb-2">
                        <span className="font-semibold">Username:</span> {user.username}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">Email:</span> {user.email}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">Phone:</span> {user.phone}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">City:</span> {user.address.city}
                      </p>
                    </div>
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
