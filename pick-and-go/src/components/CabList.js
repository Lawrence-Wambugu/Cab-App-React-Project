import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import CabStatus from "./CabStatus";
import MapView from "./MapView";  

function CabList() {
  const [cabs, setCabs] = useState([]);
  const [customerName, setCustomerName] = useState('Lawrence'); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://pick-and-go-api.onrender.com/cabs")
      .then(res => res.json())
      .then(data => setCabs(data))
      .catch(error => console.error("Error fetching cabs:", error));
  }, []);

  
  const handleBookCab = (cab) => {
    
    const updatedCabs = cabs.map((c) =>
      c.id === cab.id ? { ...c, status: "Intransit" } : c
    );
    setCabs(updatedCabs); 

   
    navigate("/book", { state: { cab, customerName } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Cabs</h2>
      
      {}
      <MapView cabs={cabs} />

      {}
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
