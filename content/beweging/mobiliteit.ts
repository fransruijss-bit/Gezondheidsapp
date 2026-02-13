import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B04',
  domainId: 'beweging',
  title: 'Mobiliteit & flexibiliteit',
  slug: 'mobiliteit',
  description: 'Stretching, mobiliteitswerk, blessurepreventie',
  introduction:
    'Mobiliteit en flexibiliteit vormen de basis voor veilig en effectief bewegen. Goede mobiliteit verbetert trainingsresultaten, vermindert blessurerisico en ondersteunt dagelijks functioneren. Dit onderwerp behandelt de wetenschap achter stretching, mobiliteitswerk en blessurepreventie.',
  sortOrder: 4,
  evidenceScore: 2,
  tags: [
    'mobiliteit',
    'flexibiliteit',
    'stretching',
    'blessurepreventie',
    'ROM',
    'range of motion',
    'yoga',
    'gewrichten',
    'spieren',
    'oprekken',
  ],
  crosslinks: ['B07', 'B01', 'S05', 'B05'],
  insights: [
    {
      id: 'B04-I01',
      topicId: 'B04',
      sortOrder: 1,
      action:
        'Voer dagelijks 10–15 minuten dynamische mobiliteitsroutines uit die de grote gewrichten adresseren.',
      explanation: `## Dagelijkse mobiliteitsroutine

**Dynamische mobiliteit** — het actief bewegen van gewrichten door hun volledige range of motion — is effectiever dan passief stretchen voor het verbeteren van functionele beweeglijkheid en prestatie.

### Mechanisme

Dynamische mobiliteitswerk verbetert de beweeglijkheid via meerdere mechanismen:
- **Viscoelastische veranderingen**: herhaalde beweging verwarmt het bindweefsel en vermindert de weerstand
- **Neuromusculaire facilitatie**: het zenuwstelsel "leert" de nieuwe range of motion te accepteren
- **Synoviaalvloeistof**: beweging stimuleert de productie van gewrichtsvloeistof, wat het kraakbeen voedt
- **Fasciale glij**: herhaalde bewegingen verbeteren het glijden tussen fasciale lagen

### Praktische toepassing

Een dagelijkse routine van 10–15 minuten moet bevatten:
- **Heupkringen** en 90/90 stretches (heup mobiliteit)
- **Cat-cow** en thoracale rotaties (wervelkolom)
- **Schouderdislocaties** met een band (schouder)
- **Enkel-mobilisaties** (enkel dorsiflexie)
- **Wereld's grootste stretch** (gecombineerde full-body mobiliteit)

### Impact

Consistente mobiliteitswerk leidt binnen 4–8 weken tot meetbare verbeteringen in range of motion. Dit vertaalt zich naar betere squatdiepte, minder compensatiepatronen en lager blessurerisico.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B04-I01-P01',
          title:
            'Effects of dynamic stretching on strength, muscle imbalance, and muscle activation',
          authors: 'Opplert J, Babault N',
          year: 2018,
          journal: 'Medicine and Science in Sports and Exercise',
          studyType: 'meta-analyse',
          sampleSize: 459,
          conclusion:
            'Dynamisch stretchen voor training verbeterde range of motion zonder negatieve effecten op kracht of power output.',
          doi: '10.1249/MSS.0000000000001566',
        },
        {
          id: 'B04-I01-P02',
          title:
            'Acute Effects of Muscle Stretching on Physical Performance, Range of Motion, and Injury Incidence: A Systematic Review',
          authors: 'Behm DG, Blazevich AJ, Kay AD, McHugh M',
          year: 2016,
          journal: 'Applied Physiology, Nutrition, and Metabolism',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Dynamische stretching is de voorkeursopwarmingsmethode voor sporters vanwege de positieve effecten op prestatie en ROM.',
          doi: '10.1139/apnm-2015-0235',
        },
      ],
    },
    {
      id: 'B04-I02',
      topicId: 'B04',
      sortOrder: 2,
      action:
        'Houd statische stretches minimaal 30 seconden aan na de training voor langetermijnflexibiliteitswinst.',
      explanation: `## Statisch stretchen voor flexibiliteit

**Statisch stretchen** — het aanhouden van een positie op het punt van milde spanning — is de meest effectieve methode voor het vergroten van langetermijnflexibiliteit, mits het op het juiste moment wordt toegepast.

### Mechanisme

Bij statisch stretchen treden twee belangrijke processen op:
- **Stress-relaxatie**: het spier-peescomplex past zich aan door verminderde passieve weerstand na herhaald uitrekken
- **Sensorische tolerantie**: het zenuwstelsel past de pijndrempel aan, waardoor je een grotere range of motion tolereert

De optimale duur is minimaal **30 seconden per stretch**. Korter geeft minder effect; langer (60+ seconden) is vooral nuttig bij oudere volwassenen of bij ernstige beperkingen.

### Praktische toepassing

- Stretch **na** de training, nooit voor kracht- of explosieve sessies
- Houd elke stretch **30–60 seconden** aan
- Herhaal elke stretch **2–4 keer**
- Focus op **probleemgebieden**: hamstrings, heupflexoren, kuiten, borstspieren
- Adem rustig door en **forceer niet** voorbij het punt van ongemak
- Combineer met **foam rolling** voor extra myofasciale release

### Impact

Een systematische review toont aan dat 4 weken consistent statisch stretchen de hamstringflexibiliteit met gemiddeld 20% kan verbeteren. Dit vermindert compensatiepatronen en verlaagt het blessurerisico op langere termijn.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B04-I02-P01',
          title:
            'Impact of Duration of Stretching of the Hamstring Muscle Group on Range of Motion and Flexibility: A Systematic Review',
          authors: 'Thomas E, Bianco A, Paoli A, Palma A',
          year: 2018,
          journal: 'Journal of Bodywork and Movement Therapies',
          studyType: 'meta-analyse',
          sampleSize: 538,
          conclusion:
            'Statisch stretchen van 30–60 seconden is optimaal voor het verbeteren van hamstringflexibiliteit bij gezonde volwassenen.',
          doi: '10.1016/j.jbmt.2017.04.006',
        },
        {
          id: 'B04-I02-P02',
          title:
            'A Comparison of Two Stretching Modalities on Lower-Limb Range of Motion Measurements in Recreational Dancers',
          authors: 'Wyon MA, Smith A, Koutedakis Y',
          year: 2013,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Statisch stretchen na training leidde tot significant grotere flexibiliteitswinst dan PNF-stretching bij dansers.',
          doi: '10.1519/JSC.0b013e318260b7ce',
        },
      ],
    },
    {
      id: 'B04-I03',
      topicId: 'B04',
      sortOrder: 3,
      action:
        'Train spieren door hun volledige range of motion voor gelijktijdige kracht- en flexibiliteitswinst.',
      explanation: `## Full range of motion training

**Full ROM krachttraining** — waarbij oefeningen over het volledige bewegingsbereik worden uitgevoerd — is minstens zo effectief als stretchen voor het verbeteren van flexibiliteit, met het bijkomende voordeel van krachtopbouw.

### Mechanisme

Wanneer een spier onder belasting wordt verlengd (excentrische fase door volledige ROM), worden **sarcomeren** aan de spiervezel toegevoegd. Dit leidt tot:
- Structurele verlenging van de **spierbuik**
- Verbeterde **excentrische kracht** in de verlengde positie
- Grotere spieractivatie in de **end-range** (daar waar blessures vaak optreden)
- Betere **proprioceptie** en gewrichtscontrole

### Praktische toepassing

- Voer squats uit tot **volle diepte** (heup onder knieniveau)
- Gebruik bij bankdrukken de **volledige ROM** tot de borst
- Romanian deadlifts: ga zo diep als je hamstrings toelaten met gestrekte rug
- **Overhead press**: van schouders tot volledige extensie boven het hoofd
- Gebruik eventueel **lichtere gewichten** om volledige ROM te garanderen
- Vermijd partiele herhalingen tenzij specifiek voor krachtplateau's

### Impact

Afonso et al. (2021) toonden aan dat full ROM krachttraining vergelijkbare flexibiliteitswinst opleverde als een specifiek stretchprogramma, terwijl het tegelijkertijd significant meer kracht en spiermassa opbouwde.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B04-I03-P01',
          title:
            'Strength Training versus Stretching for Improving Range of Motion: A Systematic Review and Meta-Analysis',
          authors: 'Afonso J, Ramirez-Campillo R, Moscão J, Rocha T, Zacca R, Martins A',
          year: 2021,
          journal: 'Healthcare',
          studyType: 'meta-analyse',
          sampleSize: 452,
          conclusion:
            'Krachttraining door volledige ROM is minstens even effectief als stretching voor het verbeteren van flexibiliteit.',
          doi: '10.3390/healthcare9040427',
        },
        {
          id: 'B04-I03-P02',
          title:
            'Effects of Range of Motion on Muscle Development During Resistance Training Interventions',
          authors: 'Schoenfeld BJ, Grgic J',
          year: 2020,
          journal: 'SAGE Open Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Full ROM training leidt tot superieure spierhypertrofie en vergelijkbare flexibiliteitswinst vergeleken met partiële ROM.',
          doi: '10.1177/2050312120901559',
        },
      ],
    },
    {
      id: 'B04-I04',
      topicId: 'B04',
      sortOrder: 4,
      action:
        'Gebruik foam rolling als zelfmassage voor 1–2 minuten per spiergroep om spierstijfheid te verminderen.',
      explanation: `## Foam rolling en myofasciale release

**Foam rolling** (zelfmyofasciale release) is een populaire techniek die spierstijfheid kan verminderen en range of motion kan verbeteren, zonder de negatieve effecten op kracht die bij langdurig statisch stretchen kunnen optreden.

### Mechanisme

De exacte mechanismen van foam rolling worden nog onderzocht, maar de huidige theorie omvat:
- **Thixotropie**: druk op fascia vermindert de viscositeit van het grondsubstantie
- **Neurale effecten**: stimulatie van mechanoreceptoren (Golgi-peesorgaan, Ruffini-eindorganen) vermindert spiertonus
- **Verhoogde doorbloeding**: lokale druk en release verhoogt de bloedstroom naar het behandelde gebied
- **Pijntolerantie**: herhaalde drukstimuli verhogen de drempels voor pijnperceptie

### Praktische toepassing

- Roll **langzaam** over de spier (2–3 cm per seconde)
- Pauzeer **10–15 seconden** op gevoelige punten (triggerpoints)
- Besteed **1–2 minuten** per spiergroep
- Focus op: quadriceps, hamstrings, IT-band, kuiten, bovenrug
- Gebruik een **zachte rol** als beginner, upgrade naar harder naarmate je tolereert
- **Vermijd** direct rollen op gewrichten, de lage rug en bot-prominenties

### Impact

Foam rolling voor de training verbetert de ROM met 4–7% zonder krachtsverlies. Na de training kan het bijdragen aan verminderde spierpijn (DOMS) en sneller herstel.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B04-I04-P01',
          title:
            'Foam Rolling as a Recovery Tool After an Intense Bout of Physical Activity',
          authors: 'Pearcey GE, Bradbury-Squires DJ, Kawamoto JE, Drinkwater EJ, Behm DG, Button DC',
          year: 2015,
          journal: 'Medicine and Science in Sports and Exercise',
          studyType: 'RCT',
          sampleSize: 8,
          conclusion:
            'Foam rolling na intense training verminderde DOMS significant en verbeterde dynamische bewegingsprestatie in de daaropvolgende dagen.',
          doi: '10.1249/MSS.0000000000000431',
        },
        {
          id: 'B04-I04-P02',
          title:
            'Effects of Self-Myofascial Release: A Systematic Review',
          authors: 'Beardsley C, Škarabot J',
          year: 2015,
          journal: 'Journal of Bodywork and Movement Therapies',
          studyType: 'meta-analyse',
          sampleSize: 327,
          conclusion:
            'Foam rolling verbetert ROM op korte termijn zonder significante negatieve effecten op spierprestatie.',
          doi: '10.1016/j.jbmt.2015.08.007',
        },
      ],
    },
  ],
};
