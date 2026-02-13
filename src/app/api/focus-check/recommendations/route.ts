import { NextResponse } from 'next/server';
import { allTopics } from '@/lib/content';
import { evaluateFocusAnswers, rankFocusRecommendations } from '@/lib/focusCheck';

export async function POST(request: Request) {
  const body = await request.json();
  const answers = body?.answers as Record<string, string>;

  if (!answers || typeof answers !== 'object') {
    return NextResponse.json({ error: 'Invalid answers payload' }, { status: 400 });
  }

  const score = evaluateFocusAnswers(answers);
  const recommendations = rankFocusRecommendations(allTopics, score, 8);

  return NextResponse.json({
    score,
    recommendations,
    generatedAt: new Date().toISOString(),
  });
}
