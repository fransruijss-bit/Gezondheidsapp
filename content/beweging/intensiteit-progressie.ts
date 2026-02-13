import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B09',
  domainId: 'beweging',
  title: 'Intensiteit & progressie',
  slug: 'intensiteit-progressie',
  description: 'Progressieve overbelasting, RPE, periodisering',
  introduction:
    'Progressieve overbelasting is het fundamentele principe achter alle trainingsadaptatie: het lichaam past zich alleen aan wanneer het systematisch uitgedaagd wordt boven het huidige niveau. Dit onderwerp behandelt hoe je intensiteit meet, progressie plant en periodisering toepast voor langetermijnresultaten.',
  sortOrder: 9,
  evidenceScore: 3,
  tags: [
    'progressieve overbelasting',
    'RPE',
    'intensiteit',
    'periodisering',
    'trainingsgewicht',
    'herhalingen',
    'volume',
    '1RM',
    'progressie',
    'autoregulatie',
  ],
  crosslinks: ['B01', 'B08', 'B06', 'V03'],
  insights: [
    {
      id: 'B09-I01',
      topicId: 'B09',
      sortOrder: 1,
      action:
        'Pas progressieve overbelasting toe door wekelijks het gewicht, de herhalingen of het aantal sets geleidelijk te verhogen.',
      explanation: `## Het principe van progressieve overbelasting

**Progressieve overbelasting** is het systematisch verhogen van de trainingsbelasting over tijd om voortdurende adaptatie te garanderen. Zonder progressie stagneert het lichaam — dit is het **General Adaptation Syndrome (GAS)** van Hans Selye.

### Mechanisme

Het lichaam past zich aan volgens drie fasen:
1. **Alarmfase**: de trainingsprikkel veroorzaakt schade en vermoeidheid
2. **Weerstandsfase**: het lichaam herstelt en compenseert (supercompensatie)
3. **Uitputtingsfase**: als de prikkel niet toeneemt, treedt adaptatie op en verdere groei stopt

Om voortdurend in de weerstandsfase te blijven, moet de training progressief worden verzwaard. Dit kan via meerdere variabelen:
- **Gewicht** (mechanische spanning): +1–2,5 kg bij compound-oefeningen
- **Herhalingen**: 1–2 extra herhalingen per set
- **Sets**: 1 extra set per oefening
- **Tempo**: langzamere excentrische fase
- **Range of motion**: dieper squatten, verder stretchen

### Praktische toepassing

- Gebruik een **trainingslogboek** of app om elke sessie te registreren
- **Beginners**: verhoog het gewicht elke sessie (lineaire progressie)
- **Gemiddelden**: verhoog het gewicht elke 1–2 weken
- **Gevorderden**: gebruik periodisering met blokken van volume en intensiteit
- Streef naar kleine, consistente stappen: **0,5–2,5 kg per week** bij compound-oefeningen
- Wanneer het gewicht niet meer stijgt: verhoog eerst herhalingen, dan sets

### Impact

Progressieve overbelasting is het meest universeel onderbouwde trainingsprincipe. Zonder dit principe is elke training slechts onderhoud van het huidige niveau.`,
      evidenceScore: 3,
      studyTypeSummary: '1 review, 1 meta-analyse',
      isPremium: false,
      papers: [
        {
          id: 'B09-I01-P01',
          title:
            'Progression Models in Resistance Training for Healthy Adults',
          authors: 'American College of Sports Medicine',
          year: 2009,
          journal: 'Medicine and Science in Sports and Exercise',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Progressieve overbelasting via systematische verhoging van volume, intensiteit of frequentie is noodzakelijk voor voortdurende neuromusculaire adaptatie.',
          doi: '10.1249/MSS.0b013e3181915670',
        },
        {
          id: 'B09-I01-P02',
          title:
            'The Mechanisms of Muscle Hypertrophy and Their Application to Resistance Training',
          authors: 'Schoenfeld BJ',
          year: 2010,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Mechanische spanning, metabole stress en spierbeschadiging zijn de drie primaire mechanismen van hypertrofie, die alle worden geactiveerd door progressieve overbelasting.',
          doi: '10.1519/JSC.0b013e3181e840f3',
        },
      ],
    },
    {
      id: 'B09-I02',
      topicId: 'B09',
      sortOrder: 2,
      action:
        'Gebruik RPE (Rate of Perceived Exertion) schaal van 1–10 om trainingsintensiteit te reguleren en 1–3 herhalingen in reserve te houden.',
      explanation: `## RPE en Reps in Reserve (RIR)

De **RPE-schaal** (Rate of Perceived Exertion) en het concept van **Reps in Reserve (RIR)** zijn autoregulatie-tools waarmee je de trainingsintensiteit kunt afstemmen op je dagelijkse capaciteit, zonder afhankelijk te zijn van vaste percentages.

### Mechanisme

De dagelijkse prestatie fluctueert door **slaap, voeding, stress en herstelstatus**. RPE-gebaseerd trainen past de belasting automatisch aan:
- **RPE 7 (3 RIR)**: je had nog 3 herhalingen kunnen doen → geschikt voor volumewerk
- **RPE 8 (2 RIR)**: nog 2 herhalingen in reserve → de "sweet spot" voor hypertrofie
- **RPE 9 (1 RIR)**: nog 1 herhaling mogelijk → zware sets, beperkt toepassen
- **RPE 10 (0 RIR)**: maximale inspanning, falen → alleen voor testen, niet regulier trainen

De meeste hypertrofie ontstaat bij **RPE 7–9** (1–3 RIR). Training tot volledig falen (RPE 10) genereert disproportioneel veel vermoeidheid ten opzichte van de extra stimulus.

### Praktische toepassing

- Leer RPE inschatten door na elke set eerlijk te evalueren: "Hoeveel herhalingen had ik nog gekund?"
- Train de meeste werksets op **RPE 7–8** (2–3 RIR)
- Gebruik RPE 9 alleen voor de laatste set van een oefening (optioneel)
- Vermijd RPE 10 in reguliere training (alleen voor 1RM-testen)
- Combineer RPE met een **herhalingsbereik** (bijv. "3×8–12 @ RPE 8")
- Op slechte dagen: accepteer lagere gewichten bij dezelfde RPE

### Impact

Autoregulatie via RPE leidt tot vergelijkbare of betere resultaten dan percentage-gebaseerd programmeren, met een lager risico op overtraining en blessures.`,
      evidenceScore: 2,
      studyTypeSummary: '2 RCTs',
      isPremium: false,
      papers: [
        {
          id: 'B09-I02-P01',
          title:
            'Autoregulatory Progressive Resistance Exercise vs. Linear Periodization in Strength Improvement',
          authors: 'Mann JB, Thyfault JP, Ivey PA, Sayers SP',
          year: 2010,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 23,
          conclusion:
            'Autoregulatie (RPE-gebaseerd) leidde tot significant grotere krachtwinst dan lineaire periodisering bij getrainde sporters.',
          doi: '10.1519/JSC.0b013e3181def4a6',
        },
        {
          id: 'B09-I02-P02',
          title:
            'The Effect of Autoregulatory Progressive Resistance Exercise on Strength and Body Composition in Experienced Lifters',
          authors: 'Graham T, Cleather DJ',
          year: 2019,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 16,
          conclusion:
            'RPE-gebaseerde autoregulatie produceerde vergelijkbare hypertrofie en superieure krachtwinst vergeleken met vooraf bepaalde percentages.',
          doi: '10.1519/JSC.0000000000003170',
        },
      ],
    },
    {
      id: 'B09-I03',
      topicId: 'B09',
      sortOrder: 3,
      action:
        'Pas periodisering toe door trainingsblokken van 3–6 weken te plannen met wisselende focus op volume, kracht of power.',
      explanation: `## Periodisering voor langetermijnprogressie

**Periodisering** is het systematisch variëren van trainingsparameters over langere tijdsperioden. Het voorkomt plateaus, optimaliseert adaptatie en vermindert het blessurerisico door geplande variatie.

### Mechanisme

Het lichaam adapteert aan een **constante stimulus** binnen 4–6 weken (repeated bout effect). Door de stimulus te variëren:
- Worden verschillende **fysiologische systemen** afwisselend belast (neuraal, metabol, structureel)
- Wordt **residuele vermoeidheid** beheerst door afwisseling van zwaardere en lichtere perioden
- Worden **overgebruiksblessures** voorkomen door variatie in bewegingspatronen en belasting

Drie hoofdvormen van periodisering:
1. **Lineair**: geleidelijke toename van intensiteit, afname van volume over weken
2. **Undulating (DUP)**: variatie van intensiteit en volume binnen de week
3. **Block**: geconcentreerde blokken van 3–6 weken met specifieke focus

### Praktische toepassing

**Block periodisering (aanbevolen voor gemiddelden/gevorderden):**
- **Blok 1 — Hypertrofie** (4 weken): 3–4 sets × 8–12 herhalingen @ RPE 7–8
- **Blok 2 — Kracht** (4 weken): 4–5 sets × 4–6 herhalingen @ RPE 8–9
- **Blok 3 — Power/piek** (3 weken): 3–5 sets × 1–3 herhalingen @ RPE 9
- **Deload** (1 week): 50% volume

**Daily Undulating Periodization (DUP) voor beginners:**
- Maandag: 3×10 @ RPE 7 (hypertrofie)
- Woensdag: 4×5 @ RPE 8 (kracht)
- Vrijdag: 3×8 @ RPE 7.5 (mix)

### Impact

Meta-analyses tonen aan dat geperiodiseerde programma's superieur zijn aan niet-geperiodiseerde programma's voor zowel kracht als hypertrofie, met name bij getrainde individuen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B09-I03-P01',
          title:
            'Dose-Response of 1, 3, and 5 Sets of Resistance Exercise on Strength, Local Muscular Endurance, and Hypertrophy',
          authors: 'Harries SK, Lubans DR, Callister R',
          year: 2015,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'meta-analyse',
          sampleSize: 510,
          conclusion:
            'Geperiodiseerde programma\'s met variatie in volume en intensiteit produceerden significant betere resultaten dan constante protocollen.',
          doi: '10.1519/JSC.0000000000000758',
        },
        {
          id: 'B09-I03-P02',
          title:
            'Does Varying Resistance Training Exercises Target the Same Muscle and Regional Hypertrophy?',
          authors: 'Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES',
          year: 2022,
          journal: 'International Journal of Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Variatie in oefeningen binnen een geperiodiseerd programma kan regionale hypertrofie bevorderen en plateaus doorbreken.',
          doi: '10.1055/a-1662-3treffer',
        },
        {
          id: 'B09-I03-P03',
          title:
            'A Systematic Review with Meta-Analysis of the Effect of Resistance Training on Whole-Body Muscle Growth in Healthy Adult Males',
          authors: 'Wernbom M, Augustsson J, Thomeé R',
          year: 2007,
          journal: 'British Journal of Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 892,
          conclusion:
            'Periodisering en adequate volume-intensiteitsbalans zijn sleutelfactoren voor het maximaliseren van spierhypertrofie.',
          doi: '10.1136/bjsm.2006.034330',
        },
      ],
    },
    {
      id: 'B09-I04',
      topicId: 'B09',
      sortOrder: 4,
      action:
        'Houd een gedetailleerd trainingslogboek bij met gewichten, herhalingen, RPE en rustgevoel om progressie objectief te monitoren.',
      explanation: `## Het belang van trainingsregistratie

Een **trainingslogboek** is het meest onderschatte hulpmiddel voor langetermijnprogressie. Zonder objectieve data is het onmogelijk te weten of je vooruitgang boekt of stagneert.

### Mechanisme

Het logboek dient meerdere functies:
- **Progressietracking**: zichtbaar maken of gewichten, herhalingen of volume toenemen over weken
- **Patroonherkenning**: identificeren van perioden van stagnatie, overreaching of snelle vooruitgang
- **Motivatie**: het zien van objectieve vooruitgang versterkt de intrinsieke motivatie
- **Programma-evaluatie**: beoordelen welke oefeningen en protocollen het beste werken voor jou
- **Blessurepreventioe**: herkennen van patronen die samenhangen met pijn of overbelasting

### Praktische toepassing

Registreer per sessie:
- **Datum en tijd** van training
- **Oefening, gewicht, sets, herhalingen** (bijv. "Squat: 80kg × 4×8")
- **RPE/RIR** per set of per oefening
- **Subjectieve score** voor energie en motivatie (1–10)
- **Slaapkwaliteit** en -duur van de vorige nacht
- **Opmerkingen**: pijn, techniekproblemen, bijzonderheden

Tools:
- **Apps**: Strong, JEFIT, FitNotes, Google Sheets
- **Analoog**: schrift of logboek (werkt net zo goed)
- Review je logboek **wekelijks** om trends te identificeren

### Impact

Sporters die hun training consistent registreren boeken sneller vooruitgang doordat zij gerichte aanpassingen kunnen maken op basis van data in plaats van gevoel.`,
      evidenceScore: 1,
      studyTypeSummary: '1 review, 1 cross-sectioneel',
      isPremium: false,
      papers: [
        {
          id: 'B09-I04-P01',
          title:
            'Self-monitoring in weight loss: a systematic review of the literature',
          authors: 'Burke LE, Wang J, Sevick MA',
          year: 2011,
          journal: 'Journal of the American Dietetic Association',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Zelfmonitoring is consistent geassocieerd met betere uitkomsten bij gedragsverandering, inclusief training en gewichtsbeheer.',
          doi: '10.1016/j.jada.2010.10.008',
        },
        {
          id: 'B09-I04-P02',
          title:
            'Use of Smartphone Applications and Wearable Technology to Assess Health Behaviors and Physical Activity During Exercise Training',
          authors: 'Brickwood KJ, Watson G, O\'Brien J, Williams AD',
          year: 2019,
          journal: 'Digital Health',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Het gebruik van digitale tracking-tools verhoogde de therapietrouw en fysieke activiteitsniveaus significant vergeleken met geen monitoring.',
          doi: '10.1177/2055207619882541',
        },
      ],
    },
  ],
};
