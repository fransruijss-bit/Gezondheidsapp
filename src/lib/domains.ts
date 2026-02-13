import { Domain } from '@/types';

export const domains: Domain[] = [
  {
    id: 'slaap',
    title: 'Slaap',
    icon: '🌙',
    description: 'Slaap is de basis van je gezondheid. Tijdens de slaap herstelt je lichaam, consolideert je brein herinneringen en reguleert het hormonen die invloed hebben op bijna elk aspect van je welzijn. Toch slaapt een groot deel van de bevolking structureel te kort of te slecht. In dit domein ontdek je wat de wetenschap zegt over het optimaliseren van je slaap — van je slaapomgeving en lichtblootstelling tot het effect van cafeïne en het belang van een consistent ritme.',
    color: '#3B82F6',
    slug: 'slaap',
    sortOrder: 1,
  },
  {
    id: 'voeding',
    title: 'Voeding',
    icon: '🥦',
    description: 'Voeding is meer dan alleen calorieën tellen. Wat je eet, wanneer je eet en hoe je voedsel is bereid — het heeft allemaal invloed op je energie, stemming, darmen, en langetermijngezondheid. In dit domein vind je wetenschappelijk onderbouwde inzichten over macro- en micronutriënten, maaltijdtiming, darmgezondheid, en meer. Geen diëten of hypes, maar heldere kennis die je direct kunt toepassen.',
    color: '#22C55E',
    slug: 'voeding',
    sortOrder: 2,
  },
  {
    id: 'beweging',
    title: 'Beweging',
    icon: '🏋️',
    description: 'Beweging is het krachtigste medicijn dat bestaat — en je hebt er geen recept voor nodig. Of je nu wilt beginnen met krachttraining, je cardio wilt verbeteren, of simpelweg minder wilt zitten: in dit domein vind je de wetenschappelijke basis voor effectieve beweging. Van de minimale effectieve dosis tot herstelstrategieën, van opwarmen tot het herkennen van overtraining.',
    color: '#A855F7',
    slug: 'beweging',
    sortOrder: 3,
  },
];

export function getDomain(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}
