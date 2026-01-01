🛠 AnimAI Library: Full Development Guide
1. Project Directory Structure
A clean structure is vital for scaling to 500+ components.

Plaintext

/animai-library
├── /data
│   ├── best-practices.json   # The "Bible" of GSAP/Motion rules
│   ├── components.ts         # The registry of 50+ component schemas
│   └── types.ts              # TypeScript interfaces for schemas
├── /utils
│   ├── prompt-compiler.ts    # The logic that merges data into prompts
│   └── clipboard.ts          # Utility for copy-to-clipboard actions
├── /components
│   ├── /ui                   # Shadcn base components
│   ├── /library              # Live interactive demos of the animations
│   └── PromptCard.tsx        # The main display card
└── /app
    ├── /library              # Main grid page
    └── page.tsx              # Landing page
2. Core Implementation Code
A. The Schema Definition (data/types.ts)
We define exactly what makes a component "amazing."

TypeScript

export type AnimationEngine = 'GSAP' | 'MOTION';

export interface ComponentSchema {
  id: string;
  title: string;
  category: 'Typography' | 'Pricing' | 'Scroll' | 'Interactions' | 'Nav';
  engine: AnimationEngine;
  difficulty: 'Basic' | 'Advanced' | 'Elite';
  intent: string;
  features: string[];
  logicHooks: string[];
  previewComponent: React.ReactNode; // The live demo
}
B. The Prompt Compiler (utils/prompt-compiler.ts)
This is the "Brain." It assembles the final prompt using the rules from our BestPractices.json.

TypeScript

import bestPractices from '@/data/best-practices.json';
import { ComponentSchema } from '@/data/types';

export function compilePrompt(component: ComponentSchema, ide: string = "Cursor") {
  const engineRules = bestPractices[component.engine];
  const ideRules = bestPractices.AI_IDE_SPECIFICS[ide as keyof typeof bestPractices.AI_IDE_SPECIFICS];

  return `
### AI INSTRUCTIONS FOR ${ide.toUpperCase()} ###
${ideRules}

TASK: Build a high-performance React component: "${component.title}".
DESCRIPTION: ${component.intent}

### MANDATORY TECHNICAL RULES (No Exceptions) ###
${engineRules.core_rules.map((r: string) => `- ${r}`).join('\n')}

### ANIMATION FEATURES TO INCLUDE ###
${component.features.map((f: string) => `- ${f}`).join('\n')}

### PERFORMANCE OPTIMIZATION ###
${engineRules.optimization.map((o: string) => `- ${o}`).join('\n')}

STYLING: Use Tailwind CSS. Ensure dark-mode compatibility.
  `.trim();
}
3. High-Value Component Example
Let's define your "ROI Calculator Slider" (#29) within the system.

data/components.ts
TypeScript

export const registry: ComponentSchema[] = [
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
  }
];
4. UI: The Library Grid
The frontend must be as fast and fluid as the components it sells.

app/library/page.tsx
TypeScript

import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">ANIMAI LIBRARY</h1>
        <p className="text-zinc-400 mt-2">Elite prompts for AI-first design engineers.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registry.map((comp) => (
          <PromptCard key={comp.id} component={comp} />
        ))}
      </div>
    </main>
  );
}
5. Deployment & Strategy Roundup
Framework: Next.js 15 + Tailwind CSS.

USP: You don't sell code; you sell Architectural Certainty. The AI can't mess up if the prompt is this structured.