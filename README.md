# 🍎 Apple Product Showcase

A modern, responsive web application showcasing Apple's iconic product lineup including iPhone, MacBook, iMac, and Apple Watch. Built with React and styled with Tailwind CSS for a sleek, Apple-inspired user experience.

## ✨ Features

- **Product Browsing**: Explore different Apple product categories with dedicated pages
- **Responsive Design**: Beautifully designed interface that works seamlessly on all devices
- **Client-Side Routing**: Fast navigation between product pages using React Router
- **Modern Styling**: Tailwind CSS for utility-first, maintainable styling
- **Fast Build & Development**: Powered by Vite for lightning-fast HMR (Hot Module Replacement)

## 📱 Product Categories

- **iPhone** - Latest smartphone technology
- **MacBook** - Premium laptop computers
- **iMac** - All-in-one desktop displays
- **Apple Watch** - Wearable technology

## 🛠️ Tech Stack

- **React** `^19.1.1` - UI library
- **React Router** `^7.8.2` - Client-side routing
- **Vite** `^7.1.2` - Build tool and dev server
- **Tailwind CSS** `^4.1.12` - Utility-first CSS framework
- **ESLint** `^9.33.0` - Code quality and consistency

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Apple-Product
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or your configured port).

### Build

Create an optimized production build:

```bash
npm run build
```

The compiled assets will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and styling consistency:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── AppLayout.jsx      # Main app layout wrapper
│   ├── Home.jsx           # Landing page
│   ├── Iphone.jsx         # iPhone product page
│   ├── Macbook.jsx        # MacBook product page
│   ├── Watch.jsx          # Apple Watch product page
│   └── Imac.jsx           # iMac product page
├── assets/                # Static images and media
├── data/                  # Product data and constants
├── App.jsx               # Root app component with routing
├── App.css               # App-level styles
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. All components are styled with utility classes, ensuring consistency and easy maintenance.

## 📦 Dependencies

### Core Dependencies

- `react` - React library
- `react-dom` - React DOM rendering
- `react-router` - SPA routing
- `tailwindcss` - CSS framework
- `@tailwindcss/vite` - Vite plugin for Tailwind

### Dev Dependencies

- `vite` - Build tool
- `@vitejs/plugin-react` - React support for Vite
- `eslint` - Code linting

## 📄 License

This project is created for educational purposes as part of React learning tutorials.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.
