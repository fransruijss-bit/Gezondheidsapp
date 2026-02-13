import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V06',
  domainId: 'voeding',
  title: 'Inflammatie & voeding',
  slug: 'inflammatie-voeding',
  description: 'Anti-inflammatoire voeding, omega 3/6 verhouding',
  introduction:
    'Chronische laaggradige inflammatie is een stille drijfveer achter veel moderne ziekten, van hart- en vaatziekten tot diabetes, depressie en kanker. Voeding speelt een cruciale rol in het reguleren van ontstekingsprocessen. Door bewuste voedingskeuzes kun je ontstekingen verminderen en je lichaam beschermen tegen de schadelijke gevolgen van chronische inflammatie.',
  sortOrder: 6,
  evidenceScore: 3,
  tags: [
    'inflammatie',
    'ontsteking',
    'omega-3',
    'omega-6',
    'anti-inflammatoir',
    'CRP',
    'mediterraan dieet',
    'ontstekingsmarkers',
    'polyfenolen',
  ],
  crosslinks: ['S06', 'B06', 'V01', 'V05'],
  insights: [
    {
      id: 'V06-I01',
      topicId: 'V06',
      sortOrder: 1,
      action:
        'Streef naar een omega-3/omega-6 verhouding van maximaal 1:4 door meer vette vis en minder plantaardige oliën te eten.',
      explanation: `## De omega-balans herstellen

Het moderne westerse dieet bevat een **omega-6/omega-3 verhouding van 15:1 tot 20:1**, terwijl ons lichaam geëvolueerd is op een verhouding van rond de **1:1 tot 4:1**. Deze disbalans bevordert chronische inflammatie.

### Mechanisme

Omega-6 vetzuren (vooral arachidonzuur) worden omgezet in **pro-inflammatoire eicosanoïden** zoals prostaglandinen en leukotriënen. Omega-3 vetzuren (EPA en DHA) produceren juist **anti-inflammatoire resolvines en protectines**. Beide groepen concurreren om dezelfde enzymen (COX en LOX), dus de verhouding bepaalt welk pad domineert.

### Impact

Een hoge omega-6/omega-3 ratio is geassocieerd met:
- Verhoogde **CRP-waarden** (C-reactief proteïne)
- Meer **cardiovasculaire ziekten**
- Verhoogd risico op **auto-immuunziekten**
- Verergering van **depressieve klachten**

### Praktische toepassing

**Verhoog omega-3**: eet 2–3 keer per week vette vis (zalm, makreel, sardines), voeg lijnzaad en walnoten toe. **Verlaag omega-6**: vervang zonnebloemolie en maïsolie door olijfolie of kokosolie. Beperk gefrituurd voedsel en ultra-bewerkte producten die vaak veel omega-6 bevatten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V06-I01-P01',
          title:
            'The importance of the ratio of omega-6/omega-3 essential fatty acids',
          authors: 'Simopoulos AP.',
          year: 2002,
          journal: 'Biomedicine & Pharmacotherapy',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Een lagere omega-6/omega-3 ratio vermindert het risico op chronische ziekten; een ratio van 4:1 of lager is geassocieerd met verminderde totale mortaliteit.',
          doi: '10.1016/S0753-3322(02)00253-6',
        },
        {
          id: 'V06-I01-P02',
          title:
            'Omega-3 fatty acids in inflammation and autoimmune diseases',
          authors: 'Simopoulos AP.',
          year: 2002,
          journal: 'Journal of the American College of Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Omega-3 suppletie vermindert ontstekingsactiviteit bij reumatoïde artritis, inflammatoire darmziekten en astma door verlaging van pro-inflammatoire cytokinen.',
          doi: '10.1080/07315724.2002.10719248',
        },
        {
          id: 'V06-I01-P03',
          title:
            'Omega-3 polyunsaturated fatty acids and inflammatory processes: nutrition or pharmacology?',
          authors: 'Calder PC.',
          year: 2013,
          journal: 'British Journal of Clinical Pharmacology',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'EPA en DHA verminderen de productie van inflammatoire eicosanoïden, cytokinen en reactieve zuurstofverbindingen via meerdere moleculaire mechanismen.',
          doi: '10.1111/j.1365-2125.2012.04374.x',
        },
      ],
    },
    {
      id: 'V06-I02',
      topicId: 'V06',
      sortOrder: 2,
      action:
        'Volg een mediterraan voedingspatroon met veel groenten, olijfolie, vis en noten als basis voor anti-inflammatoire voeding.',
      explanation: `## Het mediterrane dieet als gouden standaard

Het mediterrane voedingspatroon is het meest onderzochte anti-inflammatoire dieet ter wereld. Het combineert meerdere voedingsmiddelen die **synergetisch** werken om inflammatie te verlagen.

### Mechanisme

De anti-inflammatoire werking berust op meerdere componenten:
- **Extra vierge olijfolie**: bevat oleocanthal, een natuurlijke COX-remmer vergelijkbaar met ibuprofen
- **Polyfenolen** uit groenten, fruit en rode wijn: remmen NF-κB signalering
- **Omega-3** uit vis: produceren anti-inflammatoire resolvines
- **Vezels** uit volkoren en peulvruchten: voeden gunstige darmbacteriën die butyraat produceren

### Bewijs

De landmark **PREDIMED-studie** met meer dan 7.400 deelnemers toonde aan dat een mediterraan dieet aangevuld met extra olijfolie of noten het risico op cardiovasculaire events met **30%** verlaagde vergeleken met een vetarm controledieet.

### Praktische toepassing

Maak **olijfolie** je primaire vetbron, eet dagelijks **5+ porties groenten en fruit**, kies **vis boven rood vlees**, gebruik **noten als snack**, en vervang geraffineerde granen door **volkoren varianten**. Voeg regelmatig kruiden toe zoals kurkuma, gember en knoflook die extra anti-inflammatoire eigenschappen bezitten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 RCT, 1 meta-analyse',
      isPremium: false,
      papers: [
        {
          id: 'V06-I02-P01',
          title:
            'Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts',
          authors: 'Estruch R, Ros E, Salas-Salvadó J, et al.',
          year: 2018,
          journal: 'New England Journal of Medicine',
          studyType: 'RCT',
          sampleSize: 7447,
          conclusion:
            'Een mediterraan dieet aangevuld met olijfolie of noten verminderde het risico op belangrijke cardiovasculaire events met circa 30% over 5 jaar follow-up.',
          doi: '10.1056/NEJMoa1800389',
        },
        {
          id: 'V06-I02-P02',
          title:
            'Adherence to Mediterranean diet and inflammatory markers',
          authors: 'Schwingshackl L, Hoffmann G.',
          year: 2014,
          journal: 'Nutrients',
          studyType: 'meta-analyse',
          sampleSize: 17285,
          conclusion:
            'Hogere adherentie aan het mediterrane dieet was geassocieerd met significante verlagingen in CRP, IL-6 en andere inflammatoire markers.',
          doi: '10.3390/nu6031080',
        },
      ],
    },
    {
      id: 'V06-I03',
      topicId: 'V06',
      sortOrder: 3,
      action:
        'Eet dagelijks kleurrijke groenten en fruit voor een breed spectrum aan polyfenolen die ontstekingen remmen.',
      explanation: `## Polyfenolen: de kleur van gezondheid

Polyfenolen zijn plantaardige verbindingen die verantwoordelijk zijn voor de **kleur, smaak en geur** van groenten en fruit. Ze behoren tot de krachtigste anti-inflammatoire en antioxidante stoffen in onze voeding.

### Mechanisme

Polyfenolen werken via meerdere mechanismen:
- **Directe antioxidantwerking**: neutraliseren vrije radicalen
- **NF-κB-remming**: blokkeren de belangrijkste transcriptiefactor voor ontstekingsgenen
- **Prebioot effect**: worden door darmbacteriën omgezet in bioactieve metabolieten
- **Epigenetische modulatie**: beïnvloeden genexpressie via DNA-methylatie en histonmodificatie

### Kleurcategoriëën

| Kleur | Polyfenolen | Bronnen |
|-------|-------------|---------|
| Rood | Lycopeen, antocyaninen | Tomaat, rode biet, aardbeien |
| Paars | Resveratrol, antocyaninen | Blauwe bessen, aubergine |
| Groen | Catechinen, chlorogeen | Broccoli, groene thee, spinazie |
| Oranje | Carotenoïden | Wortel, pompoen, zoete aardappel |
| Wit | Allicine, quercetine | Knoflook, ui, bloemkool |

### Praktische toepassing

Streef naar **elke dag minimaal 3 verschillende kleuren** op je bord. Kook tomaten voor betere lycopeenopname, eet bessen als snack, en gebruik **kurkuma met zwarte peper** (piperine verhoogt de opname van curcumine met 2000%).`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V06-I03-P01',
          title:
            'Polyphenols: benefits to the cardiovascular system in health and in aging',
          authors: 'Pandey KB, Rizvi SI.',
          year: 2009,
          journal: 'Nutrients',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Polyfenolen verminderen oxidatieve stress en inflammatie via meerdere mechanismen en zijn geassocieerd met lager risico op cardiovasculaire ziekten.',
          doi: '10.3390/nu1010111',
        },
        {
          id: 'V06-I03-P02',
          title:
            'Dietary polyphenol intake and risk of type 2 diabetes in the European Prospective Investigation into Cancer and Nutrition cohort',
          authors: 'Zamora-Ros R, Forouhi NG, Sharp SJ, et al.',
          year: 2014,
          journal: 'British Journal of Nutrition',
          studyType: 'cohort',
          sampleSize: 36037,
          conclusion:
            'Hogere totale polyfenolinname was geassocieerd met een 13% lager risico op type 2 diabetes, met de sterkste associaties voor flavonoïden en stilbenen.',
          doi: '10.1017/S0007114513004025',
        },
      ],
    },
  ],
};
