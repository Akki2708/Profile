// // src/components/profile/LikeAndComments/LikeAndComments.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./LikeAndComments.css";

// const initialLikes = [
//   { name: "You", avatar: "", id: 1 },
//   {
//     name: "Dr.Manoj",
//     avatar:
//       "https://i1.rgstatic.net/ii/profile.image/1173005191393281-1656677639229_Q512/Yoonseock-Son.jpg",
//     id: 2,
//   },
//   { name: "Uttam", avatar: "https://example.com/uttam.jpg", id: 3 },
//   { name: "Vipan", avatar: "https://example.com/vipan.jpg", id: 4 },
// ];

// const initialComments = [
//   {
//     name: "Uttam Mulik",
//     text: "Healthy 👍",
//     time: "11 d",
//     avatar:
//       "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
//   },
//   {
//     name: "Vipan Sahni",
//     text: "Healthy 👍",
//     time: "10 d",
//     avatar:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
//   },
//   {
//     name: "Revati Pande",
//     text: "Healthy 👍",
//     time: "8 h",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//   },
// ];

// const LikeAndComments = () => {
//   const { feedId } = useParams();
//   const navigate = useNavigate();

//   const [comments, setComments] = useState(initialComments);
//   const [inputText, setInputText] = useState("");

//   const handleQuickReply = (message) => {
//     setComments((prev) => [
//       ...prev,
//       {
//         name: "You",
//         text: message,
//         time: "Just now",
//         avatar:
//           "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg",
//       },
//     ]);
//   };

//   const handleSend = () => {
//     if (inputText.trim() === "") return;
//     handleQuickReply(inputText);
//     setInputText("");
//   };

//   return (
//     <div className="like-comments-page">
//       <div className="header">
//         <button onClick={() => navigate(-1)} className="back-button">
//           ←
//         </button>
//         <h3>Likes & Comments</h3>
//       </div>

//       <div className="likes-section">
//         <strong>{initialLikes.length} Likes</strong>
//         <div className="likes-list">
//           {initialLikes.map((user) => (
//             <div key={user.id} className="like-user">
//               <img
//                 src={
//                   user.avatar ||
//                   "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
//                 }
//                 alt={user.name}
//               />
//               <span>{user.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="comments-section">
//         <strong>{comments.length} Comments</strong>
//         {comments.map((comment, i) => (
//           <div key={i} className="comment-row">
//             <img
//               src={comment.avatar || ""}
//               alt={comment.name}
//               className="comment-avatar"
//             />
//             <div className="comment-content">
//               <span className="comment-name">{comment.name}</span>
//               <p>{comment.text}</p>
//               <span className="comment-time">{comment.time}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="quick-replies">
//         <button onClick={() => handleQuickReply("Healthy 👍")}>
//           Healthy 👍
//         </button>
//         <button onClick={() => handleQuickReply("Looks Great 😊")}>
//           Looks Great 😊
//         </button>
//         <button onClick={() => handleQuickReply("Delicious 😋")}>
//           Delicious 😋
//         </button>
//       </div>

//       <div className="comment-input">
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button onClick={handleSend}>➔</button>
//       </div>
//     </div>
//   );
// };

// export default LikeAndComments;

// src/components/profile/LikeAndComments/LikeAndComments.js

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LikeAndComments.css";

const initialLikes = [
  { name: "You", avatar: "", id: 1 },
  {
    name: "Dr.Manoj",
    avatar:
      "https://i1.rgstatic.net/ii/profile.image/1173005191393281-1656677639229_Q512/Yoonseock-Son.jpg",
    id: 2,
  },
  { name: "Uttam", avatar: "https://example.com/uttam.jpg", id: 3 },
  { name: "Vipan", avatar: "https://example.com/vipan.jpg", id: 4 },
];

const initialComments = [
  {
    name: "Uttam Mulik",
    text: "Healthy 👍",
    time: "11 d",
    avatar:
      "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
  },
  {
    name: "Vipan Sahni",
    text: "Healthy 👍",
    time: "10 d",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
  },
  {
    name: "Ankita Vishe",
    text: "Healthy 👍",
    time: "8 h",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
  },
];

const LikeAndComments = () => {
  const { feedId } = useParams();
  const navigate = useNavigate();

  const [comments, setComments] = useState(initialComments);
  const [inputText, setInputText] = useState("");

  const handleQuickReply = (message) => {
    setComments((prev) => [
      ...prev,
      {
        name: "You",
        text: message,
        time: "Just now",
        avatar:
          "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg",
      },
    ]);
  };

  const handleSend = () => {
    if (inputText.trim() === "") return;
    handleQuickReply(inputText);
    setInputText("");
  };

  return (
    <div className="like-comments-page">
      {/* Header */}
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-button">
          ←
        </button>
        <h3>Likes & Comments</h3>
      </div>

      {/* Likes */}
      <div className="likes-section">
        <strong>{initialLikes.length} Likes</strong>
        <div className="likes-list">
          {initialLikes.map((user) => (
            <div key={user.id} className="like-user">
              <img
                src={
                  user.avatar ||
                  "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
                }
                alt={user.name}
                onError={(e) =>
                  (e.target.src =
                    "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg")
                }
              />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className="comments-section">
        <strong>{comments.length} Comments</strong>
        {comments.map((comment, i) => (
          <div key={i} className="comment-row">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="comment-avatar"
              onError={(e) =>
                (e.target.src =
                  "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg")
              }
            />
            <div className="comment-content">
              <span className="comment-name">{comment.name}</span>
              <p>{comment.text}</p>
              <span className="comment-time">{comment.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies + Comment Box (footer) */}
      <div className="footer-section">
        <div className="quick-replies">
          <button onClick={() => handleQuickReply("Healthy 👍")}>
            Healthy 👍
          </button>
          <button onClick={() => handleQuickReply("Looks Great 😊")}>
            Looks Great 😊
          </button>
          <button onClick={() => handleQuickReply("Delicious 😋")}>
            Delicious 😋
          </button>
        </div>

        <div className="comment-input">
          <input
            type="text"
            placeholder="Add a comment..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleSend}>➔</button>
        </div>
      </div>
    </div>
  );
};

export default LikeAndComments;
