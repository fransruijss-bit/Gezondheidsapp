import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V07',
  domainId: 'voeding',
  title: 'Ultra-bewerkt voedsel',
  slug: 'ultra-bewerkt-voedsel',
  description: 'Definitie (NOVA), gezondheidseffecten, herkennen en vermijden',
  introduction:
    'Ultra-bewerkt voedsel (UPF) vormt inmiddels meer dan 50% van de calorie-inname in veel westerse landen. Deze industrieel geproduceerde producten bevatten ingrediënten die je niet in een thuiskeuken aantreft en zijn ontworpen om overconsumptie te stimuleren. Groeiend wetenschappelijk bewijs verbindt UPF-consumptie met obesitas, hart- en vaatziekten, diabetes en zelfs kanker.',
  sortOrder: 7,
  evidenceScore: 2,
  tags: [
    'ultra-bewerkt',
    'NOVA-classificatie',
    'bewerkt voedsel',
    'voedselindustrie',
    'additieven',
    'obesitas',
    'ingrediëntenlijst',
    'voedselkwaliteit',
    'junkfood',
  ],
  crosslinks: ['S04', 'B09', 'V05', 'V10'],
  insights: [
    {
      id: 'V07-I01',
      topicId: 'V07',
      sortOrder: 1,
      action:
        'Leer de NOVA-classificatie kennen en herken ultra-bewerkt voedsel aan ingrediënten die je niet in een keuken vindt.',
      explanation: `## De NOVA-classificatie begrijpen

Het NOVA-systeem, ontwikkeld door de Universiteit van São Paulo, classificeert voedsel in vier groepen op basis van de **mate en het doel van verwerking**, niet op basis van voedingsstoffen.

### De vier groepen

1. **Onbewerkt of minimaal bewerkt**: groenten, fruit, noten, eieren, vlees, vis
2. **Bewerkte culinaire ingrediënten**: olijfolie, boter, suiker, zout
3. **Bewerkt voedsel**: kaas, ingeblikt voedsel, versgebakken brood
4. **Ultra-bewerkt voedsel (UPF)**: industrieel geproduceerd met 5+ ingrediënten, waarvan veel niet in een thuiskeuken voorkomen

### Herkenningskenmerken van UPF

Ultra-bewerkt voedsel bevat typisch:
- **Stoffen geëxtraheerd uit voedsel**: high-fructose corn syrup, gehydrogeneerde oliën, eiwit-isolaten
- **Additieven voor uiterlijk**: kleurstoffen, emulgatoren, verdikkingsmiddelen
- **Smaakversterkers**: kunstmatige zoetstoffen, maltodextrine
- **Cosmetische additieven**: glansmiddelen, carbonatoren

### Praktische toepassing

Lees **ingrediëntenlijsten** in plaats van alleen voedingswaarde-etiketten. Als een product meer dan **5 ingrediënten** bevat en je ingrediënten ziet die je niet kent of niet in je keuken hebt, is het waarschijnlijk ultra-bewerkt. Voorbeelden: frisdrank, chips, kant-en-klaarmaaltijden, industrieel brood, ontbijtgranen met toevoegingen.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V07-I01-P01',
          title:
            'Ultra-processed foods: what they are and how to identify them',
          authors: 'Monteiro CA, Cannon G, Levy RB, et al.',
          year: 2019,
          journal: 'Public Health Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'De NOVA-classificatie biedt een wetenschappelijk onderbouwd kader om voedsel te classificeren op basis van bewerkingsgraad, met relevantie voor voedingsbeleid en gezondheidsonderzoek.',
          doi: '10.1017/S1368980018003762',
        },
        {
          id: 'V07-I01-P02',
          title:
            'Ultra-processed food intake and risk of cardiovascular disease: prospective cohort study (NutriNet-Santé)',
          authors: 'Srour B, Fezeu LK, Kesse-Guyot E, et al.',
          year: 2019,
          journal: 'BMJ',
          studyType: 'cohort',
          sampleSize: 105159,
          conclusion:
            'Een toename van 10% in UPF-consumptie was geassocieerd met een significant hoger risico op cardiovasculaire, cerebrovasculaire en coronaire hartziekte.',
          doi: '10.1136/bmj.l1451',
        },
      ],
    },
    {
      id: 'V07-I02',
      topicId: 'V07',
      sortOrder: 2,
      action:
        'Beperk ultra-bewerkt voedsel tot maximaal 20% van je totale calorie-inname door meer zelf te koken.',
      explanation: `## Gezondheidseffecten van ultra-bewerkt voedsel

De gezondheidsrisico's van UPF gaan verder dan alleen de hoge suiker-, zout- en vetgehaltes. Het bewerkingsproces zelf lijkt schadelijke effecten te hebben die **onafhankelijk** zijn van de voedingssamenstelling.

### Mechanisme

UPF beïnvloedt de gezondheid via meerdere routes:
- **Hyperpalatabiliteit**: de combinatie van zout, suiker en vet overrompelt het natuurlijke verzadigingsmechanisme
- **Snelle absorptie**: vernietiging van de voedselmatrix leidt tot snellere opname en hogere bloedsuikerpieken
- **Darmmicrobioom**: emulgatoren en kunstmatige zoetstoffen verstoren het darmmicrobioom
- **Additieven**: bepaalde additieven hebben directe pro-inflammatoire effecten

### NIH-studie

Een landmark RCT van het National Institutes of Health toonde aan dat deelnemers op een UPF-dieet **dagelijks 500 kcal meer** aten dan op een onbewerkt dieet, ondanks dat beide diëten gematcht waren op macronutriënten en caloriedichtheid.

### Praktische toepassing

Begin met **één maaltijd per dag** volledig zelf te bereiden met onbewerkte ingrediënten. Vervang populaire UPF-producten stap voor stap: **havermout** in plaats van ontbijtgranen, **vers fruit** in plaats van fruityoghurtdrinks, **zelfgemaakte soep** in plaats van pakjessoep. Bereid maaltijden voor in het weekend (**meal prep**) om doordeweeks de verleiding van gemaksvoedsel te verminderen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 RCT, 1 meta-analyse',
      isPremium: false,
      papers: [
        {
          id: 'V07-I02-P01',
          title:
            'Ultra-processed diets cause excess calorie intake and weight gain: an inpatient randomized controlled trial of ad libitum food intake',
          authors: 'Hall KD, Ayuketah A, Brychta R, et al.',
          year: 2019,
          journal: 'Cell Metabolism',
          studyType: 'RCT',
          sampleSize: 20,
          conclusion:
            'Deelnemers consumeerden gemiddeld 508 kcal/dag meer op een UPF-dieet en namen 0,9 kg toe in 2 weken, vergeleken met gewichtsverlies op een onbewerkt dieet.',
          doi: '10.1016/j.cmet.2019.05.008',
        },
        {
          id: 'V07-I02-P02',
          title:
            'Ultra-processed food consumption and chronic non-communicable diseases-related dietary nutrient profile in the UK',
          authors: 'Rauber F, da Costa Louzada ML, Steele EM, et al.',
          year: 2018,
          journal: 'Nutrients',
          studyType: 'cross-sectioneel',
          sampleSize: 9317,
          conclusion:
            'Hogere UPF-consumptie was geassocieerd met een slechtere voedingskwaliteit: meer vrije suikers, verzadigde vetten en natrium, en minder vezels, eiwitten en micronutriënten.',
          doi: '10.3390/nu10050587',
        },
        {
          id: 'V07-I02-P03',
          title:
            'Ultra-processed food consumption and risk of overweight and obesity: the University of Navarra Follow-Up (SUN) cohort',
          authors: 'Mendonça RD, Pimenta AM, Gea A, et al.',
          year: 2016,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'cohort',
          sampleSize: 8451,
          conclusion:
            'Hoge UPF-consumptie (>4 porties/dag) was geassocieerd met een 26% hoger risico op overgewicht/obesitas vergeleken met lage consumptie.',
          doi: '10.3945/ajcn.116.135004',
        },
      ],
    },
    {
      id: 'V07-I03',
      topicId: 'V07',
      sortOrder: 3,
      action:
        'Vervang dagelijkse ultra-bewerkte snacks door onbewerkte alternatieven zoals noten, fruit of groentesticks.',
      explanation: `## Slimme snack-swaps

Snacks zijn vaak het moment waarop de meeste ultra-bewerkte producten worden geconsumeerd. Het vervangen van UPF-snacks door onbewerkte alternatieven is een van de eenvoudigste en meest impactvolle veranderingen die je kunt maken.

### Mechanisme

UPF-snacks zijn ontworpen rond het **"bliss point"** — de perfecte combinatie van zout, suiker en vet die maximaal genot geeft zonder verzadiging. Dit leidt tot een **dopamine-gedreven verlangen** naar meer, vergelijkbaar met verslavingsmechanismen. Onbewerkte snacks daarentegen bevatten **natuurlijke voedingsmatrices** met vezels en water die verzadiging bevorderen.

### Praktische swaps

| UPF-snack | Onbewerkt alternatief |
|-----------|----------------------|
| Chips | Noten of pompoenpitten |
| Koekjes | Vers fruit met pindakaas (100%) |
| Snoep | Dadels of gedroogd fruit |
| Mueslirepen | Banaan met amandelen |
| Crackers met smeerkaas | Groentesticks met hummus |
| Frisdrank | Water met citroen en munt |

### Gedragsstrategie

Maak onbewerkte snacks **zichtbaar en beschikbaar**: zet een fruitschaal op tafel, leg noten klaar in porties. Maak UPF-snacks **onzichtbaar en onbereikbaar**: koop ze niet, of berg ze hoog weg. Omgevingsveranderingen zijn effectiever dan wilskracht.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V07-I03-P01',
          title:
            'Snacking quality is associated with secondary prevention of coronary artery disease',
          authors: 'Tindall AM, Petersen KS, Kris-Etherton PM.',
          year: 2019,
          journal: 'Nutrients',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Het vervangen van ultra-bewerkte snacks door noten, groenten en fruit verbetert cardiovasculaire risicofactoren en draagt bij aan een gezonder voedingspatroon.',
          doi: '10.3390/nu11071568',
        },
        {
          id: 'V07-I03-P02',
          title:
            'Slim by design: serving healthy foods first in buffet lines improves overall meal selection',
          authors: 'Wansink B, Hanks AS.',
          year: 2013,
          journal: 'PLOS ONE',
          studyType: 'RCT',
          sampleSize: 124,
          conclusion:
            'De volgorde en zichtbaarheid van voedsel beïnvloedt voedselkeuze significant; gezonde opties als eerste aanbieden verhoogt de consumptie ervan.',
          doi: '10.1371/journal.pone.0077055',
        },
      ],
    },
  ],
};
