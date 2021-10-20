import * as d3 from "d3";
import { useEffect, useState } from "react";
import scatterData from "../Data/scatterData.json";

export const LandingPage = () => {
  const [mousePoz, setMousePoz] = useState({ x: 0, y: 0 });

  useEffect(() => {
    drawAxes();
    drawDots();
  }, []);

  useEffect(() => {
    moveDot();
  }, [mousePoz]);

  const svgSelection = d3.select("#landingBackground");
  const fullWidth = 400;
  const fullHeight = 400;
  const marginSides = 20;
  const marginTop = 20;
  const marginBetweenGraphs = 200;

  const graphHeight = fullHeight - marginTop;
  const graphWidth = fullWidth - marginSides;

  const rightGraphXPush = graphWidth + marginBetweenGraphs;

  const inputVals = scatterData.map((row) => row.input);
  const outputOneVals = scatterData.map((row) => row.output1);
  const outputTwoVals = scatterData.map((row) => row.output2);

  const combinedOutputs = outputOneVals.concat(outputTwoVals);

  const xScale = d3
    .scaleLinear()
    .domain([d3.min(inputVals), d3.max(inputVals)])
    .range([marginSides, graphWidth]);

  //   console.log(d3.max(combinedOutputs));

  const yScale = d3
    .scaleLinear()
    .domain([d3.min(combinedOutputs), d3.max(combinedOutputs)])
    .range([marginTop, graphHeight]);

  const axisData = [
    {
      x1: marginSides,
      x2: marginSides,
      y1: marginTop,
      y2: graphHeight,
    },
    {
      x1: marginSides,
      x2: graphWidth,
      y1: graphHeight,
      y2: graphHeight,
    },
    {
      x1: marginSides + rightGraphXPush,
      x2: marginSides + rightGraphXPush,
      y1: marginTop,
      y2: graphHeight,
    },
    {
      x1: marginSides + rightGraphXPush,
      x2: graphWidth + rightGraphXPush,
      y1: graphHeight,
      y2: graphHeight,
    },
  ];

  function drawAxes() {
    d3.select("#landingBackground")
      .selectAll(".axisLine")
      .data(axisData)
      .enter()
      .append("line")
      .attr("x1", (d) => d.x1)
      .attr("x2", (d) => d.x2)
      .attr("y1", (d) => d.y1)
      .attr("y2", (d) => d.y2)
      .attr("stroke", "grey")
      .attr("stroke-width", 2)
      .attr("class", "axisLine");
  }

  function drawDots() {
    d3.select("#landingBackground")
      .selectAll(".dot")
      .data(scatterData)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.input))
      .attr("cy", (d) => yScale(d.output1))
      .attr("r", 1.5)
      .attr("id", (d, i) => `dot${i}`)
      .style("fill", "grey")
      .attr("class", "dot");
  }

  function moveDot() {
    let xPoz = mousePoz.x;

    if (xPoz > 100) {
      xPoz = 100;
    }
    if (xPoz === 0) {
      xPoz = 1;
    }

    // const dotSelection = d3.select(`#dot${xPoz}`);
    const dotSelection = d3.select("#dot50");

    console.log(`#dot${xPoz}`);

    // d3.select(dotSelection)
    d3.selectAll(".dot")
      .transition()
      .duration(500)
      //   .style("fill", "red");
      .attr("cx", xPoz);
  }

  function mouseMoveEvent(e) {
    setMousePoz({ x: e.clientX, y: e.clientY });
  }

  return (
    <div id="titleTextContainer" onMouseMove={mouseMoveEvent}>
      <h1 id="landingTextName">Matt is my Name</h1>
      <h1 id="landingTextOuter">
        {" "}
        <span id="landingTextData">Data Viz</span> is my game
      </h1>
      <svg id="landingBackground" width="1200px" height="400px"></svg>

      <h2>
        {mousePoz.x}, {mousePoz.y}
      </h2>
    </div>
  );
};

export default LandingPage;
