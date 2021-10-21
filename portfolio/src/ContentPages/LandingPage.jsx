import * as d3 from "d3";
import { useEffect, useState } from "react";
import { useSprings, useSpring, animated, to } from "react-spring";

export const LandingPage = () => {
  const [mousePoz, setMousePoz] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(Date.now());

  const hunnit = d3.range(50);

  let springPlural = useSprings(
    hunnit.length,
    hunnit.map((item) => ({
      from: { x: 0, y: 0 },
      to: {
        x: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
        y: Math.random() * 10 * item * 10 * (Math.random() - 0.5),
      },
      config: { duration: 20000 },
      loop: { reverse: true },
    }))
  );

  const circles = springPlural.map((el, i) => (
    <animated.circle
      r="30"
      cx={Math.random() * 50 * i}
      cy={Math.random() * 50 * i}
      fill="grey"
      id={`circle_${i}`}
      key={`circle_${i}`}
      className="circle"
      style={el}
    />
  ));

  return (
    <div id="titleTextContainer">
      <h1 id="landingTextName">Matt is my Name</h1>
      <h1 id="landingTextOuter">
        {" "}
        <span id="landingTextData">Data Viz</span> is my game
      </h1>

      <svg id="landingBackground" width="1200px" height="1200px">
        {circles}
      </svg>
    </div>
  );
};

export default LandingPage;

// useEffect(() => {
//   drawSquare();
// }, []);

// useEffect(() => {
//   moveDot();
// }, [mousePoz]);

// const svgSelection = d3.select("#landingBackground");
// const fullWidth = 400;
// const fullHeight = 400;
// const marginSides = 20;
// const marginTop = 20;
// const marginBetweenGraphs = 200;

// function drawSquare() {
//   d3.select("#landingBackground")
//     .selectAll(".square")
//     .data([1])
//     .enter()
//     .append("rect")
//     .attr("x", 100)
//     .attr("y", 100)
//     .attr("width", 100)
//     .attr("height", 100)
//     .attr("fill", "grey")
//     .attr("class", "square")
//     .transition()
//     .duration(2000)
//     .attr("transform", "translate(0,0) rotate(30)");
//   // .transform("translate(0,0) rotate(180)");
// }
