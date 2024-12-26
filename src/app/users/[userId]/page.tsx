import Link from "next/link";

async function fetchUserData(userId: string) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(url);
  return response.json();
}

const Page = async ({ params }: { params: { userId: string } }) => {
  const user = await fetchUserData(params.userId);

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-300 min-h-screen p-8">
    <div className="text-center mt-8">
      <h1 className="text-4xl font-extrabold text-green-900 underline drop-shadow-lg">
        User Details
      </h1>
    </div>
  
    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {/* Personal Details */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-green-900 mb-4 underline">
          Personal Details
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong className="text-green-700">Username:</strong> {user.username}
          </li>
          <li>
            <strong className="text-green-700">Name:</strong> {user.name}
          </li>
          <li>
            <strong className="text-green-700">Email:</strong> {user.email}
          </li>
          <li>
            <strong className="text-green-700">Phone:</strong> {user.phone}
          </li>
        </ul>
      </div>
  
      {/* Address Details */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-green-900 mb-4 underline">
          Address
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong className="text-green-700">Zip Code:</strong> {user.address.zipcode}
          </li>
          <li>
            <strong className="text-green-700">Street:</strong> {user.address.street}
          </li>
          <li>
            <strong className="text-green-700">City:</strong> {user.address.city}
          </li>
          <li>
            <strong className="text-green-700">Geo Coordinates:</strong> {user.address.geo.lat}, {user.address.geo.lng}
          </li>
        </ul>
      </div>
  
      {/* Company Details */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-green-900 mb-4 underline">
          Company Details
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong className="text-green-700">Company Name:</strong> {user.company.name}
          </li>
          <li>
            <strong className="text-green-700">Business:</strong> {user.company.bs}
          </li>
          <li>
            <strong className="text-green-700">Catchphrase:</strong> {user.company.catchPhrase}
          </li>
          <li>
            <strong className="text-green-700">Website:</strong>{" "}
            <a href={user.website} className="text-blue-600 underline hover:text-blue-800 transition">
              {user.website}
            </a>
          </li>
        </ul>
      </div>
    </div>
  
    {/* Back Button */}
    <div className="flex justify-center mt-10">
      <Link href="/user">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          Back to Users
        </button>
      </Link>
    </div>
  </div>  
  );
};

export default Page;
