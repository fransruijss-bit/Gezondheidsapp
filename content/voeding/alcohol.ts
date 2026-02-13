import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V08',
  domainId: 'voeding',
  title: 'Alcohol',
  slug: 'alcohol',
  description: 'Effecten op slaap, herstel, lever, hersenen; risicogrenzen',
  introduction:
    'Alcohol is de meest sociaal geaccepteerde drug ter wereld, maar de gezondheidseffecten worden vaak onderschat. Van verstoorde slaap tot leverschade, van hersenkrimping tot verhoogd kankerrisico — zelfs matige alcoholconsumptie heeft meetbare gevolgen. Recente grootschalige studies hebben het oude idee dat "een glaasje per dag gezond is" fundamenteel ter discussie gesteld.',
  sortOrder: 8,
  evidenceScore: 3,
  tags: [
    'alcohol',
    'alcoholgebruik',
    'slaapverstoring',
    'leverziekte',
    'hersenschade',
    'matigheid',
    'risicogrenzen',
    'kankerrisico',
    'herstel',
  ],
  crosslinks: ['S01', 'S05', 'B04', 'V10'],
  insights: [
    {
      id: 'V08-I01',
      topicId: 'V08',
      sortOrder: 1,
      action:
        'Drink geen alcohol binnen vier uur voor het slapengaan om je slaapkwaliteit te beschermen.',
      explanation: `## Alcohol en slaapverstoring

Hoewel alcohol sederend werkt en het inslapen kan versnellen, **verstoort het de slaaparchitectuur** op fundamentele wijze. De netto-impact op slaapkwaliteit is altijd negatief.

### Mechanisme

Alcohol werkt initieel als een **GABA-agonist**, wat het sederende effect verklaart. Echter, terwijl het lichaam de alcohol afbreekt (gemiddeld 1 eenheid per uur), treedt een **rebound-effect** op: het brein schakelt over naar een hyperexcitabele staat. Dit leidt tot:

- **Onderdrukking van REM-slaap** in de eerste helft van de nacht
- **Fragmentatie** in de tweede helft door sympathische activatie
- Verhoogde **ademhalingsproblemen** door spierrelaxatie (slaapapneu)
- Frequenter **nachtelijk ontwaken** en lichter slapen

### Impact

Zelfs 1–2 eenheden alcohol verminderen de slaapkwaliteit met **9,3%** (lage dosis), oplopend tot **39,2%** bij hoge doses. REM-slaap — essentieel voor emotionele verwerking en geheugenconsolidatie — wordt het hardst geraakt.

### Praktische toepassing

Houd minimaal **4 uur** aan tussen je laatste alcoholische drank en bedtijd. Kies bewust **alcoholvrije avonden** (minimaal 3–4 per week). Als je drinkt, wissel af met water en beperk tot **maximaal 2 eenheden**. Draag een slaaptracker om het effect zelf te meten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V08-I01-P01',
          title:
            'Alcohol and sleep I: effects on normal sleep',
          authors: 'Ebrahim IO, Shapiro CM, Williams AJ, et al.',
          year: 2013,
          journal: 'Alcoholism: Clinical and Experimental Research',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Alcohol vermindert consistent de REM-slaap, verhoogt slaapfragmentatie in de tweede helft van de nacht en verstoort de slaaparchitectuur dosisafhankelijk.',
          doi: '10.1111/acer.12006',
        },
        {
          id: 'V08-I01-P02',
          title:
            'The acute effects of alcohol on sleep electroencephalogram power spectra in late adolescence',
          authors: 'Chan JK, Trinder J, Colrain IM, et al.',
          year: 2015,
          journal: 'Alcoholism: Clinical and Experimental Research',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Alcohol verhoogde slow-wave activiteit in de eerste slaapperiode maar veroorzaakte significante slaapfragmentatie en REM-suppressie in latere perioden.',
          doi: '10.1111/acer.12621',
        },
      ],
    },
    {
      id: 'V08-I02',
      topicId: 'V08',
      sortOrder: 2,
      action:
        'Houd je alcoholconsumptie onder de zeven eenheden per week en streef naar meerdere alcoholvrije dagen.',
      explanation: `## Veilige grenzen bestaan niet — maar er zijn risicogrenzen

De Global Burden of Disease-studie uit 2018, met gegevens van **28 miljoen deelnemers**, concludeerde dat het niveau van alcoholconsumptie dat de gezondheid het minst schaadt, **nul** is. Elke hoeveelheid alcohol verhoogt het totale gezondheidsrisico.

### Mechanisme

Alcohol (ethanol) wordt door de lever omgezet in **acetaldehyde** — een bekende carcinogeen — via het enzym alcoholdehydrogenase. Acetaldehyde veroorzaakt:
- **DNA-schade** en verhoogd mutatierisico
- **Oxidatieve stress** in levercellen
- **Verstoring van de darmbarrière** (leaky gut)
- **Neurotoxiciteit**: verlies van grijze en witte stof in de hersenen

### Dosisresponsrelatie

Er is een **lineaire relatie** tussen alcoholconsumptie en risico op bepaalde kankers (borst-, slokdarm-, leverkanker). Voor cardiovasculaire ziekte is er een licht J-vormige curve, maar de beschermende effecten worden steeds meer betwist.

### Praktische toepassing

De Nederlandse Gezondheidsraad adviseert: **drink niet, of maximaal 1 glas per dag**. Houd minimaal **2–3 alcoholvrije dagen per week** aan. Drink niet om stress te verminderen — zoek gezonde alternatieven zoals beweging of meditatie. Wees bewust van portiegrootte: een standaard eenheid is **10 gram pure alcohol** (klein biertje, klein glas wijn).`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V08-I02-P01',
          title:
            'Alcohol use and burden for 195 countries and territories, 1990–2016: a systematic analysis for the Global Burden of Disease Study 2016',
          authors: 'GBD 2016 Alcohol Collaborators.',
          year: 2018,
          journal: 'The Lancet',
          studyType: 'meta-analyse',
          sampleSize: 28000000,
          conclusion:
            'Het niveau van alcoholconsumptie dat de algehele gezondheid het minst schaadt is nul; elke hoeveelheid verhoogt het risico op kanker en totale mortaliteit.',
          doi: '10.1016/S0140-6736(18)31310-2',
        },
        {
          id: 'V08-I02-P02',
          title:
            'Risk thresholds for alcohol consumption: combined analysis of individual-participant data for 599,912 current drinkers',
          authors: 'Wood AM, Kaptoge S, Butterworth AS, et al.',
          year: 2018,
          journal: 'The Lancet',
          studyType: 'cohort',
          sampleSize: 599912,
          conclusion:
            'Alcoholconsumptie boven 100 gram per week was geassocieerd met lagere levensverwachting; er was geen drempel waaronder alcohol veilig was voor alle uitkomsten.',
          doi: '10.1016/S0140-6736(18)30134-X',
        },
        {
          id: 'V08-I02-P03',
          title:
            'No level of alcohol consumption improves health',
          authors: 'Burton R, Sheron N.',
          year: 2018,
          journal: 'The Lancet',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'De bewering dat matig alcoholgebruik beschermend werkt wordt niet ondersteund door het totale bewijs wanneer alle gezondheidsuitkomsten worden meegewogen.',
          doi: '10.1016/S0140-6736(18)31571-X',
        },
      ],
    },
    {
      id: 'V08-I03',
      topicId: 'V08',
      sortOrder: 3,
      action:
        'Vermijd alcohol na intensieve training omdat het spierherstel en proteïnesynthese significant remt.',
      explanation: `## Alcohol en sportprestatie

Alcohol na training is een veelvoorkomende gewoonte, maar de impact op spierherstel en adaptatie is aanzienlijk negatief. Het remt de processen die je lichaam nodig heeft om sterker te worden.

### Mechanisme

Alcohol remt spierherstel via meerdere routes:
- **mTOR-remming**: de centrale signaleringsroute voor musculaire proteïnesynthese wordt met 24–37% onderdrukt
- **Testosteronverlaging**: alcohol verlaagt testosteron en verhoogt cortisol, wat een katabole omgeving creëert
- **Glycogeenresynthese**: de aanvulling van spierglycogeen wordt vertraagd
- **Dehydratie**: alcohol is een diureticum en verstoort de vochtbalans die essentieel is voor herstel

### Impact

Een dosis van 1 g/kg ethanol (±6–8 eenheden voor een volwassene van 70 kg) na krachttraining verlaagde de musculaire proteïnesynthese met **37%**, zelfs wanneer adequate eiwitinname werd gewaarborgd. Zelfs lagere doses (0,5 g/kg) toonden meetbare remming.

### Praktische toepassing

Vermijd alcohol minimaal **24 uur na intensieve training** voor optimaal herstel. Als je toch drinkt na training, eet eerst een **eiwitrijke maaltijd** en beperk tot maximaal 1–2 eenheden. Op trainingsvrije dagen heeft matig gebruik minder impact, maar de effecten op slaap en herstel blijven relevant.`,
      evidenceScore: 2,
      studyTypeSummary: '2 RCTs',
      isPremium: false,
      papers: [
        {
          id: 'V08-I03-P01',
          title:
            'Alcohol ingestion impairs maximal post-exercise rates of myofibrillar protein synthesis following a single bout of concurrent training',
          authors: 'Parr EB, Camera DM, Areta JL, et al.',
          year: 2014,
          journal: 'PLOS ONE',
          studyType: 'RCT',
          sampleSize: 8,
          conclusion:
            'Alcoholinname na training verlaagde de myofibrillaire proteïnesynthese met 24% (met koolhydraten) en 37% (met eiwitten), vergeleken met controle.',
          doi: '10.1371/journal.pone.0088384',
        },
        {
          id: 'V08-I03-P02',
          title:
            'The effect of alcohol on the acute hormonal response to resistance exercise',
          authors: 'Vingren JL, Hill DW, Buddhadev H, et al.',
          year: 2013,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 10,
          conclusion:
            'Alcohol na krachttraining verlaagde de testosteronrespons en verhoogde de cortisolniveaus, wat een ongunstige hormonale omgeving voor spierherstel creëert.',
          doi: '10.1519/JSC.0b013e31827f1875',
        },
      ],
    },
    {
      id: 'V08-I04',
      topicId: 'V08',
      sortOrder: 4,
      action:
        'Wees bewust van de calorische impact van alcohol: het bevat 7 kcal per gram en remt vetverbranding.',
      explanation: `## De verborgen calorieën van alcohol

Alcohol wordt zelden meegerekend in de dagelijkse calorie-inname, maar met **7 kcal per gram** — bijna het dubbele van koolhydraten en eiwitten — is de energetische bijdrage substantieel.

### Mechanisme

Het lichaam behandelt alcohol als een **toxine** en geeft de afbraak ervan prioriteit boven alle andere metabole processen. Zolang het lichaam bezig is met de verwerking van alcohol, wordt de **vetoxidatie** (vetverbranding) met 70–75% geremd. De calorieën uit alcohol worden bovendien bovenop de normale voedselinname geconsumeerd — alcohol onderdrukt namelijk het **verzadigingsgevoel** en stimuleert eetlust.

### Calorische impact

| Drank | Eenheden | Calorieën |
|-------|----------|-----------|
| Biertje (33 cl) | 1 | 130–150 kcal |
| Glas wijn (150 ml) | 1,5 | 120–130 kcal |
| Cocktail | 2–3 | 200–500 kcal |
| Fles wijn | 7,5 | 600–650 kcal |

Een avond met 4–5 drankjes levert al snel **500–800 extra calorieën** — vergelijkbaar met een volledige maaltijd.

### Praktische toepassing

Tel alcoholcalorieën mee in je dagelijkse inname. Kies **lagere calorie-opties** zoals droge wijn of spirits met suikervrije mixer. Wees extra bewust van de **"dronken munchies"** — de neiging om ongezond te eten na alcoholconsumptie. Overweeg alcoholvrije alternatieven die inmiddels breed beschikbaar zijn.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cross-sectioneel onderzoek',
      isPremium: false,
      papers: [
        {
          id: 'V08-I04-P01',
          title:
            'Alcohol consumption and obesity: an update',
          authors: 'Traversy G, Chaput JP.',
          year: 2015,
          journal: 'Current Obesity Reports',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Matig tot zwaar alcoholgebruik is positief geassocieerd met gewichtstoename; alcohol remt vetoxidatie en verhoogt de totale energie-inname door verminderd verzadigingsgevoel.',
          doi: '10.1007/s13679-014-0129-4',
        },
        {
          id: 'V08-I04-P02',
          title:
            'The effects of alcohol consumption on food energy intake: a systematic review',
          authors: 'Yeomans MR.',
          year: 2010,
          journal: 'British Journal of Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Alcohol stimuleert de voedselinname op de korte termijn en compenseert niet voor de eigen calorische waarde, wat leidt tot een positieve energiebalans.',
          doi: '10.1017/S0007114510000590',
        },
      ],
    },
  ],
};
