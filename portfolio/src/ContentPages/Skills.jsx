export const Skills = () => {
  return (
    <div id="skillsSection" style={{ height: "500px" }}>
      <h1 className="sectionTitle">Skills</h1>

      <div id="skillCardsContainer">
        <div className="skillCard">
          <div className="skillIconContainer">skill icon</div>
          <h3 className="skillTitle">Data Management</h3>
          <ul className="skillList">
            <li className="skillListItem">
              Compiling data sets from disparate sources, such as APIs, SQL
              databases, web-scraping, and excel spreadsheets.
            </li>
            <li className="skillListItem">
              Clean data and reformat to prepare for analysis
            </li>
            <li className="skillListItem">
              Develop processes to automate data collection using Python and
              Power Query
            </li>
          </ul>
        </div>
        <div className="skillCard">
          <div className="skillIconContainer">skill icon</div>
          <h3 className="skillTitle">Data Exploration</h3>
          <ul className="skillList">
            <li className="skillListItem">
              Look for trends and patterns in data using Python
            </li>
            <li className="skillListItem">
              Make predictions using the latest machine learning algorithms
            </li>
            <li className="skillListItem">
              Find hidden relationships between variables
            </li>
          </ul>
        </div>
        <div className="skillCard">
          <div className="skillIconContainer">skill icon</div>
          <h3 className="skillTitle">Data Viz</h3>
          <ul className="skillList">
            <li className="skillListItem">
              Develop dashboards using React.js to give users the ability to
              drill down into data
            </li>
            <li className="skillListItem">
              Develop interactive infographics using D3.js to express findings
              in an impactful way
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
