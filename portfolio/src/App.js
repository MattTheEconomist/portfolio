import "./App.css";
import LandingPage from "./ContentPages/LandingPage";
import Header from "./ContentPages/Header";
import AboutMe from "./ContentPages/AboutMe";
import Portfolio from "./ContentPages/Portfolio";
import Skills from "./ContentPages/Skills";

import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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

      <div className="App">
        <Header />
        <LandingPage />
        <Portfolio />
        <AboutMe />
        <Skills />
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import { Home } from './views/Home';
// import { About } from './views/About';
// import { NavBar } from './components/NavBar';
// import { Route, Switch, Redirect } from 'react-router-dom';

// export const Routes = () => {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/">
//           <Redirect to="/Home" />
//         </Route>
//         <Route exact path="/About" component={About} />
//       </Switch>
//     </div>
//   );
// };
