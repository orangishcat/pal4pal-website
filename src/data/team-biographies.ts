import { volunteerSlides } from "./team";

const biographies: Record<string, string[]> = {
  "Alex Zhan": [
    "Alex is a sophomore at Basis Independent Silicon Valley. From a young age, he has always enjoyed problem solving and the discovery process that comes along with it. At his school math club, he and a few other students organize math training workshops to guide younger kids through the journey of mathematical exploration and foster their interest in math. It is their mission to make STEM education more accessible to all, since it is one of the most foundational fields.",
    "Alex has been participating in various math competitions since 6th grade. In 2023, he qualified for the Mathcounts Nationals Countdown Round and also received a full score on AMC10 in 2023 and 2024. Additionally, he has placed third in the BMT Algebra Round and fifth in the SMT Geometry Round. His awards in math olympiads include JMO honor roll, and 3rd place in the 2024 COMC international group. In addition to math contests, he has received a silver award in USAPHO and achieved USACO Gold Rank.",
    "Aside from math, his hobbies include sports like skiing and skating since he enjoys the thrill of raw speed. Skiing in Lake Tahoe with his friends & family is always the highlight of the winter season for Alex.",
  ],
  "Tianlin Liu": [
    "Tianlin (Jessica) is a 10th grader at Lynbrook High School in California. Her math journey began in middle school, and she became an AIME qualifier in 7th grade. She actively participates in math competitions and has earned awards in contests such as BMT, SMT, Purple Comet, and InteGIRLS. Passionate about giving back to the math community, she volunteers with Pal4Pal and is involved in both the MMT program and Lynbrook’s math club.",
    "In her free time, she enjoys drawing, playing soccer, and spending time in nature. A geometry enthusiast, she loves how it beautifully blends math and art.",
  ],
  "Yunfei (Steven) Xia": [
    "Yunfei (Steven) is a sophomore at Lynbrook High School in California. He actively participates in STEM competitions, with a 229.5 JMO index, Distinguished Honorable Mention in the SMT Team overall, Honorable Mention in Algebra and Geometry; 12th place team, and 41st in Geometry at PUMaC; and 19th place team at HMMT. He is also a USAPhO qualifier. Greatly benefited from his mathematical journey, and he aims to inspire younger students mathematically.",
    "Besides volunteering at Pal4Pal, he is involved in Mustang Math, Lynbrook Math Club, and contributed to an AMC8 book with Stellar Learning. Outside of academics, he enjoys flying his drones, playing Go, and spending time with his friends.",
  ],
  "Catherine J": [
    "Catherine is a 10th grader at Lynbrook High School. She enjoys problem solving, especially geometry problems. In addition to math, Catherine enjoys ballet and reading about history.",
  ],
  "Franklin Zhou": [
    "Franklin is a sophomore in Los Gatos High School. He is a four-time AIME participant and has earned the Distinguished Honor Roll in the AMC 10. Though still passionate about math, Franklin enjoys helping others improve at math while keeping the experience enjoyable, while also hoping to change the way competition math students are viewed.",
  ],
  "Charlie Huang": [
    "Charlie is a 9th grader at The King’s Academy (TKA) and a coach for the TKA Junior High Math Team. He is also a volunteer with Pal4Pal, where he began his journey in math tutoring. He has been passionate about math for as long as he can remember and started competing in math contests in 4th grade. Since 5th grade, he has qualified for the AIME four times and also earned Distinguished Honor Roll recognition in both the AMC 8 and AMC 10.",
    "In 2024, he placed in the top 10 in the BMT General Round and the Math League National, and he was selected to join one of the SFBA elite teams for the ARML 2025. Beyond math, he enjoys science, coding, music, and exploring cities and neighborhoods through Google Maps.",
  ],
  "Eric Shu": [
    "Eric is a freshmen in the Bay Area who is passionate about sharing his love of math. He has participated in numerous math competitions through the years, earning many awards and medals including DHR (top 1%) on the AMC 10 and AMC 8, 4x times AIME qualifier, and achieving top places such as SMT, MathCounts, 1st place team at BMmT, and 2nd place team at ARML National, and etc. In his spare time, he enjoys creating math problems and designing contests.",
    "Outside of math, Eric enjoys coding, reading, and fencing — a sport he appreciates for its unique blend of mental strategy and physical agility.",
  ],
  "Samuel Li": [
    "Samuel is a 9th grader at Troy High School. He has qualified for AIME several times and been teaching nonprofit since sixth grade. He is enthusiastic about learning higher maths like group theory and topology, especially its beauty and connections with each other. He also prefers solving olympiad problems in combinatorics and number theory. He enjoys swimming, playing chess, solving puzzles, and reading fiction, and is also involved in basketball and NJROTC.",
  ],
  "Derek Hu": [
    "Derek is an upcoming freshman at Lynbrook High School. He is interested in STEM and math is his favorite subject. He is a two-time AIME qualifier and has gotten a Distinguished Honor Roll on the AMC10. He is a winner of the 2023 AlphaStar Kent Merryfield Scholarship. He has been volunteering in teaching kids math since he was a 6th grader. He enjoys teaching and finds it rewarding. In his spare time, Derek likes reading, running, and playing the piano.",
  ],
  "Eric Zou": [
    "Eric is a 9th grader. He attended MOP in 2025. He has qualified for USAMO 2024 and 2025. He has gotten a bronze medal in USAPhO 2025. He has gotten HMMT (February) overall 31st place and BMT geometry third place. He has obtained AMC 12 perfect score. In his spare time, he plays the clarinet, plays tennis, and helps by volunteering to help students do better at math competitions such as AMC 8.",
  ],
  "Andy Liu": [
    "Andy is a freshman at Mission San Jose High School. He has been into math and science since he was little and loves taking part in competitions. Some of his highlights include JMO Honors, USAPhO Bronze, MathCounts Nationals, and being part of a National Science Bowl Champion team. Outside of academics, Andy likes playing video games, watching sports, and checking out fun stuff on YouTube.",
  ],
  "Yichen Wu": [
    "Yichen is an 8th grader at BASIS Independent Silicon Valley. He began competing in math in 4th grade, starting with the AMC 8 and gradually advancing to more challenging contests like the AMC 10/12 and AIME. He has earned Distinguished Honor Roll in both the AMC 8 and AMC 10, and qualified for the AIME since 6th grade. In 2025, he received Distinguished Honorable Mentions in both Discrete and Geometry at the SMT, and earned some awards in BMT and BmmT.",
    "He was honored to represent California as a member of the national MATHCOUNTS team in 2024, and he was part of the SFBA elite team for ARML 2025. Outside of competitions, he volunteers with Pal4Pal to help others explore fascinating and fun topics in math. In his free time, he enjoys coding, playing chess and piano, and camping.",
  ],
  "Justin Kim": [
    "Justin is currently an 8th grader at Miller Middle School and has participated in numerous mathematics competitions over the past few years. He competed in the MathCounts National Countdown Round for two consecutive years and won the MathCounts National Championship this year. He has also earned perfect scores on the AMC 8, AMC 10, and AMC 12 exams. In addition, Justin qualified for the AIME three times and was invited to take the USAJMO twice, earning an Honorable Mention this year.",
    "Outside of competition math, Justin enjoys playing the clarinet and studying physics. He sees Pal4Pal as a great chance to give back his passion for math to his community and looks forward to introducing students to captivating topics in mathematics.",
  ],
  "Vincent Huang": [
    "Vincent is a 7th Grader at the Basis Independent Silicon Valley. He has a strong passion for Math and STEM. Vincent won 2025 AMC 10 DHR. In 2026, Vincent won the 10th place in the Northern California Mathcounts State, the 13th place in BmMT, the Honorable Mention in online SMT Algebra, the Honorable Mention in Bay Area Math Olympiad 8, and full score in AMC8. Vincent loved to work with the Basis Math Team to win the second place in Team Round, and 6th place Overall Team in 2026 BmMT.",
    "As well as the 5th place in Power round, the 4th place in Team round, and the 5th place Overall Team in 2026 Online SMT. Outside of Math competitions, Vincent enjoys teaching math, playing volleyball and violin.",
  ],
  "Kennan Suen": [
    "Kennan is a 6th grader at The Harker School-Middle School where he immerses himself in diverse clubs as math club, drama club, swim team and choir. Since a young age, he has had great passion for math and computer science. He loves the beauty and art behind mathematical theorems and lemmas.",
    "He is a four-time AIME qualifier and actively participates in various math competitions as 2026 AMC 10 DHR, HMMT February 2026 and 2025 (team overall 27th place in 2026), 2025 Berkeley Math Tournament (in person) Geometry Top Scorer (8th place), 2025 Stanford Math Tournament (online) both Discrete and Geometry Honorable Mention, etc. Besides math, Kennan loves coding, traveling, singing, swimming, speed skating and running.",
    "Kennan loves contributing to the community so more and more kids will come to share his love for math.",
  ],
  "Jonathan Yu": [
    "Jonathan is an upcoming 7th grader at Davidson Academy. He qualified for USAJMO in 2005 and 2006, and received HM and Honor respectively. He advanced to quarter-final at 2026 Mathcounts national competition. He ranked 8th place at 2026 ARML and 15th place at 2025 ARML. He also won multiple awards at various university/high school-hosted math tournaments, including 1st place at 2025 BMT General, 3rd place at 2026 EMCC, and 3rd place at 2026 CMM.",
  ],
};

export const teamMembers = volunteerSlides.map(({ image, title, subtitle }) => ({
  image,
  title,
  gradeLevel: subtitle,
  biography: biographies[title],
}));
