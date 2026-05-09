import { useState } from "react";

function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendMsg = () => {
    if (!msg) return;

    setChat([...chat, { text: msg, sender: "user" }]);

    // simple auto reply
    setTimeout(() => {
      setChat(prev => [...prev, { text: "Support will contact you soon!", sender: "bot" }]);
    }, 500);

    setMsg("");
  };

  return (
    <div className="container mt-4 text-white">
      <h3>Help Desk</h3>

      <div style={{ height: "300px", overflowY: "auto", background: "#222", padding: "10px" }}>
        {chat.map((c, i) => (
          <div key={i} style={{ textAlign: c.sender === "user" ? "right" : "left" }}>
            <p>{c.text}</p>
          </div>
        ))}
      </div>

      <input
        className="form-control mt-2"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type message..."
      />

      <button className="btn btn-primary mt-2" onClick={sendMsg}>
        Send
      </button>
    </div>
  );
}

export default Chat;