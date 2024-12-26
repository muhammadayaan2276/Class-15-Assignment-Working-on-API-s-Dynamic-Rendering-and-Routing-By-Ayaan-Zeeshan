import Link from "next/link";

async function getPostData(postId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return res.json();
}

export default async function PostDetailsPage({ params }: { params: { postId: string } }) {
  const post = await getPostData(params.postId);

  return (
    <main className="p-8 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 min-h-screen">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">
      {post.title}
    </h1>
    <p className="mb-4 text-gray-700">
      <strong className="text-blue-700">ID:</strong> {post.id}
    </p>
    <p className="mb-4 text-gray-700">
      <strong className="text-green-700">User ID:</strong> {post.userId}
    </p>
    <p className="mb-6 text-gray-700">
      <strong className="text-pink-700">Body:</strong> {post.body}
    </p>
    {/* Back Button */}
    <div className="flex justify-center">
      <Link href="/post">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-500 transition duration-300">
          Back to Posts
        </button>
      </Link>
    </div>
  </div>
</main>

  ); 
}   
