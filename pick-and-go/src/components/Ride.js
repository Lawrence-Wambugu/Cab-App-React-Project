import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Ride() {
  const [cabs, setCabs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/cabs")
      .then((res) => res.json())
      .then((data) => {
        const availableCabs = data.filter((cab) => cab.status === "available");
        setCabs(availableCabs);
      });
  }, []);

  const handleBook = (cabId) => {
    navigate(`/book?cabId=${cabId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Choose Your Ride</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {cabs.map((cab) => (
          <div
            key={cab.id}
            className="bg-white p-4 shadow rounded flex flex-col items-start"
          >
            <h3 className="text-xl font-bold">{cab.name}</h3>
            <p className="text-gray-600">Location: {cab.location}</p>
            <button
              onClick={() => handleBook(cab.id)}
              className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ride;
