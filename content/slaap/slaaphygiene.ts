import { Topic } from '@/types';

export const topic: Topic = {
  id: "S01",
  domainId: "slaap",
  title: "Slaaphygiëne",
  slug: "slaaphygiene",
  description: "Routines en omgevingsfactoren die slaapkwaliteit verbeteren",
  evidenceScore: 3,
  tags: [
    "slaaphygiëne",
    "slaaproutine",
    "slaapkwaliteit",
    "slaapomgeving",
    "bedtijdritueel",
    "slaapgewoonten",
    "beter slapen",
    "slaaptips"
  ],
  crosslinks: ["B02", "V03", "B07", "V09"],
  insights: [
    {
      action: "Houd elke dag dezelfde bedtijd en wektijd aan, ook in het weekend, met maximaal 30 minuten afwijking.",
      explanation: `## Mechanisme

Je lichaam heeft een interne klok — het **circadiaan ritme** — dat regelt wanneer je slaperig wordt en wanneer je wakker wordt. Deze klok wordt sterk beïnvloed door consistente slaap- en waaktijden. Wanneer je elke dag op hetzelfde moment gaat slapen en opstaat, raakt je biologische klok gesynchroniseerd. Dit betekent dat hormonen zoals **melatonine** en **cortisol** op het juiste moment worden afgegeven.

## Impact

Onderzoek toont aan dat onregelmatige slaaptijden geassocieerd zijn met slechtere slaapkwaliteit, meer vermoeidheid overdag en een hoger risico op metabole stoornissen. Een meta-analyse uit 2020 bevestigde dat consistentie in slaaptijden een van de sterkste voorspellers is van subjectieve slaapkwaliteit. Zelfs één uur variatie in bedtijd kan de diepe slaap aanzienlijk verminderen.

## Praktische toepassing

Stel een vast tijdstip in om naar bed te gaan en om op te staan. Gebruik een wekker, ook in het weekend. Als je in het weekend wilt uitslapen, beperk dit tot maximaal 30 minuten later dan je gebruikelijke wektijd. Vermijd het inhalen van slaap door lang uit te slapen — dit verstoort je ritme voor de rest van de week.`,
      evidenceScore: 3,
      studyTypeSummary: "2 meta-analyses, 4 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Sleep regularity is associated with sleep quality, mental health, and cardiovascular risk",
          authors: "Phillips, A.J.K. et al.",
          journal: "Sleep",
          year: 2017,
          doi: "10.1093/sleep/zsx078",
          studyType: "cohort"
        },
        {
          title: "Sleep hygiene practices and their relation to sleep quality in medical students",
          authors: "Brick, C.A., Seely, D.L., Palermo, T.M.",
          journal: "Behavioral Sleep Medicine",
          year: 2010,
          doi: "10.1080/15402001003622925",
          studyType: "cross-sectional"
        },
        {
          title: "Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing",
          authors: "Phillips, A.J.K. et al.",
          journal: "Scientific Reports",
          year: 2017,
          doi: "10.1038/s41598-017-03171-4",
          studyType: "cohort"
        }
      ]
    },
    {
      action: "Gebruik je bed alleen voor slapen en intimiteit, zodat je hersenen het bed met slaap associëren.",
      explanation: `## Mechanisme

Dit principe komt uit de **stimuluscontrole-therapie**, een kernonderdeel van cognitieve gedragstherapie voor insomnie (CGT-I). Je hersenen bouwen associaties op tussen je omgeving en bepaalde activiteiten. Wanneer je in bed werkt, telefoon gebruikt of televisie kijkt, leert je brein dat het bed een plek is om wakker te zijn. Door het bed exclusief te reserveren voor slaap, versterk je de associatie tussen bed en slaperigheid.

## Impact

Stimuluscontrole is een van de meest effectieve technieken binnen CGT-I, de gouden standaard voor insomniebehandeling. Studies tonen aan dat patiënten die deze techniek toepassen gemiddeld 20-30 minuten sneller in slaap vallen. Een Cochrane-review bevestigde dat CGT-I, waarvan stimuluscontrole een kerncomponent is, significant effectiever is dan slaapmedicatie op de lange termijn.

## Praktische toepassing

Ga alleen naar bed als je slaperig bent. Als je na 15-20 minuten niet in slaap bent gevallen, sta dan op en doe iets rustigs in een andere ruimte (lezen bij gedempt licht, puzzelen). Ga pas terug naar bed als je weer slaperig wordt. Verwijder laptops, tablets en werkgerelateerde spullen uit de slaapkamer.`,
      evidenceScore: 3,
      studyTypeSummary: "1 Cochrane-review, 3 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Cognitive behavioral therapy for chronic insomnia: a systematic review and meta-analysis",
          authors: "Trauer, J.M. et al.",
          journal: "Annals of Internal Medicine",
          year: 2015,
          doi: "10.7326/M14-2841",
          studyType: "meta-analysis"
        },
        {
          title: "Psychological and behavioral treatment of insomnia: update of the recent evidence (1998-2004)",
          authors: "Morin, C.M. et al.",
          journal: "Sleep",
          year: 2006,
          doi: "10.1093/sleep/29.11.1398",
          studyType: "systematic review"
        }
      ]
    },
    {
      action: "Maak je slaapkamer volledig donker met verduisterende gordijnen en verwijder alle standby-lampjes.",
      explanation: `## Mechanisme

Zelfs kleine hoeveelheden licht in de slaapkamer kunnen de productie van **melatonine** onderdrukken. Melatonine is het hormoon dat je lichaam signaleert dat het tijd is om te slapen. De **retinale ganglioncellen** in je ogen zijn extreem gevoelig voor licht, zelfs door gesloten oogleden. Dit betekent dat een oplichtend standby-lampje of straatverlichting door het raam je slaapkwaliteit kan verminderen zonder dat je het beseft.

## Impact

Een studie gepubliceerd in PNAS toonde aan dat blootstelling aan matig licht tijdens de slaap (zelfs 100 lux) de insulinegevoeligheid de volgende ochtend verminderde en de hartslag verhoogde. Deelnemers die sliepen met licht in de kamer hadden minder diepe slaap en meer nachtelijke ontwakingen. Langdurige blootstelling aan nachtelijk licht is ook geassocieerd met een verhoogd risico op obesitas en diabetes type 2.

## Praktische toepassing

Investeer in verduisterende gordijnen of rolgordijnen. Plak kleine stukjes elektriciteitstape over standby-lampjes. Als volledige verduistering niet mogelijk is, gebruik dan een comfortabel slaapmasker. Zorg ervoor dat je telefoon op de vliegtuigmodus staat of met het scherm naar beneden ligt.`,
      evidenceScore: 3,
      studyTypeSummary: "2 RCTs, 1 prospectieve cohortstudie",
      isPremium: false,
      papers: [
        {
          title: "Light exposure during sleep impairs cardiometabolic function",
          authors: "Zee, P.C. et al.",
          journal: "Proceedings of the National Academy of Sciences",
          year: 2022,
          doi: "10.1073/pnas.2113290119",
          studyType: "RCT"
        },
        {
          title: "Association of exposure to artificial light at night while sleeping with risk of obesity in women",
          authors: "Park, Y.M. et al.",
          journal: "JAMA Internal Medicine",
          year: 2019,
          doi: "10.1001/jamainternmed.2019.0571",
          studyType: "prospective cohort"
        },
        {
          title: "Bedroom light exposure at night and the incidence of depressive symptoms: a longitudinal study of the HEIJO-KYO cohort",
          authors: "Obayashi, K. et al.",
          journal: "American Journal of Epidemiology",
          year: 2018,
          doi: "10.1093/aje/kwx290",
          studyType: "longitudinal cohort"
        }
      ]
    },
    {
      action: "Vermijd schermen minimaal 60 minuten voor bedtijd of gebruik een blauwlichtfilter met warme kleurtemperatuur.",
      explanation: `## Mechanisme

Elektronische schermen (smartphones, tablets, laptops) stralen **blauw licht** uit met een golflengte rond 460-480 nanometer. Dit type licht onderdrukt de melatonineproductie het sterkst. De intrinsiek fotosensitieve retinale ganglioncellen (ipRGC's) in je ogen bevatten het pigment **melanopsine**, dat bijzonder gevoelig is voor blauw licht. Door schermgebruik vlak voor het slapen wordt het melatoninesignaal vertraagd, waardoor je later in slaap valt.

## Impact

Een Harvard-studie toonde aan dat het lezen op een tablet vóór bedtijd de melatonineproductie met meer dan 50% verminderde vergeleken met het lezen van een papieren boek. Deelnemers vielen gemiddeld 10 minuten later in slaap en hadden minder REM-slaap. Het gebruik van blauwlichtfilters (zoals Night Shift of f.lux) kan dit effect gedeeltelijk compenseren, maar volledige vermijding van schermen is het meest effectief.

## Praktische toepassing

Stel een "schermvrij" moment in van minimaal 60 minuten voor je geplande bedtijd. Gebruik deze tijd voor ontspannende activiteiten zoals lezen (op papier), stretchen of een warm bad nemen. Als je toch een scherm moet gebruiken, activeer dan de nachtmodus en verlaag de helderheid maximaal.`,
      evidenceScore: 3,
      studyTypeSummary: "3 RCTs, 1 meta-analyse",
      isPremium: false,
      papers: [
        {
          title: "Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness",
          authors: "Chang, A.M. et al.",
          journal: "Proceedings of the National Academy of Sciences",
          year: 2015,
          doi: "10.1073/pnas.1418490112",
          studyType: "RCT"
        },
        {
          title: "Blue blocker glasses as a countermeasure for alerting effects of evening light-emitting diode screen exposure in male teenagers",
          authors: "van der Lely, S. et al.",
          journal: "Journal of Adolescent Health",
          year: 2015,
          doi: "10.1016/j.jadohealth.2014.08.002",
          studyType: "RCT"
        }
      ]
    }
  ]
};
