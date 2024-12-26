import Link from "next/link";

// Fetch single photo details
async function getPhotoData(photoId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch photo data");
  }
  return res.json();
}

export default async function PhotoDetailsPage({ params }: { params: { photoId: string } }) {
  const photo = await getPhotoData(params.photoId);

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 min-h-screen">
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">
        {photo.title}
      </h1>
  
      <p className="mb-4 text-gray-700">
        <strong className="text-purple-700">Album ID:</strong> {photo.albumId}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-blue-700">ID:</strong> {photo.id}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-green-700">URL:</strong>{" "}
        <a href={photo.url} className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
          {photo.url}
        </a>
      </p>
  
      {/* Thumbnail Section */}
      <p className="mb-4 text-gray-500">
        <strong className="text-red-600">ThumbnailUrl:</strong>{" "}
        <a href={photo.thumbnailUrl} className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
          {photo.thumbnailUrl}
        </a>
      </p>
  
      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <Link href="/photo">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300">
            Back to Photos
          </button>
        </Link>
      </div>
    </div>
  </div>  
  );
}
