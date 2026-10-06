export interface PracticeProblem {
  author: string;
  topic: string;
  points: number;
  text: string;
  answer: string;
  diagram?: "semicircle" | "triangle";
  multipleChoice?: { options: string[]; correctIndex: number };
}

export interface ProblemSet {
  team: string;
  year: number;
  authors: string;
  problems: string;
  solutions: string;
  document?: string;
  items: PracticeProblem[];
}

const p = (
  author: string,
  topic: string,
  points: number,
  text: string,
  answer: string,
): PracticeProblem => ({ author, topic, points, text, answer });

export const problemSets: ProblemSet[] = [
  {
    team: "Team 1",
    year: 2026,
    authors: "Alex, Edward, Kennan",
    problems: "Pal4Pal_Team1.pdf",
    solutions: "Pal4Pal_25_26_MathCarnival_Team1(14).pdf",
    items: [
      p(
        "Alex",
        "Combinatorics",
        4,
        String.raw`Suppose Bob starts with 1 credit. Everyday Bob can choose to go to a casino. On Day \(i\) (with \(i\) starting from 1), he has a \(\frac{101-i}{100}\) chance to win his gambling. If he wins, he wins a prize of \(\frac{1}{2^i}\) credits. If he loses, then he loses all of the credits accumulated so far, and he has no more money to gamble anymore. Optimally, how many days of gambling should Bob do?`,
        String.raw`\(4\) days`,
      ),
      p(
        "Alex",
        "Number Theory",
        5,
        String.raw`A number \(a\) is \(n\)-good if it can be written as \(r+bn\) where \(0<r<n\) and \(\gcd(r,n)=1\), \(\gcd(b,n)=1\). Find the size of the set of distinct remainders mod \(3^{200}\) of perfect squares which are \(3^{100}\)-good. In other words, find \(\left|\{a^2\bmod 3^{200}\mid a^2\text{ is }3^{100}\text{-good}\}\right|\). Format for answering: If this quantity is expressed in the form of \(a\times b^k\), find \(a+b+k\).`,
        String.raw`\(203\) (the quantity is \(2\times3^{198}\))`,
      ),
      p(
        "Edward",
        "Algebra",
        5,
        String.raw`Consider the sequence \(\{a_n\}\), where \(a_n\) is the \(n\)th term in the sequence defined by \(a_1=1\), \(a_2=2\) and the recursive relation \(a_n=4a_{n-1}-4a_{n-2}+1\) for all \(n\geq3\). It is possible to define \(a_n\) for all \(n\leq0\) requiring the recurrence relation to also be true for \(n\leq2\). In this way, all \(a_n\) for \(n\leq0\) can be written as \(\frac{a}{2^b}\), where \(a\) is odd. Find the sum of the absolute values for the greatest (least negative, e.g. \(-5>-7\)) 3 \(n\)'s where the value of \(b\) for \(n\) and \(n+1\) differs by at least 9. For example: \(n=-5\) does not satisfy this condition because \(a_{-5}=\frac{61}{2^6}\) and \(a_{-4}=\frac{59}{2^6}\), and the exponents (the 6's) do not differ by at least 9.`,
        String.raw`\(1536\)`,
      ),
      p(
        "Edward",
        "Number Theory",
        4,
        String.raw`Find the size (cardinality) of the largest subset \(S\subseteq\{1,2,3,\ldots,100\}\) such that for any distinct \(a,b,c\in S\), \(\gcd(a,b,c)=1\).`,
        String.raw`\(30\)`,
      ),
      p(
        "Kennan",
        "Geometry",
        4,
        String.raw`Suppose for a positive number \(x\), we have a quadrilateral with sides \(x,2,4-x,2\) in that order. It contains an inscribed circle of radius \(x\) with another inscribed quadrilateral in it that has corresponding parallel edges. Find \(x\).`,
        String.raw`\(\frac45\)`,
      ),
      p(
        "Kennan",
        "Combinatorics",
        4,
        String.raw`Bob is walking in the cells of a \(10\times10\) grid. Meanwhile, Alice is also walking in the cells of the same \(10\times10\) grid. Alice starts from the bottom-left corner and Bob starts from the top-right corner. Alice walks up or right every minute randomly and Bob also randomly walks down or left every minute. Let the probability that they will collide be \(\frac{p}{2^q}\) in simplest form and find \(q\).`,
        String.raw`\(16\)`,
      ),
    ],
  },
  {
    team: "Team 2",
    year: 2026,
    authors: "Samuel, Eric, Catherine",
    problems: "Pal4Pal_Team2.pdf",
    solutions: "Pal4Pal_Team2_Solutions.pdf",
    items: [
      p(
        "Samuel",
        "Combinatorics",
        4,
        String.raw`Alice and Bob play a two-player game in which the numbers \(a\) and \(b\) are initially written on the whiteboard. Starting with Alice, the players take turns subtracting 1 or 2 from one of the current numbers written on the whiteboard. The first player to reach 0 as one of the numbers wins. Given that \(a\) and \(b\) are chosen randomly between 1 to 101 inclusive, what is the probability that \(a\) and \(b\) are so that Alice has a winning strategy?`,
        String.raw`\(\frac{6934}{10201}\)`,
      ),
      p(
        "Samuel",
        "Number Theory",
        5,
        String.raw`Find the number of primes \(p\) for which there exists a positive integer \(m\) that is of the form \(12k+2\) such that \(48m(47m+1)\) is \(p\) times a perfect square.`,
        String.raw`\(0\)`,
      ),
      p(
        "Eric",
        "Number Theory",
        3,
        String.raw`Let \(S\) be the sum of the squares of the divisors of \(480\) (including itself). Compute the number of divisors of \(S\).`,
        String.raw`\(108\)`,
      ),
      p(
        "Eric",
        "Algebra",
        4,
        String.raw`An ellipse in the first quadrant is tangent to both the \(x\)-axis and the \(y\)-axis. The coordinates of its foci are \((8,12)\), and \((v,12)\). Compute \(v\).`,
        String.raw`\(18\)`,
      ),
      p(
        "Catherine",
        "Geometry",
        4,
        String.raw`Let \(\triangle ABC\) be a right triangle with right angle at \(A\) and \(AC\) the shorter leg. Point \(D\) lies inside the triangle such that \(\angle ADC=90^\circ\) and \(\angle DCA=\angle ABC\). Extend \(BD\) to a point \(E\) so that \(\angle BEA=90^\circ\) and \(\angle DAE=\angle ABC\). Find the ratio \(BD:DE\).`,
        String.raw`\(3:1\)`,
      ),
      p(
        "Catherine",
        "Algebra",
        4,
        String.raw`Compute \(\cos^4\frac{\pi}{9}+\cos^4\frac{2\pi}{9}+\cos^4\frac{3\pi}{9}+\cos^4\frac{4\pi}{9}\).`,
        String.raw`\(\frac{19}{16}\)`,
      ),
      p(
        "Catherine",
        "Geometry",
        5,
        String.raw`In triangle \(ABC\), \(BC=6\) and \(6\sin A+5\cos B\cos C=9\). Find the area of \(ABC\).`,
        String.raw`\(6\)`,
      ),
    ],
  },
  {
    team: "Team 3",
    year: 2026,
    authors: "Eric, Yichen, Justin",
    problems: "Pal4Pal_Team3.pdf",
    solutions: "Pal4Pal_Team3_Solutions.pdf",
    items: [
      p(
        "Eric",
        "Geometry",
        4,
        String.raw`In \(\triangle ABC\), the \(A\)-median, \(B\)-median, \(C\)-median have lengths \(13,14,15\), respectively. Find area of \(\triangle ABC\).`,
        String.raw`\(112\)`,
      ),
      p(
        "Eric",
        "Number Theory",
        4,
        String.raw`Given a positive base-10 positive integer \(N=a_na_{n-1}\ldots a_1a_0\), let \(f(N)=2^na_0+2^{n-1}a_1+\cdots+2^1a_{n-1}+2^0a_n\). Find \(f(f(\ldots f(2014^{2014})\ldots))\) (\(2014^{2014}\) applications of \(f\)).`,
        String.raw`\(19\)`,
      ),
      p(
        "Yichen",
        "Geometry",
        4,
        String.raw`Let \(ABC\) be an equilateral triangle. Let \(P\) be a point inside, such that \(PA=6\), \(PB=12\), and \(PC=6\sqrt3\). Find the side length of the triangle.`,
        String.raw`\(6\sqrt7\)`,
      ),
      p(
        "Yichen",
        "Combinatorics",
        4,
        String.raw`Kait rolls a fair 6-sided die until she rolls a 6. If she rolls a 6 on the \(N\)th roll, she then rolls the die \(N\) more times. What is the probability that she rolls a 6 during these next \(N\) times?`,
        String.raw`\(\frac6{11}\)`,
      ),
      p(
        "Justin",
        "Geometry",
        4,
        String.raw`In triangle \(\triangle ABC\) with orthocenter \(H\), the internal angle bisector of \(\angle BAC\) intersects \(\overline{BC}\) at \(Y\). Given that \(AH=4\), \(AY=6\), and the distance from \(Y\) to \(\overline{AC}\) is \(\sqrt{15}\), compute \(BC\).`,
        String.raw`\(4\sqrt{35}\)`,
      ),
      p(
        "Justin",
        "Number Theory",
        4,
        String.raw`Given that \(20^{22}+1\) has exactly 4 prime divisors \(p_1<p_2<p_3<p_4\), determine \(p_1+p_2\).`,
        String.raw`\(490\)`,
      ),
    ],
  },
  {
    team: "Team 4",
    year: 2026,
    authors: "Steven, Derek, Andy",
    problems: "Pal4Pal_Team_4.pdf",
    solutions: "Pal4Pal_Team_4_Solutions.pdf",
    document: "Pal4Pal_Team_4.docx",
    items: [
      {
        ...p(
          "Steven",
          "Geometry",
          4,
          String.raw`Consider semicircle with diameter \(AB\), \(C\) is a point, \(D\) is the midpoint of arc \(BC\). \(AD\) meets \(BC\) at \(E\). If \(CE=3\), and \(BD=2\sqrt5\), find \(AB\).`,
          String.raw`\(10\)`,
        ),
        diagram: "semicircle",
      },
      {
        ...p(
          "Steven",
          "Geometry",
          4,
          String.raw`Consider right \(\triangle ABC\) with \(\angle C=90^\circ\), \(AB=10\), and \(AC=8\). \(CP=CQ=2\). \(BQ\) and \(AP\) meet at \(R\). \(CR\) meet \(AB\) at \(S\). \(QP\) meet \(AB\) extension at \(T\). Find \(TS\).`,
          String.raw`\(24\)`,
        ),
        diagram: "triangle",
      },
      p(
        "Derek",
        "Combinatorics",
        4,
        String.raw`Ryan has three six-sided dice, one fair, one that rolls threes \(\frac67\) of the time, and each of the other five sides equally with probability \(\frac1{35}\) of the time, and one that rolls threes \(\frac27\) of the time, and each of the other five sides equally with probability \(\frac17\) of the time. He selects one of the dice at random. The probability he rolls a three given the first two rolls are threes is \(\frac pq\). What is the remainder when \(p+q\) is divided by 1000?`,
        String.raw`\(895\)`,
      ),
      p(
        "Derek",
        "Number Theory",
        4,
        String.raw`For each integer \(n\), \(1<n<500\), there exists a number that is divisible by all positive integers less than or equal to \(n\) except \(m\) and \(m+1\). Find the sum of all possible \(m\).`,
        String.raw`\(447\)`,
      ),
      p(
        "Andy",
        "Number Theory",
        4,
        String.raw`Let \(a\) and \(b\) be positive integers satisfying \(\operatorname{lcm}(a,b)-\gcd(a,b)=23\). Find the sum of all possible values of \(a+b\).`,
        String.raw`\(129\)`,
      ),
      p(
        "Andy",
        "Number Theory",
        4,
        String.raw`Let \(n\) be a positive integer. Find the sum of all possible values of \(\gcd(5n+11,n+7)\).`,
        String.raw`\(60\)`,
      ),
    ],
  },
  {
    team: "Team 5",
    year: 2026,
    authors: "Tianlin, Franklin, Vincent",
    problems: "Pal4Pal_Team_5.pdf",
    solutions: "Pal4Pal_Team_5_Solutions.pdf",
    items: [
      p(
        "Tianlin",
        "Algebra",
        4,
        String.raw`What is the remainder when \(2^{202}+202\) is divided by \(2^{101}+2^{51}+1\)?`,
        String.raw`\(201\)`,
      ),
      p(
        "Tianlin",
        "Geometry",
        5,
        String.raw`Isosceles trapezoid \(ABCD\) has parallel sides \(AD\) and \(BC\), with \(BC<AD\) and \(AB=CD\). There is a point \(P\) in the plane such that \(PA=1\), \(PB=2\), \(PC=3\), and \(PD=4\). What is \(\frac{BC}{AD}\)?`,
        String.raw`\(\frac13\)`,
      ),
      p(
        "Franklin",
        "Combinatorics",
        4,
        String.raw`Fred the Frog starts at \((0,0)\) of the coordinate plane. He wishes to get to \((4,4)\), and each turn he may move one unit right, one unit left, or one unit up. Given that he may never visit the same grid space twice and for any point \((x,y)\) that he visits, \(0\leq x,y\leq4\), how many ways are there for him to reach the said location?`,
        String.raw`\(625\)`,
      ),
      p(
        "Franklin",
        "Combinatorics",
        4,
        String.raw`Alice, Bob, and Carol are in a math relay tournament. Due to poor planning and strategy, each person does not work on the problem until the person before them has finished (Alice starts, Bob starts once Alice is complete, and Carol starts once Bob is complete). Each of them takes a random time between 0 and 5 minutes to solve the problem. Given that there is a 5-minute total time limit, what is the probability that Carol can finish the problem?`,
        String.raw`\(\frac16\)`,
      ),
      p(
        "Vincent",
        "Combinatorics",
        4,
        String.raw`Alice has 5 friends and they are sitting in a circle and passing a ball around. The ball starts in Alice's hands. What is the probability that Alice ends up with the ball after they pass it 7 times? People cannot pass to themselves or to people outside the circle. When they are passing the ball around, the person with the ball gives it to someone else in the group with equal probability. This counts as a turn, so when passing it 7 times, the ball changes holder 7 times, e.g. Alice – Bob – Alice – Bob – Alice – Bob – Alice – Bob is 7 turns.`,
        String.raw`\(\frac{2604}{15625}\)`,
      ),
      p(
        "Vincent",
        "Combinatorics",
        4,
        String.raw`Bob is driving home from work. Suppose Bob's work is located at point \((0,0,0)\) and his home is at \((6,6,6)\). However, Bob is hungry and wants to go to a burger store. The burger store is located at \((2,1,3)\). Bob has little gas, so he wants to use the shortest route through the burger store home. However, along the way, there is a gang at \((4,3,5)\), and Bob should avoid this gang. If Bob can only move through consecutive lattice points, how many ways are there for him to get back home?`,
        String.raw`\(1339200\)`,
      ),
    ],
  },
];
