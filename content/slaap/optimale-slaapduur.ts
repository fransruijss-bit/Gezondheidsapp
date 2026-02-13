import { Topic } from '@/types';

export const topic: Topic = {
  id: "S08",
  domainId: "slaap",
  title: "Optimale slaapduur",
  slug: "optimale-slaapduur",
  description: "Hoeveel slaap je echt nodig hebt per leeftijdscategorie",
  evidenceScore: 3,
  tags: [
    "slaapduur",
    "hoeveel slaap",
    "slaapbehoefte",
    "slaaptekort",
    "te veel slapen",
    "slaap per leeftijd",
    "slaapschuld",
    "optimale slaap"
  ],
  crosslinks: ["B01", "V02", "B10", "V06"],
  insights: [
    {
      action: "Slaap als volwassene tussen de 7 en 9 uur per nacht, waarbij 7 uur het absolute minimum is voor gezondheid.",
      explanation: `## Mechanisme

Tijdens slaap vinden essentiële processen plaats die niet tijdens waaktijd kunnen plaatsvinden. Tijdens **diepe slaap** wordt groeihormoon afgegeven voor weefselherstel, het immuunsysteem wordt versterkt en het **glymfatisch systeem** ruimt afvalstoffen op uit de hersenen (waaronder beta-amyloïd, gelinkt aan Alzheimer). Tijdens **REM-slaap** worden herinneringen geconsolideerd en emoties verwerkt. Minder dan 7 uur slaap geeft je lichaam onvoldoende tijd om al deze processen te voltooien.

## Impact

Een landmark-studie van de National Sleep Foundation, gebaseerd op meer dan 300 wetenschappelijke studies, stelde de volgende aanbevelingen vast: volwassenen (18-64 jaar) hebben **7-9 uur** slaap nodig, ouderen (65+) hebben 7-8 uur nodig. Een meta-analyse in Sleep toonde aan dat minder dan 6 uur slaap per nacht geassocieerd is met een 12% hoger risico op vroegtijdig overlijden. Maar ook meer dan 9 uur slaap was geassocieerd met gezondheidsrisico's, mogelijk als marker van onderliggende gezondheidsproblemen.

## Praktische toepassing

Bepaal je persoonlijke slaapbehoefte door een week lang (bij voorkeur op vakantie) zonder wekker te slapen en bij te houden hoeveel uur je gemiddeld slaapt. Dit is je natuurlijke slaapbehoefte. Plan je bedtijd hierop: als je 8 uur nodig hebt en om 07:00 moet opstaan, ga dan om 22:45 naar bed (met 15 minuten inslaaptijd). Prioriteer slaap net zo als voeding en beweging.`,
      evidenceScore: 3,
      studyTypeSummary: "2 meta-analyses, 1 consensusrichtlijn",
      isPremium: false,
      papers: [
        {
          title: "National Sleep Foundation's sleep time duration recommendations: methodology and results summary",
          authors: "Hirshkowitz, M. et al.",
          journal: "Sleep Health",
          year: 2015,
          doi: "10.1016/j.sleh.2014.12.010",
          studyType: "consensus guideline"
        },
        {
          title: "Sleep duration and all-cause mortality: a systematic review and meta-analysis of prospective studies",
          authors: "Cappuccio, F.P. et al.",
          journal: "Sleep",
          year: 2010,
          doi: "10.1093/sleep/33.5.585",
          studyType: "meta-analysis"
        },
        {
          title: "Sleep duration predicts cardiovascular outcomes: a systematic review and meta-analysis of prospective studies",
          authors: "Cappuccio, F.P. et al.",
          journal: "European Heart Journal",
          year: 2011,
          doi: "10.1093/eurheartj/ehr007",
          studyType: "meta-analysis"
        }
      ]
    },
    {
      action: "Houd een slaaplogboek bij gedurende twee weken om je werkelijke slaapduur en slaapkwaliteit objectief te meten.",
      explanation: `## Mechanisme

Mensen zijn notoir slecht in het inschatten van hun eigen slaap. Onderzoek toont aan dat mensen hun slaaptijd gemiddeld met **30-60 minuten overschatten**. Tijd in bed is niet hetzelfde als slaaptijd — als je om 23:00 naar bed gaat en om 07:00 opstaat, slaap je waarschijnlijk 6,5-7 uur in plaats van 8 uur. Een slaaplogboek helpt je om objectief inzicht te krijgen in je slaappatroon, inclusief inslaaptijd, nachtelijke ontwakingen en ochtendalertheid.

## Impact

Het slaaplogboek (of slaapdagboek) is een standaard diagnostisch hulpmiddel in de slaapgeneeskunde. Een studie in Sleep Medicine toonde aan dat twee weken consistent bijhouden van een slaaplogboek voldoende is om betrouwbare patronen te identificeren. De meest belangrijke metrics zijn: **slaapefficiëntie** (percentage van de tijd in bed dat je daadwerkelijk slaapt; >85% is goed), totale slaaptijd en subjectieve slaapkwaliteit. Deze gegevens zijn ook waardevol als je later een slaapspecialist raadpleegt.

## Praktische toepassing

Noteer elke ochtend direct na het opstaan: bedtijd, geschatte inslaaptijd, aantal en duur van nachtelijke ontwakingen, wektijd en opstaan. Geef ook een subjectieve score (1-5) voor slaapkwaliteit en ochtendfitheid. Na twee weken bereken je je gemiddelde slaaptijd en slaapefficiëntie. Gebruik een eenvoudig notitieboekje of een slaaptracker-app (maar vermijd schermgebruik vlak voor het slapen).`,
      evidenceScore: 2,
      studyTypeSummary: "1 systematische review, 2 klinische validatiestudies",
      isPremium: false,
      papers: [
        {
          title: "The consensus sleep diary: standardizing prospective sleep self-monitoring",
          authors: "Carney, C.E. et al.",
          journal: "Sleep",
          year: 2012,
          doi: "10.5665/sleep.1642",
          studyType: "consensus study"
        },
        {
          title: "Discrepancy between subjective and objective sleep in patients with depression",
          authors: "Armitage, R. et al.",
          journal: "Journal of Clinical Sleep Medicine",
          year: 2007,
          doi: "10.5664/jcsm.26862",
          studyType: "clinical study"
        }
      ]
    },
    {
      action: "Betaal slaapschuld zo snel mogelijk terug door de eerste drie nachten 1 tot 2 uur extra te slapen.",
      explanation: `## Mechanisme

**Slaapschuld** is de cumulatieve hoeveelheid slaap die je mist ten opzichte van je behoefte. Als je 8 uur nodig hebt maar 5 nachten achtereen slechts 6 uur slaapt, bouw je een slaapschuld op van 10 uur. Onderzoek van Matthew Walker en collega's heeft aangetoond dat slaapschuld niet volledig wordt terugbetaald door een paar nachten langer slapen — maar het lichaam kan zich wel gedeeltelijk herstellen als je snel extra slaap inhaalt. Het **homeostatisch slaapsysteem** zorgt ervoor dat na slaaptekort de diepe slaap toeneemt (SWS rebound).

## Impact

Een studie in het American Journal of Physiology toonde aan dat na 10 dagen van 6 uur slaap per nacht, het cognitief functioneren vergelijkbaar was met iemand die 24 uur niet had geslapen. Zorgwekkend was dat deelnemers hun eigen beperkingen onderschatten — ze voelden zich na een paar dagen "gewend" aan het tekort, terwijl objectieve tests bleven verslechteren. Een andere studie toonde aan dat 3 nachten herstellslaap (10 uur per nacht) het grootste deel van de cognitieve schade herstelde, maar dat sommige functies pas na een week volledig terugkeerden.

## Praktische toepassing

Na een periode van slaaptekort: ga de eerste 2-3 nachten **1-2 uur eerder** naar bed. Slaap niet excessief lang uit (meer dan 10 uur), want dit kan je ritme verstoren. Op langere termijn is het voorkomen van slaapschuld belangrijker dan het terugbetalen ervan. Plan je slaap als een afspraak in je agenda die niet wordt verplaatst.`,
      evidenceScore: 2,
      studyTypeSummary: "2 experimentele studies, 1 review",
      isPremium: false,
      papers: [
        {
          title: "The cumulative cost of additional wakefulness: dose-response effects on neurobehavioral functions and sleep physiology from chronic sleep restriction and total sleep deprivation",
          authors: "Van Dongen, H.P.A. et al.",
          journal: "Sleep",
          year: 2003,
          doi: "10.1093/sleep/26.2.117",
          studyType: "experimental"
        },
        {
          title: "Recovery of cognitive functions after a single night of sleep loss",
          authors: "Drummond, S.P.A. et al.",
          journal: "Biological Psychology",
          year: 2012,
          doi: "10.1016/j.biopsycho.2011.09.015",
          studyType: "experimental"
        },
        {
          title: "Sleep debt: theoretical and empirical issues",
          authors: "Banks, S., Dinges, D.F.",
          journal: "Sleep and Biological Rhythms",
          year: 2007,
          doi: "10.1111/j.1479-8425.2007.00296.x",
          studyType: "review"
        }
      ]
    },
    {
      action: "Pas je slaapbehoefte aan bij intensieve trainingsperiodes door 30 tot 60 minuten extra slaap per nacht te plannen.",
      explanation: `## Mechanisme

Fysieke inspanning verhoogt de behoefte aan **herstellende slaap**. Tijdens diepe slaap wordt **groeihormoon** (GH) afgegeven — tot 75% van de dagelijkse GH-productie vindt plaats tijdens N3-slaap. Dit hormoon is essentieel voor spierherstel, botdichtheid en vetmetabolisme. Atleten en recreatieve sporters die intensief trainen hebben daardoor een hogere slaapbehoefte. Slaaptekort bij sporters leidt tot verminderd herstel, lagere prestaties en een hoger blessurerisico.

## Impact

Een baanbrekende studie bij Stanford basketbalspelers toonde aan dat het verlengen van de slaaptijd naar 10 uur per nacht leidde tot significant snellere sprinttijden, betere schietnauwkeurigheid en verbeterde reactietijden. Een meta-analyse in Sports Medicine bevestigde dat slaapextensie (bewust meer slapen) de atletische prestaties verbetert, terwijl zelfs mild slaaptekort (6 uur in plaats van 8 uur) het blessurerisico bij adolescente atleten met 70% verhoogde.

## Praktische toepassing

Tijdens intensieve trainingsperiodes of wedstrijdvoorbereiding: plan **8,5-9,5 uur** in bed in plaats van de gebruikelijke 7,5-8,5 uur. Ga eerder naar bed in plaats van later op te staan, om je circadiaan ritme intact te houden. Na zeer zware trainingen kan een **dutje van 20-30 minuten** in de vroege middag aanvullend herstel bieden. Luister naar je lichaam: als je 's ochtends moeilijk wakker wordt, slaap je waarschijnlijk te weinig.`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 2 RCTs, 1 cohortstudie",
      isPremium: false,
      papers: [
        {
          title: "The effects of sleep extension on the athletic performance of collegiate basketball players",
          authors: "Mah, C.D. et al.",
          journal: "Sleep",
          year: 2011,
          doi: "10.5665/SLEEP.1132",
          studyType: "experimental"
        },
        {
          title: "Sleep and athletic performance: the effects of sleep loss on exercise performance, and physiological and cognitive responses to exercise",
          authors: "Fullagar, H.H.K. et al.",
          journal: "Sports Medicine",
          year: 2015,
          doi: "10.1007/s40279-014-0260-0",
          studyType: "systematic review"
        },
        {
          title: "Chronic lack of sleep is associated with increased sports injuries in adolescent athletes",
          authors: "Milewski, M.D. et al.",
          journal: "Journal of Pediatric Orthopaedics",
          year: 2014,
          doi: "10.1097/BPO.0000000000000151",
          studyType: "cohort"
        }
      ]
    }
  ]
};
