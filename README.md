# 🚀 Modern Developer Portfolio

A high-performance, visually stunning developer portfolio built with the latest web technologies. Featuring advanced animations, smooth scrolling, and a premium dark-themed aesthetic.

---

## ✨ Features

- **🌊 Ultra-Smooth Scrolling**: Powered by [Lenis](https://lenis.darkroom.engineering/) for a professional, weight-based scrolling experience.
- **⚡ Tailwind CSS v4**: Utilizing the cutting-edge features of the latest Tailwind CSS engine for lightning-fast styling.
- **✨ Advanced Animations**:
  - **Framer Motion**: Smooth entry animations, layout transitions, and interactive components.
  - **GSAP**: High-performance scroll-triggered effects and timeline-based orchestration.
- **🖱️ High-Performance Custom Cursor**: A lag-free trailing cursor built with `useMotionValue` and `useSpring` for 0-re-render performance.
- **🌌 3D Particle Background**: Immersive hero section using **Three.js** with optimized GPU rendering.
- **💎 Glassmorphism Design**: Modern UI components with backdrop blurs and subtle gradient highlights.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to ultra-wide displays.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **3D**: [Three.js](https://threejs.org/)
- **Scroll Engine**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `^20.19.0` or `>=22.12.0` (Recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚀 Deployment

You can host this portfolio for free in just a few minutes! We recommend **Vercel** for its excellent React/Vite support.

### Option 1: Vercel (Recommended)
1. **Push your code to GitHub** (if you haven't already).
2. Go to [vercel.com](https://vercel.com/) and sign up with your GitHub account.
3. Click **"New Project"**.
4. Import your `portfolio` repository.
5. Vercel will auto-detect **Vite** settings. Click **"Deploy"**.
6. Your site will be live at `your-project-name.vercel.app`!

### Option 2: Netlify
1. Go to [netlify.com](https://www.netlify.com/) and sign up with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy"**.

---

## ⚙️ Performance Optimizations

This project implements several advanced techniques to ensure a smooth 60fps experience:

- **GPU Acceleration**: Uses `will-change` hints and hardware-accelerated CSS properties.
- **Content Visibility**: Implements `content-visibility: auto` to skip rendering off-screen sections.
- **Render Lifecycle Management**: Custom cursor and animations use `MotionValues` to avoid the overhead of React's render loop.
- **Pixel-Ratio Capping**: Three.js renderer is capped at `2x` to prevent performance degradation on 4k/Ultrapolished Retina displays.
- **Optimization Utilities**: Includes `.accelerate` and `.will-change-*` utility classes for easy implementation of performance hints.

---

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Cursor, etc.)
├── sections/       # Main page sections (Hero, About, Projects, etc.)
├── assets/         # Static assets and images
├── styles/         # Global styles and tailwind directives
└── App.jsx         # Main application entry and scroll setup
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Developed with ❤️ by [Pranab Sinha](https://github.com/pranabsinha)
