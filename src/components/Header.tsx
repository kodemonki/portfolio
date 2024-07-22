import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <p className="Header__left">
        <Link to="/">Portfolio - Thomas Jane</Link>
      </p>
      <p className="Header__right">
        <Link to="/projects">Projects</Link>
        {" - "}
        <Link to="/experience">Experience</Link>
        {" - "}
        <Link to="/contact">Contact</Link>
        {" - "}
        <Link to="/cv">CV</Link>
      </p>
    </div>
  );
};

export default Header;
