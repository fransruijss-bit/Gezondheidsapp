import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best gezondheidsadvies',
  description:
    'Uitgebreid Nederlandstalig overzicht van algemeen best gezondheidsadvies met wetenschappelijke onderbouwing per pijler.',
};

type ProtocolSection = {
  title: string;
  summary: string;
  actions: string[];
};

type Study = {
  domain: string;
  finding: string;
  citation: string;
};

const sections: ProtocolSection[] = [
  {
    title: '1) Slaap als primaire herstelinterventie',
    summary:
      'Dit advies behandelt slaap als de hoogste prioriteit: consistente bedtijden, vroeg ochtendlicht, beperking van laat kunstlicht en een koele, donkere slaapkamer.',
    actions: [
      'Hanteer een vast slaapvenster met dezelfde bed- en wektijden, ook in het weekend.',
      'Pak binnen 30-60 minuten na opstaan natuurlijk daglicht om je circadiane klok te verankeren.',
      'Beperk fel/ blauw-licht in de avond en houd cafeïne vroeg op de dag.',
      'Optimaliseer slaapkamer: donker, stil, koel en zonder digitale prikkels in het laatste uur.',
    ],
  },
  {
    title: '2) Voeding: hoog in nutriëntdichtheid, laag in ultrabewerking',
    summary:
      'De voedingsstructuur in dit advies is sterk gestuurd op plantaardige volwaardige voeding, gecontroleerde energie-inname, timing en metabole gezondheid.',
    actions: [
      'Gebruik een vaste voedingsroutine met nadruk op peulvruchten, groenten, noten, zaden en bessen.',
      'Vermijd ultrabewerkt voedsel en vloeibare calorieën zoveel mogelijk.',
      'Borg voldoende eiwit en vezels per dag voor behoud van spiermassa en glucoseregulatie.',
      'Plan de laatste grote maaltijd ruim voor de slaap om postprandiale verstoring te beperken.',
    ],
  },
  {
    title: '3) Beweging: dagelijks, geperiodiseerd en meetbaar',
    summary:
      'Binnen dit advies wordt training niet alleen op prestatie, maar ook op levensduur gemonitord: kracht, cardio, mobiliteit en herstelstatus.',
    actions: [
      'Combineer 2-4 krachtprikkels per week met aerobe training in zone 2 en korte intensieve intervallen.',
      'Bouw dagelijkse beweegminuten in (stappen, wandelen na maaltijden, trapgebruik).',
      'Monitor herstelindicatoren zoals rusthartslag, HRV en slaapkwaliteit.',
      'Verhoog trainingsbelasting progressief en voorkom chronische vermoeidheidsopbouw.',
    ],
  },
  {
    title: '4) Supplementen en medicatie: data-gedreven, niet blind stapelen',
    summary:
      'Praktisch advies rondom supplementen moet data-gedreven zijn. De wetenschappelijke kwaliteit verschilt echter sterk per component.',
    actions: [
      'Behandel supplementen als hypothese: eerst voeding, slaap en beweging op orde, daarna gericht toevoegen.',
      'Prioriteer interventies met consistente humane uitkomstdata (bv. omega-3 bij lage inname, vitamine D bij tekort).',
      'Gebruik laboratoriumwaarden en medische begeleiding voor dosering en veiligheid.',
      'Evalueer periodiek effect, bijwerkingen en interacties met bestaande medicatie.',
    ],
  },
  {
    title: '5) Metingen, biomarkers en preventieve screening',
    summary:
      'Een kernonderdeel van best gezondheidsadvies is continue feedback via bloedwaarden, lichaamssamenstelling, slaap- en activiteitsdata.',
    actions: [
      'Werk met een vaste meetcyclus: bloeddruk, nuchtere glucose/HbA1c, lipiden, nier- en levermarkers.',
      'Gebruik wearables voor trends, niet voor absolute perfectie van elke meting.',
      'Koppel metingen aan concrete beslisregels: wat verander je bij afwijking?',
      'Voorkom overmeten: kies eerst de biomarkers met klinische relevantie en hoge reproduceerbaarheid.',
    ],
  },
  {
    title: '6) Omgeving, gedrag en stressregulatie',
    summary:
      'Naast voeding en training legt dit advies nadruk op mondzorg, huidzorg, luchtkwaliteit, stresscontrole en gedragsconsistentie.',
    actions: [
      'Structureer je dag met vaste routines om beslissingsmoeheid en gedragsruis te verlagen.',
      'Beperk alcohol en nicotine vanwege brede negatieve effecten op slaap, cardiovasculaire en neurologische gezondheid.',
      'Ondersteun stressmanagement met ademhaling, mindfulness of lage-intensiteit buitenactiviteiten.',
      'Neem mond- en huidgezondheid op in je preventieve routine, omdat dit samenhangt met systemische uitkomsten.',
    ],
  },
];

