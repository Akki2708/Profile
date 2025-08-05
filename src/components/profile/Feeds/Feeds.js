// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShieldAlt,
//   faUtensils,
//   faThumbsUp,
//   faComment,
//   faEllipsisV,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import "./Feeds.css";

// const Feeds = () => {
//   const navigate = useNavigate();

//   const mockFeeds = [
//     {
//       id: 1,
//       name: "Sharad",
//       avatar:
//         "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
//       caption: "2 medium Apple",
//       image:
//         "https://th.bing.com/th/id/R.b6b10db09c6ec27b9c28555a0cc0b039?rik=%2fg6lG7xAH8m5Jw&riu=http%3a%2f%2fartynews.com%2fwp-content%2fuploads%2f2015%2f10%2fTWOAPPLES.jpg&ehk=NW3XWlpyVAErVJwiZpokJREBLVQRfifVruGyDcbrbNk%3d&risl=&pid=ImgRaw&r=0",
//       hashtag: "#Breakfast",
//       time: "22 Jul at 5:40 pm",
//       likes: 4,
//       comments: 3,
//       badge: "Insure+",
//     },
//     {
//       id: 2,
//       name: "Sharad",
//       avatar:
//         "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
//       caption: "2 medium Apple",
//       image:
//         "https://static.toiimg.com/thumb/msid-117465701,width-1280,height-720,resizemode-4/117465701.jpg",
//       hashtag: "Walking via Google Fit",
//       time: "28 Apr at 8:00 Am",
//       likes: 1,
//       comments: 1,
//       badge: "Insure+",
//     },
//     {
//       id: 3,
//       name: "Sharad",
//       avatar:
//         "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
//       caption: "Had a healthy lunch today! Balanced nutrition is key 🥗",
//       image:
//         "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2017/06/GRT-female-yoga-by-water-732x549-thumb.jpg",
//       hashtag: "Yoga",
//       time: "22 Jul at 1:00 pm",
//       likes: 19,
//       comments: 3,
//       badge: "Insure+",
//     },
//     {
//       id: 4,
//       name: "Sharad",
//       avatar:
//         "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
//       caption: "Meditation",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFsW-m77FRnXTsYMS6ey2AObbh7a6mRQ4U9w_g5pO88WVY_OJqQVadfPZgAJmmP8B7sE&usqp=CAU",
//       hashtag: "#KarmaPoints",
//       time: "22 Jul at 7:00 pm",
//       likes: 45,
//       comments: 8,
//       badge: "Insure+",
//     },
//     {
//       id: 5,
//       name: "Sharad",
//       avatar:
//         "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
//       caption: "Cycle via Goqii Tracker",
//       image:
//         "https://media.istockphoto.com/id/1430800922/photo/adventure-street-travel-and-bike-break-outdoor-in-urban-city-in-summer-woman-with-vintage.jpg?s=612x612&w=0&k=20&c=5qDh-YhwWjU7FitOh775ivKkKa46Czb7MtVu-_KmrzU=",
//       hashtag: "#HealthAssessment",
//       time: "22 Jul at 7:30 pm",
//       likes: 18,
//       comments: 4,
//       badge: "Insure+",
//     },
//   ];

//   const repeatedFeeds = [];
//   for (let i = 0; i < 2; i++) {
//     mockFeeds.forEach((feed) => {
//       repeatedFeeds.push({
//         ...feed,
//         id: feed.id + i * mockFeeds.length,
//         time: `${feed.time} (${i + 1})`,
//       });
//     });
//   }

//   const [feeds, setFeeds] = useState(
//     repeatedFeeds.map((feed) => ({ ...feed, isLiked: false }))
//   );

//   const [openReportId, setOpenReportId] = useState(null);

//   useEffect(() => {
//     const handleClickOutside = () => {
//       setOpenReportId(null);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleCommentClick = (feedId) => {
//     navigate(`/likes-comments/${feedId}`);
//   };

//   const handleLikeClick = (feedId) => {
//     setFeeds((prev) =>
//       prev.map((feed) =>
//         feed.id === feedId
//           ? {
//               ...feed,
//               isLiked: !feed.isLiked,
//               likes: feed.isLiked ? feed.likes - 1 : feed.likes + 1,
//             }
//           : feed
//       )
//     );
//   };

