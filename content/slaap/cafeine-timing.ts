import { Topic } from '@/types';

export const topic: Topic = {
  id: "S06",
  domainId: "slaap",
  title: "Cafeïne & timing",
  slug: "cafeine-timing",
  description: "Halfwaardetijd, optimale cutoff-tijd, individuele variatie",
  evidenceScore: 3,
  tags: [
    "cafeïne",
    "koffie",
    "halfwaardetijd",
    "cafeine timing",
    "slaapverstoring",
    "adenosine",
    "koffie en slaap",
    "cafeine cutoff",
    "thee",
    "energiedrank"
  ],
  crosslinks: ["V03", "B01", "V09", "B08"],
  insights: [
    {
      action: "Drink je laatste kop koffie minimaal 8 tot 10 uur voor bedtijd, dus voor 14:00 als je om 23:00 slaapt.",
      explanation: `## Mechanisme

Cafeïne werkt door de **adenosinereceptoren** in je hersenen te blokkeren. Adenosine is een stof die zich gedurende de dag opbouwt en slaperigheid veroorzaakt — dit wordt de **slaapdruk** genoemd. Door adenosine te blokkeren, voorkomt cafeïne dat je het slaapsignaal voelt. De **halfwaardetijd** van cafeïne bedraagt gemiddeld 5-6 uur, wat betekent dat na 5-6 uur nog de helft van de cafeïne in je bloed aanwezig is. Na 10-12 uur is nog steeds een kwart aanwezig.

## Impact

Een studie in het Journal of Clinical Sleep Medicine toonde aan dat 400 mg cafeïne (ongeveer 3-4 koppen koffie) ingenomen 6 uur voor bedtijd de totale slaaptijd met meer dan 1 uur verminderde. Zelfs wanneer deelnemers aangaven "geen last te hebben" van koffie 's middags, toonde objectieve slaapmetingen (polysomnografie) aan dat de diepe slaap significant was afgenomen. Dit betekent dat je de negatieve effecten van cafeïne op je slaap mogelijk niet zelf opmerkt.

## Praktische toepassing

Bereken je persoonlijke **cafeïne-cutoff-tijd**: neem je bedtijd en trek er 8-10 uur van af. Als je om 23:00 naar bed gaat, drink dan je laatste caffeïnehoudende drank voor 13:00-15:00. Denk ook aan verborgen cafeïnebronnen: zwarte thee (40-70 mg), groene thee (25-45 mg), cola (35 mg), pure chocolade (25 mg per 30 gram) en sommige pijnstillers.`,
      evidenceScore: 3,
      studyTypeSummary: "2 RCTs, 1 meta-analyse, 1 farmacokinetische studie",
      isPremium: false,
      papers: [
        {
          title: "Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed",
          authors: "Drake, C. et al.",
          journal: "Journal of Clinical Sleep Medicine",
          year: 2013,
          doi: "10.5664/jcsm.3170",
          studyType: "RCT"
        },
        {
          title: "Sleep and caffeine: implications for clinical practice",
          authors: "Clark, I., Landolt, H.P.",
          journal: "Sleep Medicine Reviews",
          year: 2017,
          doi: "10.1016/j.smrv.2016.01.006",
          studyType: "systematic review"
        },
        {
          title: "Effects of caffeine on sleep quality and daytime functioning",
          authors: "Weibel, J. et al.",
          journal: "Risk Management and Healthcare Policy",
          year: 2021,
          doi: "10.2147/RMHP.S263831",
          studyType: "review"
        }
      ]
    },
    {
      action: "Beperk je totale dagelijkse cafeïne-inname tot maximaal 400 milligram, verdeeld over de ochtend en vroege middag.",
      explanation: `## Mechanisme

De Europese Autoriteit voor Voedselveiligheid (EFSA) beschouwt **400 mg cafeïne per dag** als veilig voor de meeste volwassenen. Dit komt overeen met ongeveer 4-5 koppen filterkoffie. Hogere doses verhogen het risico op bijwerkingen zoals hartkloppingen, angst, maagklachten en — het meest relevant — slaapverstoring. Cafeïne wordt gemetaboliseerd door het **CYP1A2-enzym** in de lever. De snelheid waarmee dit gebeurt verschilt sterk per persoon.

## Impact

Genetisch onderzoek heeft aangetoond dat variaties in het **CYP1A2-gen** bepalen of je een snelle of langzame cafeïnemetaboliseerder bent. Langzame metaboliseerders (ongeveer 50% van de bevolking) hebben een effectieve halfwaardetijd tot 9 uur — voor hen is zelfs een kopje om 12:00 's middags nog merkbaar om 23:00. Een studie in Molecular Psychiatry identificeerde ook variaties in het **ADORA2A-gen** dat de gevoeligheid van de adenosinereceptoren bepaalt en verklaart waarom sommige mensen "niks merken" van koffie terwijl anderen al van een klein kopje niet kunnen slapen.

## Praktische toepassing

Houd een **cafeïne-dagboek** bij: noteer hoeveel en wanneer je cafeïne consumeert. Tel alle bronnen mee: espresso (63 mg per shot), filterkoffie (95 mg per kop), thee, cola, energiedranken en chocolade. Als je slaapproblemen hebt, experimenteer dan met het verlagen van je dagdosis of het verschuiven naar eerdere tijdstippen. Zwangere vrouwen wordt aangeraden maximaal 200 mg per dag te nemen.`,
      evidenceScore: 3,
      studyTypeSummary: "1 GWAS, 2 systematische reviews",
      isPremium: false,
      papers: [
        {
          title: "The genetics of caffeine consumption and responses to caffeine",
          authors: "Yang, A., Palmer, A.A., de Wit, H.",
          journal: "Psychopharmacology",
          year: 2010,
          doi: "10.1007/s00213-010-1900-1",
          studyType: "review"
        },
        {
          title: "Genome-wide meta-analysis identifies six novel loci associated with habitual coffee consumption",
          authors: "Cornelis, M.C. et al.",
          journal: "Molecular Psychiatry",
          year: 2015,
          doi: "10.1038/mp.2014.107",
          studyType: "GWAS"
        }
      ]
    },
    {
      action: "Wacht 90 tot 120 minuten na het opstaan met je eerste kop koffie om het cortisolritme niet te verstoren.",
      explanation: `## Mechanisme

Direct na het opstaan maakt je lichaam een natuurlijke piek in **cortisol** aan — de zogenaamde **cortisol awakening response** (CAR). Deze cortisolpiek helpt je wakker en alert te worden. Wanneer je op dit moment cafeïne neemt, versterkt dit het cortisol niet maar bouwt je lichaam juist een hogere **tolerantie** op voor cafeïne. Bovendien kan de combinatie van hoog cortisol en cafeïne leiden tot verhoogde angstgevoelens en nervositeit. Door 90-120 minuten te wachten, neem je cafeïne op het moment dat je cortisol begint te dalen.

## Impact

Hoewel dit advies populair is geworden via neurowetenschapper Andrew Huberman, is het directe wetenschappelijke bewijs specifiek voor het uitstellen van koffie na opstaan beperkt. Wat wel goed onderbouwd is: de cortisol awakening response piekt 30-45 minuten na het ontwaken en keert daarna terug naar baseline. Studies in Psychoneuroendocrinology bevestigen dat cafeïne het cortisol significant verhoogt, en dat regelmatig gebruik op cortisolpiekmomenten bijdraagt aan gewenning, waardoor je steeds meer koffie nodig hebt voor hetzelfde effect.

## Praktische toepassing

Stel je eerste kop koffie uit tot **90-120 minuten** na het opstaan. Drink eerst een groot glas water om te rehydrateren na de nacht. Als je direct alertheid nodig hebt, gebruik dan ochtendlicht en een korte wandeling als natuurlijke energieboost. Sommige mensen ervaren een dip in energie als ze hun ochtenddkoffie overslaan — dit is vaak een ontwenningssymptoom dat na een paar dagen verdwijnt.`,
      evidenceScore: 2,
      studyTypeSummary: "1 RCT, 2 observationele studies",
      isPremium: false,
      papers: [
        {
          title: "Cortisol awakening response and psychosocial factors: a systematic review and meta-analysis",
          authors: "Chida, Y., Steptoe, A.",
          journal: "Biological Psychology",
          year: 2009,
          doi: "10.1016/j.biopsycho.2008.10.004",
          studyType: "meta-analysis"
        },
        {
          title: "Effects of caffeine on the human circadian clock in vivo and in vitro",
          authors: "Burke, T.M. et al.",
          journal: "Science Translational Medicine",
          year: 2015,
          doi: "10.1126/scitranslmed.aac5125",
          studyType: "experimental"
        },
        {
          title: "Caffeine stimulation of cortisol secretion across the waking hours in relation to caffeine intake levels",
          authors: "Lovallo, W.R. et al.",
          journal: "Psychosomatic Medicine",
          year: 2005,
          doi: "10.1097/01.psy.0000170341.88727.2c",
          studyType: "experimental"
        }
      ]
    }
  ]
};