const studies: Study[] = [
  {
    domain: 'Slaap',
    finding: 'Consistente slaapduur en kwaliteit hangen samen met lagere cardiometabole en cognitieve risico’s.',
    citation:
      'Cappuccio et al. Sleep duration and all-cause mortality. Sleep, 2010. DOI: 10.1093/sleep/33.5.585',
  },
  {
    domain: 'Circadiaan',
    finding: 'Lichttiming is een krachtige regulator van circadiane fase en slaap-waakritme.',
    citation:
      'Khalsa et al. A phase response curve to single bright light pulses in human subjects. J Physiol, 2003. DOI: 10.1113/jphysiol.2003.040477',
  },
  {
    domain: 'Voeding',
    finding: 'Mediterrane/plantaardig georiënteerde patronen verbeteren cardiometabole uitkomsten.',
    citation:
      'Estruch et al. Primary prevention of cardiovascular disease with a Mediterranean diet. NEJM, 2018. DOI: 10.1056/NEJMoa1800389',
  },
  {
    domain: 'Ultrabewerkt',
    finding: 'Hogere inname van ultrabewerkt voedsel is geassocieerd met hogere mortaliteit en chronische ziekterisico’s.',
    citation:
      'Srour et al. Ultra-processed food intake and risk of cardiovascular disease. BMJ, 2019. DOI: 10.1136/bmj.l1451',
  },
  {
    domain: 'Krachttraining',
    finding: 'Spierversterkende activiteit hangt samen met lagere all-cause mortality.',
    citation:
      'Momma et al. Muscle-strengthening activities and mortality: systematic review and meta-analysis. Br J Sports Med, 2022. DOI: 10.1136/bjsports-2021-105061',
  },
  {
    domain: 'Cardio',
    finding: 'Aerobe fitheid en regelmatige activiteit reduceren cardiovasculaire en mortaliteitsrisico’s.',
    citation:
      'Piercy et al. Physical Activity Guidelines for Americans. JAMA, 2018. DOI: 10.1001/jama.2018.14854',
  },
  {
    domain: 'Supplementen',
    finding: 'Suppletie werkt vooral bij tekorten of specifieke indicaties; effect verschilt sterk per stof.',
    citation:
      'Jolliffe et al. Vitamin D supplementation to prevent acute respiratory infections: meta-analysis. Lancet Diabetes Endocrinol, 2021. DOI: 10.1016/S2213-8587(21)00051-6',
  },
  {
    domain: 'Monitoring',
    finding: 'Gebruik van thuismetingen en risicofactor-screening verbetert vroegtijdige detectie en preventie.',
    citation:
      'Whelton et al. 2017 ACC/AHA guideline for high blood pressure in adults. Hypertension, 2018. DOI: 10.1161/HYP.0000000000000065',
  },
];

export default function GezondheidsadviesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-medium text-gray-500">✅ Algemeen best gezondheidsadvies</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Uitgebreide samenvatting van best gezondheidsadvies met wetenschappelijke onderbouwing
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Deze pagina vertaalt de hoofdonderdelen van algemeen best gezondheidsadvies naar praktische acties in het Nederlands.
          Omdat individuele context (leeftijd, aandoeningen, medicatie, trainingsstatus) uitmaakt, zijn alle onderdelen gekoppeld
          aan wetenschappelijke evidence in plaats van als universeel voorschrift gepresenteerd.
        </p>
      </header>

      <section className="grid gap-4">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            <p className="mt-2 text-gray-600">{section.summary}</p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              {section.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Wetenschappelijke basis (selectie)</h2>
        <p className="text-gray-600 mt-2">
          Onderstaande studies ondersteunen de belangrijkste pijlers van best gezondheidsadvies. Dit is een geselecteerde kernset en geen uitputtende lijst.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-200 text-gray-500">
                <th className="py-2 pr-4">Domein</th>
                <th className="py-2 pr-4">Belangrijkste bevinding</th>
                <th className="py-2">Referentie</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((study) => (
                <tr key={study.citation} className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-4 font-medium text-gray-900">{study.domain}</td>
                  <td className="py-3 pr-4 text-gray-700">{study.finding}</td>
                  <td className="py-3 text-gray-600">{study.citation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-900">
        <strong>Belangrijk:</strong> dit overzicht is educatief en vervangt geen medische diagnostiek of behandeladvies.
        Overleg met een arts of klinisch deskundige voordat je intensieve dieet-, trainings-, supplement- of medicatie-aanpassingen doet.
      </section>
    </div>
  );
}