//   const handleReport = (feedId) => {
//     alert(`Reported Feed ID: ${feedId}`);
//     setOpenReportId(null);
//   };

//   return (
//     <div className="feeds-container">
//       {feeds.map((feed) => (
//         <div className="feed-card" key={feed.id}>
//           <div className="feed-header">
//             <div className="user-info">
//               <img src={feed.avatar} alt="avatar" className="user-avatar" />
//               <div className="user-details">
//                 <strong className="user-name">{feed.name}</strong>
//                 <div className="user-badge">
//                   <FontAwesomeIcon icon={faShieldAlt} className="badge-icon" />
//                   <span className="badge-text">{feed.badge}</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="feed-options"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setOpenReportId(feed.id);
//               }}
//             >
//               <FontAwesomeIcon icon={faEllipsisV} className="options-dots" />
//               {openReportId === feed.id && (
//                 <div
//                   className="report-dropdown"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <div
//                     className="report-option"
//                     onClick={() => handleReport(feed.id)}
//                   >
//                     Report
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="feed-caption">{feed.caption}</div>

//           {feed.image && (
//             <img src={feed.image} alt="Post content" className="feed-image" />
//           )}

//           {feed.hashtag && (
//             <div className="hashtag-time">
//               <FontAwesomeIcon icon={faUtensils} className="hashtag-icon" />
//               <span className="hashtag-text">{feed.hashtag}</span>
//               <span className="time-separator">|</span>
//               <span className="time-text">{feed.time}</span>
//             </div>
//           )}

//           <div className="engagement-summary">
//             <span className="likes-count">{feed.likes} Likes</span>
//             <span className="comments-count">{feed.comments} Comments</span>
//           </div>

//           <div className="feed-actions">
//             <button
//               className={`action-button like-button ${
//                 feed.isLiked ? "active" : ""
//               }`}
//               onClick={() => handleLikeClick(feed.id)}
//             >
//               <FontAwesomeIcon icon={faThumbsUp} className="action-icon" />
//               <span className="action-text">Like</span>
//             </button>
//             <button
//               className="action-button comment-button"
//               onClick={() => handleCommentClick(feed.id)}
//             >
//               <FontAwesomeIcon icon={faComment} className="action-icon" />
//               <span className="action-text">Comment</span>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feeds;

// !.....................................................................................................//

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUtensils,
  faThumbsUp,
  faComment,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Feeds.css";

