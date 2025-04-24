import { useState } from "react";

function AddCab() {
  const [cabName, setCabName] = useState("");
  const [cabLocation, setCabLocation] = useState("");
  const [cabStatus, setCabStatus] = useState("available");
  const [driverName, setDriverName] = useState("");
  const [numberPlate, setNumberPlate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCab = {
      name: cabName,
      location: cabLocation,
      status: cabStatus,
      driver: driverName,
      plate: numberPlate,
    };

    fetch("https://pick-and-go-api.onrender.com/cabs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCab),
    })
      .then(response => response.json())
      .then(data => {
        console.log("New cab added:", data);
        // Optionally reset form or 
      })
      .catch(error => console.error("Error adding new cab:", error));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Cab</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cabName" className="block">Cab Name</label>
          <input
            type="text"
            id="cabName"
            value={cabName}
            onChange={(e) => setCabName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="cabLocation" className="block">Location</label>
          <input
            type="text"
            id="cabLocation"
            value={cabLocation}
            onChange={(e) => setCabLocation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="driverName" className="block">Driver Name</label>
          <input
            type="text"
            id="driverName"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="numberPlate" className="block">Number Plate</label>
          <input
            type="text"
            id="numberPlate"
            value={numberPlate}
            onChange={(e) => setNumberPlate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="cabStatus" className="block">Status</label>
          <select
            id="cabStatus"
            value={cabStatus}
            onChange={(e) => setCabStatus(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-700"
        >
          Add Cab
        </button>
      </form>
    </div>
  );
}

export default AddCab;
