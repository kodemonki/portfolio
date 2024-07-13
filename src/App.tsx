import "./App.css";
import Projects from "./components/Projects";

const App = () => {
 
  return (
    <>      
      <div className="Content">
        <Projects />
      </div>
      <div className="Header">
        <p className="Header__P">Portfolio - Thomas Jane</p>
      </div>
      <div className="Footer">
        <p className="Footer__P">Contact - <a className="DownloadCVLink" href='/ThomasJaneCV_2024_july.pdf' download>Click to download CV</a></p>
      </div>
    </>
  );
};

export default App;
