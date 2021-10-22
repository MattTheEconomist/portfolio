import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" redner={() => LandingPage} />
        <Route
          exact
          path="/portfolio"
          // render={() => Portfolio}
          component={Portfolio}
        />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>

      <div id="headerContainer">
        <div className="headerLink" id="headerLinkHome">
          Home
        </div>
        <Link className="headerLink" id="headerLinkPortfolio" to="/portfolio">
          Portfolio
        </Link>
        <div className="headerLink" id="headerLinkSkills">
          Skills
        </div>
        <div className="headerLink" id="headerLinkAboutMe">
          About Me
        </div>
        <div className="headerLink" id="headerLinkContact">
          Contact
        </div>
      </div>
    </>
  );
};

export default Header;
