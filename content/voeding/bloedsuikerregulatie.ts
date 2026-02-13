import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V10',
  domainId: 'voeding',
  title: 'Bloedsuikerregulatie',
  slug: 'bloedsuikerregulatie',
  description: 'Glycemische index/lading, insulinegevoeligheid, glucose-spikes',
  introduction:
    'Bloedsuikerregulatie is fundamenteel voor energie, stemming, gewichtsbeheersing en het voorkomen van chronische ziekten. Schommelingen in bloedsuiker — de zogenaamde glucose-spikes en -crashes — beïnvloeden hoe je je voelt gedurende de dag. Door te begrijpen hoe voedsel je bloedsuiker beïnvloedt, kun je bewuste keuzes maken die je gezondheid op korte en lange termijn beschermen.',
  sortOrder: 10,
  evidenceScore: 3,
  tags: [
    'bloedsuiker',
    'glucose',
    'insuline',
    'glycemische index',
    'glycemische lading',
    'insulinegevoeligheid',
    'insulineresistentie',
    'diabetes preventie',
    'glucose-spike',
    'HbA1c',
  ],
  crosslinks: ['S04', 'B03', 'V01', 'V09'],
  insights: [
    {
      id: 'V10-I01',
      topicId: 'V10',
      sortOrder: 1,
      action:
        'Eet groenten of eiwitten als eerste tijdens een maaltijd en koolhydraten als laatste om glucose-spikes te verminderen.',
      explanation: `## De volgorde van eten maakt uit

De volgorde waarin je voedselcomponenten eet heeft een **verrassend groot effect** op je bloedsuikerrespons. Door simpelweg de volgorde aan te passen, kun je glucose-spikes met 30–75% verminderen.

### Mechanisme

Wanneer je **vezels en eiwitten eerst** eet, vormen ze een soort **gel in de maag en dunne darm** die de snelheid van glucoseabsorptie vertraagt. Eiwitten stimuleren ook de afgifte van **GLP-1** (glucagon-like peptide-1), een hormoon dat de maagontlediging vertraagt en de insulinesecretie optimaliseert. Hierdoor komt de glucose geleidelijker in de bloedbaan.

### Bewijs

Een studie bij type 2 diabetespatiënten toonde aan dat het eten van groenten en eiwit **vóór** koolhydraten de postprandiale glucosepiek met **73%** verlaagde vergeleken met de omgekeerde volgorde, bij exact dezelfde maaltijdsamenstelling.

### Praktische toepassing

Volg de **"groenten eerst"-regel**:
1. Begin met salade of groenten
2. Eet daarna eiwit (vlees, vis, tofu)
3. Eindig met koolhydraten (rijst, pasta, brood)

Dit werkt ook bij snacks: eet een handvol noten **vóór** een stuk fruit. Drink een glas water met een eetlepel **appelazijn** 15 minuten voor een koolhydraatrijke maaltijd — azijnzuur remt het enzym amylase en vertraagt zo de zetmeelvertering.`,
      evidenceScore: 3,
      studyTypeSummary: '2 RCTs, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V10-I01-P01',
          title:
            'Food order has a significant impact on postprandial glucose and insulin levels',
          authors: 'Shukla AP, Iliescu RG, Thomas CE, et al.',
          year: 2015,
          journal: 'Diabetes Care',
          studyType: 'RCT',
          sampleSize: 11,
          conclusion:
            'Het eten van groenten en eiwitten vóór koolhydraten verlaagde postprandiale glucose met 73% en insuline met 48% bij type 2 diabetespatiënten.',
          doi: '10.2337/dc15-0429',
        },
        {
          id: 'V10-I01-P02',
          title:
            'Optimising the food order: does consuming vegetables before carbohydrates reduce postprandial glucose in adults?',
          authors: 'Nishino K, Sakurai M, Takeshita Y, et al.',
          year: 2018,
          journal: 'Diabetes, Obesity and Metabolism',
          studyType: 'RCT',
          sampleSize: 15,
          conclusion:
            'Het eten van groenten 10 minuten vóór koolhydraten verlaagde de postprandiale glucosepiek significant bij zowel gezonde volwassenen als diabetespatiënten.',
          doi: '10.1111/dom.13065',
        },
        {
          id: 'V10-I01-P03',
          title:
            'Vinegar supplementation lowers glucose and insulin responses and increases satiety after a bread meal in healthy subjects',
          authors: 'Östman E, Granfeldt Y, Persson L, et al.',
          year: 2005,
          journal: 'European Journal of Clinical Nutrition',
          studyType: 'RCT',
          sampleSize: 12,
          conclusion:
            'Azijn (25 g appelazijn) bij een broodmaaltijd verlaagde de postprandiale glucoserespons met 30% en verhoogde het verzadigingsgevoel.',
          doi: '10.1038/sj.ejcn.1602197',
        },
      ],
    },
    {
      id: 'V10-I02',
      topicId: 'V10',
      sortOrder: 2,
      action:
        'Kies voedingsmiddelen met een lage glycemische lading en combineer koolhydraten altijd met eiwitten, vetten of vezels.',
      explanation: `## Glycemische index vs. glycemische lading

De **glycemische index (GI)** geeft aan hoe snel een voedingsmiddel de bloedsuiker verhoogt op een schaal van 0–100. De **glycemische lading (GL)** is een betere maat omdat deze ook de **hoeveelheid** koolhydraten per portie meeneemt.

### Mechanisme

Voedingsmiddelen met een hoge GI veroorzaken een snelle stijging van bloedglucose, gevolgd door een sterke **insulinepiek**. Dit leidt tot een snelle daling van bloedsuiker (reactieve hypoglykemie), wat resulteert in:
- **Energiedips** en vermoeidheid
- Hernieuwd **hongersignaal** kort na de maaltijd
- Op de lange termijn: **insulineresistentie** door chronische overbelasting van de bètacellen

### GI versus GL voorbeeld

Watermeloen heeft een hoge GI (72) maar een lage GL (4 per portie) omdat het weinig koolhydraten per portie bevat. Witte rijst heeft een hoge GI (73) én een hoge GL (29 per portie).

### Praktische toepassing

Focus op **glycemische lading** in plaats van alleen GI. Combineer koolhydraten altijd met **eiwitten, gezonde vetten of vezels** om de absorptiesnelheid te verlagen:
- Brood + avocado + ei (in plaats van brood met jam)
- Rijst + bonen + groenten (in plaats van witte rijst alleen)
- Fruit + noten (in plaats van vruchtensap)

Kies volkoren varianten, peulvruchten en groenten als primaire koolhydraatbronnen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V10-I02-P01',
          title:
            'Glycemic index, glycemic load, and risk of type 2 diabetes: results from 3 large US cohorts and an updated meta-analysis',
          authors: 'Bhupathiraju SN, Tobias DK, Malik VS, et al.',
          year: 2014,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'meta-analyse',
          sampleSize: 205259,
          conclusion:
            'Hogere glycemische lading en glycemische index waren geassocieerd met een significant verhoogd risico op type 2 diabetes, onafhankelijk van vezelinname.',
          doi: '10.3945/ajcn.113.079533',
        },
        {
          id: 'V10-I02-P02',
          title:
            'International tables of glycemic index and glycemic load values: 2021',
          authors: 'Atkinson FS, Brand-Miller JC, Foster-Powell K, et al.',
          year: 2021,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'De glycemische lading biedt een meer accurate voorspelling van de glykemische respons dan de glycemische index alleen en is een bruikbare tool voor voedingskeuzes.',
          doi: '10.1093/ajcn/nqab233',
        },
      ],
    },
    {
      id: 'V10-I03',
      topicId: 'V10',
      sortOrder: 3,
      action:
        'Maak een korte wandeling van tien tot vijftien minuten na een koolhydraatrijke maaltijd om glucose-spikes te dempen.',
      explanation: `## Bewegen na het eten: de glucose-sink

Een korte wandeling na de maaltijd is een van de meest effectieve en eenvoudigste strategieën om postprandiale glucose-spikes te verminderen. De spieren functioneren als een **"glucose-sink"** die suiker uit het bloed opneemt.

### Mechanisme

Tijdens spieractiviteit verplaatsen **GLUT4-transporters** zich naar het celoppervlak van spiercellen, waardoor glucose **zonder insuline** de spiercel kan binnenkomen. Dit mechanisme is **insuline-onafhankelijk** en werkt additief bovenop de insulinegemedieerde glucoseopname. Al 15 minuten lichte activiteit na de maaltijd kan de postprandiale glucosepiek met **20–30%** verlagen.

### Timing is cruciaal

De grootste impact wordt bereikt wanneer je beweegt **binnen 30 minuten na de maaltijd** — het moment waarop de glucose-absorptie op zijn piek is. Hoe langer je wacht, hoe minder effect de beweging heeft op de glucosepiek.

### Praktische toepassing

Maak van een **post-maaltijdwandeling** een gewoonte:
- Loop na de lunch een rondje buiten (10–15 min)
- Neem de trap na het avondeten
- Doe lichte huishoudelijke taken na het eten

Zelfs **staand afwassen** is beter dan direct gaan zitten. Voor mensen met insulineresistentie of prediabetes is dit een bijzonder waardevolle strategie. Combineer dit met een **continue glucosemonitor (CGM)** om het effect zelf te zien en motivatie te verhogen.`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V10-I03-P01',
          title:
            'The effect of walking on postprandial glycemic excursion in patients with type 1 diabetes and healthy people',
          authors: 'Manohar C, Levine JA, Nandy DK, et al.',
          year: 2012,
          journal: 'Diabetes Care',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Een wandeling van 20 minuten na de maaltijd verlaagde de postprandiale glucosepiek significant bij zowel diabetespatiënten als gezonde controles.',
          doi: '10.2337/dc12-0256',
        },
        {
          id: 'V10-I03-P02',
          title:
            'Acute effects of breaks in prolonged sitting on vascular function, postprandial glucose and insulin responses',
          authors: 'Dempsey PC, Larsen RN, Sethi P, et al.',
          year: 2016,
          journal: 'Diabetologia',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Regelmatige korte wandelingen na maaltijden verlaagden postprandiale glucose en insulineresponsen met respectievelijk 24% en 31% vergeleken met ononderbroken zitten.',
          doi: '10.1007/s00125-016-3882-6',
        },
        {
          id: 'V10-I03-P03',
          title:
            'Exercise timing in type 2 diabetes mellitus: a systematic review',
          authors: 'Teo SYM, Kanaley JA, Guelfi KJ, et al.',
          year: 2018,
          journal: 'Medicine & Science in Sports & Exercise',
          studyType: 'meta-analyse',
          sampleSize: 319,
          conclusion:
            'Post-maaltijdbeweging was effectiever in het verlagen van postprandiale glucose dan pre-maaltijdbeweging, met het grootste effect bij activiteit binnen 30 minuten na eten.',
          doi: '10.1249/MSS.0000000000001732',
        },
      ],
    },
    {
      id: 'V10-I04',
      topicId: 'V10',
      sortOrder: 4,
      action:
        'Verbeter je insulinegevoeligheid door voldoende slaap, regelmatige beweging en stressmanagement naast voedingsaanpassingen.',
      explanation: `## Insulinegevoeligheid: meer dan alleen voeding

Insulinegevoeligheid — hoe efficiënt je cellen reageren op insuline — wordt niet alleen bepaald door wat je eet, maar ook door **slaap, beweging, stress en lichaamssamenstelling**. Een integrale aanpak is het meest effectief.

### Mechanisme

Insuline bindt aan receptoren op cel-membranen en initieert een cascade die **GLUT4-transporters** naar het celoppervlak brengt om glucose op te nemen. Bij insulineresistentie werkt dit signaal minder goed, waardoor de alvleesklier **meer insuline** moet produceren voor hetzelfde effect. Dit leidt uiteindelijk tot uitputting van bètacellen en **type 2 diabetes**.

### Factoren die insulinegevoeligheid beïnvloeden

| Factor | Impact |
|--------|--------|
| Slaaptekort | Al 1 nacht slechte slaap verlaagt insulinegevoeligheid met 25% |
| Chronische stress | Cortisol verhoogt bloedsuiker en antagoneert insuline |
| Beweging | Regelmatige training verhoogt GLUT4-expressie met 50–100% |
| Visceraal vet | Buikvet produceert pro-inflammatoire cytokinen die insulinesignalering remmen |
| Spiermassa | Meer spiermassa = grotere glucose-sink |

### Praktische toepassing

Werk aan alle pijlers tegelijk:
- **Slaap**: 7–9 uur per nacht, regelmatige tijden
- **Beweging**: combinatie van kracht- en duurtraining, 150+ min/week
- **Stress**: dagelijkse ontspanningstechnieken (ademhaling, meditatie)
- **Voeding**: lage GL, voldoende vezels, beperkte UPF
- **Lichaamssamenstelling**: focus op spierbehoud en vetreductie`,
      evidenceScore: 3,
      studyTypeSummary: '1 meta-analyse, 1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V10-I04-P01',
          title:
            'Sleep loss: a novel risk factor for insulin resistance and type 2 diabetes',
          authors: 'Spiegel K, Knutson K, Leproult R, et al.',
          year: 2005,
          journal: 'Journal of Applied Physiology',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Slaaptekort en slechte slaapkwaliteit zijn onafhankelijke risicofactoren voor insulineresistentie en type 2 diabetes, met effecten die al na één nacht meetbaar zijn.',
          doi: '10.1152/japplphysiol.00660.2005',
        },
        {
          id: 'V10-I04-P02',
          title:
            'Exercise and type 2 diabetes: the American College of Sports Medicine and the American Diabetes Association joint position statement',
          authors: 'Colberg SR, Sigal RJ, Fernhall B, et al.',
          year: 2010,
          journal: 'Diabetes Care',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Zowel aërobe als krachttraining verbeteren insulinegevoeligheid en glucosecontrole; de combinatie is het meest effectief.',
          doi: '10.2337/dc10-9990',
        },
        {
          id: 'V10-I04-P03',
          title:
            'Effects of exercise on glycemic control and body mass in type 2 diabetes mellitus: a meta-analysis',
          authors: 'Boulé NG, Haddad E, Kenny GP, et al.',
          year: 2001,
          journal: 'JAMA',
          studyType: 'meta-analyse',
          sampleSize: 2286,
          conclusion:
            'Gestructureerde training verlaagde HbA1c met gemiddeld 0,66%, onafhankelijk van gewichtsverandering, wat de directe invloed van beweging op insulinegevoeligheid bevestigt.',
          doi: '10.1001/jama.286.10.1218',
        },
      ],
    },
  ],
};
