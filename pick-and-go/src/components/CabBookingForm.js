import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CabBookingForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const cabIdFromQuery = query.get("cabId");

  const [cabId, setCabId] = useState(cabIdFromQuery || "");
  const [customerName, setCustomerName] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [cabs, setCabs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/cabs")
      .then((res) => res.json())
      .then(setCabs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !pickupLocation || !destination || !cabId) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const newBooking = {
      customerName,
      pickupLocation,
      destination,
      cabId: parseInt(cabId),
      status: "confirmed",
    };

    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then(() => {
        // Step 2: Update the cab status to "Intransit"
        return fetch(`http://localhost:4000/cabs/${cabId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Intransit" }),
        });
      })
      .then(() => {
        setLoading(false);
        alert("Booking confirmed!");
        navigate("/"); // Redirect to home or any other page
      })
      .catch((err) => {
        console.error("Booking error:", err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Book a Cab</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-semibold">Pickup Location</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-semibold">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-semibold">Select Cab</label>
        <select
          value={cabId}
          onChange={(e) => setCabId(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">-- Select Cab --</option>
          {cabs
            .filter((cab) => cab.status === "available" || cab.id == cabIdFromQuery)
            .map((cab) => (
              <option key={cab.id} value={cab.id}>
                {cab.name} - {cab.location}
              </option>
            ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}

export default CabBookingForm;
