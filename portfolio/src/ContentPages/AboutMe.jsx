import mattImg from "../Design/matt.jpg";
import catImg from "../Design/belly.jpg";

export const AboutMe = () => {
  return (
    <div id="aboutMeSection">
      <h1 className="sectionTitle">About Me</h1>

      <div id="aboutMeText">
        <div id="aboutMeMatt">
          <div id="imgContainerMatt">
            <div id="imgContainerMatt">
              <img src={mattImg} id="mattImg"></img>
            </div>
          </div>
          <div id="paraMattContainer">
            <p className="aboutMePara">
              {" "}
              Hi I’m Matt. I have a Master’s in applied economics from the
              University of Maryland and I love working with data. Every new
              data set has trends and patterns hiding within it waiting to be
              discovered. I like to be creative in my exploration, finding
              trends and patterns that others may miss. Once the patterns are
              discovered, the right visualization can truly make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

{
  /* <div id="catTextContainer">
  <p className="aboutMePara" id="catText">
    {" "}
    When I’m not hammering away at the keyboard, I’m probably hanging out with
    my cat Leroy. He likes to advertise his belly.
  </p>

  <div id="imgContainerCat">
    <img src={catImg} id="catImg"></img>
  </div>
</div>; */
}
