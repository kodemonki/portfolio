import { Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="Header">
      <p className="Header__left">Portfolio - Thomas Jane</p>
      <p className="Header__right">
        <Link to="/projects">projects</Link>
        <Link to="/experience">experience</Link>
        <Link to="/contact">contact</Link>
        <a href="/ThomasJaneCV_2024_july.pdf" download>
          Download&nbsp;CV
        </a>
      </p>
    </div>
  );
};

export default Header;
