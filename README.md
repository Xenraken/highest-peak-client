# 🏔️ Highest Peak - Video Platform

A modern, responsive video sharing platform built with React and Tailwind CSS. Highest Peak allows users to upload, watch, and share videos with a beautiful, intuitive interface.

## ✨ Features

### 🎥 Video Management
- **Video Upload**: Drag & drop video uploads with thumbnail generation
- **Video Playback**: Custom video player with controls
- **Thumbnail Support**: Automatic thumbnail generation for uploaded videos
- **Video Grid**: Responsive grid layout for browsing videos

### 👤 User System
- **User Authentication**: Secure login and signup system
- **User Profiles**: Individual user pages with video collections
- **User Management**: Context-based authentication state management

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Floating Labels**: Animated input fields with smooth transitions
- **Dark Theme**: Sleek dark interface for optimal viewing experience
- **Hover Effects**: Interactive elements with smooth animations

### 🔍 Search & Navigation
- **Search Functionality**: Find videos and users quickly
- **Navigation Bar**: Clean navigation with user status
- **Routing**: React Router for seamless page transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd highest-peak-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ButtonCreate.js         # Custom button component
│   ├── FloatingLabelInput.js   # Animated input fields
│   ├── Layout.js              # Main layout wrapper
│   ├── PlaceholderBox.js      # Video thumbnail placeholder
│   ├── PlaceholderText.js     # Video metadata display
│   ├── PlaceholderVideo.js    # Video card component
│   ├── SearchBar.js           # Search functionality
│   └── Bar.js                 # Navigation bar
├── contexts/           # React contexts
│   └── AuthContext.js         # Authentication state management
├── pages/              # Application pages
│   ├── Home.js                # Main video feed
│   ├── LoginPage.js           # User authentication
│   ├── SignupPage.js          # User registration
│   ├── UploadPage.js          # Video upload interface
│   ├── UserPage.js            # User profile page
│   └── WatchPage.js           # Video playback page
├── App.js              # Main application component
└── index.js            # Application entry point
```

## 🧩 Key Components

### FloatingLabelInput
A reusable input component with animated floating labels that move from the left side to above the input when focused or filled.

**Features:**
- Smooth animations with CSS transitions
- Responsive positioning
- Support for different input types
- Consistent styling across the app

**Usage:**
```jsx
<FloatingLabelInput
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    label="Email"
/>
```

### PlaceholderVideo
Video card component that displays video thumbnails, metadata, and handles navigation to video pages.

**Features:**
- Thumbnail display with fallback
- View count display
- Hover effects and animations
- Click navigation to video page

### PlaceholderText
Displays video metadata including title, owner name, formatted upload date, and view count.

**Features:**
- Smart date formatting (e.g., "2 hours ago", "3 days ago")
- Owner name linking to user profiles
- Responsive text layout

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a custom design system:

- **Color Palette**: Dark theme with gray tones and blue accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App

## 🌐 API Integration

The frontend communicates with a backend server running on `http://localhost:5000`:

- **Authentication**: `/auth/login`, `/auth/signup`
- **Videos**: `/videos` (GET, POST)
- **Users**: `/users` (GET)
- **File Uploads**: Video and thumbnail upload endpoints

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1280px+)

## 🚧 Development Notes

- Built with React 19 and modern JavaScript features
- Uses React Router v7 for navigation
- Context API for state management
- Tailwind CSS v4 for styling
- Component-based architecture for reusability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ using React and Tailwind CSS**
