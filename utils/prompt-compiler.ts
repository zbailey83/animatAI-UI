import bestPractices from '@/data/best-practices.json';
import { ComponentSchema } from '@/data/types';

export function compilePrompt(component: ComponentSchema, ide: string = "Cursor") {
    const engine = component.engine as 'GSAP' | 'MOTION';
    const engineRules = bestPractices[engine];
    const ideSpecifics = bestPractices.AI_IDE_SPECIFICS;
    const ideRules = ideSpecifics[ide as keyof typeof ideSpecifics] || ideSpecifics.Cursor;

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
