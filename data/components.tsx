import { ComponentSchema } from './types';
import { ROICalculatorPreview } from '@/components/library/ROICalculatorPreview';
import { KineticTypography } from '@/components/library/KineticTypography';
import { MagneticDock } from '@/components/library/MagneticDock';
import { ParallaxHero } from '@/components/library/ParallaxHero';
import { MagneticButton } from '@/components/library/MagneticButton';
import { VelocityTextWarp } from '@/components/library/VelocityTextWarp';
import { ScrambleReveal } from '@/components/library/ScrambleReveal';
import { GlitchReveal } from '@/components/library/GlitchReveal';
import { TypewriterDeluxe } from '@/components/library/TypewriterDeluxe';
import { MorphingMenu } from '@/components/library/MorphingMenu';
import { DirectionalTabs } from '@/components/library/DirectionalTabs';
import { PulsePricing } from '@/components/library/PulsePricing';
import { InfiniteBrandCloud } from '@/components/library/InfiniteBrandCloud';
import { GlassmorphGlare } from '@/components/library/GlassmorphGlare';
import { DynamicMesh } from '@/components/library/DynamicMesh';
import { VariableFontWeight } from '@/components/library/VariableFontWeight';
import { SharedLayoutBento } from '@/components/library/SharedLayoutBento';
import { CommandPalette } from '@/components/library/CommandPalette';
import { CurrencyToggle } from '@/components/library/CurrencyToggle';
import { HoldToConfirm } from '@/components/library/HoldToConfirm';
import { TestimonialWall } from '@/components/library/TestimonialWall';
import { LayeredCardReveal } from '@/components/library/LayeredCardReveal';
import { ProgressSVGPath } from '@/components/library/ProgressSVGPath';
import { SVGDonutChart } from '@/components/library/SVGDonutChart';
import { StackingCardGallery } from '@/components/library/StackingCardGallery';
// New preview components
import { LiquidTextDistortion } from '@/components/library/LiquidTextDistortion';
import { StaggeredSplitText } from '@/components/library/StaggeredSplitText';
import { CharacterFloat } from '@/components/library/CharacterFloat';
import { HighlightReveal } from '@/components/library/HighlightReveal';
import { ElasticDrawer } from '@/components/library/ElasticDrawer';
import { AppleIntelligenceRipple } from '@/components/library/AppleIntelligenceRipple';
import { FloatingActionOrb } from '@/components/library/FloatingActionOrb';
import { StickyComparisonMatrix } from '@/components/library/StickyComparisonMatrix';
import { MultiStepForm } from '@/components/library/MultiStepForm';
import { LivePollBars } from '@/components/library/LivePollBars';
import { SlotMachineReveal } from '@/components/library/SlotMachineReveal';
import { TrustTicker } from '@/components/library/TrustTicker';
import { HorizontalCanvasScroll } from '@/components/library/HorizontalCanvasScroll';
import { SectionZoom } from '@/components/library/SectionZoom';
import { StickyFeatureSpotlight } from '@/components/library/StickyFeatureSpotlight';
import { VideoPeek } from '@/components/library/VideoPeek';
import { ProgressCircle } from '@/components/library/ProgressCircle';
import { AccordionAutoScroll } from '@/components/library/AccordionAutoScroll';
import { GravityIcons } from '@/components/library/GravityIcons';
import { GrainTransition } from '@/components/library/GrainTransition';
import { CursorBlobSpotlight } from '@/components/library/CursorBlobSpotlight';
import { NoiseImageReveal } from '@/components/library/NoiseImageReveal';
import { NodeParticles } from '@/components/library/NodeParticles';
import { TextPathFollower } from '@/components/library/TextPathFollower';
import { BreadcrumbProgress } from '@/components/library/BreadcrumbProgress';
import { InteractiveSitemap } from '@/components/library/InteractiveSitemap';

