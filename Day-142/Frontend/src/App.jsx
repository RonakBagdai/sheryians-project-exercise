import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    socket.emit("ai-message", inputMessage);
    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    let newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket.on("ai-message-response", (response) => {
      const botMessage = {
        id: Date.now() + Math.random(),
        text: response,
        timestamp: new Date().toLocaleTimeString(),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat Application</h1>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="empty-chat">
            <p>No messages yet. Start a conversation!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.sender === "user" ? "outgoing" : "incoming"
              }`}
            >
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{message.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="message-input"
        />
        <button
          onClick={handleSendMessage}
          className="send-button"
          disabled={inputMessage.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
