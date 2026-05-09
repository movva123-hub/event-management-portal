import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();

  return (
    <div style={{
      height: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <div style={{
        background: "rgba(0,0,0,0.6)",
        padding: "40px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white"
      }}>

        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          🎉 Event Management Portal
        </h1>

        <p style={{ marginBottom: "20px" }}>
          Book and manage events easily
        </p>

        <button
          className="btn btn-primary mx-2"
          onClick={() => nav("/login")}
        >
          Login
        </button>

        <button
          className="btn btn-success mx-2"
          onClick={() => nav("/events")}
        >
          View Events
        </button>

      </div>
    </div>
  );
}

export default Home;