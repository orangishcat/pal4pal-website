// Set-level metadata for the problem pages (authors and downloadable PDFs),
// used by the resources index and schedule pages. Problem content lives in
// the MDX files under src/content/problems.
export interface ProblemSetNav {
  team: string;
  slug: string;
  authors: string;
  problemsPdf: string;
  solutionsPdf: string;
  document: string | null;
}

export const problemNav: ProblemSetNav[] = [
  {
    team: "Team 1",
    slug: "team-1",
    authors: "Alex, Edward, Kennan",
    problemsPdf: "Pal4Pal_Team1.pdf",
    solutionsPdf: "Pal4Pal_25_26_MathCarnival_Team1(14).pdf",
    document: null,
  },
  {
    team: "Team 2",
    slug: "team-2",
    authors: "Samuel, Eric, Catherine",
    problemsPdf: "Pal4Pal_Team2.pdf",
    solutionsPdf: "Pal4Pal_Team2_Solutions.pdf",
    document: null,
  },
  {
    team: "Team 3",
    slug: "team-3",
    authors: "Eric, Yichen, Justin",
    problemsPdf: "Pal4Pal_Team3.pdf",
    solutionsPdf: "Pal4Pal_Team3_Solutions.pdf",
    document: null,
  },
  {
    team: "Team 4",
    slug: "team-4",
    authors: "Steven, Derek, Andy",
    problemsPdf: "Pal4Pal_Team_4.pdf",
    solutionsPdf: "Pal4Pal_Team_4_Solutions.pdf",
    document: "Pal4Pal_Team_4.docx",
  },
  {
    team: "Team 5",
    slug: "team-5",
    authors: "Tianlin, Franklin, Vincent",
    problemsPdf: "Pal4Pal_Team_5.pdf",
    solutionsPdf: "Pal4Pal_Team_5_Solutions.pdf",
    document: null,
  },
];
