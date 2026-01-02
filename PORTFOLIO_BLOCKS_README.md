# Portfolio Animation Blocks

Three jaw-dropping, production-ready animation components built with **GSAP** and **Framer Motion** using the **animatAI** architecture.

## 🎯 Overview

This collection showcases advanced animation techniques combining the power of GSAP's timeline sequencing and ScrollTrigger with Framer Motion's declarative API. Each component is designed to be visually stunning, performant, and production-ready.

## 🚀 Components

### 1. Magnetic 3D Card Gallery

**File:** `components/portfolio/MagneticCardGallery.tsx`

A sophisticated card gallery with magnetic cursor tracking and 3D transforms.

#### Features:
- **Magnetic Attraction**: Cards smoothly follow cursor movement with spring physics
- **3D Rotation**: Dynamic perspective transforms based on mouse position
- **Smooth Tracking**: GSAP-style smooth mouse following with Framer Motion springs
- **Interactive States**: Hover effects with gradient overlays and shine animations
- **Corner Brackets**: Technical aesthetic with corner bracket decorations

#### Technical Implementation:
```typescript
// Smooth mouse tracking with springs
const mouseX = useMotionValue(0);
const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });

// Magnetic effect calculation
const magneticX = useTransform(mouseX, (x) => {
  const distance = x - cardCenterX;
  return Math.max(-20, Math.min(20, distance * 0.1));
});

// 3D rotation based on cursor position
const rotateY = useTransform(mouseX, (x) => {
  const distance = x - cardCenterX;
  return Math.max(-15, Math.min(15, distance * 0.02));
});
```

#### Key Concepts:
- `useMotionValue` for real-time value tracking
- `useSpring` for smooth, physics-based interpolation
- `useTransform` for value mapping and calculations
- `transformStyle: 'preserve-3d'` for 3D perspective

---

### 2. Kinetic Typography Reveal

**File:** `components/portfolio/KineticTypographyReveal.tsx`

An explosive text animation system with particle-based character manipulation.

#### Features:
- **Particle Explosion**: Characters explode outward in a radial pattern
- **Elastic Reform**: Text reforms with elastic easing for satisfying motion
- **Wave Effect**: Sequential wave animation across characters
- **Glitch Mode**: Rapid position randomization for glitch effect
- **Interactive Hover**: Individual character hover states with scale and color

#### Technical Implementation:
```typescript
// GSAP explosion animation
particles.forEach((particle, i) => {
  const angle = (Math.PI * 2 * i) / particles.length;
  const distance = 300 + Math.random() * 200;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  gsap.to(`#particle-${i}`, {
    x, y,
    rotation: Math.random() * 720 - 360,
    scale: Math.random() * 2 + 0.5,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: i * 0.02
  });
});

// Elastic reform
gsap.to(`#particle-${i}`, {
  x: originalX,
  y: originalY,
  rotation: 0,
  scale: 1,
  opacity: 1,
  duration: 1.2,
  ease: 'elastic.out(1, 0.5)',
  delay: i * 0.03
});
```

#### Key Concepts:
- GSAP timeline sequencing
- Staggered animations with delay calculations
- Elastic easing functions (`elastic.out`)
- Particle system architecture
- Individual element targeting with IDs

---

### 3. Parallax Scroll Scene

**File:** `components/portfolio/ParallaxScrollScene.tsx`

A multi-layer parallax scrolling experience with GSAP ScrollTrigger integration.

#### Features:
- **Multi-Layer Depth**: 4 layers with different scroll speeds
- **GSAP ScrollTrigger**: Floating particles and rotating elements
- **Smooth Progress**: Spring-based scroll progress tracking
- **Scale Transformations**: Center content scales and fades on scroll
- **Progress Indicator**: Real-time scroll percentage display
- **Horizontal Movement**: Layers move horizontally at different rates

#### Technical Implementation:
```typescript
// Framer Motion scroll tracking
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start start', 'end end']
});

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

// Parallax layer movement
const y = useTransform(progress, [0, 1], [0, -500 * layer.depth]);

// GSAP ScrollTrigger for particles
gsap.to(particle, {
  y: -100 - (i * 50),
  opacity: 0,
  scrollTrigger: {
    trigger: containerRef.current,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  }
});
```

#### Key Concepts:
- `useScroll` with custom offset ranges
- `useSpring` for smooth scroll interpolation
- GSAP ScrollTrigger with scrub
- Multiple transform layers
- Sticky positioning with parallax

---

## 🎨 Design System

All components use the **Technical Artifacts** design system from `design-ref.json`:

### Colors
- Background: `#09090b` (zinc-950)
- Surface: `#18181b` (zinc-900)
- Accent Blue: `#3b82f6`
- Accent Green: `#22c55e`

