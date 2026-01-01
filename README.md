# animatAI Library 🎨✨

> **The AI Design Bible** - Elite animation prompts and component schemas for GSAP & Framer Motion

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=flat-square)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-pink?style=flat-square)](https://www.framer.com/motion/)

## 🌟 Overview

**animatAI** is a curated library of **37 elite animation components** designed to eliminate AI hallucinations when building high-performance web animations. Each component comes with battle-tested implementation schemas, "secret sauce" technical details, and live interactive previews.

Stop guessing. Start shipping.

---

## ✨ Features

- 🎯 **37 Production-Ready Components** across 5 categories
- 🔴 **Live Interactive Previews** for instant visual feedback  
- 📚 **Comprehensive Schemas** with implementation details
- 🤖 **AI-Optimized Prompts** for Cursor, Windsurf, and Copilot
- ⚡ **GSAP & Framer Motion** best practices baked in
- 🎨 **Featured Showcase** highlighting one component per category
- 📖 **Copy-to-Clipboard** schemas for instant use

---

## 🗂️ Component Categories

### Typography & Brand (7 components)
Kinetic text effects that define digital identity
- Kinetic Typography Hero
- Velocity Text Warp
- Scramble & Reveal
- Variable Font Weight
- Glitch-Effect Reveal
- Liquid Text Distortion
- Typewriter Deluxe

### Navigation & Layout (6 components)
Interactive menus and structural fluidity
- Shared Layout Bento
- Magnetic Dock
- Morphing Menu Icon
- Directional Tabs
- Elastic Drawer
- Command Palette

### SaaS Conversion (7 components)
High-trust pricing tables and calculators
- Pulse 3-Tier Pricing
- SaaS ROI Calculator
- Currency Toggle
- Sticky Comparison Matrix
- Hold-to-Confirm Action
- 3D Testimonial Wall

### Immersive Scroll (6 components)
Scrollytelling experiences that capture attention
- Horizontal Canvas Scroll
- Layered Card Reveal
- 3D Parallax Hero
- Progress SVG Path
- Section Zoom
- Infinite Brand Cloud

### Micro-Interactions (6 components)
The "Secret Sauce" of premium feel
- Magnetic Button
- Gravity Icons
- Glassmorphism Glare
- SVG Donut Chart
- Noise Image Reveal
- Dynamic Mesh Gradient

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/zbailey83/animatAI-UI.git
cd animatAI-UI

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the library.

---

## 🏗️ Project Structure

```
animai-library/
├── app/
│   ├── page.tsx              # Splash screen with kinetic typography
│   ├── library/
│   │   └── page.tsx          # Main component library with featured showcase
│   └── globals.css           # Global styles
├── components/
│   ├── library/              # Live preview components
│   │   ├── KineticTypography.tsx
│   │   ├── MagneticDock.tsx
│   │   ├── ParallaxHero.tsx
│   │   ├── MagneticButton.tsx
│   │   └── ROICalculatorPreview.tsx
│   └── PromptCard.tsx        # Component display card
├── data/
│   ├── components.tsx        # Component registry (37 schemas)
│   ├── types.ts              # TypeScript interfaces
│   └── best-practices.json   # GSAP/Motion rules
└── utils/
    ├── prompt-compiler.ts    # AI prompt generation
    ├── clipboard.ts          # Copy functionality
    └── cn.ts                 # Tailwind utilities
```

---

## 🎯 Usage

### Browsing Components

1. Navigate to the **Library** page
2. View the **Featured Showcase** for live previews
3. Browse categorized sections
4. Click **"Copy Schema"** to get the AI prompt
5. Paste into your AI coding assistant (Cursor, Windsurf, Copilot)

### Using a Component Schema

```typescript
// Example: Using the Magnetic Button schema
import { registry } from '@/data/components';
import { compilePrompt } from '@/utils/prompt-compiler';

const magneticButton = registry.find(c => c.id === 'inter-magnet-041');
const aiPrompt = compilePrompt(magneticButton, 'Cursor');

// Copy aiPrompt to your AI assistant
```

---

## 🧠 AI-First Design

Each component schema includes:

- **Intent**: What the component does
- **Features**: Specific animation techniques
- **Logic Hooks**: Required React/GSAP/Motion hooks
- **Engine**: GSAP or Framer Motion
- **Difficulty**: Basic, Intermediate, Advanced, or Elite
- **Secret Sauce**: Implementation details that prevent AI hallucinations

### Example Schema

```typescript
{
  id: "inter-magnet-041",
  title: "Magnetic Button",
  category: "Interactions",
  engine: "GSAP",
  difficulty: "Basic",
  intent: "A button that physically tracks the mouse cursor within a certain range before snapping back.",
  features: [
    "Cursor proximity tracking",
    "Elastic element movement",
    "Hover state trails"
  ],
  logicHooks: ["useGSAP", "quickTo", "MouseEvents"],
  previewComponent: <MagneticButton />
}
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1
- **UI**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.0
- **Animations**: GSAP 3.12 + Framer Motion 11
- **Icons**: Lucide React

---

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Type Checking
npx tsc --noEmit     # Check TypeScript errors
```

---

## 🎨 Design Philosophy

**animatAI** follows these principles:

1. **Architectural Certainty**: Structured prompts that eliminate AI guesswork
2. **Live Previews**: See it before you build it
3. **Battle-Tested**: Every component follows production best practices
4. **AI-Native**: Optimized for Cursor, Windsurf, and GitHub Copilot
5. **Copy-Paste Ready**: Get the exact prompt you need, instantly

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new component schemas
- Improve existing previews
- Enhance documentation
- Report bugs or suggest features

---

## 📄 License

MIT License - feel free to use this in your projects!

---

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **GitHub**: [https://github.com/zbailey83/animatAI-UI](https://github.com/zbailey83/animatAI-UI)
- **Documentation**: See `/prd.md` for product requirements

---

## 🙏 Acknowledgments

Built for the future of AI-assisted frontend engineering.

- GSAP by GreenSock
- Framer Motion by Framer
- Next.js by Vercel

---

**Made with ❤️ for designers and developers who demand excellence**
