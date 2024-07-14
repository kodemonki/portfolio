import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <p className="Header__left">Portfolio - Thomas Jane</p>
      <p className="Header__right">
        <a
          href=""
          onClick={() => {
            navigate("/projects", { replace: true });
          }}
        >
          Projects
        </a>{" "}
        -{" "}
        <a
          href=""
          onClick={() => {
            navigate("/experience", { replace: true });
          }}
        >
          Experience
        </a>{" "}
        -{" "}
        <a
          href=""
          onClick={() => {
            navigate("/contact", { replace: true });
          }}
        >
          Contact
        </a>{" "}
        -{" "}
        <a href="/ThomasJaneCV_2024_july.pdf" download>
          Download&nbsp;CV
        </a>
      </p>
    </div>
  );
};

export default Header;
