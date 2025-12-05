
import { Lesson, KnowledgeLevel, QuizQuestion, LessonPage } from '../types';
import { MATH_LESSONS } from './subjects/mathData';
import { HISTORY_LESSONS } from './subjects/historyData';
import { BIO_LESSONS } from './subjects/biologyData';
import { CS_LESSONS } from './subjects/csData';
import { FRENCH_LESSONS } from './subjects/frenchData';
import { GEO_LESSONS } from './subjects/geoData';
import { PHYSICS_LESSONS } from './subjects/physicsData';
import { PSY_LESSONS } from './subjects/psyData';
import { CIVIC_LESSONS } from './subjects/civicData';
import { LOGIC_LESSONS } from './subjects/logicData';

// Helper to convert old format (content map + fixed quiz) to new format (pages + pool)
const adaptLesson = (lesson: any): Lesson => {
    // If already new format, return as is
    if (lesson.pages && lesson.questionPool) return lesson as Lesson;

    // Convert Content Map to Pages (taking Intermediate as default content for now)
    const pages: LessonPage[] = [
        { title: 'Introduction', content: lesson.content?.[KnowledgeLevel.NOVICE] || "Intro..." },
        { title: 'Approfondissement', content: lesson.content?.[KnowledgeLevel.INTERMEDIATE] || "Détails..." },
        { title: 'Expertise', content: lesson.content?.[KnowledgeLevel.EXPERT] || "Expert..." }
    ];

    // Convert fixed Quiz to Pool (ensure type is set)
    const questionPool: QuizQuestion[] = (lesson.quiz || []).map((q: any) => ({
        ...q,
        type: 'MCQ', // Legacy quizzes were all MCQ
        options: q.options || [],
        correctIndex: q.correctIndex || 0
    }));

    return {
        ...lesson,
        pages,
        questionPool
    } as Lesson;
};

const RAW_LESSONS = [
    ...MATH_LESSONS, // Already new format
    ...HISTORY_LESSONS,
    ...BIO_LESSONS,
    ...CS_LESSONS,
    ...FRENCH_LESSONS,
    ...GEO_LESSONS,
    ...PHYSICS_LESSONS,
    ...PSY_LESSONS,
    ...CIVIC_LESSONS,
    ...LOGIC_LESSONS
];

export const COSMIC_COURSE: Lesson[] = RAW_LESSONS.map(adaptLesson);
