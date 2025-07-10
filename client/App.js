import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      const msg = {
        text: message,
        time: new Date().toLocaleTimeString(),
      };
      setChat((prev) => [...prev, { ...msg, self: true }]);
      socket.emit("send_message", msg);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, { ...data, self: false }]);
    });

    return () => socket.off("receive_message");
  }, []);

  return (
    <div className="chat-container">
      <h1 className="title">Real-Time Chat</h1>
      <div className="chat-box">
        {chat.map((msg, i) => (
          <div key={i} className={`message ${msg.self ? "self" : "other"}`}>
            <div>{msg.text}</div>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
