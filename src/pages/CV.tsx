import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="Panel__left slide-in-right">
      <div className="CloseBtn">
        <Link to="/">x</Link>
      </div>
      <div className="Card">
        <h2>CV</h2>
        <a href="/ThomasJaneCV_2024_july.pdf" download>
          Download PDF
        </a>
        <br />
      </div>
    </div>
  );
};

export default Contact;
