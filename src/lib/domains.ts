import { Domain } from '@/types';

export const domains: Domain[] = [
  {
    id: 'slaap',
    title: 'Sleep',
    icon: '🌙',
    description: 'Sleep is the foundation of health. During sleep, your body recovers, your brain consolidates memories, and hormones that affect nearly every part of well-being are regulated. Yet many people consistently sleep too little or too poorly. In this domain, you will learn what science says about optimizing sleep, from environment and light exposure to caffeine timing and consistent rhythm.',
    color: '#3B82F6',
    slug: 'slaap',
    sortOrder: 1,
  },
  {
    id: 'voeding',
    title: 'Nutrition',
    icon: '🥦',
    description: 'Nutrition is more than counting calories. What you eat, when you eat, and how food is prepared all affect your energy, mood, gut health, and long-term outcomes. In this domain, you will find science-backed insights on macro- and micronutrients, meal timing, gut health, and more. No hype diets, just clear knowledge you can apply right away.',
    color: '#22C55E',
    slug: 'voeding',
    sortOrder: 2,
  },
  {
    id: 'beweging',
    title: 'Movement',
    icon: '🏋️',
    description: 'Movement is one of the most powerful medicines available, and it requires no prescription. Whether you want to start strength training, improve cardio, or simply sit less, this domain gives you the scientific foundation for effective movement. From minimum effective dose to recovery strategy, from warm-up to identifying overtraining risk.',
    color: '#A855F7',
    slug: 'beweging',
    sortOrder: 3,
  },
];

export function getDomain(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}
