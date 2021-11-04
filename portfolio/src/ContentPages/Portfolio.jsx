import elec from "../Design/electricityImg.PNG";
import service from "../Design/serviceDash2.PNG";
import euro from "../Design/euroMap.PNG";
import housing from "../Design/housing.PNG";
// import hostile from "../Design/hostile.PNG";

export const Portfolio = () => {
  return (
    <div id="portfolioSection">
      <h1 className="sectionTitle">Portfolio</h1>
      <div id="portfolioRowsContainer">
        <div className="rowName">Web Applications </div>
        <div id="projectsRowJs">
          <ProjectCell imgFile={elec} />
          <ProjectCell imgFile={service} />
          <ProjectCell imgFile={euro} />
        </div>
        <div className="rowName">Jupyter Notebooks </div>
        <div id="projectsRowPython">
          <ProjectCell imgFile={housing} />
          <ProjectCell imgFile={housing} />
          {/* <ProjectCell imgFile={hostile} /> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const ProjectCell = (props) => {
  const { imgFile } = props;

  return (
    <div className="imgContainerProject ">
      <img src={imgFile} className="projectImg"></img>
    </div>
  );
};