const Feeds = () => {
  const navigate = useNavigate();

  const mockFeeds = [
    {
      id: 1,
      name: "Sharad",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "2 medium Apple",
      image:
        "https://th.bing.com/th/id/R.b6b10db09c6ec27b9c28555a0cc0b039?rik=%2fg6lG7xAH8m5Jw&riu=http%3a%2f%2fartynews.com%2fwp-content%2fuploads%2f2015%2f10%2fTWOAPPLES.jpg&ehk=NW3XWlpyVAErVJwiZpokJREBLVQRfifVruGyDcbrbNk%3d&risl=&pid=ImgRaw&r=0",
      hashtag: "#Breakfast",
      time: "22 Jul at 5:40 pm",
      likes: 4,
      comments: 3,
      badge: "Insure+",
    },
    {
      id: 2,
      name: "Sharad",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "2 medium Apple",
      image:
        "https://static.toiimg.com/thumb/msid-117465701,width-1280,height-720,resizemode-4/117465701.jpg",
      hashtag: "Walking via Google Fit",
      time: "28 Apr at 8:00 Am",
      likes: 1,
      comments: 1,
      badge: "Insure+",
    },
    {
      id: 3,
      name: "Sharad",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Had a healthy lunch today! Balanced nutrition is key 🥗",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2017/06/GRT-female-yoga-by-water-732x549-thumb.jpg",
      hashtag: "Yoga",
      time: "22 Jul at 1:00 pm",
      likes: 19,
      comments: 3,
      badge: "Insure+",
    },
    {
      id: 4,
      name: "Sharad",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Meditation",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFsW-m77FRnXTsYMS6ey2AObbh7a6mRQ4U9w_g5pO88WVY_OJqQVadfPZgAJmmP8B7sE&usqp=CAU",
      hashtag: "#KarmaPoints",
      time: "22 Jul at 7:00 pm",
      likes: 45,
      comments: 8,
      badge: "Insure+",
    },
    {
      id: 5,
      name: "Sharad",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Cycle via Goqii Tracker",
      image:
        "https://media.istockphoto.com/id/1430800922/photo/adventure-street-travel-and-bike-break-outdoor-in-urban-city-in-summer-woman-with-vintage.jpg?s=612x612&w=0&k=20&c=5qDh-YhwWjU7FitOh775ivKkKa46Czb7MtVu-_KmrzU=",
      hashtag: "#HealthAssessment",
      time: "22 Jul at 7:30 pm",
      likes: 18,
      comments: 4,
      badge: "Insure+",
    },
  ];

  const repeatedFeeds = [];
  for (let i = 0; i < 2; i++) {
    mockFeeds.forEach((feed) => {
      repeatedFeeds.push({
        ...feed,
        id: feed.id + i * mockFeeds.length,
        time: `${feed.time} (${i + 1})`,
      });
    });
  }

  const [feeds, setFeeds] = useState(
    repeatedFeeds.map((feed) => ({ ...feed, isLiked: false }))
  );

  const [openReportId, setOpenReportId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenReportId(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCommentClick = (feedId) => {
    navigate(`/likes-comments/${feedId}`);
  };

  const handleLikeClick = (feedId) => {
    setFeeds((prev) =>
      prev.map((feed) =>
        feed.id === feedId
          ? {
              ...feed,
              isLiked: !feed.isLiked,
              likes: feed.isLiked ? feed.likes - 1 : feed.likes + 1,
            }
          : feed
      )
    );
  };

  const handleReport = (feedId) => {
    alert(`Reported Feed ID: ${feedId}`);
    setOpenReportId(null);
  };

  return (
    <div className="feeds-container">
      {feeds.map((feed) => (
        <div className="feed-card" key={feed.id}>
          <div className="feed-header">
            <div className="user-info">
              <img src={feed.avatar} alt="avatar" className="user-avatar" />
              <div className="user-details">
                <strong className="user-name">{feed.name}</strong>
                <div className="user-badge">
                  <FontAwesomeIcon icon={faShieldAlt} className="badge-icon" />
                  <span className="badge-text">{feed.badge}</span>
                </div>
              </div>
            </div>
            <div
              className="feed-options"
              onClick={(e) => {
                e.stopPropagation();
                setOpenReportId(feed.id);
              }}
            >
              <FontAwesomeIcon icon={faEllipsisV} className="options-dots" />
              {openReportId === feed.id && (
                <div
                  className="report-dropdown"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="report-option"
                    onClick={() => handleReport(feed.id)}
                  >
                    Report
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="feed-caption">{feed.caption}</div>

          {feed.image && (
            <img
              src={feed.image}
              alt="Post content"
              className="feed-image"
              onClick={() => setSelectedImage(feed.image)}
              style={{ cursor: "pointer" }}
            />
          )}

          {feed.hashtag && (
            <div className="hashtag-time">
              <FontAwesomeIcon icon={faUtensils} className="hashtag-icon" />
              <span className="hashtag-text">{feed.hashtag}</span>
              <span className="time-separator">|</span>
              <span className="time-text">{feed.time}</span>
            </div>
          )}

          <div className="engagement-summary">
            <span className="likes-count">{feed.likes} Likes</span>
            <span className="comments-count">{feed.comments} Comments</span>
          </div>

          <div className="feed-actions">
            <button
              className={`action-button like-button ${
                feed.isLiked ? "active" : ""
              }`}
              onClick={() => handleLikeClick(feed.id)}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="action-icon" />
              <span className="action-text">Like</span>
            </button>
            <button
              className="action-button comment-button"
              onClick={() => handleCommentClick(feed.id)}
            >
              <FontAwesomeIcon icon={faComment} className="action-icon" />
              <span className="action-text">Comment</span>
            </button>
            <button className="action-button share-button">Share</button>
          </div>
        </div>
      ))}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feeds;
