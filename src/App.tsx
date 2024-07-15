import "./css/App.css";
import "./css/Game.css";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Game from "./components/Game";

const App = () => {
  return (
    <>
      <Game />
      <Router>
        <Routes>
          <Route path="/" Component={Projects} />
          <Route path="/projects" Component={Projects} />
          <Route path="/experience" Component={Experience} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <Header />
      </Router>
    </>
  );
};

export default App;
