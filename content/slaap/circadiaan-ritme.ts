import { Topic } from '@/types';

export const topic: Topic = {
  id: "S03",
  domainId: "slaap",
  title: "Circadiaan ritme",
  slug: "circadiaan-ritme",
  description: "De biologische klok: hoe het werkt, hoe je het synchroniseert",
  evidenceScore: 3,
  tags: [
    "circadiaan ritme",
    "biologische klok",
    "chronotype",
    "slaap-waakritme",
    "suprachiasmatische nucleus",
    "jetlag",
    "ochtendmens",
    "avondmens",
    "zeitgeber"
  ],
  crosslinks: ["B01", "V02", "V08", "B05"],
  insights: [
    {
      action: "Ontdek je chronotype en plan je slaaptijden daarop: ochtendmensen slapen 22:00-06:00, avondmensen 00:00-08:00.",
      explanation: `## Mechanisme

Je **chronotype** wordt grotendeels bepaald door genetica en beïnvloedt wanneer je lichaam van nature het meest alert is en wanneer het slaap nodig heeft. De belangrijkste genen die hierbij betrokken zijn, zijn **PER2**, **PER3** en **CLOCK**. Er zijn globaal vier chronotypes: vroege ochtendmensen (leeuwen), gematigde ochtendmensen (beren), avondmensen (wolven) en variabele slapers (dolfijnen). Tegen je chronotype in gaan werken leidt tot **social jetlag** — een chronische mismatch tussen je biologische klok en je sociale verplichtingen.

## Impact

Een grootschalige studie onder 400.000 deelnemers uit de UK Biobank toonde aan dat mensen die hun slaaptijden afstemmen op hun chronotype significant minder last hadden van depressie, vermoeidheid en metabole stoornissen. Social jetlag van meer dan 2 uur is geassocieerd met een 11% hoger risico op hart- en vaatziekten. Het respecteren van je chronotype verbetert niet alleen je slaap, maar ook je cognitieve prestaties overdag.

## Praktische toepassing

Vul een gevalideerde chronotype-vragenlijst in, zoals de **Morningness-Eveningness Questionnaire** (MEQ). Plan je slaaptijden op basis van je resultaat. Als je een avondmens bent maar vroeg moet werken, verschuif je ritme dan geleidelijk (15 minuten per dag) richting een eerder slaaptijdstip. Gebruik ochtendlicht om je ritme naar voren te schuiven.`,
      evidenceScore: 3,
      studyTypeSummary: "1 genoomstudie, 2 cohortstudies, 1 RCT",
      isPremium: false,
      papers: [
        {
          title: "Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms",
          authors: "Jones, S.E. et al.",
          journal: "Nature Communications",
          year: 2019,
          doi: "10.1038/s41467-018-08259-7",
          studyType: "GWAS"
        },
        {
          title: "Social jetlag and obesity",
          authors: "Roenneberg, T. et al.",
          journal: "Current Biology",
          year: 2012,
          doi: "10.1016/j.cub.2012.03.038",
          studyType: "cohort"
        },
        {
          title: "Chronotype and social jetlag: a (self-)critical review",
          authors: "Roenneberg, T., Pilz, L.K., Zerbini, G., Winnebeck, E.C.",
          journal: "Biology",
          year: 2019,
          doi: "10.3390/biology8030054",
          studyType: "review"
        }
      ]
    },
    {
      action: "Eet je maaltijden elke dag op vaste tijdstippen, want voedselinname is een krachtige tijdgever voor je biologische klok.",
      explanation: `## Mechanisme

Naast licht is **voedselinname** een van de krachtigste **Zeitgebers** (tijdgevers) voor het circadiaan ritme. Je lever, darmen en andere perifere organen hebben hun eigen biologische klokken die gesynchroniseerd worden door de timing van maaltijden. Wanneer je op onregelmatige tijden eet, raken deze perifere klokken uit sync met de centrale klok in de SCN. Dit leidt tot wat wetenschappers **interne desynchronisatie** noemen.

## Impact

Onderzoek toont aan dat onregelmatige maaltijdtijden de glucosetolerantie verminderen en het risico op insulineresistentie verhogen. Een studie in Cell Metabolism demonstreerde dat tijdsbeperkt eten (time-restricted eating), waarbij alle maaltijden binnen een venster van 10-12 uur worden geconsumeerd, de circadiaanse ritmiek van metabole genen verbeterde. Dit vertaalde zich in betere slaapkwaliteit, meer energie overdag en gewichtsverlies.

## Praktische toepassing

Eet je ontbijt, lunch en avondeten elke dag op vergelijkbare tijdstippen (maximaal 30 minuten variatie). Probeer je laatste maaltijd minimaal **2-3 uur** voor bedtijd te nuttigen. Een consistent eetpatroon helpt niet alleen je biologische klok, maar verbetert ook je spijsvertering en stofwisseling.`,
      evidenceScore: 2,
      studyTypeSummary: "2 RCTs, 2 observationele studies",
      isPremium: false,
      papers: [
        {
          title: "Time-restricted feeding improves circadian dysfunction as well as motor symptoms in the Q175 mouse model of Huntington's disease",
          authors: "Wang, H.B. et al.",
          journal: "eLife",
          year: 2018,
          doi: "10.7554/eLife.29953",
          studyType: "experimental"
        },
        {
          title: "Ten-hour time-restricted eating reduces weight, blood pressure, and atherogenic lipids in patients with metabolic syndrome",
          authors: "Wilkinson, M.J. et al.",
          journal: "Cell Metabolism",
          year: 2020,
          doi: "10.1016/j.cmet.2019.11.004",
          studyType: "RCT"
        },
        {
          title: "Meal timing affects glucose tolerance, substrate oxidation and circadian-related variables",
          authors: "Bandin, C. et al.",
          journal: "International Journal of Obesity",
          year: 2015,
          doi: "10.1038/ijo.2014.214",
          studyType: "RCT"
        }
      ]
    },
    {
      action: "Verschuif je slaapritme geleidelijk met maximaal 15 minuten per dag als je je ritme wilt corrigeren.",
      explanation: `## Mechanisme

Het circadiaan ritme is een traag systeem dat niet goed reageert op plotselinge veranderingen. Wanneer je probeert om in één keer 2 uur eerder naar bed te gaan, lukt dit meestal niet omdat je interne klok nog op het oude tijdstip is ingesteld. **Chronotherapie** — het geleidelijk verschuiven van slaaptijden — werkt mee met de natuurlijke flexibiliteit van het circadiaan systeem. Het systeem kan zich per dag aanpassen met ongeveer 1-2 uur als het wordt ondersteund door lichtblootstelling.

## Impact

Een studie in Sleep Medicine Reviews toonde aan dat geleidelijke verschuiving van slaaptijden gecombineerd met ochtendlichtblootstelling effectief was bij 80% van de patiënten met een vertraagd slaap-waakritme (DSWPD). De gemiddelde verschuiving was 15-30 minuten per dag. Deelnemers die hun ritme geleidelijk verschoven, hadden minder last van slaapproblemen en vermoeidheid vergeleken met degenen die een abrupte verandering probeerden.

## Praktische toepassing

Als je momenteel om 01:00 naar bed gaat maar om 23:00 wilt slapen, verschuif dan elke dag je bedtijd met 15 minuten naar voren. Ga tegelijkertijd 15 minuten eerder naar buiten voor ochtendlicht. Dit proces duurt ongeveer 8 dagen. Wees geduldig en consistent — skip geen dagen. Gebruik een slaaplogboek om je voortgang bij te houden.`,
      evidenceScore: 2,
      studyTypeSummary: "1 systematische review, 2 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Delayed sleep-wake phase disorder: a review",
          authors: "Nesbitt, A.D.",
          journal: "Journal of Thoracic Disease",
          year: 2018,
          doi: "10.21037/jtd.2018.01.11",
          studyType: "review"
        },
        {
          title: "Practical strategies for shifting the timing of sleep and wakefulness",
          authors: "Burgess, H.J., Eastman, C.I.",
          journal: "Sleep Medicine Reviews",
          year: 2009,
          doi: "10.1016/j.smrv.2008.04.001",
          studyType: "review"
        }
      ]
    }
  ]
};
