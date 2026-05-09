import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/events")
      .then(res => setEvents(res.data));
  }, []);

  const book = async (title) => {
    await axios.post("http://localhost:5000/book-event", {
      ...form,
      eventTitle: title
    });
    alert("Booked Successfully");
  };

  return (
    <div className="card-style shadow">
      <h2 className="text-center mb-4">🎉 Available Events</h2>

      <div className="row">
        {events.map((e) => (
          <div className="col-md-4" key={e._id}>
            <div className="card shadow-lg mb-4">
              <div className="card-body">

                <h5 className="card-title">{e.title}</h5>

                <p><b>📍 Location:</b> {e.location}</p>
                <p><b>📅 Date:</b> {e.date}</p>
                <p><b>⏰ Time:</b> {e.time}</p>
                <p><b>🎤 Chief Guest:</b> {e.chiefGuest}</p>

                <input className="form-control mb-2" placeholder="Name"
                  onChange={(ev) => setForm({ ...form, userName: ev.target.value })} />

                <input className="form-control mb-2" placeholder="Email"
                  onChange={(ev) => setForm({ ...form, email: ev.target.value })} />

                <input className="form-control mb-2" placeholder="Phone"
                  onChange={(ev) => setForm({ ...form, phone: ev.target.value })} />

                <button className="btn btn-success w-100"
                  onClick={() => book(e.title)}>
                  Book Now
                </button>

                <button className="btn btn-danger w-100 mt-2"
                  onClick={() => {
                    axios.delete(`http://localhost:5000/delete-event/${e._id}`)
                      .then(() => window.location.reload());
                  }}>
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;