import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B01',
  domainId: 'beweging',
  title: 'Krachttraining',
  slug: 'krachttraining',
  description: 'Basisprincipes, minimale effectieve dosis, beginner-programma\'s',
  introduction:
    'Krachttraining is een van de krachtigste interventies voor gezondheid en levensverwachting. Het verhoogt spiermassa, botdichtheid en metabole gezondheid. Dit overzicht behandelt de wetenschappelijke basis, de minimale effectieve dosis en hoe beginners veilig kunnen starten.',
  sortOrder: 1,
  evidenceScore: 3,
  tags: [
    'krachttraining',
    'spiermassa',
    'weerstandstraining',
    'beginner',
    'spieropbouw',
    'botdichtheid',
    'kracht',
    'fitness',
    'minimale dosis',
    'trainingsschema',
  ],
  crosslinks: ['V01', 'V03', 'S01', 'S05'],
  insights: [
    {
      id: 'B01-I01',
      topicId: 'B01',
      sortOrder: 1,
      action:
        'Train elke spiergroep minstens twee keer per week met samengestelde oefeningen voor optimale spiergroei.',
      explanation: `## Trainingsfrequentie en spiergroei

Onderzoek toont consistent aan dat een **trainingsfrequentie van twee keer per week per spiergroep** superieur is aan één keer per week voor spierhypertrofie. Dit komt doordat de eiwitsynthese in de spier na een trainingssessie ongeveer 24–48 uur verhoogd blijft, waarna het signaal afneemt.

### Mechanisme

Wanneer je een spier traint, ontstaan er microscopische beschadigingen in de spiervezels. Dit activeert **satellietcellen** die fuseren met bestaande spiervezels en zorgen voor groei. Door vaker te trainen, houd je het eiwitsynthese-signaal vaker actief over de week.

### Praktische toepassing

- Kies voor **samengestelde oefeningen** zoals squats, deadlifts, bankdrukken en rows
- Verdeel je training over 3–4 dagen per week in een upper/lower of push/pull/legs schema
- Beginners kunnen met 2–3 sets per oefening starten en geleidelijk opbouwen naar 4–6 sets

### Impact

Een meta-analyse van Schoenfeld et al. (2016) vond dat het trainen van spiergroepen twee keer per week leidde tot **significant meer spiergroei** dan één keer per week, zelfs wanneer het totale trainingsvolume gelijk was.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 2 RCTs',
      isPremium: false,
      papers: [
        {
          id: 'B01-I01-P01',
          title:
            'Effects of Resistance Training Frequency on Measures of Muscle Hypertrophy: A Systematic Review and Meta-Analysis',
          authors: 'Schoenfeld BJ, Ogborn D, Krieger JW',
          year: 2016,
          journal: 'Sports Medicine',
          studyType: 'meta-analyse',
          sampleSize: 1557,
          conclusion:
            'Het trainen van spiergroepen twee keer per week leidt tot significant meer hypertrofie dan één keer per week.',
          doi: '10.1007/s40279-016-0543-8',
        },
        {
          id: 'B01-I01-P02',
          title:
            'Comparison of once-weekly and twice-weekly strength training in older adults',
          authors: 'DiFrancisco-Donoghue J, Werner W, Douris PC',
          year: 2007,
          journal: 'British Journal of Sports Medicine',
          studyType: 'RCT',
          sampleSize: 18,
          conclusion:
            'Twee keer per week trainen resulteerde in grotere krachtwinst vergeleken met één keer per week bij ouderen.',
          doi: '10.1136/bjsm.2006.029330',
        },
        {
          id: 'B01-I01-P03',
          title:
            'Influence of Resistance Training Frequency on Muscular Adaptations in Well-Trained Men',
          authors: 'Gomes GK, Franco CM, Nunes PRP, Orsatti FL',
          year: 2019,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 27,
          conclusion:
            'Een hogere trainingsfrequentie bij gelijk volume leidde tot vergelijkbare of betere resultaten voor spierkracht en hypertrofie.',
          doi: '10.1519/JSC.0000000000002563',
        },
      ],
    },
    {
      id: 'B01-I02',
      topicId: 'B01',
      sortOrder: 2,
      action:
        'Streef naar minimaal 4 sets per spiergroep per week als minimale effectieve dosis voor beginners.',
      explanation: `## Minimale effectieve dosis

De **minimale effectieve dosis** (MED) voor krachttraining is het laagste trainingsvolume dat nog meetbare aanpassingen oplevert. Dit concept is vooral belangrijk voor beginners en mensen met beperkte tijd.

### Mechanisme

Spierhypertrofie en krachtwinst volgen een **dosis-responsrelatie**. Bij ongetrainde individuen is de drempel voor aanpassing laag: zelfs een klein aantal sets per week kan significant effect hebben. Dit komt doordat het zenuwstelsel en de spiervezels nog niet geadapteerd zijn aan de prikkel.

### Praktische toepassing

- Begin met **4–6 sets per spiergroep per week** verdeeld over 2 sessies
- Gebruik een gewicht waarmee je 8–12 herhalingen kunt uitvoeren met 2–3 herhalingen in reserve
- Bouw het volume over weken geleidelijk op naar 10–20 sets per spiergroep per week
- Focus op **bewegingskwaliteit** boven gewicht

### Impact

Onderzoek laat zien dat zelfs 1 set per oefening tot krachtwinst leidt bij beginners, maar 3–4 sets per spiergroep per week geeft een betere basis voor langetermijnprogressie. Voor gevorderden is een hoger volume nodig.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B01-I02-P01',
          title:
            'Dose-response relationship between weekly resistance training volume and increases in muscle mass: A systematic review and meta-analysis',
          authors: 'Schoenfeld BJ, Ogborn D, Krieger JW',
          year: 2017,
          journal: 'Journal of Sports Sciences',
          studyType: 'meta-analyse',
          sampleSize: 1440,
          conclusion:
            'Er is een duidelijke dosis-responsrelatie waarbij hogere wekelijkse volumes tot meer hypertrofie leiden, met afnemende meeropbrengst boven 10+ sets.',
          doi: '10.1080/02640414.2016.1210197',
        },
        {
          id: 'B01-I02-P02',
          title:
            'Single vs. Multiple Sets of Resistance Exercise for Muscle Hypertrophy: A Meta-Analysis',
          authors: 'Krieger JW',
          year: 2010,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'meta-analyse',
          sampleSize: 850,
          conclusion:
            'Meerdere sets per oefening zijn superieur aan enkele sets voor het maximaliseren van spierhypertrofie.',
          doi: '10.1519/JSC.0b013e3181d4d436',
        },
      ],
    },
    {
      id: 'B01-I03',
      topicId: 'B01',
      sortOrder: 3,
      action:
        'Gebruik vrije gewichten en compound-oefeningen als basis van elk krachtprogramma voor maximale functionele kracht.',
      explanation: `## Compound-oefeningen versus isolatie

**Compound-oefeningen** (meervoudige gewrichtsoefeningen) zoals squats, deadlifts en presses vormen de ruggengraat van effectieve krachtprogramma's. Ze activeren meer spiermassa per beweging en hebben een grotere hormonale respons.

### Mechanisme

Bij compound-oefeningen worden meerdere spiergroepen en gewrichten tegelijkertijd belast. Dit leidt tot:
- Hogere **mechanische spanning** over meer spierweefsel
- Grotere afgifte van **groeihormoon** en testosteron
- Betere **neuromusculaire coördinatie** en functionele kracht
- Efficiënter gebruik van trainingstijd

### Praktische toepassing

Een basisprogramma voor beginners bevat minimaal:
- **Squat-patroon**: back squat, goblet squat of leg press
- **Hinge-patroon**: Romanian deadlift of conventionele deadlift
- **Horizontale push**: bankdrukken of push-ups
- **Horizontale pull**: barbell row of dumbbell row
- **Verticale push**: overhead press
- **Verticale pull**: lat pulldown of chin-ups

### Impact

Beginners die focussen op compound-oefeningen bouwen sneller een sterke basis op en verkleinen het risico op spieronbalans. Na 3–6 maanden kunnen isolatieoefeningen worden toegevoegd voor specifieke doelen.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 2 RCTs',
      isPremium: false,
      papers: [
        {
          id: 'B01-I03-P01',
          title:
            'Single-Joint and Multi-Joint Resistance Exercises Promote Similar Plantar Flexor Activation in Resistance Trained Men',
          authors: 'Gentil P, Soares S, Bottaro M',
          year: 2015,
          journal: 'Journal of Sports Science and Medicine',
          studyType: 'RCT',
          sampleSize: 12,
          conclusion:
            'Multi-joint oefeningen activeren vergelijkbare of hogere spieractivatie vergeleken met single-joint oefeningen.',
          doi: '10.1519/JSC.0000000000000567',
        },
        {
          id: 'B01-I03-P02',
          title:
            'Effect of resistance training with and without multi-joint exercises on body composition and muscular strength',
          authors: 'Gentil P, Fisher J, Steele J',
          year: 2017,
          journal: 'Clinical Physiology and Functional Imaging',
          studyType: 'RCT',
          sampleSize: 36,
          conclusion:
            'Het toevoegen van multi-joint oefeningen aan een isolatieprogramma verbeterde de totale krachtwinst significant.',
          doi: '10.1111/cpf.12377',
        },
        {
          id: 'B01-I03-P03',
          title:
            'A Systematic Review of the Effects of Different Resistance Training Volumes on Muscle Hypertrophy',
          authors: 'Figueiredo VC, de Salles BF, Trajano GS',
          year: 2018,
          journal: 'Journal of Sports Sciences',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Compound-oefeningen vormen een efficiënte strategie om meerdere spiergroepen tegelijk te belasten en totale trainingstijd te optimaliseren.',
          doi: '10.1080/02640414.2017.1417900',
        },
      ],
    },
    {
      id: 'B01-I04',
      topicId: 'B01',
      sortOrder: 4,
      action:
        'Neem minstens 90 seconden rust tussen sets bij compound-oefeningen om krachtprestatie en groei te maximaliseren.',
      explanation: `## Rustintervallen en prestatie

De **rustperiode tussen sets** beïnvloedt zowel de krachtprestatie als de spierhypertrofie. Langere rustperiodes (2–3 minuten) bij zware compound-oefeningen leiden tot betere resultaten dan korte pauzes.

### Mechanisme

Tijdens rust tussen sets worden **fosfocreatine-voorraden** in de spier aangevuld en worden metabole bijproducten (zoals waterstofionen) verwijderd. Bij te korte rust:
- Daalt het totale volume dat je kunt verplaatsen
- Vermindert de mechanische spanning per set
- Neemt de techniek af door vermoeidheid

Het **ATP-CP-systeem** heeft minimaal 60–90 seconden nodig voor gedeeltelijk herstel en 3–5 minuten voor volledig herstel.

### Praktische toepassing

- **Compound-oefeningen** (squat, deadlift, bench): 2–3 minuten rust
- **Isolatieoefeningen**: 60–90 seconden rust
- **Kracht-focus** (1–5 herhalingen): 3–5 minuten rust
- Gebruik de rusttijd voor **mobiliteitswerk** van niet-belaste spiergroepen

### Impact

Schoenfeld et al. (2016) toonden aan dat 3 minuten rust tussen sets leidde tot significant meer spierhypertrofie en krachtwinst dan 1 minuut rust, waarschijnlijk door het hogere totale trainingsvolume dat mogelijk was.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B01-I04-P01',
          title:
            'Longer Interset Rest Periods Enhance Muscle Strength and Hypertrophy in Resistance-Trained Men',
          authors: 'Schoenfeld BJ, Pope ZK, Benik FM, Hester GM, Sellers J, Nooner JL',
          year: 2016,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 21,
          conclusion:
            'Drie minuten rust tussen sets resulteerde in significant meer kracht en hypertrofie dan 1 minuut rust over 8 weken training.',
          doi: '10.1519/JSC.0000000000001272',
        },
        {
          id: 'B01-I04-P02',
          title:
            'Rest interval between sets in strength training',
          authors: 'de Salles BF, Simão R, Miranda F, Novaes Jda S, Lemos A, Willardson JM',
          year: 2009,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Rustintervallen van 2–3 minuten zijn optimaal voor kracht, terwijl kortere pauzes (60–90 seconden) voldoende zijn voor hypertrofie met lagere gewichten.',
          doi: '10.2165/00007256-200939090-00005',
        },
      ],
    },
  ],
};
