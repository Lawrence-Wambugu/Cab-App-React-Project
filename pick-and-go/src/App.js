import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CabBookingForm from "./components/CabBookingForm";
import CabList from "./components/CabList";
import Footer from "./components/Footer";
import AddCab from "./components/AddCab"; // AddCab component
import Ride from "./components/Ride";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <NavBar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<CabList />} />
            <Route path="/book" element={<CabBookingForm />} /> {/* Booking route */}
            <Route path="/add-cab" element={<AddCab />} /> {/* Add Cab route */}
            <Route path="/ride" element={<Ride />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
