import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="Panel__right slide-in-left">
      <div className="CloseBtn">
        <Link to="/">x</Link>
      </div>
      <div className="Card">
        <h2>Contact</h2>
        Email : <a href="mailto:kodemonki@hotmail.com">kodemonki@hotmail.com</a>
        <br />
        Linkedin :{" "}
        <a href="https://www.linkedin.com/in/tomjane/">
          www.linkedin.com/in/tomjane/
        </a>
        <br />
        Github :{" "}
        <a href="https://github.com/kodemonki">github.com/kodemonki</a>
        <br />
      </div>
    </div>
  );
};

export default Contact;
