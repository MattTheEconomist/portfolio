import elec from "../Design/electricityImg.PNG";
import service from "../Design/serviceDash2.PNG";
import euro from "../Design/euroMap.PNG";
import housing from "../Design/housing.PNG";
import webScrape from "../Design/webScrape.PNG";

export const Portfolio = () => {
  return (
    <div id="portfolioSection">
      <h1 className="sectionTitle">Portfolio</h1>
      <p id="projectsLive">all projects are live</p>
      <div id="portfolioRowsContainer">
        <div className="rowName">Web Applications </div>
        <div id="projectsRowJs">
          <ProjectCell
            imgFile={elec}
            text={projecTextObj.filter((row) => row.projId === "Infographic")}
          />
          <ProjectCell
            imgFile={service}
            text={projecTextObj.filter((row) => row.projId === "Dashboard")}
          />
          <ProjectCell
            imgFile={euro}
            text={projecTextObj.filter((row) => row.projId === "Map")}
          />
        </div>
        <div className="rowName">Jupyter Notebooks </div>
        <div id="projectsRowPython">
          <ProjectCell
            imgFile={housing}
            text={projecTextObj.filter((row) => row.projId === "Housing")}
          />
          <ProjectCell
            imgFile={webScrape}
            text={projecTextObj.filter((row) => row.projId === "Web Scraping")}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const ProjectCell = (props) => {
  const { imgFile, text } = props;

  const linkAddress = text ? text[0].info.linkAddress : "";

  return (
    <a href={linkAddress}>
      <div className="imgContainerProject">
        <img src={imgFile} className="projectImg"></img>
        <div className="hiddenProjectBox">
          <p className="projectTitle"> {text && text[0].info.projectTitle} </p>
          <br />
          <p> {text && text[0].info.projText}</p>
        </div>
      </div>
    </a>
  );
};

const projecTextObj = [
  {
    projId: "Dashboard",
    info: {
      linkAddress: "https://matttheeconomist.github.io/dash-deploy/",
      projectTitle: "Dashboard",
      projText:
        "Dashboard showing USPS service performance. Currently used by the Postal Regulatory Commission!",
    },
  },
  {
    projId: "Infographic",
    info: {
      linkAddress:
        "https://matttheeconomist.github.io/electricity-force-deploy/",
      projectTitle: "Infographic",
      projText: "Interactive viz showing US energy production ",
    },
  },
  {
    projId: "Map",
    info: {
      linkAddress: "https://matttheeconomist.github.io/dash-deploy/",
      projectTitle: "Map",
      projText:
        "Interactive map showing international trade in the European Union ",
    },
  },
  {
    projId: "Housing",
    info: {
      linkAddress:
        "https://nbviewer.org/github/MattTheEconomist/Machine_Learning_Housing_Prices/blob/main/Analysis.ipynb",
      projectTitle: "Machine Learning",
      projText:
        "Analysis using machine learning to predict housing prices in Melbourne",
    },
  },
  {
    projId: "Web Scraping",
    info: {
      linkAddress:
        "https://nbviewer.org/github/MattTheEconomist/webscrape2/blob/main/Web%20Scraping%20Financial%20Data%202.ipynb",
      projectTitle: "Web Scraping",
      projText: "Web Scraping Yahoo Finance to analyze stock information",
    },
  },
];
