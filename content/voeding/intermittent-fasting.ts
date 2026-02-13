import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V09',
  domainId: 'voeding',
  title: 'Intermittent fasting',
  slug: 'intermittent-fasting',
  description: 'Methoden, voordelen, risico\'s, voor wie geschikt',
  introduction:
    'Intermittent fasting (IF) is geen dieet maar een eetpatroon waarbij perioden van vasten worden afgewisseld met perioden van eten. Van de 16:8-methode tot alternate-day fasting: er zijn verschillende benaderingen met elk hun eigen wetenschappelijke onderbouwing. IF kan voordelen bieden voor metabole gezondheid, maar is niet voor iedereen geschikt.',
  sortOrder: 9,
  evidenceScore: 2,
  tags: [
    'intermittent fasting',
    'vasten',
    '16:8',
    'tijdbeperkt eten',
    'autofagie',
    'metabolisme',
    'gewichtsverlies',
    'insulinegevoeligheid',
    'eetvenster',
  ],
  crosslinks: ['S01', 'B03', 'V03', 'V10'],
  insights: [
    {
      id: 'V09-I01',
      topicId: 'V09',
      sortOrder: 1,
      action:
        'Begin met de 16:8-methode door je eetvenster te beperken tot acht uur per dag en bouw geleidelijk op.',
      explanation: `## De 16:8-methode als instap

De **16:8-methode** is de meest populaire en best bestudeerde vorm van intermittent fasting. Je eet gedurende een venster van 8 uur en vast gedurende de overige 16 uur (inclusief slaap).

### Mechanisme

Tijdens vasten dalen **insulineniveaus**, waardoor het lichaam overschakelt van glucoseverbranding naar **vetverbranding**. Na 12–16 uur vasten worden meerdere gunstige processen geactiveerd:
- **Autofagie**: het opruimen en recyclen van beschadigde celcomponenten
- **Verhoogde vetoxidatie**: het lichaam gebruikt vetreserves als brandstof
- **Verbeterde insulinegevoeligheid**: lagere basale insulineniveaus
- **Verhoogde noradrenaline**: meer alertheid en metabole activiteit

### Voordelen

Studies tonen aan dat 16:8 IF kan leiden tot:
- Gewichtsverlies van **3–8%** over 3–24 weken
- Verbetering van **insulineresistentie**
- Verlaging van **inflammatiemarkers**
- Mogelijke verbetering van **cardiovasculaire parameters**

### Praktische toepassing

Kies een eetvenster dat past bij je leefstijl, bijvoorbeeld **12:00–20:00** of **10:00–18:00**. Begin met een eetvenster van 10 uur en verklein geleidelijk naar 8 uur over 2 weken. Drink water, thee en zwarte koffie (zonder suiker of melk) tijdens de vastenperiode. Let op dat je **totale voedingskwaliteit** op orde is binnen je eetvenster.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V09-I01-P01',
          title:
            'Effects of intermittent fasting on health, aging, and disease',
          authors: 'de Cabo R, Mattson MP.',
          year: 2019,
          journal: 'New England Journal of Medicine',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Intermittent fasting verbetert meerdere indicatoren van gezondheid bij dieren en mensen, waaronder insulineresistentie, oxidatieve stress en inflammatie.',
          doi: '10.1056/NEJMra1905136',
        },
        {
          id: 'V09-I01-P02',
          title:
            'Time-restricted eating for the prevention and management of metabolic diseases',
          authors: 'Wilkinson MJ, Manoogian ENC, Zadourian A, et al.',
          year: 2020,
          journal: 'Cell Metabolism',
          studyType: 'RCT',
          sampleSize: 19,
          conclusion:
            'Tijdbeperkt eten (10-uur venster) verbeterde cardiometabole parameters waaronder bloeddruk, LDL-cholesterol en HbA1c bij patiënten met metabool syndroom.',
          doi: '10.1016/j.cmet.2019.11.004',
        },
      ],
    },
    {
      id: 'V09-I02',
      topicId: 'V09',
      sortOrder: 2,
      action:
        'Kies een eerder eetvenster (bijv. 8:00–16:00) in plaats van laat eten voor optimale metabole voordelen.',
      explanation: `## Early time-restricted eating: beter dan laat eten

Niet alle eetvensters zijn gelijk. Onderzoek wijst erop dat een **vroeg eetvenster** (overdag) meer metabole voordelen biedt dan een laat eetvenster (avond), in lijn met de principes van chrono-nutritie.

### Mechanisme

De **insulinegevoeligheid** is het hoogst in de ochtend en neemt af naarmate de dag vordert. De perifere klokken in de alvleesklier, lever en spieren zijn geprogrammeerd voor **optimale glucoseverwerking overdag**. Eten in de avond en nacht gaat tegen dit natuurlijke ritme in, wat leidt tot hogere postprandiale glucosepieken en meer vetopslag.

### Bewijs

Een studie uit 2018 toonde aan dat "early time-restricted feeding" (eTRF, eetvenster 8:00–14:00) vergeleken met een controlegroep (eetvenster 8:00–20:00) resulteerde in:
- **Lagere insulineniveaus** en verbeterde insulinegevoeligheid
- Verlaagde **bloeddruk**
- Verminderde **oxidatieve stress** en eetlust
- Dit alles **zonder caloriebeperking**

### Praktische toepassing

Als je schema het toelaat, verschuif je eetvenster naar **eerder op de dag**. Een venster van 8:00–16:00 of 9:00–17:00 sluit beter aan bij je biologische klok. Maak het **ontbijt en de lunch** je grootste maaltijden en houd het avondeten licht. Dit kan sociaal uitdagender zijn, dus zoek een balans die haalbaar is.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 cross-over studie',
      isPremium: false,
      papers: [
        {
          id: 'V09-I02-P01',
          title:
            'Early time-restricted feeding improves insulin sensitivity, blood pressure, and oxidative stress even without weight loss in men with prediabetes',
          authors: 'Sutton EF, Beyl R, Early KS, et al.',
          year: 2018,
          journal: 'Cell Metabolism',
          studyType: 'RCT',
          sampleSize: 8,
          conclusion:
            'Early TRF verbeterde insulinegevoeligheid, bètacelfunctie, bloeddruk en oxidatieve stress zonder gewichtsverlies bij mannen met prediabetes.',
          doi: '10.1016/j.cmet.2018.04.010',
        },
        {
          id: 'V09-I02-P02',
          title:
            'Meal timing affects glucose tolerance, substrate oxidation and circadian-related variables',
          authors: 'Wehrens SMT, Christou S, Isherwood C, et al.',
          year: 2017,
          journal: 'Current Biology',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Laat eten verstoort de glucosetolerantie en circadiane hormoonprofielen, wat de metabole voordelen van een vroeger eetvenster ondersteunt.',
          doi: '10.1016/j.cub.2017.04.059',
        },
      ],
    },
    {
      id: 'V09-I03',
      topicId: 'V09',
      sortOrder: 3,
      action:
        'Vermijd intermittent fasting als je een eetstoornis hebt gehad, zwanger bent, of intensief sport zonder adequate voedingsbegeleiding.',
      explanation: `## Risico's en contra-indicaties

Intermittent fasting is niet voor iedereen geschikt. Voor bepaalde groepen kan het meer kwaad dan goed doen. Het is essentieel om de **risico's en contra-indicaties** te kennen.

### Risicogroepen

De volgende groepen wordt **afgeraden** om IF te praktiseren zonder medische begeleiding:
- **Personen met (een geschiedenis van) eetstoornissen**: IF kan restrictief eetgedrag versterken en een ongezonde relatie met voedsel bevorderen
- **Zwangere en zogende vrouwen**: de foetus en zuigeling hebben continue voedingsstoffen nodig
- **Kinderen en adolescenten**: groeiende lichamen hebben regelmatige voeding nodig
- **Mensen met diabetes type 1**: risico op hypoglykemie
- **Ondergewicht** (BMI <18,5): verder gewichtsverlies is onwenselijk

### Mogelijke bijwerkingen

- **Hongergevoelens en prikkelbaarheid** (vooral in het begin)
- Risico op **overeten** tijdens het eetvenster
- **Sociale beperkingen** (maaltijden missen met vrienden/familie)
- **Hormonale verstoringen** bij vrouwen (menstruatiecyclus)

### Praktische toepassing

Raadpleeg een arts of diëtist voordat je begint met IF, vooral als je tot een risicogroep behoort. Luister naar je lichaam: als IF leidt tot **obsessief nadenken over eten**, extreme honger, of verslechtering van je welzijn, is het niet geschikt voor jou. Er zijn altijd andere benaderingen voor gezonde voeding.`,
      evidenceScore: 2,
      studyTypeSummary: '1 review, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V09-I03-P01',
          title:
            'Intermittent fasting and human metabolic health',
          authors: 'Patterson RE, Sears DD.',
          year: 2017,
          journal: 'Journal of the Academy of Nutrition and Dietetics',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'IF kan metabole voordelen bieden maar is niet geschikt voor alle populaties; individuele factoren zoals medische voorgeschiedenis en leefstijl moeten worden meegewogen.',
          doi: '10.1016/j.jand.2016.08.005',
        },
        {
          id: 'V09-I03-P02',
          title:
            'Is fasting safe? A chart review of adverse events during medically supervised, water-only fasting',
          authors: 'Finnell JS, Saul BC, Goldhamer AC, et al.',
          year: 2018,
          journal: 'BMC Complementary and Alternative Medicine',
          studyType: 'cohort',
          sampleSize: 768,
          conclusion:
            'Vasten onder medisch toezicht was overwegend veilig maar bijwerkingen kwamen voor bij 20% van de deelnemers, waaronder duizeligheid, misselijkheid en vermoeidheid.',
          doi: '10.1186/s12906-018-2136-6',
        },
      ],
    },
    {
      id: 'V09-I04',
      topicId: 'V09',
      sortOrder: 4,
      action:
        'Zorg dat je voedingskwaliteit optimaal is binnen je eetvenster: IF is geen vrijbrief om ongezond te eten.',
      explanation: `## Kwaliteit boven timing

Een veelgemaakte fout bij intermittent fasting is de focus op **wanneer** je eet ten koste van **wat** je eet. IF werkt alleen als de voedingskwaliteit binnen het eetvenster op orde is.

### Mechanisme

De metabole voordelen van IF (verbeterde insulinegevoeligheid, verhoogde autofagie) worden **tenietgedaan** als het eetvenster gevuld wordt met ultra-bewerkt voedsel, geraffineerde suikers en ongezonde vetten. Het lichaam heeft voldoende **micronutriënten, eiwitten, vezels en gezonde vetten** nodig, zelfs in een korter eetvenster.

### Risico van beperkt eetvenster

Met minder eetmomenten is het uitdagender om aan alle voedingsbehoeften te voldoen:
- **Eiwitinname** kan te laag uitvallen als maaltijden niet goed gepland zijn
- **Micronutriëntentekorten** kunnen ontstaan bij onvoldoende variatie
- **Vezelinname** kan te laag zijn als er geen bewuste keuze voor groenten wordt gemaakt

### Praktische toepassing

Plan je maaltijden bewust: begin met een **eiwitrijke maaltijd** bij het openen van je eetvenster, eet ruim **groenten en fruit**, kies **volkoren koolhydraten** en gezonde vetten. Overweeg een multivitamine als verzekering. Houd een voedingsdagboek bij om te controleren of je aan alle behoeften voldoet. **IF + goede voeding = synergie; IF + slechte voeding = nul winst**.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V09-I04-P01',
          title:
            'Alternate-day fasting and chronic disease prevention: a review of human and animal trials',
          authors: 'Varady KA, Hellerstein MK.',
          year: 2007,
          journal: 'American Journal of Clinical Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'De voordelen van IF zijn afhankelijk van de algehele voedingskwaliteit; vastenprotocollen gecombineerd met slechte voedingskeuzes tonen verminderde effectiviteit.',
          doi: '10.1093/ajcn/86.1.7',
        },
        {
          id: 'V09-I04-P02',
          title:
            'Intermittent versus daily calorie restriction: which diet regimen is more effective for weight loss?',
          authors: 'Harvie MN, Pegington M, Mattson MP, et al.',
          year: 2011,
          journal: 'International Journal of Obesity',
          studyType: 'RCT',
          sampleSize: 107,
          conclusion:
            'IF en continue caloriebeperking waren even effectief voor gewichtsverlies en insulineverbetering, mits de totale voedingskwaliteit vergelijkbaar was.',
          doi: '10.1038/ijo.2010.171',
        },
      ],
    },
  ],
};
