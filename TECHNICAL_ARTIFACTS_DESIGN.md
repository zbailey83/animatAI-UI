# Gemini Technical Artifacts Theme - Implementation Guide

## Overview
Successfully implemented the **Gemini Technical Artifacts Theme** - a futuristic, technical design system emphasizing glassmorphism, subtle grids, and precise typography.

This theme provides a complete departure from Neo Brutalism, offering a sophisticated, technical aesthetic perfect for AI/ML applications.

## Design Philosophy

> "A technical, futuristic design system emphasizing transparency, fine borders, and precise typography."

### Core Principles
1. **Glassmorphism** - Translucent surfaces with backdrop blur
2. **Technical Precision** - Fine borders, radial grids, corner brackets
3. **Subtle Elegance** - Smooth animations, gentle glows
4. **Futuristic Aesthetic** - Schematic/camera viewfinder inspired elements

## Color System

### Light Mode (Technical Light)
```css
--bg-app: #fafafa           /* Main app background */
--bg-surface: #ffffff        /*Card/panel surfaces */
--bg-surface-hover: #f4f4f5  /* Hover state */

--text-primary: #09090b      /* Main text */
--text-secondary: #71717a    /* Secondary text */
--text-muted: #a1a1aa       /* Muted/disabled text */

--border-subtle: #e4e4e7    /* Subtle borders */
--border-default: #d4d4d8    /* Default borders */
--border-focus: #3b82f6      /* Focus/active state */
```

### Dark Mode (Technical Dark)
```css
--bg-app: #09090b           /* Main app background */
--bg-surface: #18181b        /* Card/panel surfaces */
--bg-surface-hover: #27272a  /* Hover state */

--text-primary: #fafafa      /* Main text */
--text-secondary: #a1a1aa    /* Secondary text */
--text-muted: #52525b        /* Muted/disabled text */

--border-subtle: #27272a    /* Subtle borders */
--border-default: #3f3f46    /* Default borders */
--border-focus: #3b82f6      /* Focus/active state */
```

### Accent Colors
```css
--accent-blue: #3b82f6       /* Primary accent - Blue */
--accent-blue-dim: rgba(59, 130, 246, 0.1)
--accent-green: #22c55e      /* Success states */
--accent-red: #ef4444        /* Error/alerts */
```

## Typography

### Font Families
- **Sans**: Inter, system-ui, sans-serif
- **Mono**: JetBrains Mono, monospace

### Weights
- Regular: 400
- Medium: 500
- Bold: 700

### Letter Spacing
- Tight: -0.025em
- Wide: 0.025em

## Key Components

### 1. Technical Grid Background
```css
.technical-grid {
  background-image: radial-gradient(circle, var(--border-default) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
}
```

**Usage**: Apply to main app background for subtle technical feel

### 2. Glass Panel
```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
}
```

**Usage**: Standard glassmorphic containers

### 3. Glass Card
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  border: 1px dashed var(--border-default);
  box-shadow: var(--shadow-float);
}
```

**Features**:
- Stronger blur (16px)
- Dashed borders
- Float shadow
- Hover effects (glow + lift)

### 4. Corner Brackets
```css
.corner-brackets
```

**Purpose**: Adds technical/schematic corner brackets (think camera viewfinder)
- Top-left and bottom-right corners
- Blue accent color
- Perfect for highlighting important sections

### 5. Tech Buttons

#### Standard Tech Button
```css
.tech-btn
```
- Glassmorphic background
- Border glow on hover
- Sweep animation effect

#### Primary Tech Button
```css
.tech-btn-primary
```
- Solid blue background
- Enhanced glow on hover
- High contrast

## Effects & Shadows

### Glass Effect
```css
backdrop-filter: blur(12px)
background: rgba(24, 24, 27, 0.5)  /* Dark mode */
background: rgba(255, 255, 255, 0.5)  /* Light mode */
```

### Shadows
```css
--shadow-glow: 0 0 20px rgba(59, 130, 246, 0.1)
--shadow-float: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

## Animations

### Spin Slow
```css
.spin-slow
```
- 3s linear infinite rotation
- Perfect for loading indicators

### Pulse Glow
```css
.pulse-glow
```
- Gentle pulsing box-shadow
- 2s cubic-bezier easing
- Subtle breathing effect

## Transitions

### Default
```css
all 0.3s ease-in-out
```

### Slow/Smooth
```css
all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)
```

## Utility Classes

### Border Gradient
```css
.border-gradient
```
Creates a gradient border effect (blue to transparent)

### Text Gradient
```css
.text-gradient
```
Gradient text from blue to green

## Component Examples

### Card with Corner Brackets
```html
<div class="glass-card corner-brackets p-6">
  <!-- Content -->
</div>
```

### Technical Section
```html
<div class="relative">
  <div class="technical-grid fixed inset-0 pointer-events-none"></div>
  <!-- Content -->
</div>
```

### Primary CTA
```html
<button class="tech-btn-primary px-6 py-3 rounded-xl">
  Get Started
</button>
```

### Glassmorphic Card
```html
<div class="glass-card p-8 rounded-xl">
  <h3 class="text-gradient">Title</h3>
  <p class="text-text-secondary">Description</p>
</div>
```

## Theme Toggle Compatibility

The design system fully supports light/dark mode switching via:
```html
<html data-theme="dark">
```

Or
```html
<html data-theme="light">
```

All CSS variables automatically adjust based on the `data-theme` attribute.

## Comparison: Neo Brutalism vs Technical Artifacts

| Feature | Neo Brutalism | Technical Artifacts |
|---------|---------------|---------------------|
| **Borders** | Thick (4-6px), solid | Thin (1px), subtle/dashed |
| **Shadows** | Hard offset (8-16px) | Soft glow + float |
| **Colors** | Vibrant, high contrast | Muted, professional |
| **Typography** | UPPERCASE, black (900) | Mixed case, medium (500) |
| **Background** | Simple grid | Radial dot grid |
| **Effects** | None | Glassmorphism, blur |
| **Aesthetic** | Raw, bold, punk | Refined, technical, futuristic |
| **Animations** | Sharp, instant | Smooth, eased |

## Implementation Checklist

To fully implement this theme across your app:

- [x] Update `globals.css` with new design tokens
- [ ] Redesign homepage with glass cards
- [ ] Update library page with corner brackets
- [  ] Replace brutalist buttons with tech buttons
- [ ] Add technical grid background
- [ ] Implement glassmorphic PromptCard
- [ ] Add corner brackets to featured sections
- [ ] Update ThemeToggle styling
- [ ] Add sweep animations to CTAs

## Best Practices

1. **Layering**: Stack glass panels carefully - too much blur creates visual confusion
2. **Contrast**: Ensure text has sufficient contrast against glass backgrounds
3. **Performance**: Backdrop-filter can be expensive - use sparingly
4. **Accessibility**: Maintain WCAG 2.1 AA contrast ratios (4.5:1 for normal text)
5. **Corner Brackets**: Use strategically on important elements, not everywhere

## Browser Support

- **backdrop-filter**: Modern browsers (Chrome 76+, Firefox 103+, Safari 9+)
- **Fallback**: Solid backgrounds with transparency for older browsers

## Next Steps

To complete the transformation:
1. Apply `.technical-grid` to main app container
2. Replace all `.brutalist-card` with `.glass-card`
3. Update all buttons to use `.tech-btn` or `.tech-btn-primary`
4. Add `.corner-brackets` to hero sections
5. Implement text gradients for headings
6. Test light/dark mode transitions

---

**Design Philosophy**: "Precision over boldness. Transparency over opacity. Future over past."
