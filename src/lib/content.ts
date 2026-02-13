import { Topic, SearchResult } from '@/types';
import { domains } from './domains';

// Import all topic content statically
// Slaap
import { topic as S01 } from '../../content/slaap/slaaphygiene';
import { topic as S02 } from '../../content/slaap/lichtblootstelling';
import { topic as S03 } from '../../content/slaap/circadiaan-ritme';
import { topic as S04 } from '../../content/slaap/slaapfases';
import { topic as S05 } from '../../content/slaap/slaapkamertemperatuur';
import { topic as S06 } from '../../content/slaap/cafeine-timing';
import { topic as S07 } from '../../content/slaap/melatonine';
import { topic as S08 } from '../../content/slaap/optimale-slaapduur';
import { topic as S09 } from '../../content/slaap/dutjes';
import { topic as S10 } from '../../content/slaap/slaapstoornissen';

// Voeding
import { topic as V01 } from '../../content/voeding/macronutrienten';
import { topic as V02 } from '../../content/voeding/micronutrienten';
import { topic as V03 } from '../../content/voeding/maaltijdtiming';
import { topic as V04 } from '../../content/voeding/hydratatie';
import { topic as V05 } from '../../content/voeding/darmgezondheid';
import { topic as V06 } from '../../content/voeding/inflammatie-voeding';
import { topic as V07 } from '../../content/voeding/ultra-bewerkt-voedsel';
import { topic as V08 } from '../../content/voeding/alcohol';
import { topic as V09 } from '../../content/voeding/intermittent-fasting';
import { topic as V10 } from '../../content/voeding/bloedsuikerregulatie';

// Beweging
import { topic as B01 } from '../../content/beweging/krachttraining';
import { topic as B02 } from '../../content/beweging/cardio';
import { topic as B03 } from '../../content/beweging/neat';
import { topic as B04 } from '../../content/beweging/mobiliteit';
import { topic as B05 } from '../../content/beweging/herstel-rust';
import { topic as B06 } from '../../content/beweging/overtraining';
import { topic as B07 } from '../../content/beweging/opwarmen-cooldown';
import { topic as B08 } from '../../content/beweging/trainingsfrequentie';
import { topic as B09 } from '../../content/beweging/intensiteit-progressie';
import { topic as B10 } from '../../content/beweging/zitgedrag';

function normalizeTopic(topic: Topic, index: number): Topic {
  return {
    ...topic,
    introduction: topic.introduction || topic.description,
    sortOrder: topic.sortOrder ?? index + 1,
    insights: topic.insights.map((insight, iIdx) => ({
      ...insight,
      id: insight.id || `${topic.id}-${iIdx + 1}`,
      topicId: insight.topicId || topic.id,
      sortOrder: insight.sortOrder ?? iIdx + 1,
      papers: insight.papers.map((paper, pIdx) => ({
        ...paper,
        id: paper.id || `${topic.id}-${iIdx + 1}-P${pIdx + 1}`,
        sampleSize: paper.sampleSize ?? null,
        conclusion: paper.conclusion || '',
      })),
    })),
  };
}

const rawTopics: Topic[] = [
  S01, S02, S03, S04, S05, S06, S07, S08, S09, S10,
  V01, V02, V03, V04, V05, V06, V07, V08, V09, V10,
  B01, B02, B03, B04, B05, B06, B07, B08, B09, B10,
];

export const allTopics: Topic[] = rawTopics.map((t, i) => normalizeTopic(t, i));

export function getTopicsByDomain(domainId: string): Topic[] {
  return allTopics
    .filter((t) => t.domainId === domainId)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getTopicBySlug(domainSlug: string, topicSlug: string): Topic | undefined {
  return allTopics.find(
    (t) => t.domainId === domainSlug && t.slug === topicSlug
  );
}

export function getAllTopicSlugs(): { domainSlug: string; topicSlug: string }[] {
  return allTopics.map((t) => ({
    domainSlug: t.domainId,
    topicSlug: t.slug,
  }));
}

export function searchContent(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const topic of allTopics) {
    const domain = domains.find((d) => d.id === topic.domainId);
    if (!domain) continue;

    const topicMatch =
      topic.title.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q) ||
      topic.tags.some((tag) => tag.toLowerCase().includes(q));

    if (topicMatch) {
      results.push({
        type: 'topic',
        domainId: domain.slug,
        domainTitle: domain.title,
        domainIcon: domain.icon,
        topicId: topic.id,
        topicTitle: topic.title,
        topicSlug: topic.slug,
        matchText: topic.description,
      });
    }

    for (const insight of topic.insights) {
      const insightMatch =
        insight.action.toLowerCase().includes(q) ||
        insight.explanation.toLowerCase().includes(q);

      if (insightMatch) {
        results.push({
          type: 'insight',
          domainId: domain.slug,
          domainTitle: domain.title,
          domainIcon: domain.icon,
          topicId: topic.id,
          topicTitle: topic.title,
          topicSlug: topic.slug,
          insightAction: insight.action,
          insightId: insight.id,
          matchText: insight.action,
        });
      }
    }
  }

  return results;
}
