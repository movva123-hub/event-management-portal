import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Bookings from "./pages/Bookings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Navbar />

        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;