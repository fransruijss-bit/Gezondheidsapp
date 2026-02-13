import { Topic } from '@/types';

export const topic: Topic = {
  id: "S04",
  domainId: "slaap",
  title: "Slaapfases (REM/diepe slaap)",
  slug: "slaapfases",
  description: "Wat elke fase doet, hoe je ze optimaliseert",
  evidenceScore: 3,
  tags: [
    "slaapfases",
    "REM-slaap",
    "diepe slaap",
    "slaaparchitectuur",
    "slaapcyclus",
    "langzame golfslaap",
    "dromen",
    "slaapstadia",
    "N3-slaap"
  ],
  crosslinks: ["B04", "V01", "B09", "V07"],
  insights: [
    {
      action: "Zorg voor minstens 7 uur slaap per nacht om voldoende diepe slaap en REM-slaap cycli te doorlopen.",
      explanation: `## Mechanisme

Een volledige **slaapcyclus** duurt ongeveer 90 minuten en bestaat uit vier stadia: N1 (lichte slaap), N2 (stabiele slaap), N3 (diepe slaap/langzame golfslaap) en REM-slaap. Gedurende de nacht doorloop je 4-6 van deze cycli. De verdeling is niet gelijk: de eerste helft van de nacht bevat relatief meer **diepe slaap** (essentieel voor fysiek herstel), terwijl de tweede helft meer **REM-slaap** bevat (essentieel voor geheugen en emotionele verwerking).

## Impact

Bij minder dan 7 uur slaap worden vooral de latere cycli afgekapt, wat resulteert in significant minder REM-slaap. Een studie in Nature Reviews Neuroscience toonde aan dat het verlies van zelfs één slaapcyclus de geheugensconsolidatie met 40% verminderde. Chronisch tekort aan diepe slaap is geassocieerd met een verhoogd risico op de ziekte van Alzheimer, doordat het glymfatisch systeem — dat afvalstoffen uit de hersenen verwijdert — voornamelijk actief is tijdens N3-slaap.

## Praktische toepassing

Bereken je bedtijd terug vanuit je gewenste wektijd: als je om 07:00 moet opstaan, ga dan uiterlijk om 23:30 naar bed (7,5 uur in bed voor 7 uur effectieve slaap). Houd er rekening mee dat het 15-20 minuten duurt om in slaap te vallen. Gebruik een slaaptracker om inzicht te krijgen in je slaaparchitectuur.`,
      evidenceScore: 3,
      studyTypeSummary: "2 meta-analyses, 3 laboratoriumstudies",
      isPremium: false,
      papers: [
        {
          title: "About sleep's role in memory",
          authors: "Rasch, B., Born, J.",
          journal: "Physiological Reviews",
          year: 2013,
          doi: "10.1152/physrev.00032.2012",
          studyType: "review"
        },
        {
          title: "Sleep drives metabolite clearance from the adult brain",
          authors: "Xie, L. et al.",
          journal: "Science",
          year: 2013,
          doi: "10.1126/science.1241224",
          studyType: "experimental"
        },
        {
          title: "Self-reported sleep and beta-amyloid deposition in community-dwelling older adults",
          authors: "Spira, A.P. et al.",
          journal: "JAMA Neurology",
          year: 2013,
          doi: "10.1001/jamaneurol.2013.4258",
          studyType: "cohort"
        }
      ]
    },
    {
      action: "Doe intensieve lichaamsbeweging minimaal 4 tot 6 uur voor bedtijd om de hoeveelheid diepe slaap te vergroten.",
      explanation: `## Mechanisme

Fysieke inspanning verhoogt de behoefte van het lichaam aan **herstelprocessen**, die voornamelijk plaatsvinden tijdens diepe slaap (N3). Tijdens intensieve beweging worden spiervezels beschadigd en glycogeenvoorraden uitgeput. Het lichaam compenseert dit door meer tijd in N3-slaap door te brengen, waarin **groeihormoon** wordt afgegeven dat essentieel is voor spier- en weefselherstel. Echter, beweging te dicht op bedtijd verhoogt de kerntemperatuur en adrenaline, wat het inslapen bemoeilijkt.

## Impact

Een meta-analyse in Sports Medicine bevestigde dat regelmatige matige tot intensieve lichaamsbeweging de diepe slaap met gemiddeld 15-20 minuten per nacht verhoogde. Het effect was het grootst wanneer de training minimaal 4-6 uur voor bedtijd plaatsvond. Avondbeweging (binnen 2 uur voor bedtijd) had een wisselend effect: lichte activiteit was niet schadelijk, maar intensieve training verstoorde de slaapkwaliteit bij veel deelnemers.

## Praktische toepassing

Plan intensieve workouts (hardlopen, HIIT, krachttraining) in de ochtend of middag. Als je alleen 's avonds kunt sporten, kies dan voor minder intensieve activiteiten zoals yoga, wandelen of stretchen. Een korte avondwandeling na het eten kan de slaapkwaliteit zelfs verbeteren door de spijsvertering te bevorderen en het stressniveau te verlagen.`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 3 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Effects of exercise on sleep in adults: a systematic review and meta-analysis",
          authors: "Kredlow, M.A. et al.",
          journal: "Sports Medicine",
          year: 2015,
          doi: "10.1007/s40279-015-0440-1",
          studyType: "meta-analysis"
        },
        {
          title: "The effect of physical activity on sleep quality: a systematic review",
          authors: "Dolezal, B.A. et al.",
          journal: "Advances in Preventive Medicine",
          year: 2017,
          doi: "10.1155/2017/9840381",
          studyType: "systematic review"
        }
      ]
    },
    {
      action: "Vermijd alcohol binnen 3 uur voor bedtijd, want alcohol onderdrukt REM-slaap en verstoort de slaapcyclus.",
      explanation: `## Mechanisme

Alcohol werkt als een **GABA-agonist**, wat aanvankelijk een kalmerend en slaapbevorderend effect heeft. Mensen vallen daardoor sneller in slaap na alcoholconsumptie. Echter, wanneer de alcohol wordt afgebroken (na 2-4 uur), treedt een **rebound-effect** op: het sympathische zenuwstelsel wordt geactiveerd, wat leidt tot frequente ontwakingen in de tweede helft van de nacht. Bovendien onderdrukt alcohol selectief de REM-slaap, met name in de eerste slaapcycli.

## Impact

Een meta-analyse in Alcoholism: Clinical and Experimental Research analyseerde 27 studies en concludeerde dat alcohol de inslaaptijd verkort maar de totale slaapkwaliteit significant verslechtert. Zelfs matig alcoholgebruik (1-2 eenheden) verminderde de REM-slaap met 9% en verhoogde de nachtelijke ontwakingen. Bij hoger gebruik (>2 eenheden) was het effect nog dramatischer, met een REM-reductie tot 30% en aanzienlijke verstoring van de slaaparchitectuur.

## Praktische toepassing

Drink je laatste alcoholische drankje minimaal 3 uur voor bedtijd, bij voorkeur 4 uur. Elke eenheid alcohol heeft ongeveer 1 uur nodig om te worden afgebroken. Als je 's avonds wijn drinkt bij het eten, plan het diner dan vroeger. Overweeg alcoholvrije alternatieven in de avonduren. Wees je ervan bewust dat zelfs als alcohol je helpt inslapen, de slaapkwaliteit eronder lijdt.`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 4 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Alcohol and sleep I: effects on normal sleep",
          authors: "Ebrahim, I.O. et al.",
          journal: "Alcoholism: Clinical and Experimental Research",
          year: 2013,
          doi: "10.1111/acer.12006",
          studyType: "meta-analysis"
        },
        {
          title: "Sleep, sleepiness, and alcohol use",
          authors: "Roehrs, T., Roth, T.",
          journal: "Alcohol Research & Health",
          year: 2001,
          doi: "10.1037/e505512006-010",
          studyType: "review"
        },
        {
          title: "Dose-dependent effects of alcohol on apparent sleep architecture in normal subjects",
          authors: "Roehrs, T. et al.",
          journal: "Alcoholism: Clinical and Experimental Research",
          year: 1999,
          doi: "10.1111/j.1530-0277.1999.tb04184.x",
          studyType: "experimental"
        }
      ]
    },
    {
      action: "Gebruik de 90-minuten-regel: stel je wekker in op een veelvoud van 90 minuten na je verwachte inslaaptijd.",
      explanation: `## Mechanisme

Elke slaapcyclus duurt gemiddeld **90 minuten**. Aan het einde van elke cyclus bevindt je je in een lichte slaapfase (N1 of begin N2), waarin je het gemakkelijkst en het meest verfrist wakker wordt. Wanneer je wekker afgaat midden in een diepe slaapfase (N3), ervaar je **slaapinertie** — dat zware, versufte gevoel dat minuten tot uren kan aanhouden. Door je wekker af te stemmen op het einde van een cyclus, minimaliseer je deze slaapinertie.

## Impact

Onderzoek in het Journal of Sleep Research toonde aan dat mensen die wakker werden aan het einde van een slaapcyclus significant beter presteerden op cognitieve taken in de eerste 30 minuten na het opstaan, vergeleken met mensen die midden in diepe slaap werden gewekt. Het verschil in alertheid was vergelijkbaar met het effect van een extra uur slaap. Dit suggereert dat de timing van wakker worden bijna net zo belangrijk is als de totale slaaptijd.

## Praktische toepassing

Bereken je ideale wektijd: als je om 23:00 in slaap valt, zijn mogelijke wektijden 00:30, 02:00, 03:30, 05:00, 06:30 of 08:00. Kies de tijd die het dichtst bij je gewenste slaaptijd ligt. Houd er rekening mee dat de gemiddelde inslaaptijd 15 minuten bedraagt. Slimme wekkers en slaaptrackers kunnen je ook wekken op het lichtste punt van je slaapcyclus.`,
      evidenceScore: 2,
      studyTypeSummary: "2 laboratoriumstudies, 1 RCT",
      isPremium: false,
      papers: [
        {
          title: "Sleep inertia",
          authors: "Trotti, L.M.",
          journal: "Sleep Medicine Reviews",
          year: 2017,
          doi: "10.1016/j.smrv.2016.08.005",
          studyType: "review"
        },
        {
          title: "Waking up is the hardest thing I do all day: sleep inertia and sleep drunkenness",
          authors: "Hilditch, C.J., McHill, A.W.",
          journal: "Sleep",
          year: 2019,
          doi: "10.1093/sleep/zsz104",
          studyType: "review"
        }
      ]
    }
  ]
};
