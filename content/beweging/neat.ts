import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B03',
  domainId: 'beweging',
  title: 'NEAT (dagelijkse beweging)',
  slug: 'neat',
  description: 'Non-Exercise Activity Thermogenesis, stappen, dagelijkse activiteit',
  introduction:
    'NEAT — Non-Exercise Activity Thermogenesis — omvat alle calorieën die je verbrandt buiten formele training om. Van stappen zetten tot friemelen: NEAT kan tot 2000 kcal per dag bedragen en is een vaak onderschatte factor in gewichtsbeheer en algehele gezondheid.',
  sortOrder: 3,
  evidenceScore: 2,
  tags: [
    'NEAT',
    'stappen',
    'dagelijkse beweging',
    'calorieën',
    'thermogenese',
    'wandelen',
    'activiteit',
    'gewichtsbeheer',
    'sedentair',
    'energieverbruik',
  ],
  crosslinks: ['V04', 'B10', 'S03', 'V07'],
  insights: [
    {
      id: 'B03-I01',
      topicId: 'B03',
      sortOrder: 1,
      action:
        'Streef naar minimaal 7.500–10.000 stappen per dag om mortaliteitsrisico significant te verlagen.',
      explanation: `## Stappen en levensverwachting

Het dagelijks aantal stappen is een **krachtige voorspeller** van algehele gezondheid en mortaliteit. Onderzoek toont aan dat het mortaliteitsrisico significant daalt naarmate je meer stappen per dag zet, met het grootste voordeel tussen 4.000 en 10.000 stappen.

### Mechanisme

Wandelen activeert grote spiergroepen en verbetert daarmee:
- **Insulinegevoeligheid** door GLUT4-translocatie in spierweefsel
- **Cardiovasculaire functie** door matige hemodynamische belasting
- **Lymfedrainage** en circulatie in de onderste extremiteiten
- **Vetmetabolisme** door activatie van lipoprotein lipase (LPL)

Elke stap genereert ook een **mechanische impact** die botturnover stimuleert en botdichtheid ondersteunt.

### Praktische toepassing

- Gebruik een **stappenteller** of smartwatch om dagelijks te monitoren
- Bouw stappen in door te wandelen naar het werk, de trap te nemen, telefoontjes lopend te doen
- Begin met je huidige gemiddelde en verhoog met **500 stappen per week**
- Een wandeling van 30 minuten levert ongeveer 3.000–4.000 stappen op
- Plan een **ochtendommetje** van 15–20 minuten als vaste routine

### Impact

Lee et al. (2019) vonden dat vrouwen die gemiddeld 7.500 stappen per dag zetten een 40% lager mortaliteitsrisico hadden dan vrouwen die slechts 2.700 stappen zetten. Het effect plateaut rond 10.000 stappen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B03-I01-P01',
          title:
            'Association of Step Volume and Intensity With All-Cause Mortality in Older Women',
          authors: 'Lee IM, Shiroma EJ, Kamada M, Bassett DR, Matthews CE, Buring JE',
          year: 2019,
          journal: 'JAMA Internal Medicine',
          studyType: 'cohort',
          sampleSize: 16741,
          conclusion:
            'Meer stappen per dag waren geassocieerd met lagere mortaliteit, met het sterkste effect tot 7.500 stappen per dag.',
          doi: '10.1001/jamainternmed.2019.0899',
        },
        {
          id: 'B03-I01-P02',
          title:
            'Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts',
          authors: 'Paluch AE, Bajpai S, Bassett DR, Carnethon MR, Ekelund U, Evenson KR',
          year: 2022,
          journal: 'The Lancet Public Health',
          studyType: 'meta-analyse',
          sampleSize: 47471,
          conclusion:
            'Hogere dagelijkse stappenaantallen zijn geassocieerd met progressief lagere mortaliteit, met drempels die variëren per leeftijdsgroep.',
          doi: '10.1016/S2468-2667(21)00302-9',
        },
      ],
    },
    {
      id: 'B03-I02',
      topicId: 'B03',
      sortOrder: 2,
      action:
        'Maak na elke maaltijd een wandeling van 10–15 minuten om bloedsuikerspiegels te stabiliseren.',
      explanation: `## Post-maaltijd wandelingen en glycemie

Een korte wandeling na het eten is een van de eenvoudigste en meest effectieve strategieën om **bloedsuikerspiegels** te reguleren. Zelfs 10 minuten wandelen na een maaltijd kan de glucosepiek significant verminderen.

### Mechanisme

Na het eten stijgt de bloedglucose doordat koolhydraten worden opgenomen. Lichte beweging activeert **GLUT4-transporters** in de spieren, waardoor glucose zonder insuline de spiercel in kan. Dit leidt tot:
- **Snellere glucoseklaring** uit het bloed
- Lagere **insulinepiek** (minder belasting op de pancreas)
- Verbeterde **postprandiale lipoproteïneklaring**
- Stimulatie van de **gastro-intestinale motiliteit** (betere spijsvertering)

### Praktische toepassing

- Plan een wandeling van **10–15 minuten** na de lunch en het avondeten
- Intensiteit hoeft niet hoog te zijn: een rustig tempo volstaat
- Combineer het met dagelijkse taken (boodschappen, hond uitlaten)
- Bij kantoorwerk: loop naar een collega i.p.v. e-mailen
- Gebruik een **CGM (continue glucosemonitor)** om het effect zelf te observeren

### Impact

Onderzoek toont aan dat post-maaltijd wandelingen de glucosepiek met **20–30%** kunnen verlagen. Dit is bijzonder relevant voor mensen met (pre)diabetes, maar ook voor gezonde individuen die metabole gezondheid willen optimaliseren.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B03-I02-P01',
          title:
            'The Effect of Walking on Postprandial Glycemic Excursion in Patients With Type 1 Diabetes and Healthy People',
          authors: 'Manohar C, Levine JA, Nandy DK, Saad A, Dalla Man C, McCrady-Spitzer SK',
          year: 2012,
          journal: 'Diabetes Care',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Wandelen na een maaltijd verminderde de postprandiale glucosepiek significant bij zowel gezonde individuen als diabetespatiënten.',
          doi: '10.2337/dc11-2381',
        },
        {
          id: 'B03-I02-P02',
          title:
            'Acute effects of interrupting prolonged sitting on vascular function and postprandial glucose',
          authors: 'Buffey AJ, Herring MP, Langley CK, Donnelly AE, Carson BP',
          year: 2022,
          journal: 'Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 912,
          conclusion:
            'Het onderbreken van langdurig zitten met korte wandelingen verbeterde de postprandiale glucose- en insulinerespons significant.',
          doi: '10.1007/s40279-022-01649-4',
        },
      ],
    },
    {
      id: 'B03-I03',
      topicId: 'B03',
      sortOrder: 3,
      action:
        'Verhoog je NEAT bewust door vaker te staan, de trap te nemen en actief vervoer te kiezen.',
      explanation: `## NEAT bewust verhogen

Het verschil in dagelijks energieverbruik tussen een **sedentaire** en een **actieve levensstijl** kan oplopen tot 2000 kcal per dag, grotendeels door NEAT. Dit maakt NEAT een krachtigere factor in energiebalans dan formele training.

### Mechanisme

NEAT omvat alle fysieke activiteit buiten formele training:
- **Huishoudelijk werk** (koken, schoonmaken, tuinieren)
- **Verplaatsing** (fietsen, wandelen, traplopen)
- **Posturale activiteit** (staan in plaats van zitten)
- **Onbewuste bewegingen** (friemelen, been wippen)

Professor James Levine's onderzoek toont aan dat NEAT de grootste **moduleerbare component** van het totale dagelijkse energieverbruik is. Mensen die van nature veel bewegen ("fidgeters") verbranden significant meer calorieën.

### Praktische toepassing

- Gebruik een **sta-bureau** en wissel elke 30 minuten tussen zitten en staan
- Neem **altijd de trap** in plaats van de lift (tot 5 verdiepingen)
- Fiets of wandel voor afstanden onder de 5 km
- Doe telefoongesprekken **staand of lopend**
- Zet je printer verder weg zodat je moet lopen
- Plan actieve **sociale activiteiten** (wandelen met vrienden i.p.v. koffie drinken)

### Impact

Levine et al. toonden aan dat het verschil in NEAT tussen individuen met obesitas en slanke individuen gemiddeld 350 kcal per dag bedroeg, voornamelijk door minder staan en lopen.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B03-I03-P01',
          title:
            'Interindividual variation in posture allocation: possible role in human obesity',
          authors: 'Levine JA, Lanningham-Foster LM, McCrady SK, Krizan AC, Olson LR, Kane PH',
          year: 2005,
          journal: 'Science',
          studyType: 'cohort',
          sampleSize: 20,
          conclusion:
            'Individuen met obesitas zaten gemiddeld 2,5 uur meer per dag dan slanke individuen, wat overeenkomt met ~350 kcal verschil in NEAT.',
          doi: '10.1126/science.1105850',
        },
        {
          id: 'B03-I03-P02',
          title:
            'Non-exercise activity thermogenesis (NEAT)',
          authors: 'Levine JA',
          year: 2002,
          journal: 'Best Practice & Research Clinical Endocrinology & Metabolism',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'NEAT is de meest variabele component van energieverbruik en speelt een cruciale rol in gewichtsregulatie en metabole gezondheid.',
          doi: '10.1016/S1521-690X(02)00227-5',
        },
        {
          id: 'B03-I03-P03',
          title:
            'Role of nonexercise activity thermogenesis in resistance to fat gain in humans',
          authors: 'Levine JA, Eberhardt NL, Jensen MD',
          year: 1999,
          journal: 'Science',
          studyType: 'cohort',
          sampleSize: 16,
          conclusion:
            'Toename in NEAT was de belangrijkste voorspeller van weerstand tegen vetopslag bij calorieoverschot.',
          doi: '10.1126/science.283.5399.212',
        },
      ],
    },
  ],
};
