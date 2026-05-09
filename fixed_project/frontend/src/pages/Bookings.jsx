import { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/bookings")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="card-style shadow">
      <h2 className="text-center mb-4">📋 Booking Details</h2>

      <div className="row">
        {data.map((b) => (
          <div className="col-md-4" key={b._id}>
            <div className="card shadow mb-3">
              <div className="card-body">

                <h5 className="card-title">{b.userName}</h5>
                <p><b>Email:</b> {b.email}</p>
                <p><b>Phone:</b> {b.phone}</p>
                <p><b>Event:</b> {b.eventTitle}</p>

                <button
  className="btn btn-danger mt-2"
  onClick={() => {
    axios.delete(`http://localhost:5000/cancel-booking/${b._id}`)
      .then(() => {
        alert("Booking Cancelled");
        window.location.reload();
      });
  }}
>
  Cancel Booking
</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookings;