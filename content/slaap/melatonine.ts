import { Topic } from '@/types';

export const topic: Topic = {
  id: "S07",
  domainId: "slaap",
  title: "Melatonine",
  slug: "melatonine",
  description: "Werking, dosering, timing, wanneer wel/niet gebruiken",
  evidenceScore: 2,
  tags: [
    "melatonine",
    "slaaphormoon",
    "melatonine supplement",
    "dosering melatonine",
    "melatonine timing",
    "pijnappelklier",
    "slaapsupplement",
    "jetlag melatonine"
  ],
  crosslinks: ["V05", "B03", "V10", "B06"],
  insights: [
    {
      action: "Neem melatonine in een lage dosis van 0,3 tot 0,5 milligram, 30 tot 60 minuten voor je gewenste bedtijd.",
      explanation: `## Mechanisme

Melatonine is een hormoon dat natuurlijk wordt geproduceerd door de **pijnappelklier** (epifyse) in je hersenen als reactie op duisternis. Het dient als een tijdsignaal voor je lichaam: het zegt niet "ga slapen", maar "het is nu nacht". Exogeen melatonine (als supplement) kan dit signaal versterken of vervroegen. Belangrijk: de meeste supplementen op de markt bevatten **veel hogere doses** (3-10 mg) dan je lichaam zelf produceert (0,1-0,3 mg piek). Hogere doses zijn niet effectiever en kunnen zelfs averechts werken.

## Impact

Een meta-analyse in PLOS ONE analyseerde 19 studies en concludeerde dat melatonine de inslaaptijd met gemiddeld 7 minuten verkort en de totale slaaptijd met 8 minuten verlengt. Het effect is bescheiden maar consistent. Belangrijk: een MIT-studie toonde aan dat doses van **0,3 mg** net zo effectief waren als doses van 3 mg, maar met minder bijwerkingen (geen ochtendslaperigheid). Hogere doses kunnen de melatoninereceptoren desensitiseren, waardoor het supplement na verloop van tijd minder goed werkt.

## Praktische toepassing

Kies een melatoninesupplement met een lage dosis: **0,3-0,5 mg**. Neem het 30-60 minuten voor je gewenste bedtijd. Gebruik melatonine niet dagelijks als structurele oplossing, maar als tijdelijke ondersteuning bij jetlag, ploegendienst of het verschuiven van je slaapritme. Bespreek langdurig gebruik met je huisarts. In Nederland is melatonine zonder recept verkrijgbaar in doses tot 0,3 mg.`,
      evidenceScore: 2,
      studyTypeSummary: "2 meta-analyses, 3 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Meta-analysis: melatonin for the treatment of primary sleep disorders",
          authors: "Ferracioli-Oda, E., Qawasmi, A., Bloch, M.H.",
          journal: "PLOS ONE",
          year: 2013,
          doi: "10.1371/journal.pone.0063773",
          studyType: "meta-analysis"
        },
        {
          title: "Physiological doses of melatonin restore sleep in the alert squirrel monkey",
          authors: "Zhdanova, I.V. et al.",
          journal: "Journal of Clinical Endocrinology & Metabolism",
          year: 1997,
          doi: "10.1210/jcem.82.10.4323",
          studyType: "experimental"
        },
        {
          title: "Low-dose melatonin improves sleep in healthy middle-aged subjects",
          authors: "Zhdanova, I.V. et al.",
          journal: "Sleep",
          year: 2001,
          doi: "10.1093/sleep/24.1.15",
          studyType: "RCT"
        }
      ]
    },
    {
      action: "Gebruik melatonine bij jetlag: neem 0,5 milligram op de gewenste lokale bedtijd van je bestemming.",
      explanation: `## Mechanisme

Bij jetlag is je circadiaan ritme niet gesynchroniseerd met de lokale tijd. Melatonine kan als **chronobioticum** (tijdverschuiver) fungeren: het verschuift je biologische klok naar een nieuw tijdstip. Wanneer je melatonine inneemt op het gewenste lokale bedtijdstip, interpreteert je SCN dit als een duisternis-signaal, waardoor je klok geleidelijk verschuift. Het effect is het sterkst bij reizen over 5 of meer tijdzones en bij reizen naar het oosten (waar je je klok moet vervroegen).

## Impact

Een Cochrane-review analyseerde 10 studies met in totaal meer dan 1.000 deelnemers en concludeerde dat melatonine **opmerkelijk effectief** is bij het voorkomen of verminderen van jetlag. Het verminderde de subjectieve jetlag-scores significant, vooral bij oostwaartse reizen over 5 of meer tijdzones. De optimale dosis was 0,5-5 mg, genomen op de avond van aankomst en de volgende 2-4 avonden. Hogere doses (5 mg) werkten niet sneller dan lagere doses (0,5 mg).

## Praktische toepassing

**Oostwaarts reizen**: neem 0,5 mg melatonine op de gewenste lokale bedtijd, te beginnen op de avond van aankomst. Ga ook naar buiten in het ochtendlicht op je bestemming. **Westwaarts reizen**: de aanpassing is meestal gemakkelijker; gebruik melatonine alleen als je moeite hebt om tot de lokale bedtijd wakker te blijven. Neem melatonine maximaal 4-5 avonden achtereen.`,
      evidenceScore: 3,
      studyTypeSummary: "1 Cochrane-review, 2 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Melatonin for the prevention and treatment of jet lag",
          authors: "Herxheimer, A., Petrie, K.J.",
          journal: "Cochrane Database of Systematic Reviews",
          year: 2002,
          doi: "10.1002/14651858.CD001520",
          studyType: "Cochrane review"
        },
        {
          title: "How to travel the world without jet lag",
          authors: "Eastman, C.I., Burgess, H.J.",
          journal: "Sleep Medicine Clinics",
          year: 2009,
          doi: "10.1016/j.jsmc.2009.02.006",
          studyType: "review"
        }
      ]
    },
    {
      action: "Vermijd melatonine bij kinderen zonder medisch advies en gebruik het niet als vervanging voor goede slaaphygiëne.",
      explanation: `## Mechanisme

Melatonine is een **hormoon**, geen onschuldig voedingssupplement. Bij kinderen en adolescenten is het melatoninesysteem nog in ontwikkeling. De pijnappelklier produceert bij kinderen al aanzienlijk meer melatonine dan bij volwassenen, waardoor extra melatonine minder nodig en potentieel verstorend is. Bovendien zijn er zorgen over mogelijke effecten op de **puberteitsontwikkeling**, aangezien melatonine interacteert met het systeem dat geslachtshormonen reguleert.

## Impact

De Nederlandse Gezondheidsraad en het Kinderformularium adviseren terughoudendheid bij het gebruik van melatonine bij kinderen. Een review in Journal of Paediatrics and Child Health stelde dat hoewel melatonine op korte termijn veilig lijkt bij kinderen met slaapproblemen (met name bij ADHD en autisme), er onvoldoende gegevens zijn over langetermijneffecten. Voor volwassenen geldt dat melatonine geen vervanging is voor slaaphygiëne — het pakt de oorzaak van slaapproblemen niet aan.

## Praktische toepassing

Werk eerst aan de basis: **slaaphygiëne, lichtblootstelling, temperatuur, cafeïnebeperking en consistente slaaptijden**. Als deze maatregelen onvoldoende helpen, bespreek dan met je huisarts of melatonine geschikt is. Bij kinderen: raadpleeg altijd een kinderarts. Als melatonine wordt voorgeschreven, gebruik dan de laagst mogelijke dosis en evalueer regelmatig of het nog nodig is.`,
      evidenceScore: 2,
      studyTypeSummary: "2 systematische reviews, 1 richtlijn",
      isPremium: false,
      papers: [
        {
          title: "Melatonin for sleep in children with autism: a controlled trial examining dose, tolerability, and outcomes",
          authors: "Malow, B.A. et al.",
          journal: "Journal of Autism and Developmental Disorders",
          year: 2012,
          doi: "10.1007/s10803-011-1418-3",
          studyType: "RCT"
        },
        {
          title: "Use of melatonin for children and adolescents: a systematic review and meta-analysis",
          authors: "Wei, S. et al.",
          journal: "Journal of Pineal Research",
          year: 2020,
          doi: "10.1111/jpi.12642",
          studyType: "meta-analysis"
        },
        {
          title: "Melatonin for the management of sleep disorders in children and adolescents",
          authors: "Bruni, O. et al.",
          journal: "Journal of Paediatrics and Child Health",
          year: 2015,
          doi: "10.1111/jpc.12840",
          studyType: "review"
        }
      ]
    }
  ]
};
