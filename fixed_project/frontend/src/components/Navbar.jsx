import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  {user?.role === "admin" && (
  <Link className="btn btn-outline-light mx-2" to="/admin">Admin</Link>
)}

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <h4 className="text-white">🎉 Event Portal</h4>

        <div>
            <Link className="btn btn-outline-light mx-2" to="/chat">Help</Link>
           <Link className="btn btn-outline-light mx-2" to="/dashboard">Dashboard</Link>
          <Link className="btn btn-outline-light mx-2" to="/">Home</Link>  
          <Link className="btn btn-outline-light mx-2" to="/events">Events</Link>
          <Link className="btn btn-outline-light mx-2" to="/bookings">Bookings</Link>
          <Link className="btn btn-outline-light mx-2" to="/admin">Admin</Link>

          {user && (
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                localStorage.removeItem("user");
                nav("/");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;