import Link from "next/link";

async function getTodoData(todoId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  return res.json();
}

export default async function TodoDetailsPage({ params }: { params: { todoId: string } }) {
  const todo = await getTodoData(params.todoId);

  return (
    <main className="p-8 bg-gradient-to-r from-green-300 via-yellow-300 to-orange-300 min-h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-teal-800">
        {todo.title}
      </h1>
  
      <p className="mb-4 text-gray-700">
        <strong className="text-blue-700">User ID:</strong> {todo.userId}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-purple-700">ID:</strong> {todo.id}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-red-700">Completed:</strong> {String(todo.completed)}
      </p>
  
      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <Link href="/todo">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded shadow-lg hover:bg-indigo-600 transition duration-300">
            Back to Todos
          </button>
        </Link>
      </div>
    </div>
  </main>  
  );
}
