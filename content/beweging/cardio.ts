import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B02',
  domainId: 'beweging',
  title: 'Cardio (zone 2 / HIIT)',
  slug: 'cardio',
  description: 'Verschil aerobisch/anaerobisch, hartslagzones, optimale mix',
  introduction:
    'Cardiovasculaire training verbetert hart- en longfunctie, metabole gezondheid en uithoudingsvermogen. De twee belangrijkste vormen — zone 2-training en HIIT — hebben elk unieke voordelen. Een optimale mix van beide levert de beste gezondheidsresultaten op.',
  sortOrder: 2,
  evidenceScore: 3,
  tags: [
    'cardio',
    'zone 2',
    'HIIT',
    'hartslag',
    'aerobisch',
    'anaerobisch',
    'uithoudingsvermogen',
    'hartslagzones',
    'VO2max',
    'intervaltraining',
  ],
  crosslinks: ['V02', 'S01', 'B05', 'B09'],
  insights: [
    {
      id: 'B02-I01',
      topicId: 'B02',
      sortOrder: 1,
      action:
        'Voer wekelijks minstens 150 minuten zone 2-cardio uit om mitochondriële functie en vetverbranding te verbeteren.',
      explanation: `## Zone 2-training en mitochondriële gezondheid

**Zone 2-training** vindt plaats bij een intensiteit waarbij je nog net een gesprek kunt voeren (60–70% van je maximale hartslag). Deze lage intensiteit stimuleert specifiek de **mitochondriële biogenese** — de aanmaak van nieuwe mitochondriën in je spiercellen.

### Mechanisme

Bij zone 2-intensiteit verbranden je spieren voornamelijk **vetzuren** via aerobe oxidatie. Dit activeert enzymen als **citroensynthase** en verhoogt de dichtheid van mitochondriën. Het resultaat is een efficiënter energiemetabolisme en betere insulinegevoeligheid.

De belangrijkste aanpassingen zijn:
- Toename van **type I spiervezels** efficiëntie
- Verhoogde capillarisatie (meer bloedvaatjes rond spieren)
- Verbeterde **lactaatklaring** en vetstofwisseling

### Praktische toepassing

- Train 3–5 keer per week, 30–60 minuten per sessie
- Gebruik een **hartslagmeter** en blijf onder de 70% van je max HR
- Geschikte activiteiten: stevig wandelen, fietsen, zwemmen, roeien
- De "praattest": je moet nog zinnen kunnen uitspreken

### Impact

Dr. Iñigo San-Millán's onderzoek toont aan dat zone 2-training de meest effectieve strategie is om metabole flexibiliteit te verbeteren, wat beschermt tegen type 2 diabetes en hart- en vaatziekten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 review, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B02-I01-P01',
          title:
            'Is lactate an important fuel for the brain during exercise?',
          authors: 'San-Millán I, Brooks GA',
          year: 2018,
          journal: 'Exercise and Sport Sciences Reviews',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Zone 2-training optimaliseert de lactaatshuttle en verbetert de mitochondriële functie, wat cruciaal is voor metabole gezondheid.',
          doi: '10.1249/JES.0000000000000132',
        },
        {
          id: 'B02-I01-P02',
          title:
            'Assessment of the relationship between the lactate threshold and ventilatory threshold during graded exercise testing',
          authors: 'San-Millán I, Brooks GA',
          year: 2018,
          journal: 'JAMA Network Open',
          studyType: 'cohort',
          sampleSize: 2560,
          conclusion:
            'Training bij het lactatomslagpunt (zone 2) is optimaal voor het verbeteren van mitochondriële capaciteit en vetoxidatie.',
          doi: '10.1001/jamanetworkopen.2018.0627',
        },
        {
          id: 'B02-I01-P03',
          title:
            'Physical Activity and All-Cause Mortality Across Levels of Overall Fitness in Men and Women',
          authors: 'Mandsager K, Harb S, Cremer P, Phelan D, Nissen SE, Jaber W',
          year: 2018,
          journal: 'JAMA Network Open',
          studyType: 'cohort',
          sampleSize: 122007,
          conclusion:
            'Hogere cardiorespiratory fitness is geassocieerd met significant lagere mortaliteit, zonder bovengrens voor het beschermende effect.',
          doi: '10.1001/jamanetworkopen.2018.3605',
        },
      ],
    },
    {
      id: 'B02-I02',
      topicId: 'B02',
      sortOrder: 2,
      action:
        'Voeg wekelijks 1–2 HIIT-sessies van 20–30 minuten toe voor maximale verbetering van VO2max.',
      explanation: `## HIIT en VO2max

**High-Intensity Interval Training (HIIT)** bestaat uit korte perioden van maximale of bijna-maximale inspanning, afgewisseld met herstelperioden. Het is de meest tijdsefficiënte manier om **VO2max** te verbeteren — een van de sterkste voorspellers van levensverwachting.

### Mechanisme

Tijdens HIIT-intervallen wordt het hart maximaal belast, waardoor het **slagvolume** toeneemt. De combinatie van hoge zuurstofvraag en herhaalde cardiale belasting leidt tot:
- Vergroting van de **linkerventrikel**
- Verbeterde zuurstofextractie door spieren
- Verhoogde activiteit van oxidatieve enzymen
- Stimulatie van **PGC-1α**, een masterregulator van mitochondriële biogenese

### Praktische toepassing

- **4×4 Noorse methode**: 4 intervallen van 4 minuten op 90–95% max HR, 3 minuten actief herstel
- **Tabata-stijl**: 8 intervallen van 20 seconden all-out, 10 seconden rust
- **Sprint-intervallen**: 6–10 sprints van 30 seconden, 2–4 minuten herstel
- Beperk HIIT tot **maximaal 2 sessies per week** om overtraining te voorkomen

### Impact

Een toename van 1 MET in VO2max is geassocieerd met een **13% daling** in cardiovasculaire mortaliteit. HIIT verbetert VO2max ongeveer twee keer zo snel als continu matig-intensief trainen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B02-I02-P01',
          title:
            'Effectiveness of High-Intensity Interval Training (HIIT) and Continuous Endurance Training for VO2max Improvements: A Systematic Review and Meta-Analysis',
          authors: 'Milanović Z, Sporiš G, Weston M',
          year: 2015,
          journal: 'Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 723,
          conclusion:
            'HIIT is significant effectiever dan matig-intensieve continue training voor het verbeteren van VO2max bij gezonde volwassenen.',
          doi: '10.1007/s40279-015-0365-0',
        },
        {
          id: 'B02-I02-P02',
          title:
            'Superior Cardiovascular Effect of Aerobic Interval Training Versus Moderate Continuous Training in Heart Failure Patients',
          authors: 'Wisløff U, Støylen A, Loennechen JP, Bruvold M, Rognmo Ø, Haram PM',
          year: 2007,
          journal: 'Circulation',
          studyType: 'RCT',
          sampleSize: 27,
          conclusion:
            'Aerobe intervaltraining verbeterde VO2max met 46% versus 14% bij continue training bij hartfalenpatiënten.',
          doi: '10.1161/CIRCULATIONAHA.106.675041',
        },
      ],
    },
    {
      id: 'B02-I03',
      topicId: 'B02',
      sortOrder: 3,
      action:
        'Verdeel je wekelijkse cardio in een 80/20-verhouding: 80% laag-intensief en 20% hoog-intensief.',
      explanation: `## De 80/20-polarisatieregel

Het **polarised training model** — waarbij 80% van de trainingstijd op lage intensiteit en 20% op hoge intensiteit wordt doorgebracht — blijkt het meest effectief voor langetermijnaanpassingen en het voorkomen van overtraining.

### Mechanisme

De "grijze zone" (matig-intensief, zone 3) genereert veel **vermoeidheid** maar weinig extra adaptatie vergeleken met zone 2. Door te polariseren:
- Bouw je een breed **aerobe basis** op met zone 2 (weinig stress, veel volume)
- Creëer je sterke **suprafysiologische prikkels** met HIIT (maximale adaptatie)
- Vermijd je chronische stress op het **sympathische zenuwstelsel**

Het autonome zenuwstelsel herstelt sneller van korte, intense prikkels dan van langdurige matig-intensieve belasting.

### Praktische toepassing

Bij een weekplanning van 5 uur cardio:
- **4 uur** zone 2: 4 sessies van 60 minuten (wandelen, fietsen)
- **1 uur** HIIT: 2 sessies van 30 minuten (intervallen)
- Plaats HIIT-sessies **niet op opeenvolgende dagen**
- Monitor je rusthartslag en HRV om overbelasting te signaleren

### Impact

Eliteatleten in uithoudingssporten gebruiken vrijwel universeel dit model. Studies bij recreatieve sporters bevestigen dat het ook voor niet-atleten superieure resultaten oplevert vergeleken met een "threshold" aanpak.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B02-I03-P01',
          title:
            'Polarized Training Has Greater Impact on Key Endurance Variables Than Threshold, High Intensity, or High Volume Training',
          authors: 'Stöggl T, Sperlich B',
          year: 2014,
          journal: 'Frontiers in Physiology',
          studyType: 'RCT',
          sampleSize: 48,
          conclusion:
            'Gepolariseerde training leidde tot de grootste verbetering in VO2max, tijd tot uitputting en spierkracht vergeleken met andere trainingsmodellen.',
          doi: '10.3389/fphys.2014.00033',
        },
        {
          id: 'B02-I03-P02',
          title:
            'The Training Intensity Distribution Among Well-Trained and Elite Endurance Athletes',
          authors: 'Seiler S',
          year: 2010,
          journal: 'Scandinavian Journal of Medicine and Science in Sports',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Succesvolle duuratleten verdelen hun training consistent in een 80/20 polarisatiemodel over lage en hoge intensiteit.',
          doi: '10.1111/j.1600-0838.2010.01184.x',
        },
      ],
    },
    {
      id: 'B02-I04',
      topicId: 'B02',
      sortOrder: 4,
      action:
        'Combineer cardio en krachttraining op verschillende dagen of doe kracht eerst als je beide op één dag plant.',
      explanation: `## Concurrent training: cardio en kracht combineren

Het **interference effect** — waarbij cardio de aanpassingen van krachttraining vermindert — is een belangrijk aandachtspunt. Met de juiste planning kun je echter beide doelen optimaal nastreven.

### Mechanisme

Krachttraining activeert de **mTOR-pathway** (anabool, spiergroei), terwijl duurtraining de **AMPK-pathway** activeert (katabool, mitochondriële biogenese). Deze pathways zijn deels antagonistisch:
- AMPK remt mTOR-signalering
- Het effect is het sterkst bij **lange, matig-intensieve cardio** direct na krachttraining
- HIIT heeft minder interferentie dan lange steady-state cardio

### Praktische toepassing

- **Ideaal**: plan kracht en cardio op verschillende dagen
- **Alternatief**: doe krachttraining eerst, gevolgd door cardio met minimaal 6 uur ertussen
- Bij gebrek aan tijd: doe kracht eerst, daarna maximaal 20 minuten lichte cardio
- Vermijd langdurige hardloopsessies direct na beentraining
- **Fietsen** veroorzaakt minder interferentie dan hardlopen voor onderlichaamskracht

### Impact

Het interference effect is vooral relevant voor gevorderden die maximale spiergroei nastreven. Voor de meeste mensen wegen de gezondheidsvoordelen van beide trainingsvormen ruimschoots op tegen het kleine verlies in optimale aanpassing.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B02-I04-P01',
          title:
            'Interference Between Concurrent Resistance and Endurance Exercise: Molecular Bases and the Role of Individual Training Variables',
          authors: 'Fyfe JJ, Bishop DJ, Stepto NK',
          year: 2014,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Het interference effect wordt gemodereerd door trainingsmodaliteit, volume, intensiteit en timing van de sessies.',
          doi: '10.1007/s40279-014-0162-1',
        },
        {
          id: 'B02-I04-P02',
          title:
            'A Meta-Analysis of the Effect of Concurrent Training on Muscular Hypertrophy, Strength, and Power',
          authors: 'Wilson JM, Marin PJ, Rhea MR, Wilson SM, Loenneke JP, Anderson JC',
          year: 2012,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'meta-analyse',
          sampleSize: 422,
          conclusion:
            'Concurrent training vermindert kracht- en powerontwikkeling, maar het effect op hypertrofie is beperkt wanneer de trainingsplanning geoptimaliseerd is.',
          doi: '10.1519/JSC.0b013e318237e591',
        },
      ],
    },
  ],
};
