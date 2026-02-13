import { Topic } from '@/types';

export const topic: Topic = {
  id: "S10",
  domainId: "slaap",
  title: "Slaapstoornissen",
  slug: "slaapstoornissen",
  description: "Herkennen van insomnie, slaapapneu; wanneer naar arts",
  evidenceScore: 3,
  tags: [
    "slaapstoornissen",
    "insomnie",
    "slaapapneu",
    "slapeloosheid",
    "snurken",
    "restless legs",
    "CGT-I",
    "slaaponderzoek",
    "slaapkliniek",
    "obstructief"
  ],
  crosslinks: ["B02", "V01", "B10", "V08"],
  insights: [
    {
      action: "Herken insomnie aan drie signalen: moeite met inslapen, nachtelijk wakker worden en niet-herstellende slaap, langer dan drie maanden.",
      explanation: `## Mechanisme

**Chronische insomnie** wordt klinisch gedefinieerd als slaapproblemen die minstens **3 nachten per week** voorkomen gedurende **3 maanden of langer**, ondanks voldoende gelegenheid om te slapen. Het is de meest voorkomende slaapstoornis en treft 10-15% van de volwassen bevolking. Insomnie wordt vaak in stand gehouden door een vicieuze cirkel: slaapproblemen leiden tot angst over slapen, wat leidt tot hyperarousal (overactivatie van het zenuwstelsel), wat de slaapproblemen verergert. Dit staat bekend als het **3P-model**: predisposing, precipitating en perpetuating factors.

## Impact

Chronische insomnie verhoogt het risico op depressie (met factor 2-3), angststoornissen, hart- en vaatziekten en verminderde werkprestaties. Een Lancet-studie schatte de totale economische kosten van insomnie in Nederland op miljarden euro's per jaar door verminderde productiviteit en ziekteverzuim. Belangrijk: slaapmedicatie (benzodiazepinen, z-drugs) is geen langetermijnoplossing en wordt afgeraden voor chronisch gebruik vanwege afhankelijkheidsrisico en bijwerkingen.

## Praktische toepassing

Herken de drie kernsymptomen: (1) meer dan 30 minuten nodig om in te slapen, (2) nachtelijk wakker worden met moeite om weer in slaap te vallen, (3) te vroeg wakker worden of niet-herstellende slaap. Als deze klachten langer dan 3 maanden duren, maak een afspraak met je huisarts. Vraag specifiek naar **CGT-I** — dit is effectiever dan medicatie en heeft geen bijwerkingen.`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 2 klinische richtlijnen",
      isPremium: false,
      papers: [
        {
          title: "Insomnia disorder",
          authors: "Morin, C.M., Benca, R.",
          journal: "The Lancet",
          year: 2012,
          doi: "10.1016/S0140-6736(11)60750-2",
          studyType: "review"
        },
        {
          title: "European guideline for the diagnosis and treatment of insomnia",
          authors: "Riemann, D. et al.",
          journal: "Journal of Sleep Research",
          year: 2017,
          doi: "10.1111/jsr.12594",
          studyType: "clinical guideline"
        },
        {
          title: "Cognitive behavioral therapy for chronic insomnia: a systematic review and meta-analysis",
          authors: "Trauer, J.M. et al.",
          journal: "Annals of Internal Medicine",
          year: 2015,
          doi: "10.7326/M14-2841",
          studyType: "meta-analysis"
        }
      ]
    },
    {
      action: "Laat je testen op slaapapneu als je snurkt, overdag extreem moe bent of je partner ademstops bij je waarneemt.",
      explanation: `## Mechanisme

**Obstructieve slaapapneu** (OSA) is een aandoening waarbij de bovenste luchtwegen tijdens de slaap herhaaldelijk gedeeltelijk of volledig dichtklappen. Dit veroorzaakt ademstops (apneus) van 10 seconden of langer, soms tientallen keren per uur. Elke ademstop leidt tot een korte, vaak onbewuste ontwaking waardoor de luchtweg weer opengaat. Het gevolg is ernstig gefragmenteerde slaap, zuurstoftekort en een enorme belasting voor het cardiovasculaire systeem. OSA treft naar schatting **4-7% van de mannen** en **2-5% van de vrouwen**, maar wordt bij meer dan 80% van de gevallen niet gediagnosticeerd.

## Impact

Onbehandelde slaapapneu verhoogt het risico op **hoge bloeddruk** (factor 2-3), beroerte (factor 2-4), hartfalen, diabetes type 2, verkeersongevallen (factor 2-7) en vroegtijdig overlijden. Een studie in The Lancet Respiratory Medicine toonde aan dat behandeling met CPAP (continue positieve luchtwegdruk) de bloeddruk significant verlaagde, de slaapkwaliteit verbeterde en het risico op cardiovasculaire events verminderde.

## Praktische toepassing

Let op deze waarschuwingssignalen: **luid snurken**, ademstops tijdens slaap (door partner opgemerkt), extreme vermoeidheid overdag ondanks voldoende slaaptijd, ochtenddhoofpijn, droge mond bij het ontwaken en concentratieproblemen. Risicofactoren zijn: overgewicht (BMI >30), mannelijk geslacht, leeftijd >50, grote nekomtrek (>43 cm bij mannen). Neem contact op met je huisarts voor een verwijzing naar een slaapcentrum voor een **polysomnografie** (slaaponderzoek).`,
      evidenceScore: 3,
      studyTypeSummary: "2 meta-analyses, 2 klinische richtlijnen",
      isPremium: false,
      papers: [
        {
          title: "Obstructive sleep apnoea",
          authors: "Lévy, P. et al.",
          journal: "Nature Reviews Disease Primers",
          year: 2015,
          doi: "10.1038/nrdp.2015.15",
          studyType: "review"
        },
        {
          title: "Estimation of the clinically diagnosed proportion of sleep apnea syndrome in middle-aged men and women",
          authors: "Young, T., Evans, L., Finn, L., Palta, M.",
          journal: "Sleep",
          year: 1997,
          doi: "10.1093/sleep/20.9.705",
          studyType: "epidemiological"
        },
        {
          title: "CPAP for prevention of cardiovascular events in obstructive sleep apnea",
          authors: "McEvoy, R.D. et al.",
          journal: "New England Journal of Medicine",
          year: 2016,
          doi: "10.1056/NEJMoa1606599",
          studyType: "RCT"
        }
      ]
    },
    {
      action: "Kies voor cognitieve gedragstherapie voor insomnie als eerste behandeling, want CGT-I is effectiever dan slaapmedicatie.",
      explanation: `## Mechanisme

**CGT-I** (Cognitieve Gedragstherapie voor Insomnie) is een gestructureerde behandeling die de gedragsmatige en cognitieve factoren aanpakt die insomnie in stand houden. De behandeling bestaat uit vijf componenten: (1) **slaapeducatie**, (2) **stimuluscontrole** (bed alleen voor slapen), (3) **slaaprestrictie** (beperken van tijd in bed), (4) **ontspanningstechnieken** en (5) **cognitieve herstructurering** (veranderen van negatieve gedachten over slaap). De behandeling duurt doorgaans 6-8 sessies.

## Impact

CGT-I wordt door internationale richtlijnen aanbevolen als **eerstelijnsbehandeling** voor chronische insomnie — vóór medicatie. Een meta-analyse in Annals of Internal Medicine toonde aan dat CGT-I de inslaaptijd met gemiddeld 19 minuten verkort, de nachtelijke wake-tijd met 26 minuten vermindert en de slaapefficiëntie met 10% verbetert. In tegenstelling tot slaapmedicatie houdt het effect van CGT-I aan na het beëindigen van de behandeling. Digitale vormen van CGT-I (via apps of online) zijn ook effectief gebleken.

## Praktische toepassing

Vraag je huisarts om een verwijzing naar een **GGZ-psycholoog** of slaaptherapeut die getraind is in CGT-I. In Nederland bieden ook sommige slaapcentra deze behandeling aan. Als wachtlijsten lang zijn, overweeg dan een **digitale CGT-I-programma** zoals Slaapmethode of een Engelse variant zoals Sleepstation of Insomnia Coach. De behandeling vraagt discipline (slaaprestrictie kan de eerste weken vermoeiend zijn), maar de resultaten zijn duurzaam.`,
      evidenceScore: 3,
      studyTypeSummary: "3 meta-analyses, 2 klinische richtlijnen",
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
          title: "Digital cognitive behavioural therapy for insomnia versus sleep hygiene education: the impact of improved sleep on functional health, quality of life and psychological well-being",
          authors: "Espie, C.A. et al.",
          journal: "Sleep Medicine",
          year: 2019,
          doi: "10.1016/j.sleep.2018.08.010",
          studyType: "RCT"
        },
        {
          title: "Clinical practice guideline for the pharmacologic treatment of chronic insomnia in adults",
          authors: "Sateia, M.J. et al.",
          journal: "Journal of Clinical Sleep Medicine",
          year: 2017,
          doi: "10.5664/jcsm.6470",
          studyType: "clinical guideline"
        }
      ]
    },
    {
      action: "Raadpleeg een arts als je regelmatig onrustige benen ervaart voor het slapengaan, want dit kan wijzen op restless legs syndroom.",
      explanation: `## Mechanisme

**Restless Legs Syndroom** (RLS), ook wel het syndroom van Willis-Ekbom genoemd, is een neurologische aandoening die wordt gekenmerkt door een onweerstaanbare drang om de benen te bewegen, vaak vergezeld van onaangename sensaties (kriebelen, trekken, branden). De symptomen treden vooral op in rust en 's avonds, waardoor ze het inslapen ernstig kunnen verstoren. De exacte oorzaak is niet volledig begrepen, maar **ijzertekort** en verstoorde **dopaminesignalering** in de hersenen spelen een centrale rol.

## Impact

RLS treft 5-10% van de volwassenen, waarvan 2-3% matige tot ernstige klachten heeft. Een studie in Sleep Medicine Reviews toonde aan dat RLS de inslaaptijd met gemiddeld 30-60 minuten verlengt en de totale slaaptijd met 1-2 uur verkort. RLS is ook geassocieerd met een verhoogd risico op depressie, angst en verminderde levenskwaliteit. Bij 25% van de patiënten is een behandelbaar **ijzertekort** de onderliggende oorzaak. Dopamine-agonisten en alfa-2-delta liganden zijn effectieve medicamenteuze behandelingen.

## Praktische toepassing

Herken de vier diagnostische criteria: (1) drang om de benen te bewegen, vaak met onaangename sensaties, (2) symptomen beginnen of verergeren in rust, (3) verlichting door bewegen, (4) symptomen zijn erger in de avond of nacht. Als je deze klachten herkent, maak een afspraak met je huisarts. Vraag om een **bloedonderzoek** (ferritine, ijzer, transferrineverzadiging) — ferritine onder 50 μg/L kan RLS veroorzaken of verergeren, zelfs als je technisch geen bloedarmoede hebt. IJzersuppletie kan dan al aanzienlijke verbetering geven.`,
      evidenceScore: 2,
      studyTypeSummary: "1 meta-analyse, 1 klinische richtlijn, 2 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Restless legs syndrome: diagnostic criteria, special considerations, and epidemiology",
          authors: "Allen, R.P. et al.",
          journal: "Sleep Medicine",
          year: 2003,
          doi: "10.1016/S1389-9457(03)00012-X",
          studyType: "consensus"
        },
        {
          title: "Evidence-based and consensus clinical practice guidelines for the iron treatment of restless legs syndrome/Willis-Ekbom disease in adults and children",
          authors: "Allen, R.P. et al.",
          journal: "Sleep Medicine",
          year: 2018,
          doi: "10.1016/j.sleep.2017.11.1126",
          studyType: "clinical guideline"
        },
        {
          title: "Restless legs syndrome/Willis-Ekbom disease: new diagnostic criteria, new treatment approaches",
          authors: "Trenkwalder, C. et al.",
          journal: "The Lancet Neurology",
          year: 2018,
          doi: "10.1016/S1474-4422(18)30139-7",
          studyType: "review"
        }
      ]
    }
  ]
};
