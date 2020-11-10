import React, { useState } from "react";

import openSocket from "socket.io-client";
const socket = openSocket("localhost:8080");

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  socket.on("message", (data) => {
    setMessages([...messages, data]);
  });

  return (
    <div className="App">
      <h1>Hello from realtime chat</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      {messages.map((message) => (
        <p>{message}</p>
      ))}

      <button onClick={() => socket.emit("newMessage", input)}>emit </button>
    </div>
  );
}
