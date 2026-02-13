import { Topic } from '@/types';

export const topic: Topic = {
  id: "S09",
  domainId: "slaap",
  title: "Dutjes (napping)",
  slug: "dutjes",
  description: "Optimale duur, timing, powernaps vs. volledige cycli",
  evidenceScore: 2,
  tags: [
    "dutje",
    "powernap",
    "middagdutje",
    "napping",
    "siësta",
    "kort dutje",
    "slaapinertie",
    "middagslaap",
    "energiedip"
  ],
  crosslinks: ["B04", "V07", "B01", "V02"],
  insights: [
    {
      action: "Houd een powernap op maximaal 20 minuten om slaapinertie te voorkomen en alertheid direct te verbeteren.",
      explanation: `## Mechanisme

Een korte **powernap** van 10-20 minuten houdt je in de lichte slaapfases (N1 en N2). In N2-slaap treden **slaapspindels** op — korte uitbarstingen van hersenactiviteit die geassocieerd zijn met geheugenconsolidatie en het herstellen van alertheid. Omdat je niet in diepe slaap (N3) terechtkomt, ontwijk je **slaapinertie** — het zware, verdoofde gevoel dat optreedt wanneer je uit diepe slaap wordt gewekt. Daardoor ben je direct na het wakker worden alert en functioneel.

## Impact

Een NASA-studie bij piloten en astronauten toonde aan dat een dutje van 26 minuten de alertheid met 54% verbeterde en de cognitieve prestaties met 34%. Een meta-analyse in Sleep Medicine Reviews bevestigde dat korte dutjes (5-20 minuten) onmiddellijke voordelen bieden voor alertheid, stemming en cognitieve prestaties. Dutjes langer dan 30 minuten gaven een periode van slaapinertie (15-30 minuten) na het wakker worden, gevolgd door verbeterde prestaties.

## Praktische toepassing

Stel een wekker in op **20 minuten** (of 25 minuten als je weet dat je 5 minuten nodig hebt om in slaap te vallen). Zoek een rustige, donkere plek. Ga niet liggen als je bang bent te lang te slapen — een licht achterovergeleunde stoel werkt ook. Drink eventueel een kop koffie direct voor je dutje: de cafeïne werkt na 20-25 minuten, precies wanneer je wakker wordt (de "coffee nap").`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 3 experimentele studies",
      isPremium: false,
      papers: [
        {
          title: "The impact of napping on cognitive functioning",
          authors: "Lovato, N., Lack, L.",
          journal: "Progress in Brain Research",
          year: 2010,
          doi: "10.1016/B978-0-444-53702-7.00009-9",
          studyType: "review"
        },
        {
          title: "Alertness management: strategic naps in operational settings",
          authors: "Rosekind, M.R. et al.",
          journal: "Journal of Sleep Research",
          year: 1995,
          doi: "10.1111/j.1365-2869.1995.tb00229.x",
          studyType: "experimental"
        },
        {
          title: "A brief afternoon nap following nocturnal sleep restriction: which nap duration is most recuperative?",
          authors: "Brooks, A., Lack, L.",
          journal: "Sleep",
          year: 2006,
          doi: "10.1093/sleep/29.6.831",
          studyType: "experimental"
        }
      ]
    },
    {
      action: "Plan je dutje tussen 13:00 en 15:00 uur, tijdens de natuurlijke middagdip in alertheid.",
      explanation: `## Mechanisme

Het circadiaan ritme vertoont een natuurlijke **postprandiale dip** (na-de-lunch-dip) tussen 13:00 en 15:00. Dit is geen gevolg van de lunch zelf, maar een geprogrammeerd dal in alertheid dat wordt aangestuurd door de **suprachiasmatische nucleus**. In veel Mediterrane en Latijns-Amerikaanse culturen wordt deze biologische realiteit erkend in de vorm van de siësta. Een dutje tijdens deze dip is fysiologisch logisch en verstoort de nachtslaap het minst.

## Impact

Onderzoek toont aan dat dutjes genomen na 15:00 een groter risico vormen op het verstoren van de nachtelijke slaap. Een studie in Sleep bevestigde dat een dutje van 20 minuten om 14:00 geen meetbare impact had op de inslaaptijd 's avonds, terwijl hetzelfde dutje om 17:00 de inslaaptijd met gemiddeld 15 minuten verlengde. De middagdip in alertheid is het sterkst na een nacht met minder slaap, waardoor een strategisch dutje dan extra waardevol is.

## Praktische toepassing

Plan je dutje consistent rond **13:00-14:00**, bij voorkeur na de lunch. Als je werkt, informeer dan of er een stiltekamer beschikbaar is. Zelfs 10 minuten ogen dicht op een stoel in een rustige ruimte kan al helpen. Vermijd dutjes na 15:00 als je moeite hebt met inslapen 's avonds. Op vrije dagen is een siësta een uitstekende manier om slaapschuld gedeeltelijk in te halen.`,
      evidenceScore: 2,
      studyTypeSummary: "2 experimentele studies, 1 review",
      isPremium: false,
      papers: [
        {
          title: "Napping and human functioning during prolonged work",
          authors: "Signal, T.L. et al.",
          journal: "Journal of Sleep Research",
          year: 2009,
          doi: "10.1111/j.1365-2869.2008.00705.x",
          studyType: "experimental"
        },
        {
          title: "The post-lunch dip in performance",
          authors: "Monk, T.H.",
          journal: "Clinics in Sports Medicine",
          year: 2005,
          doi: "10.1016/j.csm.2004.12.002",
          studyType: "review"
        }
      ]
    },
    {
      action: "Combineer een espresso met een dutje van 20 minuten voor maximale alertheid: de zogenaamde 'coffee nap'.",
      explanation: `## Mechanisme

De **coffee nap** (of napaccino) combineert twee alertheid-boosters. Cafeïne heeft 20-25 minuten nodig om via de dunne darm in de bloedbaan te komen en de adenosinereceptoren in de hersenen te bereiken. Door een espresso te drinken en **direct daarna** een dutje van 20 minuten te nemen, profiteer je van twee mechanismen: het dutje ruimt adenosine op (de stof die slaperigheid veroorzaakt), en de cafeïne blokkeert de vrijgekomen receptoren zodra je wakker wordt. Het resultaat is een synergistisch effect.

## Impact

Een studie van de Loughborough University toonde aan dat de combinatie van koffie en een kort dutje significant effectiever was dan koffie alleen of een dutje alleen bij het verbeteren van rijprestaties in een simulator. Deelnemers maakten 91% minder fouten na een coffee nap vergeleken met de placebo-conditie. Een Japanse studie bevestigde deze bevindingen en toonde aan dat de coffee nap de subjectieve alertheid en het geheugen sterker verbeterde dan de afzonderlijke componenten.

## Praktische toepassing

Drink een **enkele espresso** of een klein kopje filterkoffie (snel, niet langzaam sippen). Ga direct liggen of achteroverzitten met gesloten ogen. Stel een wekker in op 20 minuten. Maak je geen zorgen als je niet echt in slaap valt — zelfs rustig liggen met gesloten ogen heeft een herstellend effect. Gebruik deze techniek niet na 14:00 vanwege het cafeïne-effect op de nachtslaap.`,
      evidenceScore: 2,
      studyTypeSummary: "3 experimentele studies",
      isPremium: false,
      papers: [
        {
          title: "Suppression of sleepiness in drivers: combination of caffeine with a short nap",
          authors: "Reyner, L.A., Horne, J.A.",
          journal: "Psychophysiology",
          year: 1997,
          doi: "10.1111/j.1469-8986.1997.tb02414.x",
          studyType: "experimental"
        },
        {
          title: "The alerting effects of caffeine, bright light and face washing after a short daytime nap",
          authors: "Hayashi, M., Masuda, A., Hori, T.",
          journal: "Clinical Neurophysiology",
          year: 2003,
          doi: "10.1016/S1388-2457(03)00255-4",
          studyType: "experimental"
        }
      ]
    },
    {
      action: "Vermijd regelmatige dutjes als je last hebt van insomnie, want ze verminderen de slaapdruk die je nodig hebt.",
      explanation: `## Mechanisme

Slaapdruk wordt opgebouwd door **adenosine**, dat zich geleidelijk ophoogt in de hersenen gedurende de dag. Hoe langer je wakker bent, hoe meer adenosine zich ophoopt en hoe slaperijker je wordt. Dit proces is essentieel voor het snel in slaap vallen 's avonds. Een dutje "reset" gedeeltelijk deze slaapdruk door adenosine af te breken. Voor mensen met insomnie, die al moeite hebben met het opbouwen van voldoende slaapdruk, kan een dutje de problemen verergeren.

## Impact

Binnen **CGT-I** (cognitieve gedragstherapie voor insomnie) is het vermijden van dutjes een standaardaanbeveling. Een studie in Behaviour Research and Therapy toonde aan dat patiënten met insomnie die stopten met middagdutjes een significante verbetering in slaapefficiëntie ervoeren (van 72% naar 85%). De slaapdruk 's avonds nam toe, waardoor ze sneller inslapen en minder nachtelijke ontwakingen hadden. Voor gezonde slapers zonder insomnie zijn korte dutjes wel gunstig.

## Praktische toepassing

Als je **insomnie** hebt (regelmatig meer dan 30 minuten nodig om in te slapen of veelvuldig nachtelijk wakker worden), vermijd dan dutjes volledig. Gebruik de extra slaapdruk om 's avonds beter in te slapen. Als je een sterke middagdip ervaart, ga dan kort naar buiten voor frisse lucht en daglicht in plaats van een dutje te nemen. Bespreek met je huisarts of CGT-I geschikt voor je is.`,
      evidenceScore: 3,
      studyTypeSummary: "1 meta-analyse, 2 RCTs",
      isPremium: false,
      papers: [
        {
          title: "Cognitive behavioral therapy for insomnia: a meta-analysis of randomized controlled trials",
          authors: "Okajima, I., Komada, Y., Inoue, Y.",
          journal: "Sleep Medicine Reviews",
          year: 2011,
          doi: "10.1016/j.smrv.2010.08.002",
          studyType: "meta-analysis"
        },
        {
          title: "Daytime napping and nighttime sleep in people with insomnia",
          authors: "Spielman, A.J., Saskin, P., Thorpy, M.J.",
          journal: "Sleep",
          year: 1987,
          doi: "10.1093/sleep/10.4.313",
          studyType: "experimental"
        }
      ]
    }
  ]
};
