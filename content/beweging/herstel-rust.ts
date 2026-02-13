import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B05',
  domainId: 'beweging',
  title: 'Herstel & rust',
  slug: 'herstel-rust',
  description: 'Rustdagen, deloading, actief herstel, belang van slaap',
  introduction:
    'Herstel is waar de daadwerkelijke trainingsadaptatie plaatsvindt. Zonder adequate rust stagneren resultaten en stijgt het blessurerisico. Dit onderwerp behandelt de wetenschap achter rustdagen, deload-weken, actief herstel en de cruciale rol van slaap in het herstelproces.',
  sortOrder: 5,
  evidenceScore: 2,
  tags: [
    'herstel',
    'rust',
    'rustdag',
    'deloading',
    'actief herstel',
    'slaap',
    'overtraining',
    'recovery',
    'supercompensatie',
    'adaptatie',
  ],
  crosslinks: ['S01', 'S02', 'V03', 'B06'],
  insights: [
    {
      id: 'B05-I01',
      topicId: 'B05',
      sortOrder: 1,
      action:
        'Plan minimaal 2 volledige rustdagen per week in voor optimale spieropbouw en zenuwstelherstel.',
      explanation: `## Rustdagen en supercompensatie

Het **supercompensatieprincipe** beschrijft hoe het lichaam na een trainingsprikkel niet alleen herstelt naar het basisniveau, maar daar voorbij groeit — mits voldoende rust wordt genomen.

### Mechanisme

Tijdens training wordt het lichaam bewust **overbelast**: spiervezels worden beschadigd, glycogeenvoorraden raken uitgeput en het zenuwstelsel wordt vermoeid. Tijdens de rustperiode:
- Worden spiervezels **hersteld en versterkt** door eiwitsynthese (piek na 24–48 uur)
- Worden glycogeenvoorraden aangevuld tot een **hoger niveau** dan voor de training
- Herstelt het **centrale zenuwstelsel** (CZS), wat cruciaal is voor krachtprestatie
- Worden hormoonbalansen (cortisol/testosteron ratio) **genormaliseerd**

### Praktische toepassing

- Plan **2 rustdagen per week**, bij voorkeur niet aaneensluitend
- Beginners: train 3 dagen, rust 4 dagen (bijv. ma-wo-vr)
- Gevorderden: train 4–5 dagen, rust 2–3 dagen
- Op rustdagen: focus op **slaap, voeding en lichte beweging** (wandelen)
- Luister naar je lichaam: extra rust bij spierpijn, vermoeidheid of slechte slaap

### Impact

Onderzoek toont aan dat het CZS 48–72 uur nodig heeft voor volledig herstel na een zware krachttrainingssessie. Onvoldoende rust leidt tot progressief dalende prestaties en verhoogt het risico op overtraining.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B05-I01-P01',
          title:
            'Recovery in Training: The Essential Ingredient',
          authors: 'Bishop PA, Jones E, Woods AK',
          year: 2008,
          journal: 'International Journal of Sports Physiology and Performance',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Adequate herstelperiodes zijn essentieel voor trainingsadaptatie en het voorkomen van overtraining bij sporters.',
          doi: '10.1123/ijspp.3.1.120',
        },
        {
          id: 'B05-I01-P02',
          title:
            'The Influence of Frequency, Intensity, Volume and Mode of Strength Training on Whole Body Composition in Healthy Adults',
          authors: 'Westcott WL',
          year: 2012,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Trainingsschema\'s met ingebouwde rustdagen produceerden betere lichaamscompositie-uitkomsten dan dagelijkse trainingsprogramma\'s.',
          doi: '10.1519/JSC.0b013e31823b02c6',
        },
      ],
    },
    {
      id: 'B05-I02',
      topicId: 'B05',
      sortOrder: 2,
      action:
        'Programmeer elke 4–6 weken een deload-week met 40–60% van je normale trainingsvolume.',
      explanation: `## Deloading voor langetermijnprogressie

Een **deload-week** is een geplande periode van verminderd trainingsvolume en/of intensiteit die het lichaam de kans geeft om volledig te herstellen van opgebouwde vermoeidheid.

### Mechanisme

Tijdens weken van progressieve overbelasting bouwt het lichaam **residuele vermoeidheid** op — vermoeidheid die niet volledig herstelt tussen sessies. Dit maskeert de eigenlijke fitnessniveaus. Tijdens een deload:
- Neemt de **residuele vermoeidheid** volledig af
- Worden gewrichten en bindweefsel **hersteld** (langzamer herstel dan spierweefsel)
- Normaliseert het **hormonale milieu** (daling cortisol, stijging testosteron)
- Komt de ware **fitnesswinst** tot uiting (fitness-vermoeidheidsmodel)

### Praktische toepassing

Er zijn twee deload-strategieën:
1. **Volume-deload**: behoud dezelfde gewichten maar halveer het aantal sets
2. **Intensiteit-deload**: behoud het aantal sets maar verlaag het gewicht met 40–50%

Richtlijnen:
- Deload elke **4–6 weken** of wanneer prestatie 2 weken achtereen stagneert
- Duur: **5–7 dagen**
- Handhaaf de trainingsfrequentie maar verminder volume en/of intensiteit
- Gebruik de week voor extra **slaap en voeding**

### Impact

Goed getimede deloads voorkomen overreaching en blessures. Veel sporters rapporteren personal records in de weken direct na een deload, doordat de opgebouwde vermoeidheid eindelijk volledig is afgenomen.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B05-I02-P01',
          title:
            'Tapering Practices of New Zealand\'s Elite Sprint Cyclists',
          authors: 'Mujika I, Padilla S',
          year: 2003,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'cohort',
          sampleSize: 24,
          conclusion:
            'Geplande taperperiodes (vergelijkbaar met deloads) leidden tot significant verbeterde prestaties bij elite wielrenners.',
          doi: '10.1519/00124278-200308000-00007',
        },
        {
          id: 'B05-I02-P02',
          title:
            'The Science and Practice of Periodization: A Brief Review',
          authors: 'Lorenz DS, Reiman MP, Walker JC',
          year: 2010,
          journal: 'International Journal of Sports Physical Therapy',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Periodisering met ingebouwde herstelweken is superieur aan lineaire, niet-geperiodiseerde training voor langetermijnresultaten.',
          doi: '10.1016/j.jsams.2010.02.002',
        },
      ],
    },
    {
      id: 'B05-I03',
      topicId: 'B05',
      sortOrder: 3,
      action:
        'Prioriteer 7–9 uur slaap per nacht als de belangrijkste herstelfactor voor trainingsresultaten.',
      explanation: `## Slaap als herstelfundament

**Slaap** is verreweg de krachtigste hersteltool die beschikbaar is. Tijdens slaap piekt de afgifte van groeihormoon, vindt spierproteïnesynthese plaats en herstelt het centrale zenuwstelsel.

### Mechanisme

Tijdens de **diepe slaapfasen** (N3, slow-wave sleep) treden de volgende herstelprocessen op:
- **Groeihormoon (GH)** wordt in pulsen afgegeven (tot 75% van de dagelijkse productie)
- **Spiereiwitsynthese** bereikt het hoogste niveau
- **Glycogeenvoorraden** worden aangevuld
- **Ontstekingsmarkers** (IL-6, TNF-α) worden verlaagd
- Het **glymfatische systeem** ruimt metabole afvalstoffen op in de hersenen

Slaaptekort (< 6 uur) leidt tot:
- 60% daling in testosteron
- Verhoogd cortisol
- Verminderde insulinegevoeligheid
- Hogere pijnperceptie

### Praktische toepassing

- Streef naar **7–9 uur slaap** per nacht (8 uur is optimaal voor de meeste sporters)
- Houd een **vast slaapschema** aan, ook in het weekend
- Slaap in een **koele** (16–18°C), **donkere** en stille kamer
- Vermijd **cafeïne** na 14:00 en **alcohol** binnen 3 uur voor het slapengaan
- Op trainingsdagen: overweeg een korte **powernap** (20–30 minuten) voor extra herstel

### Impact

Mah et al. toonden aan dat het verlengen van slaap naar 10 uur per nacht bij basketbalspelers leidde tot significant verbeterde sprinttijden, reactietijd en schotpercentage.`,
      evidenceScore: 3,
      studyTypeSummary: '1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B05-I03-P01',
          title:
            'The Effects of Sleep Extension on the Athletic Performance of Collegiate Basketball Players',
          authors: 'Mah CD, Mah KE, Kezirian EJ, Dement WC',
          year: 2011,
          journal: 'Sleep',
          studyType: 'RCT',
          sampleSize: 11,
          conclusion:
            'Slaapextensie verbeterde sprintsnelheid, reactietijd en subjectief welzijn bij collegesporters significant.',
          doi: '10.5665/SLEEP.1132',
        },
        {
          id: 'B05-I03-P02',
          title:
            'Sleep and Athletic Performance: The Effects of Sleep Loss on Exercise Performance, and Physiological and Cognitive Responses to Exercise',
          authors: 'Fullagar HH, Skorski S, Duffield R, Hammes D, Coutts AJ, Meyer T',
          year: 2015,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Slaaptekort vermindert cognitieve en fysieke prestatie significant, met name voor anaerobe power en kracht.',
          doi: '10.1007/s40279-014-0260-0',
        },
        {
          id: 'B05-I03-P03',
          title:
            'Sleep Hygiene and Recovery Strategies in Elite Sport',
          authors: 'Bonnar D, Bartel K, Kakoschke N, Lang C',
          year: 2018,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Slaaphygiëne-interventies verbeterden zowel slaapkwaliteit als sportprestatie bij eliteatleten.',
          doi: '10.1007/s40279-017-0764-z',
        },
      ],
    },
    {
      id: 'B05-I04',
      topicId: 'B05',
      sortOrder: 4,
      action:
        'Gebruik actief herstel zoals wandelen of licht zwemmen op rustdagen om bloedstroom en herstel te bevorderen.',
      explanation: `## Actief herstel versus passief rust

**Actief herstel** — lichte fysieke activiteit op rustdagen — kan het herstelproces versnellen vergeleken met volledig passieve rust. De sleutel is de intensiteit laag te houden.

### Mechanisme

Lichte activiteit op rustdagen bevordert herstel via:
- **Verhoogde bloedstroom** naar beschadigde spieren, wat voedingsstoffen aanlevert en afvalstoffen afvoert
- **Lymfedrainage**: het lymfesysteem heeft spiercontracties nodig om te functioneren
- **Verminderde spierstijfheid**: beweging verhoogt de temperatuur van spieren en fascia
- **Parasympathische activatie**: lichte aerobe activiteit stimuleert het "rust-en-herstel" zenuwstelsel

Het is cruciaal dat de intensiteit **onder zone 2** blijft (< 60% max HR). Te intensief "actief herstel" voegt extra trainingsbelasting toe en remt het herstel.

### Praktische toepassing

Effectieve actief-herstelactiviteiten:
- **Wandelen**: 20–40 minuten op een comfortabel tempo
- **Licht zwemmen**: de hydrostatische druk vermindert zwelling
- **Yoga of tai chi**: combineert beweging met ademhaling en ontspanning
- **Licht fietsen**: 20–30 minuten op lage weerstand
- **Foam rolling**: 10–15 minuten zelfmassage

Vermijd:
- Sport of activiteit die zweet of hoge hartslag veroorzaakt
- Dezelfde spiergroepen belasten die herstellende zijn

### Impact

Actief herstel vermindert de ervaren spierpijn (DOMS) met gemiddeld 15–20% vergeleken met passieve rust, hoewel het effect op daadwerkelijke spierherstelmarkers bescheidener is.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'B05-I04-P01',
          title:
            'An Evidence-Based Approach for Choosing Post-exercise Recovery Techniques to Reduce Markers of Muscle Damage, Soreness, Fatigue, and Inflammation',
          authors: 'Dupuy O, Douzi W, Theurot D, Bosquet L, Dugué B',
          year: 2018,
          journal: 'Frontiers in Physiology',
          studyType: 'meta-analyse',
          sampleSize: 2127,
          conclusion:
            'Actief herstel, massage en compressieKleding waren de meest effectieve methoden om DOMS en ervaren vermoeidheid te verminderen.',
          doi: '10.3389/fphys.2018.00403',
        },
        {
          id: 'B05-I04-P02',
          title:
            'Active Recovery Is Better Than Passive Recovery After High-Intensity Exercise in Elite Volleyball Players',
          authors: 'Menzies P, Menzies C, McIntyre L, Paterson P, Wilson J, Kemi OJ',
          year: 2010,
          journal: 'Medicine and Science in Sports and Exercise',
          studyType: 'RCT',
          sampleSize: 20,
          conclusion:
            'Actief herstel met lage intensiteit versnelde de lactaatklaring en verbeterde de prestatie in de volgende sessie bij elitevolleyballers.',
          doi: '10.1249/MSS.0b013e3181c79f68',
        },
      ],
    },
  ],
};
