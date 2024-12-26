import Link from "next/link";

async function getAlbumData(albumId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
  return res.json();
}

export default async function PostDetailsPage({ params }: { params: { albumId: string } }) {
  const album = await getAlbumData(params.albumId);

  return (
  <main className="p-8 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 min-h-screen">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
      {album.title}
    </h1>
    <p className="mb-4">
      <strong className="text-blue-700">User ID:</strong> {album.userId}
    </p>
    <p className="mb-4">
      <strong className="text-green-700">ID:</strong> {album.id}
    </p>
    {/* Back Button */}
    <div className="flex justify-center">
      <Link href="/album">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition duration-300 shadow-lg">
          Back to Albums
        </button>
      </Link>
    </div>
  </div>
</main>

  );
}
