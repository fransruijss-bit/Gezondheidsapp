import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V02',
  domainId: 'voeding',
  title: 'Micronutriënten',
  slug: 'micronutrienten',
  description: 'Essentiële vitaminen en mineralen, deficiënties herkennen',
  introduction:
    'Micronutriënten — vitaminen en mineralen — zijn stoffen die het lichaam in kleine hoeveelheden nodig heeft maar die een enorme impact hebben op gezondheid. Van immuunfunctie tot botsterkte, van energieproductie tot mentale gezondheid: tekorten aan micronutriënten kunnen verstrekkende gevolgen hebben. Dit onderwerp helpt je de belangrijkste vitaminen en mineralen te begrijpen, tekorten te herkennen en je voeding hierop af te stemmen.',
  sortOrder: 2,
  evidenceScore: 3,
  tags: [
    'vitaminen',
    'mineralen',
    'vitamine D',
    'ijzer',
    'magnesium',
    'zink',
    'deficiëntie',
    'supplementen',
    'micronutriënten',
    'voedingsstoffen',
  ],
  crosslinks: ['S03', 'B05', 'V01', 'V06'],
  insights: [
    {
      id: 'V02-I01',
      topicId: 'V02',
      sortOrder: 1,
      action:
        'Laat jaarlijks je vitamine D-status controleren en suppleteer met 800–2000 IE per dag bij onvoldoende blootstelling aan zonlicht.',
      explanation: `## Vitamine D: het zonneschijnvitamine

Vitamine D is een van de meest voorkomende deficiënties in Nederland, waarbij naar schatting **40–60% van de bevolking** suboptimale waarden heeft, vooral in de wintermaanden.

### Mechanisme

Vitamine D wordt in de huid aangemaakt onder invloed van **UVB-straling** en werkt als een hormoon. Het reguleert de calciumabsorptie in de darmen, ondersteunt de **immuunfunctie** door activatie van T-cellen, en speelt een rol in de **genexpressie** van meer dan 200 genen.

### Gevolgen van tekort

- Verminderde botdichtheid en verhoogd fractuurrisico
- Verstoorde immuunfunctie
- Vermoeidheid en spierzwakte
- Verhoogd risico op depressieve klachten

### Praktische toepassing

In Nederland is de **UVB-straling van oktober tot maart onvoldoende** voor adequate vitamine D-synthese. Suppletie van 800–2000 IE per dag wordt aanbevolen voor volwassenen met beperkte zonblootstelling. Vette vis, eigeel en verrijkte producten dragen bij, maar zijn meestal onvoldoende als enige bron.`,
      evidenceScore: 3,
      studyTypeSummary: '2 meta-analyses, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V02-I01-P01',
          title:
            'Vitamin D supplementation and total mortality: a meta-analysis of randomized controlled trials',
          authors: 'Autier P, Gandini S.',
          year: 2007,
          journal: 'Archives of Internal Medicine',
          studyType: 'meta-analyse',
          sampleSize: 57311,
          conclusion:
            'Vitamine D-suppletie was geassocieerd met een significante verlaging van totale mortaliteit, met een optimale dosis tussen 400 en 2000 IE per dag.',
          doi: '10.1001/archinte.167.16.1730',
        },
        {
          id: 'V02-I01-P02',
          title:
            'Vitamin D deficiency in Europe: pandemic?',
          authors: 'Cashman KD, Dowling KG, Skrabáková Z, et al.',
          year: 2016,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'cohort',
          sampleSize: 55844,
          conclusion:
            'Vitamine D-deficiëntie is wijdverspreid in Europa, met 13% van de bevolking met ernstig tekort (<30 nmol/L) en 40% met suboptimale waarden.',
          doi: '10.3945/ajcn.115.120873',
        },
        {
          id: 'V02-I01-P03',
          title:
            'Effect of vitamin D3 supplements on development of advanced cancer: a secondary analysis of the VITAL randomized clinical trial',
          authors: 'Chandler PD, Chen WY, Ajala ON, et al.',
          year: 2020,
          journal: 'JAMA Network Open',
          studyType: 'RCT',
          sampleSize: 25871,
          conclusion:
            'Vitamine D3-suppletie van 2000 IE/dag was geassocieerd met een lager risico op gemetastaseerde kanker en kankersterfte.',
          doi: '10.1001/jamanetworkopen.2020.25850',
        },
      ],
    },
    {
      id: 'V02-I02',
      topicId: 'V02',
      sortOrder: 2,
      action:
        'Neem dagelijks magnesiumrijke voeding op zoals donkergroene bladgroenten, noten, zaden en volkoren producten.',
      explanation: `## Magnesium: de vergeten mineraal

Magnesium is betrokken bij meer dan **300 enzymatische reacties** in het lichaam. Toch heeft een groot deel van de westerse bevolking een suboptimale inname door de afname van magnesium in bewerkt voedsel en uitgeputte landbouwgrond.

### Mechanisme

Magnesium is essentieel voor:
- **ATP-productie**: elke energiereactie in het lichaam vereist magnesium
- **Neuromusculaire functie**: regulatie van calciumkanalen in spieren en zenuwcellen
- **Slaapkwaliteit**: magnesium activeert het parasympathische zenuwstelsel en reguleert melatonineproductie
- **Bloeddrukregulatie**: via vasodilatatie en elektrolytenbalans

### Signalen van tekort

Subtiele symptomen zoals **spierkrampen, vermoeidheid, slapeloosheid, prikkelbaarheid en hartkloppingen** kunnen wijzen op een magnesiumtekort. Bloedwaarden zijn niet altijd betrouwbaar omdat slechts 1% van het lichaamsmagnesium in het bloed zit.

### Praktische toepassing

Streef naar **300–400 mg magnesium per dag** via voeding. Goede bronnen zijn spinazie (79 mg per 100 g), pompoenpitten (262 mg per 100 g), amandelen (270 mg per 100 g) en donkere chocolade (228 mg per 100 g). Bij aanhoudende klachten kan **magnesiumglycinaat** als supplement overwogen worden vanwege de hoge biobeschikbaarheid.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V02-I02-P01',
          title:
            'Subclinical magnesium deficiency: a principal driver of cardiovascular disease and a public health crisis',
          authors: 'DiNicolantonio JJ, O\'Keefe JH, Wilson W.',
          year: 2018,
          journal: 'Open Heart',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Subklinisch magnesiumtekort is wijdverspreid en geassocieerd met cardiovasculaire ziekte, diabetes en osteoporose; suppletie kan gunstig zijn.',
          doi: '10.1136/openhrt-2017-000668',
        },
        {
          id: 'V02-I02-P02',
          title:
            'The effect of magnesium supplementation on primary insomnia in elderly: a double-blind placebo-controlled clinical trial',
          authors: 'Abbasi B, Kimiagar M, Sadeghniiat K, et al.',
          year: 2012,
          journal: 'Journal of Research in Medical Sciences',
          studyType: 'RCT',
          sampleSize: 46,
          conclusion:
            'Magnesiumsuppletie verbeterde subjectieve slapeloosheid, slaapefficiëntie, slaaptijd en melatonineconcentratie bij ouderen significant.',
          doi: '10.4103/1735-1995.104565',
        },
      ],
    },
    {
      id: 'V02-I03',
      topicId: 'V02',
      sortOrder: 3,
      action:
        'Combineer ijzerrijke plantaardige voeding altijd met vitamine C-bronnen om de opname te verbeteren.',
      explanation: `## IJzer: transport en opname optimaliseren

IJzer is cruciaal voor het transport van zuurstof via hemoglobine. **IJzerdeficiëntie** is de meest voorkomende voedingsdeficiëntie ter wereld en treft vooral vrouwen in de vruchtbare leeftijd, vegetariërs en veganisten.

### Mechanisme

Er bestaan twee vormen van voedingsijzer:
- **Heemijzer** (dierlijk): opname 15–35%, niet beïnvloed door andere voedingsstoffen
- **Non-heemijzer** (plantaardig): opname 2–20%, sterk beïnvloed door **bevorderende en remmende factoren**

Vitamine C (ascorbinezuur) verhoogt de opname van non-heemijzer met **tot 300%** door het reduceren van Fe³⁺ naar Fe²⁺, de vorm die het lichaam beter absorbeert.

### Remmende factoren

- **Fytaten** in volkoren en peulvruchten
- **Tanninen** in thee en koffie
- **Calcium** als het gelijktijdig wordt ingenomen

### Praktische toepassing

Combineer ijzerrijke voeding (spinazie, linzen, kikkererwten) met vitamine C-bronnen: squeeze citroen over je salade, eet paprika bij je linzensoep, of drink een glas sinaasappelsap bij je maaltijd. Drink **thee en koffie minimaal een uur na de maaltijd** om de remmende effecten te vermijden.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 2 RCTs',
      isPremium: false,
      papers: [
        {
          id: 'V02-I03-P01',
          title:
            'Iron bioavailability and dietary reference values',
          authors: 'Hurrell R, Egli I.',
          year: 2010,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Vitamine C is de krachtigste bevorderaar van non-heemijzerabsorptie en kan de opname tot driemaal verhogen in een gemengde maaltijd.',
          doi: '10.3945/ajcn.2010.28674F',
        },
        {
          id: 'V02-I03-P02',
          title:
            'The role of vitamin C in iron absorption',
          authors: 'Hallberg L, Brune M, Rossander L.',
          year: 1989,
          journal: 'International Journal for Vitamin and Nutrition Research',
          studyType: 'RCT',
          sampleSize: 120,
          conclusion:
            'Toevoeging van 50 mg vitamine C aan een maaltijd verhoogde de non-heemijzeropname met gemiddeld 67% ten opzichte van controle.',
          doi: '10.1024/0300-9831/a000166',
        },
        {
          id: 'V02-I03-P03',
          title:
            'Iron deficiency anemia: assessment, prevention and control',
          authors: 'World Health Organization.',
          year: 2001,
          journal: 'WHO Technical Report Series',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'IJzerdeficiëntie treft wereldwijd meer dan 2 miljard mensen en voedingsinterventies inclusief vitamine C-combinatie zijn effectieve preventiestrategieën.',
          doi: '10.1016/S0271-5317(01)00400-7',
        },
      ],
    },
  ],
};
