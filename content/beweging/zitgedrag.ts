import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B10',
  domainId: 'beweging',
  title: 'Zitgedrag doorbreken',
  slug: 'zitgedrag',
  description: 'Gezondheidseffecten langdurig zitten, micro-beweging',
  introduction:
    'Langdurig zitten is een onafhankelijke risicofactor voor chronische ziekten, zelfs bij mensen die regelmatig sporten. De gemiddelde Nederlander zit meer dan 8 uur per dag. Dit onderwerp behandelt de gezondheidseffecten van sedentair gedrag en evidence-based strategieën om zitgedrag te doorbreken.',
  sortOrder: 10,
  evidenceScore: 3,
  tags: [
    'zitgedrag',
    'sedentair',
    'langdurig zitten',
    'micro-beweging',
    'sta-bureau',
    'bewegingspauze',
    'kantoor',
    'gezondheidsrisico',
    'metabole gezondheid',
    'bureauwerk',
  ],
  crosslinks: ['B03', 'V04', 'S03', 'V07'],
  insights: [
    {
      id: 'B10-I01',
      topicId: 'B10',
      sortOrder: 1,
      action:
        'Onderbreek elke 30 minuten zitten met 3–5 minuten staan of licht bewegen om metabole risico\'s te verlagen.',
      explanation: `## De 30-minutenregel

**Langdurig ononderbroken zitten** activeert schadelijke metabole processen die al na 30 minuten beginnen. Het regelmatig doorbreken van zitperioden — zelfs met minimale beweging — kan deze effecten grotendeels tenietdoen.

### Mechanisme

Wanneer grote spiergroepen (met name de benen en billen) langdurig inactief zijn:
- Daalt de activiteit van **lipoprotein lipase (LPL)** — een enzym cruciaal voor vetmetabolisme — met 90%
- Vermindert de **glucoseopname** door spieren (verminderde GLUT4-translocatie)
- Stijgt de **insulineresistentie** al binnen enkele uren
- Vertraagt de **bloedcirculatie** in de benen, wat het risico op trombose verhoogt
- Neemt de **endotheelfunctie** af (verminderde vaatverwijding)

Het doorbreken van zitten heractiveerd LPL en herstelt de glucoseopname binnen minuten.

### Praktische toepassing

- Stel een **timer** in op 30 minuten (telefoon, smartwatch, app)
- Bij elk signaal: **sta op en beweeg** 3–5 minuten
- Effectieve onderbrekingen:
  - Opstaan en kort wandelen (naar keuken, toilet)
  - Lichte stretches of **bureauoefeningen** (kniebuigingen, kuitraises)
  - Sta-vergaderingen of telefoontjes lopend doen
  - Trap op-en-af lopen
- Gebruik een **sta-bureau** en wissel elke 30–45 minuten

### Impact

Dunstan et al. (2012) toonden aan dat het doorbreken van zitten elke 20 minuten met 2 minuten licht wandelen de postprandiale glucose- en insulinespiegels met 24–30% verlaagde vergeleken met ononderbroken zitten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 RCT, 1 meta-analyse',
      isPremium: false,
      papers: [
        {
          id: 'B10-I01-P01',
          title:
            'Breaking Up Prolonged Sitting Reduces Postprandial Glucose and Insulin Responses',
          authors: 'Dunstan DW, Kingwell BA, Larsen R, Healy GN, Cerin E, Hamilton MT',
          year: 2012,
          journal: 'Diabetes Care',
          studyType: 'RCT',
          sampleSize: 19,
          conclusion:
            'Het onderbreken van langdurig zitten met korte wandelingen van 2 minuten elke 20 minuten verlaagde de postprandiale glucose en insuline significant.',
          doi: '10.2337/dc11-1931',
        },
        {
          id: 'B10-I01-P02',
          title:
            'Sedentary Time and Its Association With Risk for Disease Incidence, Mortality, and Hospitalization in Adults: A Systematic Review and Meta-analysis',
          authors: 'Biswas A, Oh PI, Faulkner GE, Bajaj RR, Silver MA, Mitchell MS',
          year: 2015,
          journal: 'Annals of Internal Medicine',
          studyType: 'meta-analyse',
          sampleSize: 595086,
          conclusion:
            'Langdurig zitgedrag is geassocieerd met een 15–20% hoger risico op mortaliteit, onafhankelijk van fysieke activiteitsniveaus.',
          doi: '10.7326/M14-1651',
        },
      ],
    },
    {
      id: 'B10-I02',
      topicId: 'B10',
      sortOrder: 2,
      action:
        'Gebruik een sta-bureau en wissel elke 30–45 minuten tussen zitten en staan gedurende de werkdag.',
      explanation: `## Sta-bureaus en gezondheid

Een **sta-bureau** (of zit-sta bureau) is een van de meest praktische interventies om de totale zittijd op het werk te verminderen. Het gaat niet om de hele dag staan, maar om de **afwisseling** tussen zitten en staan.

### Mechanisme

Staan activeert de **posturale spieren** (kuiten, quadriceps, core) die bij zitten grotendeels uitgeschakeld zijn. Dit resulteert in:
- **Hogere calorieverbranding**: staan verbrandt ~0,15 kcal/min meer dan zitten (ca. 54 kcal per 6 uur extra staan)
- **Betere glucoseregulatie**: staande positie verbetert de insulinegevoeligheid
- **Verbeterde circulatie**: staand worden de beenspieren licht geactiveerd, wat de veneuze terugstroom bevordert
- **Minder lagerugklachten**: afwisseling vermindert de statische belasting op de lumbale wervelkolom

Belangrijk: **langdurig staan** (> 2 uur aaneengesloten) brengt eigen risico's met zich mee, waaronder spataderen en voetklachten.

### Praktische toepassing

- Investeer in een **elektrisch verstelbaar zit-sta bureau** voor gemakkelijk wisselen
- Begin met **2–3 uur staan per dag** en bouw geleidelijk op
- Wissel elke **30–45 minuten** tussen zitten en staan
- Gebruik een **anti-vermoeidheidsmat** bij het staan
- Draag comfortabele schoenen op staande dagen
- Combineer staan met lichte bewegingen: gewicht verschuiven, kuitraises

### Impact

Een systematische review toont aan dat zit-sta bureaus de zittijd op het werk met gemiddeld 100 minuten per dag verminderen, met positieve effecten op zowel fysieke als psychologische gezondheidsuitkomsten.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B10-I02-P01',
          title:
            'Effectiveness of sit-stand workstations on reducing sedentary behaviour: a systematic review',
          authors: 'Shrestha N, Kukkonen-Harjula KT, Verbeek JH, Ijaz S, Hunber V, Lallukka T',
          year: 2018,
          journal: 'Cochrane Database of Systematic Reviews',
          studyType: 'meta-analyse',
          sampleSize: 2174,
          conclusion:
            'Zit-sta bureaus verminderen de zittijd op het werk met 30 minuten tot 2 uur per dag, afhankelijk van het type interventie en de opvolging.',
          doi: '10.1002/14651858.CD010912.pub4',
        },
        {
          id: 'B10-I02-P02',
          title:
            'Reducing occupational sitting time and improving worker health: the Take-a-Stand project',
          authors: 'Pronk NP, Katz AS, Lowry M, Payfer JR',
          year: 2012,
          journal: 'Preventing Chronic Disease',
          studyType: 'RCT',
          sampleSize: 34,
          conclusion:
            'Zit-sta bureaus verminderde de dagelijkse zittijd met 66 minuten en verbeterden stemming, energie en verminderden bovenrugpijn.',
          doi: '10.5888/pcd9.110323',
        },
      ],
    },
    {
      id: 'B10-I03',
      topicId: 'B10',
      sortOrder: 3,
      action:
        'Bouw micro-oefeningen in je werkdag in zoals bureauoefeningen, kuitraises en wandelvergaderingen.',
      explanation: `## Micro-oefeningen op het werk

**Micro-oefeningen** — korte perioden van fysieke activiteit verspreid over de dag — zijn een effectieve strategie om de negatieve effecten van langdurig zitten te bestrijden zonder formele trainingstijd te vereisen.

### Mechanisme

Frequente korte bewegingsmomenten doorbreken de metabole "slaapstand" die optreedt bij langdurig zitten:
- Elke spiercontractie activeert **GLUT4-transporters** voor glucoseopname
- Korte inspanningen stimuleren de productie van **myokinen** — signaalmoleculen die systemische gezondheidseffecten hebben
- Herhaalde activering van het cardiovasculaire systeem verbetert de **endotheelfunctie**
- Micro-bewegingen voorkomen de afname van **lipoprotein lipase** die bij langdurig zitten optreedt

Het cumulatieve effect van meerdere korte bewegingsmomenten kan vergelijkbaar zijn met een enkele langere trainingssessie voor metabole parameters.

### Praktische toepassing

**Micro-oefeningen voor op kantoor (geen sportkleding nodig):**
- **Kuitraises**: 20 herhalingen bij het koffiezetapparaat
- **Bureaudips**: 10 herhalingen aan de rand van je bureau
- **Wandelvergaderingen**: loop tijdens overleggen (telefoon/koptelefoon)
- **Traplopen**: neem altijd de trap i.p.v. de lift
- **Stoelkniebuigingen**: 10× opstaan en gaan zitten zonder handen
- **Isometrische core**: 30 seconden buikspieren aanspannen op je stoel
- **Nekrotaties en schouderrollen**: elke 30 minuten

**Strategie:**
- Koppel micro-oefeningen aan **bestaande gewoonten** (na elke koffiepauze, voor elke vergadering)
- Gebruik een **habit tracker** om consistentie op te bouwen

### Impact

Onderzoek toont aan dat het verspreiden van 30 minuten activiteit over de dag in blokken van 1–5 minuten vergelijkbare of betere metabole effecten heeft als een enkele aaneengesloten sessie van 30 minuten.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B10-I03-P01',
          title:
            'A 2 Week Reduction in Ambulatory Activity Attenuates Peripheral Vascular Function',
          authors: 'Boyle LJ, Credeur DP, Jenkins NT, Padilla J, Leidy HJ, Thyfault JP',
          year: 2013,
          journal: 'Journal of Applied Physiology',
          studyType: 'RCT',
          sampleSize: 12,
          conclusion:
            'Zelfs korte perioden van verminderde activiteit leiden tot meetbare verslechtering van de vaatfunctie, wat het belang van consistente beweging benadrukt.',
          doi: '10.1152/japplphysiol.00977.2013',
        },
        {
          id: 'B10-I03-P02',
          title:
            'Breaking up workplace sitting with intermittent standing bouts improves fatigue and musculoskeletal discomfort',
          authors: 'Thorp AA, Kingwell BA, Owen N, Dunstan DW',
          year: 2014,
          journal: 'Occupational and Environmental Medicine',
          studyType: 'RCT',
          sampleSize: 23,
          conclusion:
            'Het afwisselen van zitten met korte staperioden verminderde vermoeidheid en musculoskeletale klachten significant gedurende de werkdag.',
          doi: '10.1136/oemed-2014-102348',
        },
      ],
    },
    {
      id: 'B10-I04',
      topicId: 'B10',
      sortOrder: 4,
      action:
        'Streef naar maximaal 6 uur totale zittijd per dag en compenseer onvermijdelijk zitten met extra beweging.',
      explanation: `## Totale zittijd en mortaliteit

De **totale dagelijkse zittijd** is een onafhankelijke risicofactor voor vroegtijdige sterfte en chronische ziekten. Het risico stijgt progressief boven de 6–8 uur per dag, maar kan gedeeltelijk worden gecompenseerd door fysieke activiteit.

### Mechanisme

Langdurig sedentair gedrag beïnvloedt de gezondheid via meerdere pathways:
- **Metabole dysregulatie**: verminderde insulinegevoeligheid, verstoorde lipidenprofielen
- **Chronische laaggradige ontsteking**: verhoogde CRP, IL-6 en TNF-α
- **Cardiovasculaire schade**: endotheeldysfunctie, arteriele stijfheid
- **Spieratrofie**: verlies van spiermassa en -functie bij de grote spiergroepen
- **Mentale gezondheid**: verhoogd risico op depressie en angst

Het goede nieuws: **60–75 minuten matig-intensieve fysieke activiteit per dag** kan het verhoogde mortaliteitsrisico van 8+ uur zitten grotendeels compenseren. Dit benadrukt dat zitten en bewegen onafhankelijke gezondheidsgedragingen zijn.

### Praktische toepassing

Strategieën om totale zittijd te verminderen:
- **Monitor** je zittijd met een smartwatch of app
- Stel een dagelijks **maximum** van 6 uur zittijd als doel
- Vervang passieve vrije tijd (tv, gaming) door actieve alternatieven
- **Huishoudelijke taken** tellen ook: koken, schoonmaken, tuinieren
- Gebruik **actief vervoer**: fietsen, wandelen
- Socialiseer actief: wandelen met vrienden, sportclub, dansen
- Bij onvermijdelijk langdurig zitten (bijv. vliegen): **compenseer** met extra beweging voor en na

### Impact

Ekelund et al. (2016) analyseerden data van meer dan 1 miljoen volwassenen en concludeerden dat 60–75 minuten matig-intensieve activiteit per dag het verhoogde sterftrisico door langdurig zitten elimineert.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B10-I04-P01',
          title:
            'Does physical activity attenuate, or even eliminate, the detrimental association of sitting time with mortality? A harmonised meta-analysis of data from more than 1 million men and women',
          authors: 'Ekelund U, Steene-Johannessen J, Brown WJ, Fagerland MW, Owen N, Powell KE',
          year: 2016,
          journal: 'The Lancet',
          studyType: 'meta-analyse',
          sampleSize: 1005791,
          conclusion:
            'Hoge niveaus van fysieke activiteit (60–75 min/dag) elimineren het verhoogde mortaliteitsrisico dat geassocieerd is met langdurig zitgedrag.',
          doi: '10.1016/S0140-6736(16)30370-1',
        },
        {
          id: 'B10-I04-P02',
          title:
            'Patterns of Sedentary Behavior and Mortality in U.S. Middle-Aged and Older Adults: A National Cohort Study',
          authors: 'Diaz KM, Howard VJ, Hutto B, Colabianchi N, Vena JE, Safford MM',
          year: 2017,
          journal: 'Annals of Internal Medicine',
          studyType: 'cohort',
          sampleSize: 7985,
          conclusion:
            'Zowel de totale zittijd als de duur van ononderbroken zitperioden waren onafhankelijk geassocieerd met verhoogde mortaliteit.',
          doi: '10.7326/M17-0212',
        },
      ],
    },
  ],
};
