import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TheWormhole from "./Pages/TheWormhole/TheWormhole";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SocialRobots from "./Pages/SocialRobots/SocialRobots";
import Spaceify from "./Pages/Spaceify/Spaceify";
import Recipeboxd from "./Pages/Recipeboxd/Recipeboxd";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/social-robots">
            <SocialRobots />
          </Route>

          <Route exact path="/the-wormhole">
            <TheWormhole />
          </Route>

          <Route exact path="/spaceify">
            <Spaceify />
          </Route>

          <Route exact path="/recipeboxd">
            <Recipeboxd />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
