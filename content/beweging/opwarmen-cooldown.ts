import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B07',
  domainId: 'beweging',
  title: 'Opwarmen & cooldown',
  slug: 'opwarmen-cooldown',
  description: 'Evidence-based opwarming, effect op prestatie en blessures',
  introduction:
    'Een goede opwarming bereidt het lichaam voor op training door de bloedstroom te verhogen, de gewrichten te smeren en het zenuwstelsel te activeren. De cooldown ondersteunt het herstelproces. Dit onderwerp behandelt de wetenschappelijke evidence voor beide en biedt praktische protocollen.',
  sortOrder: 7,
  evidenceScore: 2,
  tags: [
    'opwarmen',
    'cooldown',
    'warm-up',
    'blessurepreventie',
    'prestatie',
    'dynamisch stretchen',
    'bloedstroom',
    'activering',
    'spierbescherming',
    'voorbereiding',
  ],
  crosslinks: ['B04', 'B01', 'B09', 'S05'],
  insights: [
    {
      id: 'B07-I01',
      topicId: 'B07',
      sortOrder: 1,
      action:
        'Begin elke training met 5–10 minuten lichte cardio gevolgd door dynamische mobiliteit specifiek voor de geplande oefeningen.',
      explanation: `## De optimale opwarming

Een evidence-based opwarming bestaat uit twee fasen: een **algemene fase** (verhogen van de kerntemperatuur) en een **specifieke fase** (neurale activering van de te trainen spiergroepen).

### Mechanisme

De fysiologische effecten van een goede opwarming zijn:
- **Temperatuurstijging**: spiertemperatuur stijgt 1–2°C, wat de enzymatische activiteit en zenuwgeleidingssnelheid verhoogt
- **Vasodilatatie**: bloedvaten in spieren verwijden, waardoor meer zuurstof en voedingsstoffen beschikbaar komen
- **Synoviaalvloeistof**: gewrichtsvloeistof wordt dunner en beter verdeeld, wat wrijving vermindert
- **Post-activatie potentiatie (PAP)**: lichte spieractivatie verhoogt de rekrutering van motorische eenheden
- **Neurale priming**: het zenuwstelsel wordt voorbereid op de specifieke bewegingspatronen

### Praktische toepassing

**Fase 1 — Algemene opwarming (5 minuten):**
- Licht joggen, fietsen of roeien op lage intensiteit
- Doel: licht zweten, hartslag verhogen naar 100–120 bpm

**Fase 2 — Specifieke opwarming (5 minuten):**
- Dynamische mobiliteit voor de gewrichten die je gaat belasten
- Bewegingsspecifieke oefeningen (bijv. bodyweight squats voor een beendag)
- Opbouwende sets met toenemend gewicht naar je werkssets toe

### Impact

Een adequate opwarming verbetert de kracht- en powerprestatie met 3–5% en kan het risico op musculaire blessures significant verlagen.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B07-I01-P01',
          title:
            'Effects of Warming-up on Physical Performance: A Systematic Review With Meta-analysis',
          authors: 'Fradkin AJ, Zazryn TR, Smoliga JM',
          year: 2010,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'meta-analyse',
          sampleSize: 1256,
          conclusion:
            'Opwarming verbeterde de fysieke prestatie in 79% van de onderzochte criteria, met de grootste effecten op kracht- en powertaken.',
          doi: '10.1519/JSC.0b013e3181c643a0',
        },
        {
          id: 'B07-I01-P02',
          title:
            'A Dynamic Warm-up Model Increases Quadriceps Strength and Hamstring Flexibility',
          authors: 'Aguilar AJ, DiStefano LJ, Brown CN, Herman DC, Guskiewicz KM, Padua DA',
          year: 2012,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Een dynamische opwarming verhoogde quadricepskracht en hamstringflexibiliteit significant meer dan statisch stretchen.',
          doi: '10.1519/JSC.0b013e31823f2b21',
        },
      ],
    },
    {
      id: 'B07-I02',
      topicId: 'B07',
      sortOrder: 2,
      action:
        'Vermijd statisch stretchen voor krachttraining omdat dit de maximale krachtprestatie tijdelijk kan verminderen.',
      explanation: `## Statisch stretchen voor training: prestatie-effecten

**Statisch stretchen** direct voor training kan de **maximale kracht en powerprestatie** tijdelijk verlagen. Dit effect staat bekend als het "stretch-induced strength loss" fenomeen.

### Mechanisme

Langdurig statisch stretchen (> 60 seconden per spiergroep) veroorzaakt:
- **Verminderde spier-peessteriliteit**: de spier-peesunit wordt compliant, waardoor minder kracht kan worden overgedragen
- **Neurale inhibitie**: afname van motorische eenheidrekrutering door autogene inhibitie via het Golgi-peesorgaan
- **Veranderde length-tension relatie**: de optimale spierlengte voor krachtproductie verschuift tijdelijk

Het effect is het sterkst bij:
- Stretches van **> 60 seconden** per spiergroep
- Taken die **maximale kracht of explosiviteit** vereisen
- Training die **direct na** het stretchen plaatsvindt

### Praktische toepassing

- **Vermijd** statisch stretchen > 30 seconden per spiergroep voor krachttraining
- Gebruik in plaats daarvan **dynamische mobiliteit** en bewegingsspecifieke opwarming
- Korte statische stretches (< 15 seconden) hebben **geen negatief effect** en zijn acceptabel
- Bewaar langere statische stretches voor **na de training** of als aparte sessie
- Bij ROM-beperkingen: gebruik foam rolling voor de training als alternatief

### Impact

Een meta-analyse van Simic et al. (2013) vond een gemiddeld krachtverlies van 5,5% na statisch stretchen, met grotere effecten bij langere stretchduur. Het effect verdwijnt na 10–15 minuten.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B07-I02-P01',
          title:
            'Does pre-exercise static stretching inhibit maximal muscular performance? A meta-analytical review',
          authors: 'Simic L, Sarabon N, Markovic G',
          year: 2013,
          journal: 'Scandinavian Journal of Medicine and Science in Sports',
          studyType: 'meta-analyse',
          sampleSize: 2047,
          conclusion:
            'Pre-exercise statisch stretchen vermindert kracht, power en explosieve prestatie met gemiddeld 3–5.5%, afhankelijk van de duur van de stretch.',
          doi: '10.1111/j.1600-0838.2012.01444.x',
        },
        {
          id: 'B07-I02-P02',
          title:
            'Acute Effects of Static and Dynamic Stretching on Leg Flexor and Extensor Isokinetic Strength in Elite Women Athletes',
          authors: 'Sekir U, Arabaci R, Akova B, Kadagan SM',
          year: 2010,
          journal: 'Scandinavian Journal of Medicine and Science in Sports',
          studyType: 'RCT',
          sampleSize: 20,
          conclusion:
            'Statisch stretchen verminderde isokinetische kracht significant, terwijl dynamisch stretchen de kracht verbeterde of onveranderd liet.',
          doi: '10.1111/j.1600-0838.2009.00923.x',
        },
      ],
    },
    {
      id: 'B07-I03',
      topicId: 'B07',
      sortOrder: 3,
      action:
        'Voer na elke training een cooldown uit van 5–10 minuten met lichte cardio en ademhalingsoefeningen.',
      explanation: `## De cooldown: evidence en praktijk

De **cooldown** na training is minder goed onderbouwd dan de opwarming, maar heeft specifieke voordelen voor het parasympathische zenuwstelsel en het psychologische herstelproces.

### Mechanisme

Na intensieve training is het sympathische zenuwstelsel sterk geactiveerd. Een geleidelijke cooldown:
- Voorkomt **bloedpooling** in de ledematen (veneuze terugstroom via spierpomp)
- Versnelt de **lactaatklaring** door lichte activiteit (hoewel lactaat geen "afvalstof" is)
- Faciliteert de overgang naar **parasympathische dominantie** (rust-en-herstel modus)
- Vermindert het risico op **post-exercise hypotensie** (duizeligheid, flauwvallen)
- Biedt een **psychologisch afsluitsignaal** voor de training

De evidence voor blessurepreventie door cooldowns is beperkt, maar de cardiovasculaire en neuropsychologische voordelen zijn goed gedocumenteerd.

### Praktische toepassing

Een effectieve cooldown bevat:
- **3–5 minuten** lichte cardio (wandelen, langzaam fietsen) met afnemende intensiteit
- **2–3 minuten** ademhalingsoefeningen: box breathing (4 seconden in, 4 vasthouden, 4 uit, 4 vasthouden)
- Optioneel: licht **statisch stretchen** (30–60 seconden per spiergroep)
- Optioneel: 5 minuten **foam rolling** van de getrainde spiergroepen

### Impact

Hoewel de directe impact op spierherstel bescheiden is, rapporteren sporters die consistent een cooldown uitvoeren minder spierpijn en een beter gevoel van welzijn na training.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B07-I03-P01',
          title:
            'Do We Need a Cool-Down After Exercise? A Narrative Review of the Psychophysiological Effects and the Effects on Performance, Injuries and the Long-Term Adaptive Response',
          authors: 'Van Hooren B, Peake JM',
          year: 2018,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'De evidence voor fysiologische voordelen van een cooldown is beperkt, maar er zijn potentiële psychologische en cardiovasculaire voordelen.',
          doi: '10.1007/s40279-018-0916-2',
        },
        {
          id: 'B07-I03-P02',
          title:
            'Effect of cool down exercise on heart rate recovery in normotensive and hypertensive women',
          authors: 'Barak OF, Jakovljevic DG, Popadic Gacesa JZ, Ovcin ZB, Brodie DA, Grujic NG',
          year: 2010,
          journal: 'Journal of Sports Science and Medicine',
          studyType: 'RCT',
          sampleSize: 40,
          conclusion:
            'Een actieve cooldown verbeterde de hartslagherstelsnelheid significant bij zowel normotensieve als hypertensieve vrouwen.',
          doi: '10.1016/j.jbmt.2010.02.001',
        },
      ],
    },
    {
      id: 'B07-I04',
      topicId: 'B07',
      sortOrder: 4,
      action:
        'Voer specifieke opwarmsets uit met geleidelijk oplopend gewicht voordat je je werksets begint bij krachttraining.',
      explanation: `## Opwarmsets bij krachttraining

**Opwarmsets** — lichtere sets die toewerken naar het werkgewicht — zijn een essentieel onderdeel van een veilige en effectieve krachttraining. Ze bereiden spieren, gewrichten en zenuwstelsel specifiek voor op de komende belasting.

### Mechanisme

Specifieke opwarmsets bieden voordelen boven een algemene opwarming alleen:
- **Post-activatie potentiatie (PAP)**: submaxale spiercontracties verhogen de kracht in daaropvolgende zware sets door verbeterde fosforiylatie van myosine lichte ketens
- **Bewegingspatroon activering**: het zenuwstelsel oefent het exacte coördinatiepatroon met toenemende belasting
- **Gewrichtsvoorbereiding**: geleidelijke drukopbouw bereidt kraakbeen en ligamenten voor
- **Proprioceptieve kalibratie**: het lichaam kalibreert de gewaarwording van het gewicht

### Praktische toepassing

Protocol voor opwarmsets (voorbeeld bij werkgewicht van 100 kg squat):
1. **Set 1**: lege stang (20 kg) × 10 herhalingen
2. **Set 2**: 50 kg × 8 herhalingen
3. **Set 3**: 70 kg × 5 herhalingen
4. **Set 4**: 85 kg × 3 herhalingen
5. **Set 5**: 95 kg × 1 herhaling
6. **Werksets beginnen**: 100 kg

Richtlijnen:
- Gebruik **3–5 opwarmsets** voor zware compound-oefeningen
- Verminder het aantal herhalingen naarmate het gewicht stijgt
- Rust **1–2 minuten** tussen opwarmsets
- De laatste opwarmset moet dicht bij het werkgewicht liggen (90–95%)
- Voor isolatieoefeningen volstaan **1–2 opwarmsets**

### Impact

Opwarmsets verminderen het blessurerisico en kunnen de prestatie in de werksets met 3–8% verbeteren door het PAP-effect.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B07-I04-P01',
          title:
            'Postactivation Potentiation, Fiber Type, and Twitch Contraction Time in Human Knee Extensor Muscles',
          authors: 'Hamada T, Sale DG, MacDougall JD, Tarnopolsky MA',
          year: 2000,
          journal: 'Journal of Applied Physiology',
          studyType: 'RCT',
          sampleSize: 16,
          conclusion:
            'Submaxale spiercontracties voorafgaand aan maximale inspanning verhoogden de twitch-kracht door postactivatie potentiatie.',
          doi: '10.1152/jappl.2000.88.6.2131',
        },
        {
          id: 'B07-I04-P02',
          title:
            'Warm-Up Strategies for Sport and Exercise: Mechanisms and Applications',
          authors: 'McGowan CJ, Pyne DB, Thompson KG, Rattray B',
          year: 2015,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Specifieke opwarmprotocollen die de activiteit van de geplande training nabootsen zijn het meest effectief voor prestatieoptimalisatie.',
          doi: '10.1007/s40279-015-0376-x',
        },
      ],
    },
  ],
};
