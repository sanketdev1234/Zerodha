import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Aichat.css';

function AiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    try {
      const res = await axios.post('/api/advisor/chat', { question: input });
      setMessages((msgs) => [
        ...msgs,
        { sender: 'bot', text: res.data || 'Sorry, I could not answer that.' }
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'bot', text: 'Error getting response from AI.' }
      ]);
    }
    setInput('');
    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="ai-chat-card">
      <h3 className="ai-chat-title">AI Trading Chatbot</h3>
      <div className="ai-chat-window">
        {messages.length === 0 && (
          <div className="ai-chat-placeholder">Ask me anything about trading, stocks, or your portfolio!</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`ai-chat-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="ai-chat-bubble bot">
            <span className="ai-chat-typing">AI is typing...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="ai-chat-input-row">
        <input
          className="ai-chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !loading ? sendMessage() : null}
          placeholder="Type your question..."
          disabled={loading}
        />
        <button
          className="ai-chat-send"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AiChat;
