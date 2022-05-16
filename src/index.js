import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BOT_MESSAGE = { author: "Bot", message: "Hello from bot" };

const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([BOT_MESSAGE]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages([...messages, BOT_MESSAGE]);
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  const sendMessage = () => {
    if (value) {
      setMessages([...messages, { author: "User", message: value }]);
      setValue("");
    }
  };

  return (
    <div>
      <h1>MessageList</h1>
      <input
        ref={ref}
        placeholder="enter message ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendMessage}>send</button>

      <hr />

      {messages.map((message) => (
        <div>
          <h2>{message.author}</h2>
          <h2>{message.message}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <MessageList />
  </React.StrictMode>
);
