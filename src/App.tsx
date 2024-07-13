import "./App.css";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="Content">
        <Projects />
      </div>
      <div className="Header">
        <p className="Header__left">Portfolio - Thomas Jane</p>
        <p className="Header__right">
          <a>CV</a> - <a>Projects</a> - <a>Contact</a> -{" "}
          <a href="/ThomasJaneCV_2024_july.pdf" download>
            Click to download CV
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