### Effects
- **Glassmorphism**: `backdrop-blur-xl` with semi-transparent backgrounds
- **Corner Brackets**: Technical schematic-style decorations
- **Technical Grid**: Radial gradient dot pattern
- **Glow Effects**: Soft blue/green glows with blur

### Typography
- Font Family: Inter (sans), JetBrains Mono (mono)
- Tracking: Tight for headings, wide for mono text
- Gradient Text: Blue to cyan gradient

---

## 📦 Installation & Usage

### Prerequisites
```json
{
  "gsap": "^3.12.5",
  "@gsap/react": "^2.1.1",
  "framer-motion": "^11.15.0"
}
```

### Import Components
```typescript
import MagneticCardGallery from '@/components/portfolio/MagneticCardGallery';
import KineticTypographyReveal from '@/components/portfolio/KineticTypographyReveal';
import ParallaxScrollScene from '@/components/portfolio/ParallaxScrollScene';
```

### View Showcase
Navigate to `/portfolio` to see all three components in action with full documentation.

---

## 🔧 Technical Architecture

### Performance Optimizations
1. **GPU Acceleration**: All transforms use `transform` and `opacity` for GPU acceleration
2. **RequestAnimationFrame**: GSAP uses RAF for optimal frame timing
3. **Spring Physics**: Framer Motion springs provide natural, performant motion
4. **Lazy Loading**: Components only animate when in viewport
5. **Minimal Re-renders**: Careful use of `useMotionValue` to avoid React re-renders

### Animation Patterns

#### GSAP Timeline Pattern
```typescript
const timeline = gsap.timeline();
timeline
  .to(element, { x: 100, duration: 1 })
  .to(element, { y: 100, duration: 1 }, '-=0.5')
  .to(element, { rotation: 360, duration: 1 });
```

#### Framer Motion Transform Pattern
```typescript
const y = useTransform(scrollProgress, [0, 1], [0, -500]);
const opacity = useTransform(scrollProgress, [0, 0.5, 1], [0, 1, 0]);
```

#### Spring Physics Pattern
```typescript
const smoothValue = useSpring(rawValue, {
  stiffness: 100,  // Higher = snappier
  damping: 30,     // Higher = less bounce
  restDelta: 0.001 // When to stop animating
});
```

---

## 🎯 Use Cases

### Magnetic Card Gallery
- Portfolio project showcases
- Product galleries
- Feature highlights
- Interactive dashboards

### Kinetic Typography
- Hero sections
- Brand reveals
- Loading screens
- Interactive headers

### Parallax Scroll Scene
- Storytelling pages
- Product launches
- Landing pages
- Case studies

---

## 🚀 Customization

### Magnetic Cards
- Modify `projects` array to add/remove cards
- Adjust `magneticStrength` by changing the `0.1` multiplier
- Change 3D rotation intensity with the `0.02` multiplier
- Customize colors via `project.color` gradient

### Kinetic Typography
- Change `text` constant to any string
- Adjust explosion `distance` for wider/tighter spread
- Modify `elastic.out(1, 0.5)` parameters for different bounce
- Add more animation modes (spiral, collapse, etc.)

### Parallax Scroll
- Add/remove layers in `layers` array
- Adjust `depth` values for different parallax speeds
- Modify scroll height via container `style={{ height: '300vh' }}`
- Customize ScrollTrigger `scrub` value for smoothness

---

## 📚 Learning Resources

### GSAP
- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Visualizer](https://greensock.com/ease-visualizer/)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [useScroll Hook](https://www.framer.com/motion/use-scroll/)
- [useTransform Hook](https://www.framer.com/motion/use-transform/)

---

## 🎨 Design Philosophy

These components embody the **animatAI** philosophy:

1. **Performance First**: GPU-accelerated, optimized for 60fps
2. **Declarative + Imperative**: Combine Framer Motion's declarative API with GSAP's imperative control
3. **Physics-Based**: Use springs and easing for natural motion
4. **Interactive**: Respond to user input in meaningful ways
5. **Production-Ready**: Built for real-world use, not just demos

---

## 🔥 What Makes These "Jaw-Dropping"

1. **Magnetic Cards**: The smooth magnetic attraction combined with 3D rotation creates a premium, tactile feel rarely seen in web interfaces

2. **Kinetic Typography**: The particle explosion and elastic reform is visually stunning and showcases advanced GSAP timeline orchestration

3. **Parallax Scroll**: The multi-layer depth with GSAP ScrollTrigger creates an immersive, cinematic scrolling experience

Each component pushes the boundaries of what's possible with web animations while maintaining excellent performance and usability.

---

## 📄 License

Built with **animatAI** - Elite Animation Architecture for Modern Web

**Powered by GSAP and Framer Motion**
