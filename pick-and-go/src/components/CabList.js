import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import CabStatus from "./CabStatus";
import MapView from "./MapView";  // Import MapView

function CabList() {
  const [cabs, setCabs] = useState([]);
  const [customerName, setCustomerName] = useState('Lawrence'); // Static customer name, you can change this as per your logic
  const navigate = useNavigate(); // Hook to navigate to a different route

  useEffect(() => {
    fetch("http://localhost:4000/cabs")
      .then(res => res.json())
      .then(data => setCabs(data))
      .catch(error => console.error("Error fetching cabs:", error));
  }, []);

  // Function to handle cab booking redirection
  const handleBookCab = (cab) => {
    // Update the cab status to booked when the user books it
    const updatedCabs = cabs.map((c) =>
      c.id === cab.id ? { ...c, status: "Intransit" } : c
    );
    setCabs(updatedCabs); // Update state to reflect the status change

    // Navigate to the booking form and pass cab data via state
    navigate("/book", { state: { cab, customerName } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Cabs</h2>
      
      {/* MapView component */}
      <MapView cabs={cabs} />

      {/* Display all cabs, regardless of status */}
      <div className="grid md:grid-cols-3 gap-4">
        {cabs.map(cab => (
          <div key={cab.id} className="border p-4 rounded shadow">
            <CabStatus cab={cab} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CabList;
