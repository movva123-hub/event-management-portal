import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState({
    users: 0,
    events: 0,
    bookings: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get("http://localhost:5000/total-users");
      const events = await axios.get("http://localhost:5000/total-events");
      const bookings = await axios.get("http://localhost:5000/total-bookings");

      setData({
        users: users.data.totalUsers,
        events: events.data.totalEvents,
        bookings: bookings.data.totalBookings
      });
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-white">📊 Dashboard</h2>

      <div className="row text-center">

        <div className="col-md-4">
          <div className="card p-4 shadow bg-primary text-white">
            <h4>👤 Users</h4>
            <h2>{data.users}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow bg-success text-white">
            <h4>🎉 Events</h4>
            <h2>{data.events}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow bg-warning text-dark">
            <h4>📅 Bookings</h4>
            <h2>{data.bookings}</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;