export interface Explanation {
  label: "Solution" | "Hint";
  paragraphs: string[];
}

const solution = (...paragraphs: string[]): Explanation => ({ label: "Solution", paragraphs });
const hint = (...paragraphs: string[]): Explanation => ({ label: "Hint", paragraphs });

// Explanations transcribed and condensed from each set's solution PDF, in
// problem order. Retain hints where the source provides a hint rather than a proof.
export const explanations: Record<string, Explanation[]> = {
  "Pal4Pal_Team1.pdf": [
    solution(
      String.raw`Consider the marginal profit from each day. Bob should continue only while the expected marginal profit is positive; otherwise, the expected amount of money he has decreases.`,
      String.raw`On day \(i\), the expected revenue is \(\frac{101-i}{100}\cdot\frac1{2^i}\). His accumulated money before that day is \(1+\frac12+\cdots+\frac1{2^{i-1}}=2-\frac1{2^{i-1}}\), so the expected loss is \(\frac{i-1}{100}\left(2-\frac1{2^{i-1}}\right)\).`,
      String.raw`\[\text{Marginal profit}=\frac{101-i}{100\cdot2^i}-\frac{i-1}{100}\left(2-\frac1{2^{i-1}}\right)=\frac{99+i-(i-1)2^{i+1}}{100\cdot2^i}.\]`,
      String.raw`This is positive only for \(i\leq4\). Thus, optimally, Bob should gamble for \(4\) days.`,
    ),
    solution(
      String.raw`First count the square residues modulo \(3^{100}\) that are coprime to \(3\). There are \(\varphi(3^{100})=2\cdot3^{99}\) coprime residues. Two such numbers have the same square precisely when they are congruent up to sign modulo \(3^{100}\), giving \(3^{99}\) distinct square residues.`,
      String.raw`If \(a^2\equiv r\pmod{3^{100}}\) and \(3\nmid a\), then`,
      String.raw`\[(a+k\cdot3^{100})^2\equiv a^2+2ak\cdot3^{100}\pmod{3^{200}}.\]`,
      String.raw`Because \(2a\) is coprime to \(3^{100}\), varying \(k\) covers every possible upper residue. For each \(r\), exactly \(\varphi(3^{100})=2\cdot3^{99}\) of these are \(3^{100}\)-good. Thus the size is \(3^{99}\cdot2\cdot3^{99}=2\cdot3^{198}\), and \(a+b+k=2+3+198=203\). This lifting argument is also related to Hensel's lemma.`,
    ),
    solution(
      String.raw`First solve the homogeneous recurrence \(a_n=4a_{n-1}-4a_{n-2}\). Its characteristic equation is \(t^2-4t+4=0\), with repeated root \(2\), so its general solution is \(\lambda_1 2^n+\lambda_2 n2^n\).`,
      String.raw`The constant sequence \(a_n=1\) is a particular solution of the original recurrence. Adding this and using the initial conditions gives`,
      String.raw`\[a_n=\lambda_1 2^n+\lambda_2 n2^n+1,\qquad \lambda_1=-\frac14,\quad\lambda_2=\frac14,\qquad a_n=2^{n-2}(n-1)+1.\]`,
      String.raw`For nonpositive \(n\), the denominator exponent in lowest terms is \(b=2-n-v_2(|n-1|)\), where \(v_2(x)\) counts the factors of \(2\) in \(x\). A change of at least \(9\) requires a sufficiently large change in this valuation.`,
      String.raw`The three greatest qualifying indices are \(-256,-512,-768\). For example, the denominator exponents for \(n=-256\) and \(n+1=-255\) are \(258\) and \(249\). The requested sum is \(256+512+768=1536\).`,
    ),
    solution(
      String.raw`Reinterpret the condition as allowing each prime to divide at most two selected numbers. Include \(1\), which has no prime factors, and all \(25\) primes at most \(100\).`,
      String.raw`The PDF adds the composites \(86=2\cdot43\), \(93=3\cdot31\), \(95=5\cdot19\), and \(91=7\cdot13\), using each involved prime only once more. This gives \(1+25+4=30\) elements.`,
      String.raw`For an upper bound, every composite at most \(100\) has a prime factor among \(2,3,5,7\). At most eight selected numbers can contain these primes, and at most \(21\) selected numbers can avoid them other than \(1\) (one for each remaining prime). Hence \(|S|\leq8+21+1=30\).`,
    ),
    solution(
      String.raw`Call the outer quadrilateral \(ABCD\) and the inner one \(EFGH\), with corresponding sides parallel. Since \(EFGH\) is cyclic, opposite angles sum to \(180^\circ\). Parallel sides transfer these angles to \(ABCD\), so it is cyclic too. Its equal opposite sides of length \(2\) make it an isosceles trapezoid.`,
      String.raw`The inradius is \(x\), so the altitude is \(2x\). The difference of the bases is \((4-x)-x=4-2x\), giving horizontal offset \(2-x\). Thus`,
      String.raw`\[2x=\sqrt{4-(2-x)^2}=\sqrt{4x-x^2},\qquad 4x^2=4x-x^2,\qquad 5x^2=4x.\]`,
      String.raw`Since \(x>0\), we obtain \(x=\frac45\).`,
    ),
    solution(
      String.raw`They can collide only after both have taken \(9\) steps. Matching Alice's first half with Bob's reversed second half gives a complete path across the grid, so there are \(\binom{18}{9}\) ways for a collision.`,
      String.raw`Each person has \(2^9\) equally likely sequences of direction choices. Therefore`,
      String.raw`\[\Pr(\text{collision})=\frac{\binom{18}{9}}{(2^9)^2}=\frac{12155}{2^{16}},\]`,
      String.raw`so \(q=16\). Alternatively, Kummer's theorem counts two carries in the binary addition \(9+9\), giving \(v_2\!\left(\binom{18}{9}\right)=2\) and \(q=18-2=16\).`,
    ),
  ],
  "Pal4Pal_Team2.pdf": [
    solution(
      String.raw`Call a position \((x,y)\) winning if the player to move can force a win. Any position with a coordinate equal to \(1\) or \(2\) is winning. Otherwise, a position is winning if some legal move reaches a losing position, and losing if every move reaches a winning position.`,
      String.raw`Induction gives that, when both coordinates are at least \(3\), the losing positions are exactly those with \(x\equiv y\pmod3\). Among \(3,4,\ldots,101\), each residue class contains \(33\) numbers, so there are \(3\cdot33^2=3267\) losing ordered pairs.`,
      String.raw`\[\Pr(\text{Alice wins})=1-\frac{3267}{101^2}=\frac{6934}{10201}.\]`,
    ),
    solution(
      String.raw`Suppose \(48m(47m+1)=p x^2\). Since \(m=12k+2\), any common divisor of \(48m\) and \(47m+1\) divides \(48\), while \(47m+1\) is divisible by neither \(2\) nor \(3\). Thus the two factors are coprime.`,
      String.raw`One factor must be a square and the other \(p\) times a square. But \(m\equiv2\pmod4\), so \(v_2(48m)=5\); consequently \(48m\) cannot be a square. We must have \(47m+1=b^2\).`,
      String.raw`Reducing modulo \(12\) gives \(b^2\equiv-m+1\equiv11\pmod{12}\), whereas square residues modulo \(12\) are \(0,1,4,9\). This contradiction shows that no primes work.`,
    ),
    solution(
      String.raw`Since \(480=2^5\cdot3\cdot5\), expanding the following product gives the square of every divisor exactly once:`,
      String.raw`\[S=(1+2^2+2^4+2^6+2^8+2^{10})(1+3^2)(1+5^2).\]`,
      String.raw`Using the geometric series formula,`,
      String.raw`\[S=\frac{4^6-1}{3}\cdot10\cdot26=260\cdot65\cdot21=2^2\cdot3\cdot5^2\cdot7\cdot13^2.\]`,
      String.raw`The number of divisors is \((2+1)(1+1)(2+1)(1+1)(2+1)=108\).`,
    ),
    solution(
      String.raw`Use the ellipse definition: the sum of distances to the two foci is the same at both tangent points. The tangent point on the \(x\)-axis lies on the perpendicular bisector of the foci, giving`,
      String.raw`\[8+v=2\sqrt{\left(\frac{|8-v|}{2}\right)^2+12^2}.\]`,
      String.raw`Squaring both sides yields \(64+16v+v^2=v^2-16v+640\). Hence \(32v=576\), so \(v=18\).`,
    ),
    hint(String.raw`Use angle chasing, the angle bisector theorem, and the Pythagorean theorem. The solution PDF gives this hint and the answer \(BD:DE=3:1\).`),
    hint(
      String.raw`Note that \(\frac\pi9,\frac{7\pi}9,\frac{13\pi}9\) satisfy \(\cos3\theta=\frac12\). Let \(r=\cos\frac\pi9\), \(s=\cos\frac{7\pi}9\), and \(t=\cos\frac{13\pi}9\). Then \(r,s,t\) are the three roots of the cubic derived from \(\cos3\theta=\frac12\), using \(\cos3\theta=4\cos^3\theta-3\cos\theta\).`,
      String.raw`The PDF gives this hint and the answer \(\frac{19}{16}\).`,
    ),
    solution(
      String.raw`Using the product-to-sum identity and \(B+C=\pi-A\),`,
      String.raw`\[\cos B\cos C=\frac{\cos(B+C)+\cos(B-C)}2=\frac{-\cos A+\cos(B-C)}2.\]`,
      String.raw`The given equation becomes \(6\sin A-\frac52\cos A+\frac52\cos(B-C)=9\). The first two terms are at most \(\sqrt{6^2+(5/2)^2}=\frac{13}2\), and the last term is at most \(\frac52\). Equality is necessary in both bounds.`,
      String.raw`Thus \(B=C\), \(\sin A=\frac{12}{13}\), and \(\cos A=-\frac5{13}\). It follows that \(AB=AC=\sqrt{13}\), so the area is \(\frac12\cdot13\cdot\frac{12}{13}=6\).`,
    ),
  ],
  "Pal4Pal_Team3.pdf": [
    solution(
      String.raw`The triangle with side lengths \(13,14,15\) has semiperimeter \(21\) and area`,
      String.raw`\[\sqrt{21(21-13)(21-14)(21-15)}=84.\]`,
      String.raw`Let the area of \(ABC\) be \(S\). Reflect \(B\) across the midpoint of \(AC\) to obtain \(D\), so \(ABCD\) is a parallelogram. The centroid lies two-thirds of the way along each median. Comparing the resulting areas gives`,
      String.raw`\[2S=6\left(\frac23\right)^2\cdot84,\qquad S=\frac43\cdot84=112.\]`,
    ),
    solution(
      String.raw`For positive \(N\), \(f(N)>0\). If \(N\geq100\), its highest digit index satisfies \(n\geq2\), and \(f(N)\leq9(2^n+2^{n-1}+\cdots+1)<9\cdot2^{n+1}<10^n\leq N\).`,
      String.raw`If \(20\leq N<100\), write \(N=10a_1+a_0\), with \(a_1\geq2\). Then \(f(N)=2a_0+a_1<10a_1+a_0=N\). Repeated applications therefore decrease the value until it is between \(1\) and \(19\).`,
      String.raw`Also, if \(19\mid N\), then \(19\mid f(N)\). Indeed, using \(20\equiv1\pmod{19}\),`,
      String.raw`\[10^nf(N)=\sum_{j=0}^{n}10^n2^{n-j}a_j\equiv\sum_{j=0}^{n}10^ja_j=N\pmod{19}.\]`,
      String.raw`Since \(2014=19\cdot106\), the starting value is divisible by \(19\), and every iterate remains divisible by \(19\). The only such positive value at most \(19\) is \(19\), which is fixed by \(f\).`,
    ),
    solution(
      String.raw`Rotate triangle \(APC\) by \(60^\circ\) counterclockwise to triangle \(AP'B\), taking \(C\) to \(B\). In triangle \(APP'\), \(\angle P'AP=60^\circ\) and \(AP=AP'\), so \(PP'=6\).`,
      String.raw`Triangle \(PP'B\) has side lengths \(6,6\sqrt3,12\), making it a \(30\)-\(60\)-\(90\) triangle. The angle relationships give \(\angle APB=120^\circ\). By the law of cosines,`,
      String.raw`\[AB^2=6^2+12^2-2\cdot6\cdot12\cos120^\circ=252,\qquad AB=6\sqrt7.\]`,
    ),
    solution(
      String.raw`Consider the complementary event. If the first \(6\) occurs on turn \(i\), the previous \(i-1\) rolls and the next \(i\) rolls must all be different from \(6\). The probability of this is \(\left(\frac56\right)^{2i-1}\cdot\frac16\).`,
      String.raw`Sum over all \(i\geq1\). This is a geometric series with initial term \(\frac5{36}\) and common ratio \(\frac{25}{36}\):`,
      String.raw`\[\Pr(\text{no 6 in the next }N\text{ rolls})=\frac{5/36}{1-25/36}=\frac5{11}.\]`,
      String.raw`Hence the requested probability is \(1-\frac5{11}=\frac6{11}\).`,
    ),
    solution(
      String.raw`Let \(E\) be the foot of the altitude from \(B\) to \(AC\), and let \(R\) be the circumradius. Using the altitude relationships and the extended law of sines gives`,
      String.raw`\[4=AH=\frac{AE}{\sin\angle AHE}=\frac{AB\cos A}{\sin C}=2R\cos A.\]`,
      String.raw`The distance from \(Y\) to \(AC\) is \(\sqrt{15}\), while \(AY=6\). Thus \(\cos\frac A2=\frac{\sqrt{21}}6\), and`,
      String.raw`\[\cos A=2\cos^2\frac A2-1=2\left(\frac{\sqrt{21}}6\right)^2-1=\frac16.\]`,
      String.raw`Substituting gives \(R=12\) and \(\sin A=\frac{\sqrt{35}}6\). By the extended law of sines, \(BC=2R\sin A=4\sqrt{35}\).`,
    ),
    solution(
      String.raw`If a prime \(p\) divides \(20^{22}+1\), then \(20^{22}\equiv-1\pmod p\) and \(20^{44}\equiv1\pmod p\). The multiplicative order \(d\) of \(20\) modulo \(p\) divides \(44\) but not \(22\), so \(d=44\) or \(d=4\).`,
      String.raw`Case 1: \(d=44\). Fermat's little theorem implies \(44\mid p-1\). The smallest such prime is \(89\). Modulo \(89\), \(2^{44}\equiv1\) and \(5^{22}\equiv-1\), so \(20^{22}=2^{44}5^{22}\equiv-1\).`,
      String.raw`Case 2: \(d=4\). Then \(p\mid20^4-1=3\cdot7\cdot19\cdot401\). None of \(3,7,19\) divides \(20^{22}+1\), while \(20^{22}\equiv400^{11}\equiv(-1)^{11}\equiv-1\pmod{401}\).`,
      String.raw`To establish the two smallest primes, check the remaining primes below \(401\) with \(44\mid p-1\): \(353\) and \(397\). We have \(20^{22}\equiv3^{11}\not\equiv-1\pmod{397}\). Modulo \(353\), \(2^{44}\equiv-1\), but \(5^{22}\equiv233\cdot207\not\equiv1\), so \(20^{22}\not\equiv-1\). Therefore \(p_1+p_2=89+401=490\).`,
    ),
  ],
  "Pal4Pal_Team_4.pdf": [
    solution(
      String.raw`Extend \(AC\) and \(BD\) to meet at \(P\). Since \(D\) is the midpoint of arc \(BC\), \(DP=BD=2\sqrt5\). The points \(C,E,D,P\) are concyclic.`,
      String.raw`Using the power of point \(B\),`,
      String.raw`\[BE\cdot BC=BD\cdot BP=(2\sqrt5)(4\sqrt5)=40.\]`,
      String.raw`Since \(BC=BE+3\), this gives \(BE=5\) and \(BC=8\). The construction gives \(CP=4\), and the solution concludes \(AB=10\).`,
    ),
    solution(
      String.raw`The points \(A,S,B,T\) form a harmonic bundle, so \(\frac{AS}{BS}=\frac{AT}{BT}\). Alternatively, use Ceva's and Menelaus's theorems in \(\triangle ABC\).`,
      String.raw`Ceva's theorem gives \(\frac{AS}{BS}=\frac32\). Since \(AB=10\),`,
      String.raw`\[\frac{10+BT}{BT}=\frac32,\qquad BT=20.\]`,
      String.raw`Also \(BS=4\), so \(TS=BT+BS=20+4=24\).`,
    ),
    solution(
      String.raw`The three dice are chosen with equal probability. Conditional on the first two rolls being threes, the probability that the third roll is a three is`,
      String.raw`\[\frac{\frac13(\frac16)^3+\frac13(\frac67)^3+\frac13(\frac27)^3}{\frac13(\frac16)^2+\frac13(\frac67)^2+\frac13(\frac27)^2}=\frac{6961}{8934}.\]`,
      String.raw`Thus \(p+q=6961+8934=15895\), whose remainder modulo \(1000\) is \(895\).`,
    ),
    solution(
      String.raw`The PDF argues that both omitted numbers \(m\) and \(m+1\) must be prime powers; otherwise, their proper factors would force them to divide the chosen number. Since they have different parity, one must be a power of \(2\).`,
      String.raw`The solution lists the candidate values \(1,2,3,4,7,16,31,127,256\). Adding them gives \(447\), the answer recorded in the PDF.`,
    ),
    solution(
      String.raw`Let \(d=\gcd(a,b)\), and set \(x=\frac ad\), \(y=\frac bd\). Since \(\operatorname{lcm}(a,b)=dxy\),`,
      String.raw`\[d(xy-1)=23.\]`,
      String.raw`The PDF considers two cases. If \(d=1\), then \(xy=24\), and it lists the pairs \((1,24),(2,12),(3,8),(4,6)\), or their reverses, giving sums \(25,14,11,10\). If \(d=23\), then \(xy=2\), giving \((a,b)=(46,23)\) or its reverse and sum \(69\).`,
      String.raw`The source adds these listed sums: \(10+11+14+25+69=129\).`,
    ),
    solution(
      String.raw`By the Euclidean algorithm,`,
      String.raw`\[\gcd(5n+11,n+7)=\gcd(n+7,24).\]`,
      String.raw`Every divisor of \(24\) can occur. They are \(1,2,3,4,6,8,12,24\), and their sum is \(60\).`,
      String.raw`Bonus problem from the PDF: solve the analogous problem for arbitrary \(\gcd(an+b,cn+d)\).`,
    ),
  ],
  "Pal4Pal_Team_5.pdf": [
    solution(
      String.raw`Complete the square, then apply the difference of squares:`,
      String.raw`\[\begin{aligned}2^{202}+202&=(2^{101}+1)^2-2^{102}+201\\&=(2^{101}-2^{51}+1)(2^{101}+2^{51}+1)+201.\end{aligned}\]`,
      String.raw`The product is divisible by the given divisor, leaving remainder \(201\).`,
    ),
    solution(
      String.raw`Reflect \(P\) over the perpendicular bisector of \(BC\) to obtain \(P'\). Then \(P'A=PD=4\), \(P'D=PA=1\), \(P'C=PB=2\), and \(P'B=PC=3\). The isosceles trapezoids \(DAPP'\) and \(CBPP'\) are cyclic.`,
      String.raw`Apply Ptolemy's theorem to each:`,
      String.raw`\[PP'\cdot AD+1\cdot1=4\cdot4,\qquad PP'\cdot BC+2\cdot2=3\cdot3.\]`,
      String.raw`Thus \(PP'\cdot AD=15\) and \(PP'\cdot BC=5\). Dividing gives \(\frac{BC}{AD}=\frac5{15}=\frac13\).`,
    ),
    solution(
      String.raw`Fred must move up one row at a time. Within a row, he cannot reverse direction without revisiting a grid point. For each upward move, he chooses one of the five possible \(x\)-coordinates: \(0,1,2,3,4\).`,
      String.raw`There are four upward moves, from \(y=0\) to \(1\), \(1\) to \(2\), \(2\) to \(3\), and \(3\) to \(4\). Therefore the number of paths is \(5^4=625\).`,
    ),
    solution(
      String.raw`Use geometric probability. The three solve times range independently over \([0,5]\), forming a cube of volume \(5^3=125\). Carol finishes in time exactly when their sum is at most \(5\).`,
      String.raw`This region is a tetrahedron with base area \(\frac12\cdot5\cdot5=12.5\) and height \(5\). Its volume is \(\frac13\cdot12.5\cdot5=\frac{125}6\), so the probability is \(\frac16\).`,
    ),
    solution(
      String.raw`Let \(A_n\) be the probability that Alice holds the ball after the \(n\)th pass. To hold it then, she must not have held it after pass \(n-1\); if someone else holds it, their next pass goes to Alice with probability \(\frac15\). Thus`,
      String.raw`\[A_n=\frac15(1-A_{n-1}),\qquad A_0=1.\]`,
      String.raw`Iterating gives \(A_1=0\), \(A_2=\frac15\), \(A_3=\frac4{25}\), \(A_4=\frac{21}{125}\), \(A_5=\frac{104}{625}\), \(A_6=\frac{521}{3125}\), and \(A_7=\frac{2604}{15625}\).`,
    ),
    solution(
      String.raw`A shortest route moves only in positive coordinate directions. To reach the burger store at \((2,1,3)\), Bob makes \(2\) moves in \(x\), \(1\) in \(y\), and \(3\) in \(z\), giving \(\frac{6!}{2!1!3!}=60\) routes.`,
      String.raw`From the burger store to home, the increments are \((4,5,3)\), so there are \(\frac{12!}{4!5!3!}=27720\) shortest routes before excluding the gang.`,
      String.raw`Routes through the gang have increments \((2,2,2)\) to the gang, then \((2,3,1)\) to home. Their number is`,
      String.raw`\[\frac{6!}{2!2!2!}\cdot\frac{6!}{2!3!1!}=90\cdot60=5400.\]`,
      String.raw`Subtracting these and multiplying by the routes to the burger store gives \((27720-5400)\cdot60=1339200\).`,
    ),
  ],
};
