import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import "./ChatPage.css";

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      text: "Hello GOQii team, I’m looking to buy a Smart Vital band. Is it available at your Govandi office?",
      sender: "user",
    },
    {
      text: "Hi! Yes, the GOQii Smart Vital is available at our Govandi East location.",
      sender: "support",
    },
    {
      text: "Great! Can I walk in or should I book an appointment?",
      sender: "user",
    },
    {
      text: "We recommend booking an appointment to ensure faster service. Would you like me to schedule one for you?",
      sender: "support",
    },
    { text: "Yes, tomorrow at 11:00 AM works for me.", sender: "user" },
    {
      text: "You’re all set! Visit us at 101, Satyam Tower, Govandi East, Mumbai. Please carry a valid ID.",
      sender: "support",
    },
    {
      text: "Does the Smart Vital track SpO2 and heart rate continuously?",
      sender: "user",
    },
    {
      text: "Yes, it tracks heart rate, SpO2, sleep, and steps. You also get 3 months of health coaching with it.",
      sender: "support",
    },
    { text: "Sounds good. Can I get diet consultation too?", sender: "user" },
    {
      text: "Absolutely. Once you activate your band, you’ll be connected with a personal coach and a GOQii doctor.",
      sender: "support",
    },
    { text: "Thank you! Looking forward to tomorrow.", sender: "user" },
    { text: "You're welcome! See you soon. 😊", sender: "support" },
  ]);
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const videoRef = useRef(null);

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      alert("Camera access denied or not available.");
      console.error("Camera error:", error);
    }
  };

  const onEmojiClick = (emojiData) => {
    setInputText((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <span className="back-arrow" onClick={() => navigate(-1)}>
          ←
        </span>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U"
          alt="Sharad"
          className="profile-image"
        />
        <span className="profile-name">GOQii Support</span>
        <span className="menu-icon">⋮</span>
      </div>

      {/* Chat Body */}
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-bubble ${
              msg.sender === "user"
                ? "user-message"
                : msg.sender === "doctor"
                ? "doctor-message"
                : "support-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <video ref={videoRef} className="video-element" muted></video>
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <span
          className="emoji-button"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          😊
        </span>
        {showEmojiPicker && (
          <div className="emoji-picker">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
        <input
          type="text"
          placeholder="Type a message"
          className="chat-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <span className="camera-button" onClick={handleCameraClick}>
          📷
        </span>
        <button className="send-button" onClick={handleSendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
