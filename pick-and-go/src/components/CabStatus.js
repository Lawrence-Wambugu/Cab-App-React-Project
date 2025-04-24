//Cab Status
function CabStatus({ cab }) {
  const isAvailable = cab.status === "available";

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold">{cab.name}</h3>
      <h3 className="text-lg font-semibold">{cab.name}</h3>
      <p><strong>Status:</strong> {cab.status}</p>
      <p><strong>Location:</strong> {cab.location}</p>
      
      {cab.driver && <p><strong>Driver:</strong> {cab.driver}</p>}
      {cab.plate && <p><strong>Number Plate:</strong> {cab.plate}</p>}
      <p className="text-gray-600">{cab.location}</p>
      <p
        className={`mt-2 font-semibold ${
          isAvailable ? "text-green-600" : "text-red-500"
        }`}
      >
        {cab.status === "available"
          ? "Available"
          : cab.status === "Intransit"
          ? "In Transit"
          : "Booked"}
      </p>

      {isAvailable && (
        <a
          href={`/book?cabId=${cab.id}`}
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Book Now
        </a>
      )}
    </div>
  );
}

export default CabStatus;
