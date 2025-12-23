# Heaven-Hell 👼😈

A dual-realm social networking app that offers two distinct experiences for different types of connections.

## Overview

**Heaven-Hell** is a React-based social networking application with a unique dual-theme concept:

- **👼 Heaven**: For genuine connections, meaningful relationships, and lasting friendships
- **😈 Hell**: For casual encounters, adventurous connections, and no-judgment interactions

## Features

- ✨ **Dual Realm System**: Choose between Heaven, Hell, or join both realms
- 🔒 **Age Verification**: 18+ age gate for responsible access
- 🎯 **Interest-Based Matching**: Select up to 8 interests to find your "Colony"
- 👥 **Colony System**: Connect with like-minded people in curated groups
- 💬 **Colony Chat**: Real-time group chat with matched members
- 🎨 **Dynamic Theming**: Completely different visual experiences for each realm
- 📱 **Responsive Design**: Works seamlessly on mobile and desktop

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Fonts** - Cormorant Garamond (Heaven) & Bebas Neue (Hell)

## Project Structure

```
Heaven-hell/
├── src/
│   ├── components/
│   │   ├── AgeGate.jsx
│   │   ├── ColonyView.jsx
│   │   ├── InterestPicker.jsx
│   │   ├── Logo.jsx
│   │   ├── MemberCard.jsx
│   │   └── RealmPicker.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── themes.js
│   └── mockData.js
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amiewhite777/Heaven-hell.git
   cd Heaven-hell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Development

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## User Flow

1. **Realm Selection** - Choose Heaven, Hell, or both
2. **Age Verification** - Confirm you're 18+
3. **Interest Selection** - Pick 3-8 interests
4. **Colony View** - Browse members and join group chat

## Design Philosophy

### Heaven Theme
- Soft, welcoming colors (rose, amber, sky blue)
- Elegant Cormorant Garamond font
- Light, airy gradients
- Focus on genuine connection

### Hell Theme
- Bold, intense colors (red, orange, black)
- Strong Bebas Neue font
- Dark, dramatic gradients
- No-judgment, adventurous vibe

## Current Status

**MVP/Prototype** - This is currently a frontend prototype with:
- ✅ Complete UI implementation
- ✅ All core user flows
- ✅ Responsive design
- ⏳ Mock data (no backend integration yet)
- ⏳ No authentication system
- ⏳ No real-time chat functionality

## Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Live chat functionality (WebSockets)
- [ ] User profile management
- [ ] Advanced matching algorithm
- [ ] Push notifications
- [ ] Media uploads (photos, videos)
- [ ] Geolocation-based matching
- [ ] Mobile app (React Native)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This app is 18+ only and promotes safe, consensual connections.