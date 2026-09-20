import portrait0 from "../assets/team/alex-zhan.jpg";
import portrait1 from "../assets/team/tianlin-liu.jpg";
import portrait2 from "../assets/team/yunfei-xia.jpg";
import portrait3 from "../assets/team/catherine-j.png";
import portrait4 from "../assets/team/franklin-zhou.jpg";
import portrait5 from "../assets/team/charlie-huang.jpg";
import portrait6 from "../assets/team/eric-shu.jpg";
import portrait7 from "../assets/team/samuel-li.jpg";
import portrait8 from "../assets/team/derek-hu.jpg";
import portrait9 from "../assets/team/eric-zou.jpg";
import portrait10 from "../assets/team/andy-liu.jpg";
import portrait11 from "../assets/team/yichen-wu.jpg";
import portrait12 from "../assets/team/justin-kim.jpeg";
import portrait13 from "../assets/team/vincent-huang.jpeg";
import portrait14 from "../assets/team/kennan-suen.jpeg";
import portrait15 from "../assets/team/jonathan-yu.png";

const gradeLevels: Record<string, string> = {
  "Alex Zhan": "Junior",
  "Tianlin Liu": "Junior",
  "Yunfei (Steven) Xia": "Junior",
  "Catherine J": "Junior",
  "Franklin Zhou": "Junior",
  "Charlie Huang": "Sophomore",
  "Eric Shu": "Sophomore",
  "Samuel Li": "Sophomore",
  "Derek Hu": "Sophomore",
  "Eric Zou": "Sophomore",
  "Andy Liu": "Sophomore",
  "Yichen Wu": "Freshman",
  "Justin Kim": "Freshman",
  "Vincent Huang": "8th Grade",
  "Kennan Suen": "7th Grade",
  "Jonathan Yu": "8th Grade",
};

export const volunteerSlides = [
  {
    image: portrait0,
    title: "Alex Zhan",
    description: [
      "MathCounts Nationals Countdown Round",
      "Full score on AMC10 2023 and 2024",
      "JMO Honor Roll",
      "USACO Gold",
      "USAPHO Silver",
    ],
  },
  {
    image: portrait1,
    title: "Tianlin Liu",
    description: [
      "AIME qualifier since seventh grade",
      "BMT, SMT, InteGIRLS awards",
    ],
  },
  {
    image: portrait2,
    title: "Yunfei (Steven) Xia",
    description: ["USAPhO qualifier", "SMT honors", "AMC8 book contributor"],
  },
  {
    image: portrait3,
    title: "Catherine J",
    description: ["Geometry enthusiast"],
  },
  {
    image: portrait4,
    title: "Franklin Zhou",
    description: ["Four AIME appearances", "AMC10 DHR"],
  },
  {
    image: portrait5,
    title: "Charlie Huang",
    description: ["Four AIME qualifications", "AMC8/10 DHR", "TKA coach"],
  },
  {
    image: portrait6,
    title: "Eric Shu",
    description: [
      "Four AIME qualifications",
      "ARML national runner-up team",
      "BMmT winning team",
    ],
  },
  {
    image: portrait7,
    title: "Samuel Li",
    description: ["Multiple AIME qualifications", "Teaching since sixth grade"],
  },
  {
    image: portrait8,
    title: "Derek Hu",
    description: [
      "Two AIME qualifications",
      "AMC10 DHR",
      "2023 AlphaStar scholarship",
    ],
  },
  {
    image: portrait9,
    title: "Eric Zou",
    description: [
      "2025 MOP attendee",
      "USAMO 2024–25 qualifier",
      "USAPhO bronze",
      "Perfect AMC12",
    ],
  },
  {
    image: portrait10,
    title: "Andy Liu",
    description: [
      "JMO honors",
      "USAPhO bronze",
      "National Science Bowl champion team",
    ],
  },
  {
    image: portrait11,
    title: "Yichen Wu",
    description: [
      "California MATHCOUNTS national representative",
      "AMC8/10 DHR",
      "ARML elite team",
    ],
  },
  {
    image: portrait12,
    title: "Justin Kim",
    description: [
      "MATHCOUNTS national champion",
      "Perfect AMC8/10/12",
      "USAJMO honorable mention",
    ],
  },
  {
    image: portrait13,
    title: "Vincent Huang",
    description: [
      "Perfect AMC8",
      "AMC10 DHR",
      "10th, Northern California MATHCOUNTS",
    ],
  },
  {
    image: portrait14,
    title: "Kennan Suen",
    description: [
      "Four AIME qualifications",
      "AMC10 DHR",
      "Eighth, BMT geometry",
    ],
  },
  {
    image: portrait15,
    title: "Jonathan Yu",
    description: [
      "USAJMO honors",
      "2026 MATHCOUNTS quarterfinalist",
      "2025 BMT general winner",
    ],
  },
].map((slide) => ({ ...slide, subtitle: gradeLevels[slide.title] }));
