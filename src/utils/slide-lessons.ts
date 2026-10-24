import { withBase } from "./url";

// Lesson slide decks for the 2025–26 season. PDF files live in
// public/resources/slides/<year>/<slug>.pdf, mirroring the page URL
// /resources/slides/<year>/<slug>; both are served statically.
export interface SlideLesson {
  slug: string;
  year: string;
  /** Short sidebar label, e.g. "Week 2". */
  label: string;
  title: string;
  authors: string;
}

export const slideLessons: SlideLesson[] = [
  {
    slug: "functions-review-session-1",
    year: "2025-26",
    label: "Session 1",
    title: "Functions Review and Intro to Trig: Session 1",
    authors: "Pal4Pal Team",
  },
  {
    slug: "functions-review-session-2",
    year: "2025-26",
    label: "Session 2",
    title: "Functions Review and Intro to Trig: Session 2",
    authors: "Pal4Pal Team",
  },
  {
    slug: "week-2",
    year: "2025-26",
    label: "Week 2",
    title: "Week 2 Slides",
    authors: "Vincent, Samuel",
  },
  {
    slug: "week-3",
    year: "2025-26",
    label: "Week 3",
    title: "Week 3 Slides",
    authors: "Alex Z, Kennan L, Justin K",
  },
  {
    slug: "week-4",
    year: "2025-26",
    label: "Week 4",
    title: "Week 4: Trig + Complex Presentation",
    authors: "Catherine, Derek",
  },
  {
    slug: "week-5",
    year: "2025-26",
    label: "Week 5",
    title: "Week 5: Vectors",
    authors: "Pal4Pal Team",
  },
  {
    slug: "week-6",
    year: "2025-26",
    label: "Week 6",
    title: "Week 6 Slides",
    authors: "Pal4Pal Team",
  },
];

/** Distinct lesson years mapped to their lessons, in order of appearance. */
export const slideLessonsByYear = [
  ...new Map(
    slideLessons.map((lesson) => [
      lesson.year,
      slideLessons.filter((l) => l.year === lesson.year),
    ]),
  ).entries(),
];

export const slideLessonHref = (lesson: Pick<SlideLesson, "year" | "slug">) =>
  withBase(`/resources/slides/${lesson.year}/${lesson.slug}`);

export const slideLessonPdfHref = (
  lesson: Pick<SlideLesson, "year" | "slug">,
) => withBase(`/resources/slides/${lesson.year}/${lesson.slug}.pdf`);
