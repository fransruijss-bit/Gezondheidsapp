import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V01',
  domainId: 'voeding',
  title: 'Macronutriënten',
  slug: 'macronutrienten',
  description: 'Eiwitten, koolhydraten, vetten: functies, verhoudingen, bronnen',
  introduction:
    'Macronutriënten vormen de basis van onze voeding en leveren de energie die ons lichaam nodig heeft voor alle dagelijkse functies. De drie macronutriënten — eiwitten, koolhydraten en vetten — vervullen elk unieke rollen in het lichaam. Een goed begrip van hun functies, optimale verhoudingen en de beste bronnen helpt bij het maken van gezonde voedingskeuzes die aansluiten bij je persoonlijke doelen.',
  sortOrder: 1,
  evidenceScore: 3,
  tags: [
    'eiwitten',
    'koolhydraten',
    'vetten',
    'macronutriënten',
    'voedingsverhoudingen',
    'calorieën',
    'proteïne',
    'vezels',
    'voedingsbronnen',
    'energiebalans',
  ],
  crosslinks: ['B03', 'B07', 'S04', 'V05'],
  insights: [
    {
      id: 'V01-I01',
      topicId: 'V01',
      sortOrder: 1,
      action:
        'Eet dagelijks 1,2–2,0 gram eiwit per kilogram lichaamsgewicht, verspreid over minimaal drie maaltijden.',
      explanation: `## Waarom eiwitinname belangrijk is

Eiwitten zijn essentieel voor het behoud en de opbouw van spierweefsel, de productie van enzymen en hormonen, en het ondersteunen van het immuunsysteem. De huidige wetenschappelijke consensus wijst op een **optimale inname van 1,2–2,0 g/kg/dag** voor actieve volwassenen.

### Mechanisme

Aminozuren uit eiwitten stimuleren **musculaire proteïnesynthese (MPS)** via de mTOR-signaleringsroute. Dit proces is het meest effectief wanneer eiwitinname gelijkmatig over de dag wordt verdeeld, met porties van 20–40 gram per maaltijd.

### Praktische toepassing

- **Ontbijt**: Griekse yoghurt met noten (±25 g eiwit)
- **Lunch**: Peulvruchten of vis (±30 g eiwit)
- **Avondeten**: Kip, tofu of mager vlees (±35 g eiwit)

Het verdelen van eiwitinname over de dag maximaliseert de anabole respons en ondersteunt **spierherstel na training**. Vooral voor ouderen (>65 jaar) is voldoende eiwit cruciaal om sarcopenie te voorkomen.`,
      evidenceScore: 3,
      studyTypeSummary: '2 meta-analyses, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V01-I01-P01',
          title:
            'A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults',
          authors: 'Morton RW, Murphy KT, McKellar SR, et al.',
          year: 2018,
          journal: 'British Journal of Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 1863,
          conclusion:
            'Eiwitinname boven de aanbevolen dagelijkse hoeveelheid verbetert spiermassa en spierkracht bij weerstandstraining, met een optimale inname rond 1,6 g/kg/dag.',
          doi: '10.1136/bjsports-2017-097608',
        },
        {
          id: 'V01-I01-P02',
          title:
            'Dietary protein for athletes: from requirements to optimum adaptation',
          authors: 'Phillips SM, Van Loon LJ.',
          year: 2011,
          journal: 'Journal of Sports Sciences',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Eiwitinname van 1,2–2,0 g/kg/dag is optimaal voor sportprestatie en herstel, waarbij de verdeling over de dag een rol speelt in de effectiviteit.',
          doi: '10.1080/02640414.2011.619204',
        },
        {
          id: 'V01-I01-P03',
          title:
            'Protein intake and muscle health in old age: from biological plausibility to clinical evidence',
          authors: 'Deer RR, Volpi E.',
          year: 2015,
          journal: 'Nutrients',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Ouderen hebben een hogere eiwitinname per maaltijd nodig (25–30 g) om dezelfde anabole respons te bereiken als jongere volwassenen.',
          doi: '10.3390/nu7105404',
        },
      ],
    },
    {
      id: 'V01-I02',
      topicId: 'V01',
      sortOrder: 2,
      action:
        'Kies complexe koolhydraten als primaire energiebron en beperk geraffineerde suikers tot minder dan 10% van de totale energie-inname.',
      explanation: `## De rol van koolhydraten

Koolhydraten zijn de voornaamste brandstof voor de hersenen en spieren. Het type koolhydraat dat je eet heeft echter een grote invloed op je gezondheid, energieniveau en bloedsuikerregulatie.

### Mechanisme

Complexe koolhydraten (volkoren, groenten, peulvruchten) bevatten **vezels die de vertering vertragen**, waardoor glucose geleidelijk in de bloedbaan komt. Dit voorkomt snelle pieken en dalen in bloedsuiker. Geraffineerde suikers daarentegen veroorzaken snelle glucosepieken gevolgd door **insulinepieken en reactieve hypoglykemie**.

### Impact

Langdurig hoge inname van geraffineerde koolhydraten is geassocieerd met:
- Verhoogd risico op **type 2 diabetes**
- Meer viscerale vetopslag
- Grotere kans op hart- en vaatziekten

### Praktische toepassing

Vervang witte rijst door **volkoren varianten**, kies fruit in plaats van vruchtensap, en voeg **peulvruchten** toe aan maaltijden. Streef naar minimaal 25–30 gram vezels per dag om de voordelen van complexe koolhydraten optimaal te benutten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 2 cohort-studies',
      isPremium: false,
      papers: [
        {
          id: 'V01-I02-P01',
          title:
            'Carbohydrate quality and human health: a series of systematic reviews and meta-analyses',
          authors: 'Reynolds A, Mann J, Cummings J, et al.',
          year: 2019,
          journal: 'The Lancet',
          studyType: 'meta-analyse',
          sampleSize: 135000,
          conclusion:
            'Hogere inname van voedingsvezels en volkoren is geassocieerd met 15–30% verlaging van totale mortaliteit, cardiovasculaire mortaliteit en incidentie van type 2 diabetes.',
          doi: '10.1016/S0140-6736(18)31809-9',
        },
        {
          id: 'V01-I02-P02',
          title:
            'Intake of whole grains and refined grains and long-term health outcomes in US adults',
          authors: 'Huang T, Xu M, Lee A, et al.',
          year: 2015,
          journal: 'Public Health Nutrition',
          studyType: 'cohort',
          sampleSize: 74341,
          conclusion:
            'Hogere volkoreninname was geassocieerd met een lager risico op totale mortaliteit, terwijl hogere inname van geraffineerde granen geen beschermend effect toonde.',
          doi: '10.1017/S1368980014002936',
        },
      ],
    },
    {
      id: 'V01-I03',
      topicId: 'V01',
      sortOrder: 3,
      action:
        'Neem dagelijks voldoende gezonde vetten op, met nadruk op omega-3-vetzuren uit vette vis, noten en zaden.',
      explanation: `## Vetten: essentieel voor gezondheid

Vetten zijn niet de vijand — ze zijn essentieel voor de opname van vetoplosbare vitaminen (A, D, E, K), de productie van hormonen en de bescherming van organen. De **kwaliteit** van vetten is crucialer dan de hoeveelheid.

### Mechanisme

Onverzadigde vetten, vooral **omega-3-vetzuren (EPA en DHA)**, hebben anti-inflammatoire eigenschappen door de productie van resolvines en protectines. Ze beïnvloeden de **membraanfluiditeit** van cellen en verbeteren de signaaltransductie, wat bijdraagt aan cardiovasculaire gezondheid en cognitieve functie.

### Impact op gezondheid

- **Cardiovasculair**: Vervanging van verzadigde vetten door onverzadigde vetten verlaagt LDL-cholesterol
- **Cognitief**: DHA is cruciaal voor hersenstructuur en -functie
- **Inflammatie**: Omega-3 verlaagt systemische ontstekingsmarkers

### Praktische toepassing

Eet minimaal **twee keer per week vette vis** (zalm, makreel, haring). Gebruik **extra vierge olijfolie** als primaire kookvet. Voeg dagelijks een handvol **ongezouten noten** toe. Beperk transvetten volledig en houd verzadigde vetten onder 10% van de totale energie-inname.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V01-I03-P01',
          title:
            'Omega-3 fatty acids and cardiovascular disease: effects on risk factors, molecular pathways, and clinical events',
          authors: 'Mozaffarian D, Wu JH.',
          year: 2011,
          journal: 'Journal of the American College of Cardiology',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Omega-3-vetzuren verminderen cardiovasculaire sterfte, verlagen triglyceriden en hebben anti-inflammatoire, anti-aritmische en anti-trombotische effecten.',
          doi: '10.1016/j.jacc.2011.06.063',
        },
        {
          id: 'V01-I03-P02',
          title:
            'Effects of saturated fat, polyunsaturated fat, monounsaturated fat, and carbohydrate on glucose-insulin homeostasis',
          authors: 'Risérus U, Willett WC, Hu FB.',
          year: 2009,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'meta-analyse',
          sampleSize: 4220,
          conclusion:
            'Vervanging van verzadigde vetten door onverzadigde vetten verbetert insulinegevoeligheid en verlaagt het risico op type 2 diabetes.',
          doi: '10.3945/ajcn.2008.26620',
        },
        {
          id: 'V01-I03-P03',
          title:
            'Effect of omega-3 fatty acids on cardiovascular outcomes: a systematic review and meta-analysis',
          authors: 'Hu Y, Hu FB, Manson JE.',
          year: 2019,
          journal: 'EClinicalMedicine',
          studyType: 'meta-analyse',
          sampleSize: 127477,
          conclusion:
            'Marine omega-3 suppletie was geassocieerd met significant lager risico op myocardinfarct en cardiovasculaire sterfte, met een dosis-responsrelatie.',
          doi: '10.1016/j.eclinm.2019.06.002',
        },
      ],
    },
    {
      id: 'V01-I04',
      topicId: 'V01',
      sortOrder: 4,
      action:
        'Stem je macronutriëntverhouding af op je activiteitenniveau en persoonlijke doelen in plaats van een universeel dieet te volgen.',
      explanation: `## Individuele macronutriëntverhouding

Er bestaat geen universele optimale verhouding van eiwitten, koolhydraten en vetten. De ideale verdeling hangt af van je **activiteitenniveau, leeftijd, gezondheidsconditie en doelen** (afvallen, spiermassabehoud, sportprestatie).

### Mechanisme

Het lichaam past zijn metabole routes aan op basis van beschikbare macronutriënten. Bij hoge lichamelijke activiteit hebben spieren meer **glycogeen** nodig (uit koolhydraten), terwijl bij een zittend bestaan de koolhydraatbehoefte lager is. **Metabole flexibiliteit** — het vermogen om efficiënt te schakelen tussen vet- en koolhydraatverbranding — is een teken van goede stofwisseling.

### Richtlijnen per profiel

| Profiel | Eiwit | Koolhydraten | Vet |
|---------|-------|--------------|-----|
| Sedentair | 15–20% | 40–50% | 30–35% |
| Recreatief actief | 20–25% | 45–55% | 25–30% |
| Intensief sportend | 25–30% | 50–60% | 20–25% |

### Praktische toepassing

Begin met een **basisverdeling van 30/40/30** (E/K/V) en pas aan op basis van hoe je je voelt, je energieniveau en je resultaten. Houd een voedingsdagboek bij gedurende twee weken om inzicht te krijgen in je huidige verdeling voordat je aanpassingen maakt.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V01-I04-P01',
          title:
            'Comparison of weight-loss diets with different compositions of fat, protein, and carbohydrates',
          authors: 'Sacks FM, Bray GA, Carey VJ, et al.',
          year: 2009,
          journal: 'New England Journal of Medicine',
          studyType: 'RCT',
          sampleSize: 811,
          conclusion:
            'Diëten met verschillende macronutriëntverhoudingen waren even effectief voor gewichtsverlies op de lange termijn, mits de totale calorie-inname werd beperkt.',
          doi: '10.1056/NEJMoa0804748',
        },
        {
          id: 'V01-I04-P02',
          title:
            'Position of the Academy of Nutrition and Dietetics: dietary fatty acids for healthy adults',
          authors: 'Vannice G, Rasmussen H.',
          year: 2014,
          journal: 'Journal of the Academy of Nutrition and Dietetics',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'De optimale vetinname hangt af van individuele factoren; de kwaliteit van vetten is belangrijker dan de exacte hoeveelheid.',
          doi: '10.1016/j.jand.2013.11.001',
        },
      ],
    },
  ],
};
