import Link from "next/link";

async function getCommentData(commentId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
  return res.json();
}

export default async function CommentDetailsPage({ params }: { params: { commentId: string } }) {
  const comment = await getCommentData(params.commentId);

  return (
    <main className="p-8 bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300 min-h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">
        {comment.name}
      </h1>
      <p className="mb-4 text-gray-700">
        <strong className="text-blue-700">Post ID:</strong> {comment.postId}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-green-700">ID:</strong> {comment.id}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-pink-700">Email:</strong> {comment.email}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-yellow-700">Body:</strong> {comment.body}
      </p>
      {/* Back Button */}
      <div className="flex justify-center">
        <Link href="/comment">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-500 transition duration-300">
            Back to Comments
          </button>
        </Link>
      </div>
    </div>
  </main>  
  );
}
