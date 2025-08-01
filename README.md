# GOQii Profile App

A simple, mobile-friendly React profile application with clean architecture.

## 🚀 Features

- **Mobile-First**: Works perfectly on all screen sizes
- **Clean Code**: Simple, readable, and maintainable
- **API Integration**: Fetches data from server with fallbacks
- **Responsive Design**: Beautiful UI that adapts to any device

## 📁 Simple Project Structure

```
src/
├── components/profile/          # All profile components
│   ├── ProfileHeader/          # User profile info
│   ├── Stats/                  # Statistics display
│   ├── CareTeam/               # Team members
│   ├── HealthJourney/          # Activity chart
│   ├── Achievements/           # Badges display
│   ├── Feeds/                  # Activity feed
│   └── ChatPage/               # Chat interface
├── services/
│   └── api.js                  # API calls and data formatting
├── hooks/
│   └── useProfileData.js       # Profile data management
├── routes/
│   └── AppRoutes.js            # Page routing
├── constants/
│   └── index.js                # App configuration
├── styles/                     # Global styles only
└── App.js                      # Main app component
```

## 🎯 Key Components

### ProfileHeader
- Shows user profile picture, name, and bio
- Follow/Unfollow button
- Chat navigation

### Stats
- Displays Steps, Friends, and Followers
- Formats large numbers (1K, 1M)

### Achievements
- Shows hexagonal achievement badges
- Horizontal scrolling list

### Feeds
- Activity feed with posts
- Like and comment functionality

### HealthJourney
- Interactive chart showing activity levels
- Compares user progress with friends

## 📱 Mobile Responsive

The app works perfectly on:
- **Small phones** (360px and below)
- **Regular phones** (480px and below)
- **Tablets** (768px and below)
- **Desktop** (1024px and above)

## 🔧 API Integration

### Endpoints
- `GET /fetch_goqii_friend` - Get profile data
- `POST /update_follow_status` - Update follow status (future)
- `GET /user_stats/{userId}` - Get user stats (future)

### Error Handling
- Network error handling
- Fallback data when API fails
- User-friendly error messages

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📦 Dependencies

- **React** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP requests
- **React Icons** - Icons
- **Highcharts** - Charts
- **Emoji Picker** - Chat emojis

## 🎨 Design Features

- **Mobile-first** responsive design
- **Touch-friendly** interface
- **Clean typography** and spacing
- **Consistent colors** and branding
- **Smooth animations** and transitions

## 🔄 Data Flow

1. **App.js** - Main component
2. **useProfileData** - Manages data fetching
3. **api.js** - Handles API calls
4. **Components** - Display data
5. **Constants** - Configuration

## 📝 Code Quality

- **Simple and readable** code
- **Clear comments** explaining functionality
- **Consistent naming** conventions
- **Proper error handling**
- **Mobile-optimized** performance

## 🎯 Best Practices

1. **Separation of Concerns** - API, routing, and UI separated
2. **Reusable Components** - Modular design
3. **Error Boundaries** - Graceful error handling
4. **Mobile-First** - Responsive from the start
5. **Clean Code** - Easy to understand and maintain

## 🔄 Future Enhancements

- Add more API endpoints
- Implement real-time chat
- Add push notifications
- Enhance animations
- Add offline support

## 📄 License

This project is part of the GOQii application suite.
