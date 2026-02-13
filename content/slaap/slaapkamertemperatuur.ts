import { Topic } from '@/types';

export const topic: Topic = {
  id: "S05",
  domainId: "slaap",
  title: "Slaapkamertemperatuur",
  slug: "slaapkamertemperatuur",
  description: "Optimale temperatuur, thermoregulatie en slaap",
  evidenceScore: 3,
  tags: [
    "slaapkamertemperatuur",
    "thermoregulatie",
    "koele slaapkamer",
    "lichaamstemperatuur",
    "slaapomgeving",
    "warm bad",
    "kerntemperatuur",
    "koeling"
  ],
  crosslinks: ["B06", "V04", "B02", "V01"],
  insights: [
    {
      action: "Houd je slaapkamertemperatuur tussen 16 en 18 graden Celsius voor optimale slaapkwaliteit.",
      explanation: `## Mechanisme

Om in slaap te vallen moet je **kerntemperatuur** met ongeveer 1-1,5°C dalen. Dit proces wordt aangestuurd door het circadiaan ritme en bereikt een dieptepunt rond 04:00-05:00 's nachts. Een koele slaapkamer faciliteert deze natuurlijke temperatuurdaling. Wanneer de kamertemperatuur te hoog is, kan je lichaam de warmte niet efficiënt kwijtraken via de huid, wat het inslapen vertraagt en de slaapkwaliteit vermindert.

## Impact

Een uitgebreide review in Sleep Medicine Reviews concludeerde dat de optimale slaapkamertemperatuur tussen **15,5 en 19°C** ligt, met een optimum rond 18°C voor de meeste mensen. Temperaturen boven 24°C verstoren de slaaparchitectuur significant: minder diepe slaap, meer nachtelijke ontwakingen en een kortere totale slaaptijd. Temperaturen onder 12°C kunnen ook problematisch zijn doordat het lichaam dan teveel energie kwijt is aan warmteproductie.

## Praktische toepassing

Stel je thermostaat in de slaapkamer in op 16-18°C. Zet de verwarming een uur voor bedtijd lager of uit. In de zomer kan een ventilator helpen om de luchtcirculatie te verbeteren. Gebruik gelaagd beddengoed (een laken plus een deken) zodat je gemakkelijk kunt aanpassen. Katoenen of bamboe lakens zijn beter voor temperatuurregulatie dan synthetische stoffen.`,
      evidenceScore: 3,
      studyTypeSummary: "2 systematische reviews, 3 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Effects of thermal environment on sleep and circadian rhythm",
          authors: "Okamoto-Mizuno, K., Mizuno, K.",
          journal: "Journal of Physiological Anthropology",
          year: 2012,
          doi: "10.1186/1880-6805-31-14",
          studyType: "review"
        },
        {
          title: "Temperature and human sleep",
          authors: "Harding, E.C., Franks, N.P., Wisden, W.",
          journal: "Current Opinion in Physiology",
          year: 2020,
          doi: "10.1016/j.cophys.2019.07.004",
          studyType: "review"
        },
        {
          title: "The temperature dependence of sleep",
          authors: "Czeisler, C.A. et al.",
          journal: "Sleep Medicine Reviews",
          year: 2019,
          doi: "10.1016/j.smrv.2019.02.002",
          studyType: "review"
        }
      ]
    },
    {
      action: "Neem een warm bad of douche van 40 graden, 60 tot 90 minuten voor bedtijd, om sneller in slaap te vallen.",
      explanation: `## Mechanisme

Dit lijkt paradoxaal: waarom zou warmte helpen bij het inslapen als je lichaam juist moet afkoelen? Het antwoord ligt in de **vasodilatatie**. Een warm bad verwijdt de bloedvaten in je handen en voeten (perifere vasodilatatie). Wanneer je uit bad stapt, verliest je lichaam snel warmte via deze verwijd bloedvaten. Dit versnelt de daling van je kerntemperatuur, wat het inslapen bevordert. Dit effect staat bekend als het **warm bad effect**.

## Impact

Een systematische review en meta-analyse in Sleep Medicine Reviews analyseerde 5.322 studies en concludeerde dat een warm bad (40-42,5°C) genomen 1-2 uur voor bedtijd de inslaaptijd met gemiddeld **10 minuten** verkort. Het optimale tijdstip was 90 minuten voor bedtijd. Deelnemers rapporteerden ook een verbeterde subjectieve slaapkwaliteit. Zelfs een warm voetenbad van 20 minuten had een meetbaar positief effect, zij het kleiner.

## Praktische toepassing

Plan een warm bad of douche (38-42°C) ongeveer 60-90 minuten voor je geplande bedtijd. Een bad van 10-15 minuten is voldoende. Als je geen bad hebt, werkt een warme douche ook, zij het iets minder effectief. Trek na het bad lichte, ademende kleding aan zodat de warmte goed kan ontsnappen. Een warm voetenbad is een goed alternatief als een volledig bad niet praktisch is.`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 2 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Before-bedtime passive body heating by warm shower or bath to improve sleep: a systematic review and meta-analysis",
          authors: "Haghayegh, S. et al.",
          journal: "Sleep Medicine Reviews",
          year: 2019,
          doi: "10.1016/j.smrv.2019.04.008",
          studyType: "meta-analysis"
        },
        {
          title: "Body temperature and sleep",
          authors: "Kräuchi, K.",
          journal: "Sleep Medicine Clinics",
          year: 2007,
          doi: "10.1016/j.jsmc.2007.04.003",
          studyType: "review"
        },
        {
          title: "Thermophysiological changes after warm foot bathing and their association with sleep onset latency",
          authors: "Sung, E.J., Tochihara, Y.",
          journal: "Journal of Physiological Anthropology and Applied Human Science",
          year: 2000,
          doi: "10.2114/jpa.19.21",
          studyType: "experimental"
        }
      ]
    },
    {
      action: "Draag sokken naar bed als je koude voeten hebt, omdat warme extremiteiten vasodilatatie bevorderen en het inslapen versnellen.",
      explanation: `## Mechanisme

Het klinkt eenvoudig, maar sokken dragen in bed is een wetenschappelijk onderbouwde slaaptechniek. Warme voeten bevorderen **perifere vasodilatatie** — de bloedvaten in de voeten verwijden, waardoor meer bloed naar het huidoppervlak stroomt. Dit verhoogt het warmteverlies via de extremiteiten en versnelt de daling van de kerntemperatuur. De relatie tussen de temperatuur van de extremiteiten en de kerntemperatuur (de **distaal-proximale gradiënt**) is een van de sterkste fysiologische voorspellers van de inslaapsnelheid.

## Impact

Een studie in Nature toonde aan dat de snelheid van vasodilatatie in de voeten de sterkste fysiologische voorspeller was van hoe snel iemand in slaap viel. Deelnemers met warme voeten vielen gemiddeld 15 minuten sneller in slaap. Een Zwitserse studie bevestigde dat het verwarmen van de voeten (met sokken of een kruik) de inslaaptijd significant verkortte, vooral bij mensen die normaal last hebben van koude voeten.

## Praktische toepassing

Trek ademende katoenen of wollen sokken aan voor het slapengaan. Als je het niet prettig vindt om sokken in bed te dragen, gebruik dan een kruik aan het voeteneinde. Vermijd synthetische sokken die vocht vasthouden. Sommige mensen vinden het prettig om de sokken halverwege de nacht uit te trekken — dit is prima en kan zelfs helpen bij de thermoregulatie.`,
      evidenceScore: 2,
      studyTypeSummary: "2 experimentele studies, 1 observationele studie",
      isPremium: false,
      papers: [
        {
          title: "Functional link between distal vasodilation and sleep-onset latency?",
          authors: "Kräuchi, K. et al.",
          journal: "American Journal of Physiology",
          year: 1999,
          doi: "10.1152/ajpregu.1999.276.3.R741",
          studyType: "experimental"
        },
        {
          title: "Warm feet promote the rapid onset of sleep",
          authors: "Kräuchi, K. et al.",
          journal: "Nature",
          year: 1999,
          doi: "10.1038/44106",
          studyType: "experimental"
        }
      ]
    }
  ]
};
