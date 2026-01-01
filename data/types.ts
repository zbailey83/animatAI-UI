import { ReactNode } from "react";

export type AnimationEngine = 'GSAP' | 'MOTION';

export interface ComponentSchema {
  id: string;
  title: string;
  category: 'Typography' | 'Pricing' | 'Scroll' | 'Interactions' | 'Nav';
  engine: AnimationEngine;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced' | 'Elite';
  intent: string;
  features: string[];
  logicHooks: string[];
  previewComponent?: ReactNode;
}
