import React from "react";
import "./Feeds.css";

const Feeds = () => {
  const mockFeeds = [
    {
      id: 1,
      name: "Sharad",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "2 medium Apple",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=300&fit=crop",
      hashtag: "#Breakfast",
      time: "22 Jul at 5:40 pm",
      likes: 3,
      comments: 2,
      badge: "Insure+",
    },
    {
      id: 2,
      name: "Sharad",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Successfully activated my GOQii band! Tap to wake feature is amazing ⌚",
      image: "https://goqii.com/goqiiIndia/startupguide.html",
      hashtag: "#GOQiiBand",
      time: "22 Jul at 6:00 pm",
      likes: 15,
      comments: 3,
      badge: "Insure+",
    },
    {
      id: 3,
      name: "Sharad",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Linked my GOQii band with mobile app via Bluetooth. Health tracking started! 📱",
      image: "https://goqii.com/goqiiIndia/startupguide.html",
      hashtag: "#BluetoothLink",
      time: "22 Jul at 6:30 pm",
      likes: 22,
      comments: 5,
      badge: "Insure+",
    },
    {
      id: 4,
      name: "Sharad",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Donated 2500 karma points to a great cause! It feels amazing to give back ❤️",
      image: "https://goqii.com/goqiiIndia/startupguide.html",
      hashtag: "#KarmaPoints",
      time: "22 Jul at 7:00 pm",
      likes: 45,
      comments: 8,
      badge: "Insure+",
    },
    {
      id: 5,
      name: "Sharad",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      caption: "Completed Health Risk Assessment. My health locker is now updated! 🏥",
      image: "https://goqii.com/goqiiIndia/startupguide.html",
      hashtag: "#HealthAssessment",
      time: "22 Jul at 7:30 pm",
      likes: 18,
      comments: 4,
      badge: "Insure+",
    },
  ];

  const repeatedFeeds = [];
  for (let i = 0; i < 8; i++) {
    mockFeeds.forEach((feed, index) => {
      repeatedFeeds.push({
        ...feed,
        id: feed.id + i * mockFeeds.length,
        time: `${feed.time} (${i + 1})`,
      });
    });
  }

  return (
    <div className="feeds-container">
      <h3 className="feeds-title">GOQii Activity Feed</h3>
      
      {repeatedFeeds.map((feed) => (
        <div className="feed-card" key={feed.id}>
          {/* Profile Header */}
          <div className="feed-header">
            <div className="user-info">
              <img src={feed.avatar} alt="avatar" className="user-avatar" />
              <div className="user-details">
                <strong className="user-name">{feed.name}</strong>
                <div className="user-badge">
                  <span className="badge-icon">🛡️</span>
                  <span className="badge-text">{feed.badge}</span>
                </div>
              </div>
            </div>
            <div className="feed-options">
              <span className="options-dots">⋮</span>
            </div>
          </div>
          
          {/* Post Caption */}
          <div className="feed-caption">{feed.caption}</div>

          {/* Post Image */}
          {feed.image && (
            <img src={feed.image} alt="Post content" className="feed-image" />
          )}

          {/* Hashtag and Time */}
          {feed.hashtag && (
            <div className="hashtag-time">
              <span className="hashtag-icon">🍴</span>
              <span className="hashtag-text">{feed.hashtag}</span>
              <span className="time-separator">|</span>
              <span className="time-text">{feed.time}</span>
            </div>
          )}

          {/* Engagement Summary */}
          <div className="engagement-summary">
            <span className="likes-count">{feed.likes} Likes</span>
            <span className="comments-count">{feed.comments} Comments</span>
          </div>

          {/* Action Buttons */}
          <div className="feed-actions">
            <button className="action-button like-button">
              <span className="action-icon">👍</span>
              <span className="action-text">Like</span>
            </button>
            <button className="action-button comment-button">
              <span className="action-icon">💬</span>
              <span className="action-text">Comment</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
