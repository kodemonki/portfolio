import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="Header">
      <p className="Header__left">
        <Link to="/">Portfolio - Thomas Jane</Link>
      </p>
      <p className="Header__right">
        {pathname === "/projects" && (<span className="Header__selected">Projects</span>)}
        {pathname !== "/projects" && <Link to="/projects">Projects</Link>}
        {" - "}
        {pathname === "/experience" && (<span className="Header__selected">Experience</span>)}
        {pathname !== "/experience" && <Link to="/experience">Experience</Link>}
        {" - "}
        {pathname === "/contact" && (<span className="Header__selected">Contact</span>)}
        {pathname !== "/contact" && <Link to="/contact">Contact</Link>}
        {" - "}
        {pathname === "/cv" && (<span className="Header__selected">CV</span>)}
        {pathname !== "/cv" && <Link to="/cv">CV</Link>}
      </p>
    </div>
  );
};

export default Header;