export const registry: ComponentSchema[] = [
    // --- Typography & Brand Identity ---
    {
        id: "typo-hero-001",
        title: "Kinetic Typography Hero",
        category: "Typography",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "A hero section where text splits and animates with stagger effects on scroll.",
        features: [
            "Staggered entrance animations",
            "Letter-by-letter split text effect",
            "Parallax scroll integration"
        ],
        logicHooks: ["useScroll", "useTransform", "AnimatePresence"],
        previewComponent: <KineticTypography />
    },
    {
        id: "typo-velocity-002",
        title: "Velocity Text Warp",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Text that skews and scales based on the velocity of the scroll, creating a physical sense of speed.",
        features: [
            "Scroll velocity tracking",
            "Dynamic SkewX and ScaleY properties",
            "Inertia-based return to rest state"
        ],
        logicHooks: ["useGSAP", "ScrollTrigger", "Observer"],
        previewComponent: <VelocityTextWarp />
    },
    {
        id: "typo-scramble-003",
        title: "Scramble & Reveal",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Text that scrambles through random glyphs before resolving to the final characters.",
        features: [
            "Random character cycling",
            "GSAP Snap for character resolution",
            "Configurable scramble duration"
        ],
        logicHooks: ["useGSAP", "TextPlugin", "gsap.utils.random"],
        previewComponent: <ScrambleReveal />
    },
    {
        id: "typo-variable-004",
        title: "Variable Font Weight",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "Typography that transitions weight based on scroll position using variable fonts.",
        features: [
            "CSS font-variation-settings control",
            "Smooth weight transitions (100-900)",
            "ScrollTrigger integration"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "gsap.to"],
        previewComponent: <VariableFontWeight />
    },
    {
        id: "typo-glitch-006",
        title: "Glitch-Effect Reveal",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Cyberpunk-style text reveal using clip-paths and rapid offset changes.",
        features: [
            "Clip-path polygon animation",
            "Randomized X/Y offsets (jitter)",
            "Chromatic aberration simulation"
        ],
        logicHooks: ["useGSAP", "gsap.timeline", "RoughEase"],
        previewComponent: <GlitchReveal />
    },
    {
        id: "typo-liquid-005",
        title: "Liquid Text Distortion",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Elite",
        intent: "Text with SVG displacement filters creating a liquid morphing effect.",
        features: [
            "feTurbulence baseFrequency animation",
            "feDisplacementMap SVG filter",
            "Hover-triggered distortion waves"
        ],
        logicHooks: ["useGSAP", "AttrPlugin", "MouseEvents"]
    },
    {
        id: "typo-typewriter-010",
        title: "Typewriter Deluxe",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "Classic typewriter effect with blinking cursor and configurable typing speed.",
        features: [
            "Character-by-character reveal",
            "Animated cursor blink",
            "Configurable typing speed"
        ],
        logicHooks: ["useGSAP", "TextPlugin", "gsap.timeline"],
        previewComponent: <TypewriterDeluxe />
    },

    // --- Navigation & Layout ---
    {
        id: "nav-bento-011",
        title: "Shared Layout Bento",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Elite",
        intent: "A bento-grid layout where expanding items push siblings smoothly using shared layout animations.",
        features: [
            "Motion layoutId transitions",
            "Sibling element flow handling",
            "Smooth expand/collapse states"
        ],
        logicHooks: ["layoutId", "AnimatePresence", "layout prop"],
        previewComponent: <SharedLayoutBento />
    },
    {
        id: "nav-dock-012",
        title: "Magnetic Dock",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "A macOS-inspired dock where icons scale up exponentially based on cursor proximity.",
        features: [
            "Mouse distance calculation",
            "Exponential scaling curve",
            "Smooth spring physics"
        ],
        logicHooks: ["useMotionValue", "useTransform", "useSpring"],
        previewComponent: <MagneticDock />
    },
    {
        id: "nav-morphing-013",
        title: "Morphing Menu Icon",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "Hamburger menu that morphs into an X using SVG path animations.",
        features: [
            "SVG path 'd' attribute morphing",
            "Smooth toggle animation",
            "Reverse animation support"
        ],
        logicHooks: ["motion.div", "animate", "AnimatePresence"],
        previewComponent: <MorphingMenu />
    },
    {
        id: "nav-tabs-014",
        title: "Directional Tabs",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "Tab navigation with a sliding highlight that knows which direction to move from.",
        features: [
            "Previous/current tab tracking",
            "Directional slide animation",
            "Smooth indicator transitions"
        ],
        logicHooks: ["useState", "AnimatePresence", "layoutId"],
        previewComponent: <DirectionalTabs />
    },
    {
        id: "nav-drawer-019",
        title: "Elastic Drawer",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "A slide-out drawer with a 'snap-back' elastic effect when dragged or opened.",
        features: [
            "Drag gesture support",
            "High damping spring transition",
            "Backdrop blur integration"
        ],
        logicHooks: ["useDragControls", "AnimatePresence", "useCycle"]
    },
    {
        id: "nav-command-018",
        title: "Command Palette",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "A command-K style search palette with blur backdrop and smooth entry/exit.",
        features: [
            "Keyboard shortcut triggering",
            "Backdrop blur overlay",
            "Fuzzy search integration ready"
        ],
        logicHooks: ["AnimatePresence", "useEffect", "backdrop-filter"],
        previewComponent: <CommandPalette />
    },

    // --- SaaS Pricing & Conversion ---
    {
        id: "price-pulse-021",
        title: "Pulse 3-Tier Pricing",
        category: "Pricing",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "Pricing cards with animated gradient borders that pulse on hover.",
        features: [
            "Repeating-conic-gradient borders",
            "Border-width spring animation",
            "Recommended badge highlight"
        ],
        logicHooks: ["whileHover", "useSpring", "CSS custom properties"],
        previewComponent: <PulsePricing />
    },
    {
        id: "roi-calc-029",
        title: "SaaS ROI Calculator",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Elite",
        intent: "An interactive calculator where dragging a slider updates a dynamic bar chart representing money saved over 12 months.",
        features: [
            "Smooth scrubbing of numbers using GSAP Snap and TextPlugin",
            "Interactive SVG bar chart that grows/shrinks with spring easing",
            "Magnetic handle on the slider for tactile feedback"
        ],
        logicHooks: ["useGSAP", "contextSafe", "Draggable"],
        previewComponent: <ROICalculatorPreview />
    },
    {
        id: "price-currency-023",
        title: "Currency Toggle",
        category: "Pricing",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "Animated currency switcher with rolling digit transitions.",
        features: [
            "Vertical digit rolling animation",
            "useMotionValue for smooth transitions",
            "Multi-currency support"
        ],
        logicHooks: ["useMotionValue", "useTransform", "AnimatePresence"],
        previewComponent: <CurrencyToggle />
    },
    {
        id: "price-matrix-024",
        title: "Sticky Comparison Matrix",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "A complex pricing table where headers stick and features checkmarks draw themselves on scroll.",
        features: [
            "Sticky header positioning",
            "SVG DrawSVG animation for checkmarks",
            "Row highlighting on hover"
        ],
        logicHooks: ["ScrollTrigger", "DrawSVGPlugin", "useGSAP"]
    },
    {
        id: "price-hold-025",
        title: "Hold-to-Confirm Action",
        category: "Pricing",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "A destructive action button that requires holding for 2 seconds to confirm.",
        features: [
            "Progress bar animation",
            "Reversible on mouse up",
            "Visual confirmation state"
        ],
        logicHooks: ["useState", "MouseEvents", "motion.div"],
        previewComponent: <HoldToConfirm />
    },
    {
        id: "price-testimonial-026",
        title: "3D Testimonial Wall",
        category: "Pricing",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "A grid of testimonials that tilt in 3D based on mouse position.",
        features: [
            "Mouse-driven rotateX/Y transforms",
            "Perspective container",
            "Smooth spring transitions"
        ],
        logicHooks: ["useMotionValue", "useTransform", "useSpring"],
        previewComponent: <TestimonialWall />
    },

    // --- Immersive Scroll ---
    {
        id: "scroll-canvas-031",
        title: "Horizontal Canvas Scroll",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "A section that pins vertically while moving content horizontally, emulating a canvas pan.",
        features: [
            "Vertical pin with horizontal translation",
            "Scrub-based animation",
            "Dynamic container width calculation"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "gsap.to"]
    },
    {
        id: "scroll-cards-032",
        title: "Layered Card Reveal",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Cards that stack and reveal sequentially as you scroll, like Apple product pages.",
        features: [
            "Pin container with individual card reveals",
            "yPercent transitions from 100 to 0",
            "Scrub-controlled timing"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "pin: true"],
        previewComponent: <LayeredCardReveal />
    },
    {
        id: "scroll-parallax-033",
        title: "3D Parallax Hero",
        category: "Scroll",
        engine: "MOTION",
        difficulty: "Elite",
        intent: "A multi-layered hero section where elements move at different speeds and depths (Z-axis).",
        features: [
            "Mouse or Scroll driven parallax",
            "Perspective and RotateX transforms",
            "Layered depth-of-field blur"
        ],
        logicHooks: ["useScroll", "useTransform", "useSpring"],
        previewComponent: <ParallaxHero />
    },
    {
        id: "scroll-svg-034",
        title: "Progress SVG Path",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "An SVG path that draws itself as the user scrolls through content.",
        features: [
            "getTotalLength() calculation",
            "stroke-dashoffset animation",
            "Linked to scroll position"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "scrub: true"],
        previewComponent: <ProgressSVGPath />
    },
    {
        id: "scroll-zoom-035",
        title: "Section Zoom",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "A section that scales from small to fullscreen as you scroll into it.",
        features: [
            "Scale transformation (1.0 to 1.5)",
            "Pin during animation",
            "Smooth scrubbing"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "pin: true"]
    },
    {
        id: "scroll-brand-039",
        title: "Infinite Brand Cloud",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "A continuous horizontal ticker of brand logos that loops seamlessly.",
        features: [
            "Duplicate list for seamless loop",
            "xPercent animation from 0 to -100",
            "Pause on hover support"
        ],
        logicHooks: ["useGSAP", "gsap.to", "repeat: -1"],
        previewComponent: <InfiniteBrandCloud />
    },

    // --- Micro-Interactions ---
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
    },
    {
        id: "inter-gravity-042",
        title: "Gravity Icons",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Icons that fall and bounce with realistic physics simulation.",
        features: [
            "Velocity + Gravity calculation",
            "Ground collision detection",
            "0.7 bounce dampening factor"
        ],
        logicHooks: ["useGSAP", "gsap.ticker", "Physics engine"]
    },
    {
        id: "inter-glass-043",
        title: "Glassmorphism Glare",
        category: "Interactions",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "Glass-style cards with a dynamic light glare that follows the cursor.",
        features: [
            "Mouse position tracking",
            "CSS custom property updates",
            "Radial-gradient glare effect"
        ],
        logicHooks: ["useMotionValue", "CSS variables", "mousemove"],
        previewComponent: <GlassmorphGlare />
    },
    {
        id: "inter-donut-046",
        title: "SVG Donut Chart",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Animated donut chart with staggered segment reveals.",
        features: [
            "stroke-dashoffset animation",
            "Percentage-based sizing",
            "Stagger delay between segments"
        ],
        logicHooks: ["useGSAP", "stagger", "SVG circle"],
        previewComponent: <SVGDonutChart />
    },
    {
        id: "inter-noise-047",
        title: "Noise Image Reveal",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "An image reveal effect that dissolves a static noise overlay using SVG filters.",
        features: [
            "SVG turbulence filter animation",
            "Opacity and scale transitions",
            "Performance optimized canvas fallback"
        ],
        logicHooks: ["useGSAP", "AttrPlugin", "ScrollTrigger"]
    },
    {
        id: "inter-mesh-048",
        title: "Dynamic Mesh Gradient",
        category: "Interactions",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "Animated blob gradient background with smooth morphing shapes.",
        features: [
            "4-5 colorful blur(80px) blobs",
            "Slow random loop animation",
            "Background ambient movement"
        ],
        logicHooks: ["motion.div", "animate", "filter: blur"],
        previewComponent: <DynamicMesh />
    },

    // Additional Typography Components
    {
        id: "typo-split-004",
        title: "Staggered Split-Text",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Break text into lines that animate with rotationX offsets and staggered delays.",
        features: [
            "Line-by-line text splitting",
            "3D rotation offsets",
            "Staggered animation timing"
        ],
        logicHooks: ["SplitText", "useGSAP", "stagger"]
    },
    {
        id: "typo-path-007",
        title: "Text Path Follower",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Text that animates along a custom SVG path curve.",
        features: [
            "MotionPath plugin integration",
            "Custom SVG path drawing",
            "Position-based text alignment"
        ],
        logicHooks: ["MotionPathPlugin", "useGSAP", "SVG paths"]
    },
    {
        id: "typo-float-008",
        title: "Character Float",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "Individual characters floating in random Y positions with infinite loops.",
        features: [
            "Random Y-axis movement",
            "Yoyo animation pattern",
            "Per-character timing variation"
        ],
        logicHooks: ["useGSAP", "yoyo: true", "random utilities"]
    },
    {
        id: "typo-highlight-009",
        title: "Highlight Reveal",
        category: "Typography",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "Background highlighter effect that draws behind text on scroll.",
        features: [
            "Width animation 0% to 100%",
            "ScrollTrigger activation",
            "CSS pseudo-element styling"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "::after pseudo"]
    },

    // Additional Navigation Components
    {
        id: "nav-ripple-015",
        title: "Apple Intelligence Ripple",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "Border glow effect with conic-gradient that rotates and responds to cursor.",
        features: [
            "Rotating conic-gradient",
            "Blur intensity animation",
            "Cursor proximity detection"
        ],
        logicHooks: ["useMotionValue", "animate", "conic-gradient"]
    },
    {
        id: "nav-fab-016",
        title: "Floating Action Orb",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "FAB button that expands into a radial menu with staggered icon reveals.",
        features: [
            "Radial coordinate system",
            "Polar to cartesian conversion",
            "Staggered spring animations"
        ],
        logicHooks: ["useState", "stagger", "polar math"]
    },
    {
        id: "nav-breadcrumb-017",
        title: "Breadcrumb Progress",
        category: "Nav",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Navigation breadcrumb with progress line and icon morphing.",
        features: [
            "scrollProgress linked animation",
            "strokeDashoffset control",
            "Icon state transitions"
        ],
        logicHooks: ["ScrollTrigger", "useGSAP", "scrub"]
    },
    {
        id: "nav-sitemap-020",
        title: "Interactive Sitemap",
        category: "Nav",
        engine: "MOTION",
        difficulty: "Elite",
        intent: "Expanding node-tree map with glowing SVG connection lines.",
        features: [
            "SVG line animations",
            "stroke-dasharray pulsing",
            "Node expansion states"
        ],
        logicHooks: ["AnimatePresence", "layoutId", "SVG manipulation"]
    },

    // Additional Pricing/Conversion Components
    {
        id: "price-onboarding-027",
        title: "Multi-Step Form",
        category: "Pricing",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "Onboarding form with fluid height transitions between steps.",
        features: [
            "height: 'auto' animations",
            "Step navigation flow",
            "Form validation states"
        ],
        logicHooks: ["AnimatePresence", "mode: 'wait'", "useState"]
    },
    {
        id: "price-poll-028",
        title: "Live Poll Bars",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Real-time poll results with bars that animate with elastic endings.",
        features: [
            "Elastic ease animation",
            "Dynamic data binding",
            "Impact-style momentum"
        ],
        logicHooks: ["useGSAP", "elastic.out", "data updates"]
    },
    {
        id: "price-slot-029",
        title: "Slot Machine Reveal",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Number counter with slot-machine style vertical spinning digits.",
        features: [
            "Vertical digit columns",
            "yPercent: -900% animation",
            "Precision landing timing"
        ],
        logicHooks: ["useGSAP", "yPercent", "timeline"]
    },
    {
        id: "price-ticker-030",
        title: "Trust Ticker",
        category: "Pricing",
        engine: "GSAP",
        difficulty: "Basic",
        intent: "Continuous ticker of trust badges that can slow or pause on hover.",
        features: [
            "Infinite seamless loop",
            "timeScale manipulation",
            "Pause on hover interaction"
        ],
        logicHooks: ["useGSAP", "repeat: -1", "ease: none"]
    },

    // Additional Scroll Components
    {
        id: "scroll-spotlight-036",
        title: "Sticky Feature Spotlight",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Pin right-side container while left text changes trigger image swaps.",
        features: [
            "Pin scrollTrigger setup",
            "Opacity-based image transitions",
            "Text-triggered sections"
        ],
        logicHooks: ["ScrollTrigger", "pin: true", "opacity toggles"]
    },
    {
        id: "scroll-video-037",
        title: "Video Peek",
        category: "Scroll",
        engine: "MOTION",
        difficulty: "Advanced",
        intent: "Image that expands to fullscreen while fading in video element.",
        features: [
            "layoutId transitions",
            "fixed inset positioning",
            "Video element integration"
        ],
        logicHooks: ["layout", "AnimatePresence", "video controls"]
    },
    {
        id: "scroll-progress-038",
        title: "Progress Circle",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Circular progress indicator showing scroll percentage.",
        features: [
            "Scroll position calculation",
            "Circular stroke-dashoffset",
            "Fixed or cursor-following position"
        ],
        logicHooks: ["ScrollTrigger", "scrub: true", "SVG circle"]
    },
    {
        id: "scroll-accordion-040",
        title: "Accordion Auto-Scroll",
        category: "Scroll",
        engine: "GSAP",
        difficulty: "Intermediate",
        intent: "Accordion items that auto-scroll into view when expanded.",
        features: [
            "scrollTo plugin usage",
            "offsetY positioning",
            "Smooth scroll animation"
        ],
        logicHooks: ["ScrollToPlugin", "gsap.to", "window scroll"]
    },

    // Additional Interaction Components
    {
        id: "inter-grain-044",
        title: "Grain Transition",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Advanced",
        intent: "Screen wipe transition using animated grain/noise SVG filter.",
        features: [
            "SVG noise filter seed animation",
            "Rapid attribute changes",
            "Opacity wipe effect"
        ],
        logicHooks: ["AttrPlugin", "useGSAP", "SVG filters"]
    },
    {
        id: "inter-cursor-045",
        title: "Cursor Blob Spotlight",
        category: "Interactions",
        engine: "MOTION",
        difficulty: "Elite",
        intent: "Cursor that reveals hidden content with mix-blend-mode and blur.",
        features: [
            "background-attachment: fixed",
            "mix-blend-mode: difference",
            "Cursor tracking div"
        ],
        logicHooks: ["useMotionValue", "mousemove", "blend modes"]
    },
    {
        id: "inter-stack-049",
        title: "Stacking Card Gallery",
        category: "Interactions",
        engine: "MOTION",
        difficulty: "Intermediate",
        intent: "Cards stacked that fan out with rotation on hover.",
        features: [
            "z-index layering",
            "Individual rotate values",
            "Hover-triggered spread"
        ],
        logicHooks: ["whileHover", "stagger", "rotation transforms"],
        previewComponent: <StackingCardGallery />
    },
    {
        id: "inter-particles-050",
        title: "Node Particles",
        category: "Interactions",
        engine: "GSAP",
        difficulty: "Elite",
        intent: "Interactive particle nodes that flee from cursor position.",
        features: [
            "Vector calculation from cursor",
            "Force application physics",
            "20-30 div node management"
        ],
        logicHooks: ["gsap.ticker", "mousemove", "vector math"]
    }
];
