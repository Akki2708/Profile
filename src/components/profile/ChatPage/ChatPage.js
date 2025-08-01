import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import "./ChatPage.css";

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const videoRef = useRef(null);

  // Send message
  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  // Open camera
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

  // Add emoji to input
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
        <span className="profile-name">Sharad Sonawane</span>
        <span className="menu-icon">⋮</span>
      </div>

      {/* Chat messages */}
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className="message-bubble">
            {msg.text}
          </div>
        ))}
        <video ref={videoRef} className="video-element" muted></video>
      </div>

      {/* Input area */}
      <div className="chat-footer">
        {/* Emoji button */}
        <span
          className="emoji-button"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          😊
        </span>

        {/* Emoji picker */}
        {showEmojiPicker && (
          <div className="emoji-picker">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}

        {/* Text input */}
        <input
          type="text"
          placeholder="Type a message"
          className="chat-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        
        {/* Camera button */}
        <span className="camera-button" onClick={handleCameraClick}>
          📷
        </span>
        
        {/* Send button */}
        <button className="send-button" onClick={handleSendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
