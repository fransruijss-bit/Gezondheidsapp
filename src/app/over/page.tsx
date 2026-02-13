import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Over & Methodologie',
  description: 'Leer meer over de Gezondheidsencyclopedie, onze methodologie en het evidence-classificatiesysteem.',
};

export default function OverPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Over & Methodologie' }]} />

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Over de Gezondheidsencyclopedie
      </h1>

      <div className="prose-content text-gray-700 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Wat is dit?</h2>
          <p>
            De Gezondheidsencyclopedie is een wetenschappelijk onderbouwd naslagwerk
            dat complexe gezondheidskennis toegankelijk maakt. We richten ons op drie
            domeinen: slaap, voeding en beweging.
          </p>
          <p>
            Elk onderwerp is opgebouwd uit drie lagen: een directe actie die je vandaag
            kunt toepassen, een begrijpelijke uitleg van het mechanisme, en de
            wetenschappelijke bronnen waar het op gebaseerd is.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ons drielagenmodel</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">Laag 1 — De Actie</h3>
              <p className="text-sm text-blue-800">
                Eén zin, maximaal 30 woorden. Direct toepasbaar advies dat begint
                met een werkwoord. Geen jargon, wel specifiek.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Laag 2 — De Uitleg</h3>
              <p className="text-sm text-green-800">
                In 2-3 minuten leestijd leggen we uit wat er in je lichaam gebeurt,
                waarom het uitmaakt, en hoe je het toepast. Met analogieën en
                begrijpelijke taal.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-1">Laag 3 — De Wetenschap</h3>
              <p className="text-sm text-purple-800">
                De onderliggende wetenschappelijke papers met titel, auteurs, type
                studie, steekproefgrootte, kernconclusie en een directe link naar
                het originele paper.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Evidence-classificatie</h2>
          <p className="mb-4">
            Elk inzicht krijgt een evidence-score die aangeeft hoe sterk het
            wetenschappelijk bewijs is:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 shrink-0">
                Sterk bewijs
              </span>
              <p className="text-sm text-gray-700">
                Meerdere gerandomiseerde gecontroleerde trials (RCTs), meta-analyses
                en brede wetenschappelijke consensus.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shrink-0">
                Matig bewijs
              </span>
              <p className="text-sm text-gray-700">
                Enkele RCTs, consistente observationele studies. Het bewijs is
                overtuigend maar er is meer onderzoek nodig.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 shrink-0">
                Opkomend bewijs
              </span>
              <p className="text-sm text-gray-700">
                Beperkte studies, veelbelovende resultaten maar nog niet definitief.
                Interpreteer met voorzichtigheid.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Methodologie</h2>
          <p>
            Alle content is samengesteld op basis van peer-reviewed wetenschappelijke
            publicaties, met een focus op onderzoek uit de periode 2016-2026. We
            prioriteren meta-analyses en RCTs boven observationele studies.
          </p>
          <p>
            Tegenstrijdige resultaten worden eerlijk benoemd. We geven geen medisch
            advies — raadpleeg altijd een arts voor persoonlijke gezondheidsvragen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer</h2>
          <p className="text-sm text-gray-500">
            De informatie in deze app is bedoeld als educatief naslagwerk en vervangt
            geen professioneel medisch advies. Raadpleeg altijd een gekwalificeerde
            zorgverlener voor diagnose en behandeling van gezondheidsproblemen.
          </p>
        </section>
      </div>
    </div>
  );
}
