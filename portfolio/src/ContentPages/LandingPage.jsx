import * as d3 from "d3";
import { useSprings, animated } from "react-spring";

export const LandingPage = () => {
  const hunnit = d3.range(20);

  const svgWidth = 2000;
  const svgHeight = 900;

  const timeRanges = [9000, 14000, 170000, 19000];

  function selectRandomClassName() {
    const circleColors = ["primary", "secondary", "third"];
    const randomIndex = Math.floor(Math.random() * 3);

    return `circle circle_${circleColors[randomIndex]}`;
  }

  const springPluralGroupOne = useSprings(
    hunnit.length,
    hunnit.map((item) => ({
      from: { x: 0, y: 0 },
      to: {
        x: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
        y: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
      },
      config: { duration: timeRanges[0] },
      loop: { reverse: true },
    }))
  );

  const springPluralGroupTwo = useSprings(
    hunnit.length,
    hunnit.map((item) => ({
      from: { x: 0, y: 0 },
      to: {
        x: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
        y: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
      },
      config: { duration: timeRanges[1] },
      loop: { reverse: true },
    }))
  );

  const springPluralGroupThree = useSprings(
    hunnit.length,
    hunnit.map((item) => ({
      from: { x: 0, y: 0 },
      to: {
        x: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
        y: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
      },
      config: { duration: timeRanges[2] },
      loop: { reverse: true },
    }))
  );

  const springPluralGroupFour = useSprings(
    hunnit.length,
    hunnit.map((item) => ({
      from: { x: 0, y: 0 },
      to: {
        x: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
        y: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
      },
      config: { duration: timeRanges[3] },
      loop: { reverse: true },
    }))
  );

  console.log(
    selectRandomClassName(),
    selectRandomClassName(),
    selectRandomClassName()
  );
  function mapOverSprings(inputSpring) {
    return inputSpring.map((el, i) => (
      <animated.circle
        r="40"
        cx={Math.random() * svgWidth}
        cy={Math.random() * svgHeight}
        fill="hsla(335, 0%, 54%, 0.25)"
        key={`circ${Math.random() * 1000}`}
        className={selectRandomClassName()}
        style={el}
      />
    ));
  }

  let circles = mapOverSprings(springPluralGroupOne);
  circles = circles.concat(mapOverSprings(springPluralGroupTwo));
  circles = circles.concat(mapOverSprings(springPluralGroupThree));
  circles = circles.concat(mapOverSprings(springPluralGroupFour));

  return (
    <div id="landingPageContainer">
      <div id="svgContainer">
        <svg
          id="landingBackground"
          // width={`${svgWidth}px`}
          // height={`${svgHeight}px`}
          width="100%"
          height="100%"
          fill="green"
        >
          {circles}
        </svg>
      </div>
      <div id="titleTextContainer">
        <h1 id="landingTextName">Matt Ashford</h1>
        <h1 id="landingTextOuter">
          {" "}
          <span id="landingTextData">Data Analyst</span>
        </h1>
        <h3>Finding hidden patterns in data</h3>
      </div>
    </div>
  );
};

export default LandingPage;
