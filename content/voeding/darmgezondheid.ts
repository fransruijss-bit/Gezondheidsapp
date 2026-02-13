import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V05',
  domainId: 'voeding',
  title: 'Darmgezondheid',
  slug: 'darmgezondheid',
  description: 'Microbioom, prebiotica, probiotica, vezel',
  introduction:
    'De darmen herbergen biljoenen micro-organismen die samen het darmmicrobioom vormen. Dit ecosysteem beïnvloedt niet alleen de spijsvertering, maar ook het immuunsysteem, de stemming, het gewicht en het risico op chronische ziekten. Het optimaliseren van de darmgezondheid via voeding is een van de krachtigste middelen om je algehele gezondheid te verbeteren.',
  sortOrder: 5,
  evidenceScore: 2,
  tags: [
    'microbioom',
    'darmbacteriën',
    'prebiotica',
    'probiotica',
    'vezels',
    'fermentatie',
    'darmflora',
    'spijsvertering',
    'immuunsysteem',
  ],
  crosslinks: ['S02', 'B06', 'V02', 'V06'],
  insights: [
    {
      id: 'V05-I01',
      topicId: 'V05',
      sortOrder: 1,
      action:
        'Eet wekelijks minimaal dertig verschillende plantaardige voedingsmiddelen om de diversiteit van je microbioom te vergroten.',
      explanation: `## Diversiteit is de sleutel

De diversiteit van je darmmicrobioom is een van de sterkste voorspellers van algehele gezondheid. Hoe meer verschillende soorten bacteriën, hoe **veerkrachtiger** het ecosysteem.

### Mechanisme

Verschillende plantaardige voedingsmiddelen bevatten verschillende soorten **vezels, polyfenolen en fytochemicaliën** die elk specifieke bacteriestammen voeden. Het American Gut Project toonde aan dat mensen die **30 of meer verschillende planten per week** eten een significant diverser microbioom hebben dan mensen die minder dan 10 soorten eten.

### Impact

Een divers microbioom is geassocieerd met:
- Sterkere **immuunrespons**
- Betere **metabole gezondheid**
- Lager risico op **inflammatoire darmziekten**
- Verbeterde **mentale gezondheid** via de darm-hersen-as

### Praktische toepassing

Tel alle plantaardige voedingsmiddelen die je eet: groenten, fruit, noten, zaden, kruiden, specerijen, peulvruchten en granen tellen allemaal mee. Voeg elke week **2–3 nieuwe items** toe. Gebruik kruiden en specerijen rijkelijk — ze tellen mee en bevatten krachtige polyfenolen. Kies voor **seizoensgebonden producten** om natuurlijke variatie te creëren.`,
      evidenceScore: 2,
      studyTypeSummary: '1 cohort-studie, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V05-I01-P01',
          title:
            'American Gut: an open platform for citizen science microbiome research',
          authors: 'McDonald D, Hyde E, Debelius JW, et al.',
          year: 2018,
          journal: 'mSystems',
          studyType: 'cohort',
          sampleSize: 10317,
          conclusion:
            'Het aantal verschillende plantaardige voedingsmiddelen per week was de sterkste voorspeller van microbioomdiversiteit, sterker dan of iemand vegetarisch of omnivoor at.',
          doi: '10.1128/mSystems.00031-18',
        },
        {
          id: 'V05-I01-P02',
          title:
            'Gut microbiota diversity and composition in relation to diet: a systematic review',
          authors: 'Leeming ER, Johnson AJ, Spector TD, et al.',
          year: 2019,
          journal: 'Nutrients',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Plantaardige voedingspatronen met hoge diversiteit aan vezels en polyfenolen zijn consistent geassocieerd met een diverser en gezonder microbioom.',
          doi: '10.3390/nu11102213',
        },
      ],
    },
    {
      id: 'V05-I02',
      topicId: 'V05',
      sortOrder: 2,
      action:
        'Neem dagelijks gefermenteerde voedingsmiddelen op in je dieet zoals yoghurt, kefir, zuurkool of kimchi.',
      explanation: `## Gefermenteerd voedsel en het microbioom

Gefermenteerde voedingsmiddelen bevatten **levende micro-organismen** die het darmmicrobioom positief kunnen beïnvloeden. Ze zijn al duizenden jaren onderdeel van traditionele voedingspatronen wereldwijd.

### Mechanisme

Tijdens fermentatie produceren bacteriën en gisten **bioactieve stoffen** zoals korteketenvetzuren (SCFA's), vitaminen en bacteriocinen. De levende bacteriën in gefermenteerd voedsel kunnen:
- **Tijdelijk koloniseren** in de darm en gunstige functies uitvoeren
- De groei van **pathogene bacteriën** remmen
- De **darmbarrière** versterken
- **Systemische inflammatie** verlagen

### Stanford-studie

Een landmark RCT uit Stanford toonde aan dat 10 weken dagelijks gefermenteerd voedsel de microbioomdiversiteit significant verhoogde en **19 inflammatoire markers** verlaagde, waaronder IL-6 en IL-10.

### Praktische toepassing

Begin met **één portie per dag**: yoghurt bij het ontbijt, een schep zuurkool bij de lunch, of kefir als tussendoortje. Let op dat het product **levende culturen** bevat (niet gepasteuriseerd na fermentatie). Bouw geleidelijk op om spijsverteringsongemak te voorkomen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V05-I02-P01',
          title:
            'Gut-microbiota-targeted diets modulate human immune status',
          authors: 'Wastyk HC, Fragiadakis GK, Perelman D, et al.',
          year: 2021,
          journal: 'Cell',
          studyType: 'RCT',
          sampleSize: 36,
          conclusion:
            'Een dieet hoog in gefermenteerd voedsel verhoogde de microbioomdiversiteit en verlaagde inflammatoire markers significant na 10 weken.',
          doi: '10.1016/j.cell.2021.06.019',
        },
        {
          id: 'V05-I02-P02',
          title:
            'Fermented foods, health and the gut microbiome',
          authors: 'Marco ML, Sanders ME, Gänzle M, et al.',
          year: 2021,
          journal: 'Nature Reviews Gastroenterology & Hepatology',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Gefermenteerde voedingsmiddelen leveren probiotische micro-organismen en bioactieve metabolieten die de darmgezondheid en systemische immuunfunctie ondersteunen.',
          doi: '10.1038/s41575-020-00390-5',
        },
        {
          id: 'V05-I02-P03',
          title:
            'Health benefits of fermented foods: microbiota and beyond',
          authors: 'Dimidi E, Cox SR, Rossi M, et al.',
          year: 2019,
          journal: 'Current Opinion in Biotechnology',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Regelmatige consumptie van gefermenteerde voedingsmiddelen is geassocieerd met verbeterde darmgezondheid, verminderde inflammatie en lagere risico\'s op chronische ziekten.',
          doi: '10.1016/j.copbio.2018.09.001',
        },
      ],
    },
    {
      id: 'V05-I03',
      topicId: 'V05',
      sortOrder: 3,
      action:
        'Verhoog je vezelinname geleidelijk naar minimaal 30 gram per dag, met nadruk op prebiotische vezels.',
      explanation: `## Vezels: brandstof voor darmbacteriën

Voedingsvezels zijn de primaire energiebron voor gunstige darmbacteriën. Prebiotische vezels — een specifiek type vezel — worden selectief gefermenteerd door gunstige bacteriën en stimuleren hun groei.

### Mechanisme

Wanneer darmbacteriën vezels fermenteren, produceren ze **korteketenvetzuren (SCFA's)** zoals butyraat, propionaat en acetaat. Butyraat is de belangrijkste energiebron voor **colonocyten** (darmwandcellen) en versterkt de **darmbarrière**. Dit voorkomt dat schadelijke stoffen vanuit de darm in de bloedbaan terechtkomen — een fenomeen dat **"leaky gut"** wordt genoemd.

### Prebiotische bronnen

- **Inuline**: ui, knoflook, prei, cichorei
- **Fructo-oligosachariden (FOS)**: banaan, asperges
- **Resistent zetmeel**: afgekoelde aardappelen, havermout
- **Bèta-glucanen**: haver, gerst, paddenstoelen

### Praktische toepassing

Verhoog vezels **geleidelijk** (5 gram per week extra) om gasvorming en ongemak te voorkomen. Drink voldoende water bij een hoge vezelinname. Combineer oplosbare en onoplosbare vezels voor het beste effect. Een ontbijt van **havermout met lijnzaad en bessen** levert al 10–12 gram vezels.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V05-I03-P01',
          title:
            'Dietary fiber and prebiotics and the gastrointestinal microbiota',
          authors: 'Holscher HD.',
          year: 2017,
          journal: 'Gut Microbes',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Prebiotische vezels stimuleren selectief de groei van gunstige darmbacteriën en verhogen de productie van korteketenvetzuren die de darmgezondheid ondersteunen.',
          doi: '10.1080/19490976.2017.1290756',
        },
        {
          id: 'V05-I03-P02',
          title:
            'A diet low in fermentable oligosaccharides improves symptoms in patients with irritable bowel syndrome',
          authors: 'Halmos EP, Power VA, Shepherd SJ, et al.',
          year: 2014,
          journal: 'Gastroenterology',
          studyType: 'RCT',
          sampleSize: 30,
          conclusion:
            'De hoeveelheid en het type vezel beïnvloeden de darmsymptomen significant; een gebalanceerde aanpak is effectiever dan extreme vezelbeperking.',
          doi: '10.1053/j.gastro.2013.09.046',
        },
      ],
    },
    {
      id: 'V05-I04',
      topicId: 'V05',
      sortOrder: 4,
      action:
        'Beperk het gebruik van onnodige antibiotica en overleg altijd met je arts over de noodzaak.',
      explanation: `## Antibiotica en microbioomschade

Antibiotica zijn levensreddende medicijnen, maar ze maken geen onderscheid tussen schadelijke en gunstige bacteriën. Eén kuur antibiotica kan het microbioom maanden tot jaren verstoren.

### Mechanisme

Breedspectrumantibiotica doden een groot deel van de darmbacteriën, waardoor de **diversiteit drastisch afneemt**. Dit creëert een ecologisch vacuüm dat kan worden gevuld door **opportunistische pathogenen** zoals Clostridium difficile. Het herstel van het microbioom na antibioticagebruik duurt gemiddeld **3–6 maanden**, maar sommige bacteriestammen keren mogelijk nooit terug.

### Langetermijngevolgen

- Verhoogd risico op **antibioticageassocieerde diarree**
- Mogelijke ontwikkeling van **antibioticaresistentie**
- Verminderde productie van **korteketenvetzuren**
- Verhoogde vatbaarheid voor **infecties**

### Praktische toepassing

Vraag je arts altijd of antibiotica **echt noodzakelijk** zijn — bij virale infecties helpen ze niet. Als antibiotica nodig zijn, neem dan **tijdens en na de kuur** gefermenteerde voedingsmiddelen of een hooggedoseerd probioticum met bewezen stammen (bijv. *Saccharomyces boulardii*). Eet extra vezels om het herstel van het microbioom te ondersteunen.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V05-I04-P01',
          title:
            'Antibiotics and the human gut microbiome: dysbioses and accumulation of resistances',
          authors: 'Ramirez J, Guarner F, Bustos Fernandez L, et al.',
          year: 2020,
          journal: 'Frontiers in Cellular and Infection Microbiology',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Antibioticagebruik veroorzaakt significante en langdurige veranderingen in het darmmicrobioom en draagt bij aan resistentieproblematiek.',
          doi: '10.3389/fcimb.2020.572912',
        },
        {
          id: 'V05-I04-P02',
          title:
            'Probiotics for the prevention of antibiotic-associated diarrhea: a systematic review and meta-analysis',
          authors: 'Hempel S, Newberry SJ, Maher AR, et al.',
          year: 2012,
          journal: 'JAMA',
          studyType: 'meta-analyse',
          sampleSize: 11811,
          conclusion:
            'Probiotische suppletie tijdens antibioticagebruik verminderde het risico op antibioticageassocieerde diarree met 42%.',
          doi: '10.1001/jama.2012.3507',
        },
      ],
    },
  ],
};
