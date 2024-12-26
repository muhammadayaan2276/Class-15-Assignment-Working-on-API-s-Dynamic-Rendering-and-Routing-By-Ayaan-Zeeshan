import Link from "next/link";

export default async function Todo() {
  const todosUrl = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todosRes = await todosUrl.json();

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

        <main>
          <section className="text-center">
            <h2 className="text-3xl font-medium mb-6">All Todos</h2>
            <div className="space-y-1">
              {todosRes.map((todo: any) => (
                <div key={todo.id} className="flex ml-72 space-x-2">
                  <span className="text-lg font-bold">{todo.id}.</span>
                  <Link href={`/todos/${todo.id}`}>
                    <div className="text-lg font-serif hover:text-purple-600">{todo.title}</div>
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
