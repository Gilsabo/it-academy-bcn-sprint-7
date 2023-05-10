import { NavLink } from "react-router-dom";
import nature from "../../images/nature.jpg";
import seo from "../../images/seo.svg";
import website from "../../images/website.svg";
import ads from "../../images/ads.svg";

import "./Introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="container-introduction">
        <div className="container-left">
          <h1 className="title-introduction">Skart &amp; Sa</h1>
          <h3 className="text-introduction">
            is a company that specializes in providing top-notch services to
            boost your online presence and drive traffic to your website. Our
            team has over 10 years of experience in the industry and is
            dedicated to delivering exceptional results to our clients.
          </h3>
        </div>
        <div className="container-right">
          <div className="box-services">
            <div className="service">
              <div className="website">
                <div className="header">webiste creation</div>
                <img
                  className="image-services"
                  src={website}
                  alt="website-icon"
                />
              </div>
              <ul>
                <li>Customized and modern website design</li>
                <li>Responsive and mobile-friendly design</li>
                <li>User-friendly navigation and intuitive user interface</li>
                <li>
                  Customizable website package based on the number <br /> of
                  pages and languages required
                </li>
              </ul>
            </div>
            <div className="service">
              <div className="seo">
                <div className="header">seo service</div>
                <img className="image-services" src={seo} alt="seo-icon" />
              </div>

              <ul>
                <li>Keyword research and analysis</li>
                <li>
                  On-page optimization, including title tags, <br /> meta
                  descriptions, and header tags{" "}
                </li>
                <li>
                  Off-page optimization, including link <br /> building and
                  social media marketing
                </li>
                <li>
                  Performance tracking and reporting <br /> with Google
                  Analytics
                </li>
              </ul>
            </div>
            <div className="service">
              <div className="ads">
                <div className="header">google ads</div>
                <img className="image-services" src={ads} alt="ads-icon" />
              </div>
              <ul>
                <li>Ad campaign setup and management</li>
                <li>Keyword research and selection</li>
                <li>Ad copywriting and A/B testing</li>
                <li>
                  Performance tracking and reporting with Google <br /> Ads and Google
                  Analytics
                </li>
              </ul>
            </div>
          </div>
          <NavLink className="link-calculation" to="/calculation">
            calculate budget for all-in-one digital marketing
          </NavLink>
        </div>
        <img
          className="nature-with-laptop"
          src={nature}
          alt="nature-with-laptop"
        />
      </div>
    </>
  );
};

export default Introduction;
