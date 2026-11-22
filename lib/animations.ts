/**
 * Animation tokens and helper utilities
 * Motion: Filter chips with layoutId, accordions, modals, mobile drawers, hover/press
 *
 * Rules:
 * - Only transform and opacity
 * - Durations 0.4–0.9s, ease power3.out / expo.out; stagger 0.04–0.08s
 * - prefers-reduced-motion: simple fades or disabled
 */

export const EASE = {
  power3Out: [0.215, 0.61, 0.355, 1], // approximate cubic-bezier for power3.out
  expoOut: [0.16, 1, 0.3, 1],
  gentle: [0.25, 0.1, 0.25, 1],
  spring: {
    type: 'spring',
    damping: 24,
    stiffness: 280,
  },
} as const;

export const DURATION = {
  instant: 0.15,
  fast: 0.3,
  standard: 0.5,
  deliberate: 0.8,
  slow: 1.1,
} as const;

export const STAGGER = {
  subtle: 0.04,
  standard: 0.07,
  pronounced: 0.1,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
