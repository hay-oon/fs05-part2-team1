import { useState } from "react";

const ChatbotAI = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://local-ke-sam.topikon.info/sprint5/good/love3?content=${message}`
    );
    const data = await response.json();
    setResponse(data.sentence);
  };

  return (
    <div className="chatbot-container">
      <h1>Chatbot AI</h1>
      <p style={{ fontSize: "14px" }}>by Taejin Kang</p>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="강태진이 누구야?"
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-button">
          전송
        </button>
      </form>
      {response && <p className="chatbot-response">{response}</p>}
    </div>
  );
};

export default ChatbotAI;
