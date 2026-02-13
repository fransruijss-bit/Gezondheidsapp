import { Topic } from '@/types';

export const topic: Topic = {
  id: 'B06',
  domainId: 'beweging',
  title: 'Overtraining herkennen',
  slug: 'overtraining',
  description: 'Symptomen, HRV, prestatieverval, hoe te voorkomen',
  introduction:
    'Overtraining ontstaat wanneer de balans tussen trainingsbelasting en herstel langdurig verstoord raakt. Het herkennen van vroege waarschuwingssignalen is essentieel om ernstige prestatieverval en gezondheidsproblemen te voorkomen. Dit onderwerp behandelt de symptomen, diagnostische tools zoals HRV, en preventiestrategieën.',
  sortOrder: 6,
  evidenceScore: 2,
  tags: [
    'overtraining',
    'overreaching',
    'HRV',
    'hartritme variabiliteit',
    'prestatieverval',
    'vermoeidheid',
    'cortisol',
    'herstel',
    'burnout',
    'trainingsbelasting',
  ],
  crosslinks: ['B05', 'S01', 'S04', 'V03'],
  insights: [
    {
      id: 'B06-I01',
      topicId: 'B06',
      sortOrder: 1,
      action:
        'Herken de eerste tekenen van overreaching: dalende prestatie, verhoogde vermoeidheid en verstoorde slaap.',
      explanation: `## Vroege waarschuwingssignalen

**Functioneel overreaching** is de voorloper van overtraining en is nog reversibel binnen 1–2 weken rust. Het herkennen van de vroege tekenen is cruciaal om te voorkomen dat het overgaat in het **overtrained syndrome**, dat maanden herstel kan vereisen.

### Mechanisme

Bij aanhoudende overbelasting raakt de **hypothalamus-hypofyse-bijnieras (HPA-as)** ontregeld:
- **Fase 1 (sympathisch)**: verhoogd cortisol, hogere rusthartslag, slaapproblemen, prikkelbaarheid
- **Fase 2 (parasympathisch)**: uitputting van de bijnier, chronische vermoeidheid, depressieve stemming, immunosuppressie

Het lichaam stuurt duidelijke signalen voordat ernstige overtraining optreedt:
- Prestatie die **2+ weken** achtereen daalt ondanks adequate voeding
- Verhoogde **rust-hartslag** (5–10 slagen hoger dan normaal)
- Verstoord **slaappatroon** (moeite met inslapen of doorslapen)
- Verlies van **motivatie** om te trainen

### Praktische toepassing

Monitor dagelijks:
- **Ochtend-rusthartslag** (voor het opstaan)
- Subjectieve **energieniveaus** (schaal 1–10)
- **Slaapkwaliteit** en -duur
- **Stemming** en motivatie
- Trainingsresultaten in een **logboek**

Bij 3+ signalen gedurende 1 week: neem een deload of volledige rustweek.

### Impact

Vroegtijdige herkenning en interventie beperkt de hersteltijd tot 1–2 weken. Bij volledig ontwikkeld overtrained syndrome kan herstel 3–6 maanden duren.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort',
      isPremium: false,
      papers: [
        {
          id: 'B06-I01-P01',
          title:
            'Prevention, Diagnosis, and Treatment of the Overtraining Syndrome: Joint Consensus Statement of the European College of Sport Science and the American College of Sports Medicine',
          authors: 'Meeusen R, Duclos M, Foster C, Fry A, Gleeson M, Nieman D',
          year: 2013,
          journal: 'Medicine and Science in Sports and Exercise',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Overtraining is een spectrum van functioneel overreaching tot overtrained syndrome, waarbij vroegtijdige herkenning en rust de belangrijkste interventie is.',
          doi: '10.1249/MSS.0b013e318279a10a',
        },
        {
          id: 'B06-I01-P02',
          title:
            'Monitoring Training Load to Understand Fatigue in Athletes',
          authors: 'Halson SL',
          year: 2014,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Een combinatie van objectieve en subjectieve monitoring-tools is het meest effectief voor het vroegtijdig detecteren van overreaching.',
          doi: '10.1007/s40279-014-0253-z',
        },
      ],
    },
    {
      id: 'B06-I02',
      topicId: 'B06',
      sortOrder: 2,
      action:
        'Meet dagelijks je HRV bij het wakker worden als objectieve indicator van herstelstatus en trainingsbereidheid.',
      explanation: `## HRV als herstelmonitor

**Hart Ritme Variabiliteit (HRV)** — de variatie in tijd tussen opeenvolgende hartslagen — is een van de meest betrouwbare niet-invasieve markers voor de balans tussen het sympathische en parasympathische zenuwstelsel.

### Mechanisme

Een **hoge HRV** duidt op goede parasympathische (vagale) tonus en herstelcapaciteit. Een **lage HRV** wijst op sympathische dominantie, stress of onvoldoende herstel.

De HRV wordt beïnvloed door:
- **Trainingsbelasting** (dalende HRV na zware training)
- **Slaapkwaliteit** (slechte slaap verlaagt HRV)
- **Psychologische stress** (werk, relaties)
- **Voeding en hydratatie** (alcohol verlaagt HRV sterk)
- **Ziekte** (immuunactivatie verlaagt HRV)

### Praktische toepassing

- Meet HRV **elke ochtend** direct na het wakker worden, liggend
- Gebruik een betrouwbare app (HRV4Training, Elite HRV) met een **borstband** of optische sensor
- Kijk naar het **7-daags voortschrijdend gemiddelde**, niet naar individuele metingen
- **Normaal**: HRV binnen je persoonlijke bandbreedte → train zoals gepland
- **Verlaagd** (> 1 SD onder gemiddelde): verlaag intensiteit of neem een rustdag
- **Verhoogd** (> 1 SD boven gemiddelde): goed moment voor een intensieve sessie

### Impact

Studies tonen aan dat HRV-gestuurde training leidt tot vergelijkbare of betere resultaten met minder trainingsdagen, doordat de training beter afgestemd is op de individuele herstelstatus.`,
      evidenceScore: 2,
      studyTypeSummary: '2 RCTs',
      isPremium: false,
      papers: [
        {
          id: 'B06-I02-P01',
          title:
            'Heart Rate Variability-Guided Training in Professional Runners with Reduced Training Load',
          authors: 'Javaloyes A, Sarabia JM, Lamberts RP, Moya-Ramon M',
          year: 2019,
          journal: 'International Journal of Sports Physiology and Performance',
          studyType: 'RCT',
          sampleSize: 20,
          conclusion:
            'HRV-gestuurde training leidde tot vergelijkbare prestatieverbeteringen als traditionele periodisering met minder totale trainingsbelasting.',
          doi: '10.1123/ijspp.2018-0318',
        },
        {
          id: 'B06-I02-P02',
          title:
            'Heart Rate Variability Is Related to Training Load Variables in Interval Running Exercises',
          authors: 'Plews DJ, Laursen PB, Stanley J, Kilding AE, Buchheit M',
          year: 2013,
          journal: 'Journal of Strength and Conditioning Research',
          studyType: 'cohort',
          sampleSize: 10,
          conclusion:
            'Dagelijkse HRV-metingen correleerden sterk met trainingsbelasting en konden overreaching vroegtijdig detecteren.',
          doi: '10.1519/JSC.0b013e3182a73c23',
        },
        {
          id: 'B06-I02-P03',
          title:
            'Training adaptation and heart rate variability in elite endurance athletes: opening the door to effective monitoring',
          authors: 'Plews DJ, Laursen PB, Kilding AE, Buchheit M',
          year: 2013,
          journal: 'Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'HRV is een valide en praktische tool voor het monitoren van trainingsadaptatie en het voorkomen van overtraining bij duuratleten.',
          doi: '10.1007/s40279-013-0071-8',
        },
      ],
    },
    {
      id: 'B06-I03',
      topicId: 'B06',
      sortOrder: 3,
      action:
        'Beperk hoog-intensieve trainingssessies tot maximaal 3 per week en bouw trainingsvolume geleidelijk op.',
      explanation: `## Trainingsbelasting management

De **10%-regel** en het beperken van hoog-intensieve sessies zijn de meest effectieve strategieën om overtraining te voorkomen. Het gaat niet alleen om hoeveel je traint, maar ook om hoe snel je het opbouwt.

### Mechanisme

Overtraining ontstaat wanneer de **cumulatieve trainingsbelasting** de herstelcapaciteit langdurig overstijgt. De acute:chronische workload ratio (ACWR) beschrijft dit:
- **ACWR 0.8–1.3**: optimale zone ("sweet spot")
- **ACWR > 1.5**: verhoogd blessure- en overtainingrisico
- **ACWR < 0.8**: detraining, ook risicovol bij plotselinge terugkeer

Hoog-intensieve sessies genereren disproportioneel meer **neurale vermoeidheid** en hormonale stress dan laag-intensieve sessies. Het zenuwstelsel herstelt langzamer dan spieren.

### Praktische toepassing

- Verhoog het wekelijkse trainingsvolume met maximaal **10% per week**
- Beperk sessies op **RPE 8–10** tot maximaal 3 per week
- Alterneer hoog-intensieve dagen met laag-intensieve of rustdagen
- Gebruik de **ACWR** of een vergelijkbare metric via een trainingsapp
- Plan elke 4–6 weken een **deload-week** (zie B05)
- Houd rekening met **niet-training stress** (werk, slaaptekort, reizen)

### Impact

Het naleven van deze richtlijnen kan het blessurerisico met 20–30% verlagen en zorgt ervoor dat het lichaam consistent kan adapteren zonder in een overtrained toestand te belanden.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'B06-I03-P01',
          title:
            'The acute:chronic workload ratio predicts injury: high chronic workload may decrease injury risk in elite rugby league players',
          authors: 'Hulin BT, Gabbett TJ, Lawson DW, Caputi P, Sampson JA',
          year: 2016,
          journal: 'British Journal of Sports Medicine',
          studyType: 'cohort',
          sampleSize: 53,
          conclusion:
            'Een ACWR tussen 0.85 en 1.35 was geassocieerd met het laagste blessurerisico bij elite rugbyspelers.',
          doi: '10.1136/bjsports-2015-094817',
        },
        {
          id: 'B06-I03-P02',
          title:
            'How much is too much? (Part 2) International Olympic Committee consensus statement on load in sport and risk of illness',
          authors: 'Schwellnus M, Soligard T, Alonso JM, Bahr R, Clarsen B, Dijkstra HP',
          year: 2016,
          journal: 'British Journal of Sports Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Plotselinge toenames in trainingsbelasting zijn de belangrijkste risicofactor voor blessures en ziekte bij sporters.',
          doi: '10.1136/bjsports-2016-096572',
        },
      ],
    },
  ],
};
