import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TheWormhole from './Components/TheWormhole/TheWormhole';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import SocialRobots from './Components/SocialRobots/SocialRobots';


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


        </Switch>

      </div>
    </Router>
  );
}

export default App;