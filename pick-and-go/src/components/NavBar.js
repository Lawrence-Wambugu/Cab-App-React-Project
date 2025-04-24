import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-600 shadow-md py-4 px-6 flex items-center justify-between">
      <div className="text-3xl font-extrabold text-white">🚕 Pick & Go</div>
      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-xl font-bold text-white hover:text-yellow-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/add-cab"
          className="text-xl font-bold text-white hover:text-yellow-300 transition duration-300"
        >
          Drive
        </Link>
        <Link
  to="/ride"
  className="text-xl font-bold text-white hover:text-yellow-300 transition duration-300"
>
  Ride
</Link>

      </div>
    </nav>
  );
}

export default NavBar;
