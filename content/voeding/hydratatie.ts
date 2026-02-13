import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V04',
  domainId: 'voeding',
  title: 'Hydratatie',
  slug: 'hydratatie',
  description: 'Hoeveel drinken, elektrolyten, signalen van dehydratie',
  introduction:
    'Water is het meest essentiële nutriënt voor het menselijk lichaam. Het lichaam bestaat voor 55–60% uit water en zelfs milde dehydratie kan cognitieve prestatie, fysieke prestatie en stemming beïnvloeden. Goed gehydrateerd zijn is fundamenteel voor bijna elk lichaamsproces, van temperatuurregulatie tot afvaltransport.',
  sortOrder: 4,
  evidenceScore: 3,
  tags: [
    'hydratatie',
    'water drinken',
    'dehydratie',
    'elektrolyten',
    'natrium',
    'kalium',
    'vochtbalans',
    'sportdrank',
  ],
  crosslinks: ['B02', 'B08', 'S03', 'V01'],
  insights: [
    {
      id: 'V04-I01',
      topicId: 'V04',
      sortOrder: 1,
      action:
        'Drink dagelijks 30–35 ml water per kilogram lichaamsgewicht als basislijn en verhoog bij inspanning of warmte.',
      explanation: `## Hoeveel water heb je nodig?

De bekende "2 liter per dag"-regel is een oversimplificatie. De werkelijke waterbehoefte is **individueel** en hangt af van lichaamsgewicht, activiteitenniveau, klimaat en voedingspatroon.

### Mechanisme

Water is essentieel voor **thermoregulatie** (transpiratie en vasodilatatie), **transport van voedingsstoffen** via het bloed, **gewrichtsmering** via synoviaalvocht, en **afvoer van afvalstoffen** via de nieren. De nieren reguleren de waterbalans door de concentratie van urine aan te passen via het **antidiuretisch hormoon (ADH)**.

### Richtlijn

De formule **30–35 ml per kg lichaamsgewicht** biedt een gepersonaliseerde basislijn:
- 70 kg persoon: 2,1–2,45 liter per dag
- 85 kg persoon: 2,55–2,98 liter per dag

Verhoog met **500–1000 ml per uur** bij intensieve inspanning of hoge temperaturen.

### Praktische toepassing

Begin de dag met een groot glas water, drink regelmatig kleine hoeveelheden door de dag heen, en gebruik de **kleur van je urine** als indicator: lichtgeel is optimaal, donkergeel wijst op onvoldoende hydratatie. Onthoud dat voedsel (groenten, fruit, soep) ook bijdraagt aan je vochtinname.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V04-I01-P01',
          title:
            'Water, hydration and health',
          authors: 'Popkin BM, D\'Anci KE, Rosenberg IH.',
          year: 2010,
          journal: 'Nutrition Reviews',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Adequate hydratatie is essentieel voor cognitieve functie, nierfunctie en cardiovasculaire gezondheid; individuele behoefte varieert sterk.',
          doi: '10.1111/j.1753-4887.2010.00304.x',
        },
        {
          id: 'V04-I01-P02',
          title:
            'Mild dehydration affects mood in healthy young women',
          authors: 'Armstrong LE, Ganio MS, Casa DJ, et al.',
          year: 2012,
          journal: 'Journal of Nutrition',
          studyType: 'RCT',
          sampleSize: 25,
          conclusion:
            'Milde dehydratie (1,36% lichaamsmassaverlies) veroorzaakte verslechterde stemming, verhoogde vermoeidheidsperceptie en hoofdpijn bij gezonde vrouwen.',
          doi: '10.3945/jn.111.142000',
        },
      ],
    },
    {
      id: 'V04-I02',
      topicId: 'V04',
      sortOrder: 2,
      action:
        'Vul bij intensieve inspanning langer dan een uur elektrolyten aan met natrium en kalium naast water.',
      explanation: `## Elektrolyten bij inspanning

Bij langdurige of intensieve inspanning verlies je niet alleen water maar ook **elektrolyten** via zweet. Het aanvullen van alleen water zonder elektrolyten kan leiden tot een gevaarlijke verdunning van natriumwaarden in het bloed: **hyponatriëmie**.

### Mechanisme

Zweet bevat gemiddeld **900–1400 mg natrium per liter**, naast kleinere hoeveelheden **kalium, magnesium en chloride**. Deze elektrolyten zijn essentieel voor:
- **Zenuwgeleiding** en spiercontractie
- Handhaving van **osmotische druk** en vochtbalans
- **Hart-ritmiek** en bloeddrukregulatie

Bij langdurige inspanning (>60 min) kan het drinken van alleen water de natriumconcentratie in het bloed verlagen, wat leidt tot misselijkheid, verwardheid en in ernstige gevallen **hersenoedeem**.

### Praktische toepassing

Bij inspanning langer dan een uur: voeg **300–700 mg natrium per liter** toe aan je drinkvocht. Dit kan via een sportdrank, een elektrolytentablet, of simpelweg een **snufje zout en een scheutje citroensap** in water. Voor dagelijks gebruik is een gevarieerde voeding met groenten, fruit en noten meestal voldoende voor de elektrolytenbalans.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V04-I02-P01',
          title:
            'Exercise-associated hyponatremia: quantitative analysis to understand the etiology',
          authors: 'Hew-Butler T, Loi V, Pani A, et al.',
          year: 2017,
          journal: 'British Journal of Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 2135,
          conclusion:
            'Overmatige waterinname zonder elektrolytenaanvulling is de primaire oorzaak van exercise-associated hyponatremia; natriumsuppletie vermindert het risico.',
          doi: '10.1136/bjsports-2016-096890',
        },
        {
          id: 'V04-I02-P02',
          title:
            'Sodium replacement and fluid shifts during prolonged exercise in the heat',
          authors: 'Sanders B, Noakes TD, Dennis SC.',
          year: 2001,
          journal: 'Medicine & Science in Sports & Exercise',
          studyType: 'RCT',
          sampleSize: 8,
          conclusion:
            'Natriumaanvulling tijdens langdurige inspanning handhaafde het plasmavolume en voorkwam de daling in serumnatriumconcentratie die optrad bij alleen waterinname.',
          doi: '10.1097/00005768-200104000-00013',
        },
      ],
    },
    {
      id: 'V04-I03',
      topicId: 'V04',
      sortOrder: 3,
      action:
        'Leer de vroege signalen van dehydratie herkennen: dorst, donkere urine, vermoeidheid en concentratieproblemen.',
      explanation: `## Dehydratie herkennen voordat het te laat is

Het dorstmechanisme is een **vertraagd signaal**: tegen de tijd dat je dorst voelt, ben je al 1–2% gedehydrateerd. Leren om subtielere signalen te herkennen helpt om proactief te hydrateren.

### Mechanisme

Bij dehydratie stijgt de **osmolaliteit** van het bloed, wat de hypothalamus activeert om dorst te stimuleren en ADH vrij te geven. Tegelijkertijd daalt het **bloedvolume**, waardoor het hart harder moet werken om dezelfde output te leveren. De hersenen, die voor 73% uit water bestaan, zijn bijzonder gevoelig voor veranderingen in hydratatiestatus.

### Signalen per stadium

**Mild (1–2% verlies)**:
- Droge mond en lichte dorst
- Donkerder gekleurde urine
- Lichte vermoeidheid

**Matig (2–4% verlies)**:
- Hoofdpijn en duizeligheid
- Verminderde concentratie
- Verhoogde hartslag

**Ernstig (>4% verlies)**:
- Extreme vermoeidheid
- Verwardheid
- Zeer donkere of afwezige urineproductie

### Praktische toepassing

Gebruik de **urinekleurkaart** als dagelijkse check: streef naar lichtgeel (stro-kleurig). Zet een waterfles op je bureau als visuele herinnering. Drink een glas water bij elke koffiepauze en **voor, tijdens en na inspanning**. Let extra op bij warme temperaturen en op hoogte.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cross-sectioneel onderzoek',
      isPremium: false,
      papers: [
        {
          id: 'V04-I03-P01',
          title:
            'Dehydration impairs cognitive performance: a meta-analysis',
          authors: 'Wittbrodt MT, Millard-Stafford M.',
          year: 2018,
          journal: 'Medicine & Science in Sports & Exercise',
          studyType: 'meta-analyse',
          sampleSize: 1271,
          conclusion:
            'Dehydratie van ≥2% lichaamsmassaverlies verslechterde aandacht, uitvoerende functies en motorische coördinatie significant.',
          doi: '10.1249/MSS.0000000000001682',
        },
        {
          id: 'V04-I03-P02',
          title:
            'Urine colour change as an indicator of change in daily water intake: a quantitative analysis',
          authors: 'Perrier ET, Johnson EC, McKenzie AL, et al.',
          year: 2016,
          journal: 'European Journal of Nutrition',
          studyType: 'RCT',
          sampleSize: 82,
          conclusion:
            'Urinekleur is een betrouwbare en praktische biomarker voor hydratatiestatus bij gezonde volwassenen.',
          doi: '10.1007/s00394-015-1010-2',
        },
      ],
    },
  ],
};
