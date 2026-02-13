import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B08',
  domainId: 'beweging',
  title: 'Trainingsfrequentie',
  slug: 'trainingsfrequentie',
  description: 'Optimale frequentie per spiergroep, minimale dosis',
  introduction:
    'Trainingsfrequentie — hoe vaak je traint per week en per spiergroep — is een van de belangrijkste variabelen in programmaontwerp. De optimale frequentie hangt af van trainingservaring, volume per sessie en herstelmogelijkheden. Dit onderwerp helpt je de juiste balans te vinden.',
  sortOrder: 8,
  evidenceScore: 3,
  tags: [
    'trainingsfrequentie',
    'trainingsdagen',
    'spiergroep',
    'split',
    'full body',
    'upper lower',
    'push pull legs',
    'schema',
    'minimale dosis',
    'trainingsplanning',
  ],
  crosslinks: ['B01', 'B05', 'V03', 'S01'],
  insights: [
    {
      id: 'B08-I01',
      topicId: 'B08',
      sortOrder: 1,
      action:
        'Train elke spiergroep 2–3 keer per week voor optimale hypertrofie door het trainingsvolume te verdelen over meerdere sessies.',
      explanation: `## Optimale frequentie voor spierhypertrofie

De **optimale trainingsfrequentie** voor spierhypertrofie ligt bij 2–3 sessies per spiergroep per week. Dit is niet omdat meer sessies per se beter zijn, maar omdat het verdelen van het totale weekvolume over meer sessies de kwaliteit per set verhoogt.

### Mechanisme

Na een krachttraining is de **musculaire eiwitsynthese (MPS)** verhoogd gedurende 24–72 uur, afhankelijk van trainingsniveau:
- **Beginners**: MPS verhoogd tot 72 uur → 2× per week volstaat
- **Gevorderden**: MPS verhoogd tot 24–48 uur → 3× per week is effectiever

Door vaker te trainen met minder volume per sessie:
- Blijft de **MPS vaker gestimuleerd** over de week
- Daalt de **vermoeidheidsaccumulatie** per sessie, waardoor latere sets effectiever zijn
- Verbetert de **motorische leercomponent** door meer oefenmomenten

### Praktische toepassing

Aanbevolen trainingsschema's per niveau:
- **Beginner** (0–1 jaar): Full body, 3×/week (ma-wo-vr)
- **Gemiddeld** (1–3 jaar): Upper/Lower split, 4×/week
- **Gevorderd** (3+ jaar): Push/Pull/Legs, 6×/week of Upper/Lower 4×/week met hoger volume

Richtlijnen per spiergroep per week:
- **Minimaal**: 4–6 sets (onderhoud)
- **Optimaal**: 10–20 sets (groei)
- **Maximaal**: 20–25 sets (tijdelijke volumefase)

### Impact

Schoenfeld et al. (2016) concludeerden dat training van spiergroepen 2× per week significant meer hypertrofie oplevert dan 1× per week bij gelijk totaalvolume.`,
      evidenceScore: 3,
      studyTypeSummary: '2 meta-analyses',
      isPremium: false,
      papers: [
        {
          id: 'B08-I01-P01',
          title:
            'Effects of Resistance Training Frequency on Measures of Muscle Hypertrophy: A Systematic Review and Meta-Analysis',
          authors: 'Schoenfeld BJ, Ogborn D, Krieger JW',
          year: 2016,
          journal: 'Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 1557,
          conclusion:
            'Training van spiergroepen twee keer per week is superieur aan één keer per week voor hypertrofie.',
          doi: '10.1007/s40279-016-0543-8',
        },
        {
          id: 'B08-I01-P02',
          title:
            'Higher training frequency is important for gaining muscular strength under volume-matched training',
          authors: 'Grgic J, Schoenfeld BJ, Davies TB, Lazinica B, Krieger JW, Pedisic Z',
          year: 2018,
          journal: 'International Journal of Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 486,
          conclusion:
            'Een hogere trainingsfrequentie bij gelijk volume leidt tot grotere krachtwinst, met name bij goed getrainde individuen.',
          doi: '10.1055/a-0713-2109',
        },
      ],
    },
    {
      id: 'B08-I02',
      topicId: 'B08',
      sortOrder: 2,
      action:
        'Kies een trainingssplit die past bij je beschikbare tijd: full body bij 2–3 dagen, split bij 4–6 dagen per week.',
      explanation: `## Trainingssplits: wetenschap en praktijk

Een **trainingssplit** bepaalt hoe je spiergroepen over de week verdeelt. De beste split is degene die je **consistent kunt volhouden** en die past bij je tijdschema en herstelmogelijkheden.

### Mechanisme

De keuze van split beïnvloedt:
- **Frequentie per spiergroep**: hogere frequentie bij full body (elke spiergroep 3×/week) vs. lagere bij bro-split (1×/week)
- **Volume per sessie**: lager per sessie bij hogere frequentie, wat de kwaliteit per set verhoogt
- **Hersteldynamiek**: meer tijd tussen sessies voor dezelfde spiergroep bij lagere frequentie
- **Sessieduur**: full body sessies duren langer; splits zijn korter maar vereisen meer trainingsdagen

### Praktische toepassing

**Full body (2–3 dagen/week):**
- Ideaal voor beginners en mensen met beperkte tijd
- Elke sessie: 1–2 oefeningen per spiergroep
- Voorbeeld: ma-wo-vr

**Upper/Lower (4 dagen/week):**
- Goede balans tussen frequentie en hersteltijd
- Upper: borst, rug, schouders, armen
- Lower: quadriceps, hamstrings, billen, kuiten
- Voorbeeld: ma-di-do-vr

**Push/Pull/Legs (3–6 dagen/week):**
- Push: borst, schouders, triceps
- Pull: rug, biceps
- Legs: benen, billen
- Voorbeeld: 6 dagen on, 1 dag off (rotatie)

### Impact

Onderzoek toont geen significant verschil in hypertrofie tussen splits wanneer het totale weekvolume en de frequentie per spiergroep gelijk zijn. Kies de split die het beste bij je levensstijl past.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B08-I02-P01',
          title:
            'Comparison of muscle hypertrophy following 6-month of continuous and periodic strength training',
          authors: 'Ogasawara R, Yasuda T, Ishii N, Abe T',
          year: 2013,
          journal: 'European Journal of Applied Physiology',
          studyType: 'RCT',
          sampleSize: 14,
          conclusion:
            'De totale trainingsfrequentie en het volume zijn belangrijker dan de specifieke split voor hypertrofie-uitkomsten.',
          doi: '10.1007/s00421-012-2511-9',
        },
        {
          id: 'B08-I02-P02',
          title:
            'Resistance Training Volume Enhances Muscle Hypertrophy but Not Strength in Trained Men',
          authors: 'Schoenfeld BJ, Contreras B, Krieger J, Grgic J, Delcastillo K, Belliard R',
          year: 2019,
          journal: 'Medicine and Science in Sports and Exercise',
          studyType: 'RCT',
          sampleSize: 45,
          conclusion:
            'Hogere wekelijkse volumes leidden tot meer hypertrofie ongeacht de splitverdeling, mits de totale belasting gelijk was.',
          doi: '10.1249/MSS.0000000000001764',
        },
      ],
    },
    {
      id: 'B08-I03',
      topicId: 'B08',
      sortOrder: 3,
      action:
        'Train als minimum 2 krachttrainingssessies per week om spiermassa te behouden en gezondheidsvoordelen te verkrijgen.',
      explanation: `## Minimale frequentie voor gezondheid

De **WHO-richtlijnen** adviseren minimaal 2 krachttrainingssessies per week voor alle belangrijke spiergroepen. Dit is de minimale dosis voor substantiële gezondheidsvoordelen, zelfs voor mensen die geen specifieke fitnessdoelen hebben.

### Mechanisme

Twee krachttrainingssessies per week bieden:
- **Spierbehoud**: tegengaan van sarcopenie (leeftijdsgerelateerd spierverlies van ~3–5% per decennium na het 30e)
- **Botdichtheid**: mechanische belasting stimuleert osteoblasten en remt osteoclasten
- **Metabole gezondheid**: meer spiermassa verhoogt het basaal metabolisme en de insulinegevoeligheid
- **Functionele capaciteit**: behoud van kracht voor dagelijkse activiteiten
- **Mortaliteitsreductie**: krachttraining is onafhankelijk geassocieerd met lagere mortaliteit

### Praktische toepassing

Een minimaal effectief schema (2 sessies/week):
- **Sessie A**: squat, bankdrukken, row (3 sets × 8–12 herhalingen)
- **Sessie B**: deadlift, overhead press, chin-ups (3 sets × 8–12 herhalingen)
- Duur: 30–45 minuten per sessie
- Geschikt voor drukke schema's en beginners
- Elke sessie adresseert alle grote spiergroepen via compound-oefeningen

Bij beperking tot 1 sessie: full body met 1 compound per bewegingspatroon is beter dan niets.

### Impact

Momma et al. (2022) vonden in een meta-analyse dat 30–60 minuten krachttraining per week geassocieerd was met 10–20% lagere mortaliteit, cardiovasculaire ziekte en kankerrisico.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B08-I03-P01',
          title:
            'Muscle-strengthening activities are associated with lower risk and mortality in major non-communicable diseases: a systematic review and meta-analysis of cohort studies',
          authors: 'Momma H, Kawakami R, Honda T, Sawada SS',
          year: 2022,
          journal: 'British Journal of Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 370256,
          conclusion:
            'Krachttraining is geassocieerd met 10–17% lagere mortaliteit door alle oorzaken, met een optimale dosis van 30–60 minuten per week.',
          doi: '10.1136/bjsports-2021-105061',
        },
        {
          id: 'B08-I03-P02',
          title:
            'WHO guidelines on physical activity and sedentary behaviour',
          authors: 'Bull FC, Al-Ansari SS, Biddle S, Borodulin K, Buman MP, Cardon G',
          year: 2020,
          journal: 'British Journal of Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Volwassenen zouden minimaal 2 dagen per week spierversterkende activiteiten moeten uitvoeren voor alle belangrijke spiergroepen.',
          doi: '10.1136/bjsports-2020-102955',
        },
      ],
    },
  ],
};
