import { Topic } from '@/types';

export const topic: Topic = {
  id: 'V03',
  domainId: 'voeding',
  title: 'Maaltijdtiming',
  slug: 'maaltijdtiming',
  description: 'Wanneer eten: invloed op energie, slaap, prestatie',
  introduction:
    'Het tijdstip waarop je eet kan net zo belangrijk zijn als wat je eet. Maaltijdtiming beïnvloedt je circadiane ritme, energieniveau, slaapkwaliteit en sportprestatie. De wetenschap van chrono-nutriëntie onderzoekt hoe het afstemmen van voedselinname op je biologische klok gezondheidsvoordelen kan opleveren.',
  sortOrder: 3,
  evidenceScore: 2,
  tags: [
    'maaltijdtiming',
    'chrono-nutritie',
    'circadiaans ritme',
    'ontbijt',
    'laat eten',
    'eetpatroon',
    'energie',
    'slaap en voeding',
  ],
  crosslinks: ['S01', 'S05', 'B02', 'V09'],
  insights: [
    {
      id: 'V03-I01',
      topicId: 'V03',
      sortOrder: 1,
      action:
        'Eet je laatste grote maaltijd minimaal twee tot drie uur voor het slapengaan om slaapkwaliteit te beschermen.',
      explanation: `## Laat eten en slaapverstoring

Het eten van een grote maaltijd kort voor het slapengaan kan de slaapkwaliteit aanzienlijk verminderen. Dit heeft te maken met zowel **spijsverteringsprocessen** als **hormonale verstoringen**.

### Mechanisme

Na een maaltijd stijgt de **kerntemperatuur** van het lichaam door het thermisch effect van voedsel (TEF). Voor goede slaap moet de kerntemperatuur juist **dalen**. Daarnaast stimuleert voedselinname de productie van insuline, wat de secretie van **melatonine** kan verstoren. Een volle maag kan ook leiden tot **gastro-oesofageale reflux** in liggende positie.

### Impact

Studies tonen aan dat laat eten geassocieerd is met:
- **Langere inslaaptijd** (verhoogde slaplatentie)
- Minder **diepe slaap** (slow-wave sleep)
- Meer nachtelijk **ontwaken**
- Lagere subjectieve slaapkwaliteit

### Praktische toepassing

Plan je avondmaaltijd zo dat er **2–3 uur** zit tussen eten en slapen. Als je 's avonds laat toch honger hebt, kies dan voor een **klein, licht verteerbaar tussendoortje** zoals een banaan, een handvol kersen (natuurlijke melatoninebron) of een klein kopje warme melk met een theelepel honing.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 cohort-studie, 1 review',
      isPremium: false,
      papers: [
        {
          id: 'V03-I01-P01',
          title:
            'Association of night eating habits with metabolic syndrome, overall obesity, and abdominal obesity',
          authors: 'Yoshida J, Eguchi E, Nagaoka K, et al.',
          year: 2018,
          journal: 'BMC Public Health',
          studyType: 'cohort',
          sampleSize: 8153,
          conclusion:
            'Regelmatig laat eten (binnen 2 uur voor het slapen) was significant geassocieerd met metabool syndroom en abdominale obesitas.',
          doi: '10.1186/s12889-018-5662-z',
        },
        {
          id: 'V03-I01-P02',
          title:
            'Effects of diet on sleep quality',
          authors: 'St-Onge MP, Mikic A, Pietrolungo CE.',
          year: 2016,
          journal: 'Advances in Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Maaltijdtiming en voedingssamenstelling beïnvloeden slaaparchitectuur; laat en vetrijk eten vermindert slaapkwaliteit consistent.',
          doi: '10.3945/an.116.012336',
        },
      ],
    },
    {
      id: 'V03-I02',
      topicId: 'V03',
      sortOrder: 2,
      action:
        'Eet een eiwitrijke maaltijd binnen twee uur na intensieve training om het spierherstel te bevorderen.',
      explanation: `## Post-training voeding en herstelvenster

Na intensieve training is het lichaam extra ontvankelijk voor voedingsstoffen. Het concept van een **"anabool venster"** is genuanceerder dan vroeger werd gedacht, maar de timing van post-training voeding speelt wel degelijk een rol.

### Mechanisme

Tijdens training worden **spierglycogeen** verbruikt en ontstaat microschade aan spiervezels. Na training is de **musculaire proteïnesynthese (MPS)** verhoogd gedurende 24–48 uur, maar het effect is het sterkst in de **eerste uren**. De combinatie van eiwitten en koolhydraten na training stimuleert zowel de MPS als de **glycogeenresynthese** via een verhoogde insulinerespons.

### Impact

- Sneller spierherstel
- Verminderde spierpijn (DOMS)
- Betere adaptatie aan training op lange termijn
- Snellere aanvulling van glycogeenvoorraden

### Praktische toepassing

Eet binnen **1–2 uur na training** een maaltijd of snack met minimaal **20–30 gram eiwit** en een bron van koolhydraten. Voorbeelden: kwark met fruit, een smoothie met wei-eiwit en banaan, of een maaltijd met kip, rijst en groenten. Het exacte tijdstip is minder cruciaal als je totale dagelijkse inname op orde is.`,
      evidenceScore: 2,
      studyTypeSummary: '1 meta-analyse, 1 RCT',
      isPremium: false,
      papers: [
        {
          id: 'V03-I02-P01',
          title:
            'Nutrient timing revisited: is there a post-exercise anabolic window?',
          authors: 'Aragon AA, Schoenfeld BJ.',
          year: 2013,
          journal: 'Journal of the International Society of Sports Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Het anabole venster is breder dan eerder gedacht, maar eiwitinname binnen enkele uren na training optimaliseert spierherstel, vooral bij training in gevaste toestand.',
          doi: '10.1186/1550-2783-10-5',
        },
        {
          id: 'V03-I02-P02',
          title:
            'The effect of protein timing on muscle strength and hypertrophy: a meta-analysis',
          authors: 'Schoenfeld BJ, Aragon AA, Krieger JW.',
          year: 2013,
          journal: 'Journal of the International Society of Sports Nutrition',
          studyType: 'meta-analyse',
          sampleSize: 525,
          conclusion:
            'Eiwittiming heeft een klein maar significant effect op spierhypertrofie; het effect wordt deels verklaard door totale eiwitinname.',
          doi: '10.1186/1550-2783-10-53',
        },
      ],
    },
    {
      id: 'V03-I03',
      topicId: 'V03',
      sortOrder: 3,
      action:
        'Eet consistent op vaste tijdstippen om je circadiane klok te synchroniseren en metabole gezondheid te ondersteunen.',
      explanation: `## Regelmatig eetpatroon en circadiane synchronisatie

Je lichaam heeft niet alleen een centrale biologische klok in de hersenen (suprachiasmatische nucleus), maar ook **perifere klokken** in organen zoals de lever, alvleesklier en darmen. Regelmatige maaltijdtijden helpen deze klokken te synchroniseren.

### Mechanisme

Voedselinname is een van de krachtigste **Zeitgebers** (tijdgevers) voor perifere klokken. Wanneer je op wisselende tijden eet, raken deze klokken **gedesynchroniseerd** met de centrale klok, wat leidt tot metabole verstoringen. Regelmatige maaltijden zorgen voor voorspelbare patronen van **insulinesecretie, galzuurproductie en enzymactiviteit**.

### Impact van onregelmatig eten

- Verstoorde glucoseregulatie
- Verhoogd risico op **metabool syndroom**
- Verminderde spijsverteringsefficiëntie
- Negatieve invloed op **stemming en energieniveau**

### Praktische toepassing

Streef naar **vaste eettijden** met maximaal 30 minuten variatie. Sla het ontbijt niet over als je normaal wel ontbijt, en eet niet plotseling op hele andere tijden in het weekend. Een stabiel eetpatroon ondersteunt je **metabole gezondheid** en helpt je energieniveau door de dag heen te reguleren.`,
      evidenceScore: 2,
      studyTypeSummary: '1 RCT, 1 cohort-studie',
      isPremium: false,
      papers: [
        {
          id: 'V03-I03-P01',
          title:
            'Meal timing affects glucose tolerance, substrate oxidation and circadian-related variables',
          authors: 'Wehrens SMT, Christou S, Isherwood C, et al.',
          year: 2017,
          journal: 'Current Biology',
          studyType: 'RCT',
          sampleSize: 24,
          conclusion:
            'Een verschuiving van 5 uur in maaltijdtiming veroorzaakte significante veranderingen in bloedglucoseritmes zonder de centrale klok te beïnvloeden.',
          doi: '10.1016/j.cub.2017.04.059',
        },
        {
          id: 'V03-I03-P02',
          title:
            'Irregular meal timing is associated with higher cardiometabolic risk in the UK Biobank',
          authors: 'Pot GK, Hardy R, Stephen AM.',
          year: 2014,
          journal: 'International Journal of Obesity',
          studyType: 'cohort',
          sampleSize: 1768,
          conclusion:
            'Onregelmatige maaltijdtijden waren geassocieerd met hogere BMI, hogere bloeddruk en een groter risico op cardiometabole aandoeningen.',
          doi: '10.1038/ijo.2014.51',
        },
        {
          id: 'V03-I03-P03',
          title:
            'Chrono-nutrition: a review of current evidence from observational studies',
          authors: 'Almoosawi S, Vingeliene S, Karagounis LG, et al.',
          year: 2016,
          journal: 'Advances in Nutrition',
          studyType: 'review',
          sampleSize: null,
          conclusion:
            'Er is groeiend bewijs dat maaltijdtiming een onafhankelijke risicofactor is voor cardiometabole gezondheid, los van de totale energie-inname.',
          doi: '10.3945/an.116.012450',
        },
      ],
    },
  ],
};
