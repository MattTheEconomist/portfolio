import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

// import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <>
      <div id="headerContainer">
        <div className="headerLink" id="headerLinkHome">
          <Link to="landingPageContainer" spy={true} smooth={true}>
            Home
          </Link>
        </div>

        <div className="headerLink" id="headerLinkPortfolio">
          <Link to="portfolioSection" spy={true} smooth={true}>
            Portfolio
          </Link>
        </div>
        <div className="headerLink" id="headerLinkSkills">
          <Link to="skillsSection" spy={true} smooth={true}>
            Skills
          </Link>
        </div>
        <div className="headerLink" id="headerLinkAboutMe">
          <Link to="aboutMeSection" spy={true} smooth={true}>
            About Me
          </Link>
        </div>
        <div className="headerLink" id="headerLinkContact">
          <Link to="contactSection" spy={true} smooth={true}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
