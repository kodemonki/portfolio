import "./App.css";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
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
