import path from "../../images/path.jpg";
import "./landingPage.css";
import { NavLink } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <h1 className="title">Skart &amp; Sa </h1>
        <h3 className="slogan">all-in-one digital marketing</h3>
      </header>
      <NavLink to="/introduction">
        <button className="konw-more-button" type="button">
          Know more
        </button>
      </NavLink>
      <img className="path-image" src={path} alt="path-in-the-nature" />
    </div>
  );
};

export default LandingPage;
