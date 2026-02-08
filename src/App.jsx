import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheWormhole from "./Pages/TheWormhole/TheWormhole";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SocialRobots from "./Pages/SocialRobots/SocialRobots";
import Spaceify from "./Pages/Spaceify/Spaceify";
import Recipeboxd from "./Pages/Recipeboxd/Recipeboxd";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/social-robots" element={<SocialRobots />} />
            <Route path="/the-wormhole" element={<TheWormhole />} />
            <Route path="/spaceify" element={<Spaceify />} />
            <Route path="/recipeboxd" element={<Recipeboxd />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
