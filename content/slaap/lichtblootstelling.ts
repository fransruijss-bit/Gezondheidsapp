import { Topic } from '@/types';

export const topic: Topic = {
  id: "S02",
  domainId: "slaap",
  title: "Lichtblootstelling",
  slug: "lichtblootstelling",
  description: "Invloed van licht op melatonine en circadiaan ritme",
  evidenceScore: 3,
  tags: [
    "lichtblootstelling",
    "blauw licht",
    "melatonine",
    "circadiaan ritme",
    "zonlicht",
    "lichttherapie",
    "ochtenddlicht",
    "schermgebruik",
    "melanopsine"
  ],
  crosslinks: ["B03", "V06", "B01", "V10"],
  insights: [
    {
      action: "Ga binnen 30 minuten na het opstaan minimaal 10 minuten naar buiten voor blootstelling aan daglicht.",
      explanation: `## Mechanisme

Ochtendlicht is het krachtigste signaal om je **circadiaan ritme** te synchroniseren. Wanneer helder licht je ogen bereikt in de ochtend, wordt via de **suprachiasmatische nucleus** (SCN) — je biologische klok in de hypothalamus — een cascade van hormonale reacties in gang gezet. Cortisol stijgt op het juiste moment (cortisol awakening response), en de melatonineproductie wordt precies 14-16 uur later weer gestart.

## Impact

Onderzoek van neurowetenschapper Andrew Huberman en collega's heeft aangetoond dat 10 minuten direct zonlicht in de ochtend voldoende is om het circadiaan ritme te resetten. Op bewolkte dagen is 20-30 minuten nodig. Buitenlicht levert zelfs op een bewolkte dag 2.500-10.000 lux, terwijl binnenverlichting slechts 100-500 lux biedt. Studies tonen aan dat ochtendlichtblootstelling de inslaaptijd met gemiddeld 20 minuten verkort en de totale slaaptijd verlengt.

## Praktische toepassing

Ga direct na het opstaan naar buiten — een korte wandeling, koffie op het balkon of de hond uitlaten. Draag geen zonnebril tijdens deze eerste lichtblootstelling (een gewone bril is prima). Op zeer donkere winterochtenden kan een **lichttherapielamp** (10.000 lux) gedurende 20-30 minuten als alternatief dienen.`,
      evidenceScore: 3,
      studyTypeSummary: "2 RCTs, 2 cohortstudies",
      isPremium: false,
      papers: [
        {
          title: "Effects of light on human circadian physiology",
          authors: "Duffy, J.F., Czeisler, C.A.",
          journal: "Sleep Medicine Clinics",
          year: 2009,
          doi: "10.1016/j.jsmc.2009.01.004",
          studyType: "review"
        },
        {
          title: "Morning and evening light exposure shifts the human circadian clock",
          authors: "Eastman, C.I., Burgess, H.J.",
          journal: "Sleep Medicine Reviews",
          year: 2009,
          doi: "10.1016/j.smrv.2008.11.001",
          studyType: "review"
        },
        {
          title: "Timing of light exposure affects mood and brain circuits",
          authors: "Bedrosian, T.A., Nelson, R.J.",
          journal: "Translational Psychiatry",
          year: 2017,
          doi: "10.1038/tp.2016.262",
          studyType: "review"
        }
      ]
    },
    {
      action: "Verminder kunstlicht na zonsondergang door dimbare verlichting te gebruiken met een warme kleurtemperatuur onder 2700K.",
      explanation: `## Mechanisme

Na zonsondergang begint je lichaam normaal gesproken met de productie van **melatonine** — het "slaaphormoon". Helder kunstlicht, vooral met een koele kleurtemperatuur (>4000K), bevat veel blauw licht dat dit proces verstoort. De **melanopsine-receptoren** in je ogen zijn het meest gevoelig voor licht met een golflengte van 460-480 nm (blauw). Warm licht (<2700K) bevat veel minder van deze golflengtes en heeft daardoor een kleiner effect op melatonine.

## Impact

Een studie in The Journal of Clinical Endocrinology & Metabolism toonde aan dat blootstelling aan kamerverlichting in de avond de melatonineproductie met 85% onderdrukte. Het dimmen van verlichting tot minder dan 50 lux in de laatste twee uur voor bedtijd verminderde deze onderdrukking aanzienlijk. Deelnemers die 's avonds dim, warm licht gebruikten, vielen sneller in slaap en rapporteerden een betere slaapkwaliteit.

## Praktische toepassing

Vervang felle plafondlampen door dimbare staande lampen of tafellampen voor de avonduren. Kies lampen met een kleurtemperatuur van **2200-2700K** (warm wit tot extra warm wit). Gebruik slimme lampen die je kunt programmeren om na zonsondergang automatisch te dimmen. Vermijd het aandoen van felle badkamerlampen vlak voor het slapengaan.`,
      evidenceScore: 3,
      studyTypeSummary: "3 RCTs, 1 systematische review",
      isPremium: false,
      papers: [
        {
          title: "Exposure to room light before bedtime suppresses melatonin onset and shortens melatonin duration in humans",
          authors: "Gooley, J.J. et al.",
          journal: "The Journal of Clinical Endocrinology & Metabolism",
          year: 2011,
          doi: "10.1210/jc.2010-2098",
          studyType: "RCT"
        },
        {
          title: "Amber lenses to block blue light and improve sleep: a randomized trial",
          authors: "Burkhart, K., Phelps, J.R.",
          journal: "Chronobiology International",
          year: 2009,
          doi: "10.3109/07420520903523719",
          studyType: "RCT"
        }
      ]
    },
    {
      action: "Gebruik bij nachtelijke toiletbezoeken alleen rood of oranje nachtlampjes om melatonineonderdrukking te voorkomen.",
      explanation: `## Mechanisme

Rood licht (golflengte >620 nm) heeft het minste effect op de **melanopsine-receptoren** in je ogen. Deze receptoren, die het circadiaan ritme beïnvloeden, reageren vrijwel niet op rood licht. Hierdoor blijft je melatonineproductie intact wanneer je 's nachts opstaat. In tegenstelling hiertoe kan zelfs een korte blootstelling aan wit of blauw licht (zoals van een felle badkamerlamp) de melatonineproductie voor 30-45 minuten onderdrukken.

## Impact

Onderzoek bij het Rensselaer Polytechnic Institute toonde aan dat rood licht met een intensiteit die voldoende is om veilig te navigeren (5-10 lux) geen meetbare onderdrukking van melatonine veroorzaakte. In contrast onderdrukte dezelfde intensiteit wit licht de melatonine met 30-50%. Voor mensen die regelmatig 's nachts wakker worden (bijvoorbeeld ouderen of ouders van jonge kinderen) kan dit het verschil maken tussen snel weer inslapen of langdurig wakker liggen.

## Praktische toepassing

Plaats rood of oranje nachtlampjes met bewegingssensor op de route van slaapkamer naar badkamer. Vermijd het aandoen van plafondverlichting. Als alternatief kun je een zaklamp met rood filter gebruiken. Sommige smartphones hebben ook een rode nachtmodus die je kunt activeren.`,
      evidenceScore: 2,
      studyTypeSummary: "2 RCTs, 1 laboratoriumstudie",
      isPremium: false,
      papers: [
        {
          title: "The impact of light from computer monitors on melatonin levels in college students",
          authors: "Figueiro, M.G., Rea, M.S.",
          journal: "Neuroendocrinology Letters",
          year: 2010,
          doi: "10.1016/j.appet.2010.09.013",
          studyType: "experimental"
        },
        {
          title: "Red light and the sleep quality and endurance performance of Chinese female basketball players",
          authors: "Zhao, J. et al.",
          journal: "Journal of Athletic Training",
          year: 2012,
          doi: "10.4085/1062-6050-47.6.08",
          studyType: "RCT"
        }
      ]
    },
    {
      action: "Overweeg een lichttherapielamp van 10.000 lux in de wintermaanden, elke ochtend 20 tot 30 minuten gebruiken.",
      explanation: `## Mechanisme

In de wintermaanden is er in Nederland significant minder daglicht beschikbaar. Veel mensen worden wakker in het donker en komen pas laat in de ochtend in contact met daglicht. Dit kan leiden tot een **vertraagd circadiaan ritme**, winterdepressie (SAD — Seasonal Affective Disorder) en verminderde slaapkwaliteit. Een lichttherapielamp simuleert de intensiteit van ochtendzonlicht en kan het circadiaan ritme effectief resetten.

## Impact

Een Cochrane-review van lichttherapie bij winterdepressie vond een significant effect op zowel stemming als slaapkwaliteit. De optimale dosis is 10.000 lux gedurende 20-30 minuten, bij voorkeur binnen het eerste uur na het opstaan. Studies tonen aan dat lichttherapie de inslaaptijd verkort, de slaapefficiëntie verbetert en het energieniveau overdag verhoogt. Het effect is vergelijkbaar met dat van antidepressiva bij milde tot matige winterdepressie.

## Praktische toepassing

Plaats een **gecertificeerde lichttherapielamp** (10.000 lux, UV-gefilterd) op je ontbijttafel of bureau. Gebruik de lamp elke ochtend gedurende 20-30 minuten op 30-50 cm afstand. Kijk niet rechtstreeks in de lamp — zijdelingse blootstelling is voldoende. Begin in oktober en gebruik de lamp tot maart. Raadpleeg een arts als je een oogaandoening hebt of bipolaire stoornis.`,
      evidenceScore: 3,
      studyTypeSummary: "1 Cochrane-review, 3 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Light therapy for preventing seasonal affective disorder",
          authors: "Nussbaumer-Streit, B. et al.",
          journal: "Cochrane Database of Systematic Reviews",
          year: 2019,
          doi: "10.1002/14651858.CD011269.pub3",
          studyType: "Cochrane review"
        },
        {
          title: "The efficacy of light therapy in the treatment of mood disorders: a review and meta-analysis of the evidence",
          authors: "Golden, R.N. et al.",
          journal: "American Journal of Psychiatry",
          year: 2005,
          doi: "10.1176/appi.ajp.162.4.656",
          studyType: "meta-analysis"
        },
        {
          title: "Bright light treatment of winter depression: a placebo-controlled trial",
          authors: "Lam, R.W. et al.",
          journal: "Archives of General Psychiatry",
          year: 2006,
          doi: "10.1001/archpsyc.63.3.246",
          studyType: "RCT"
        }
      ]
    }
  ]
};
