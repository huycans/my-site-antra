import React from "react";
import { Link } from "react-router-dom";
import fb_svg from "../static/img/facebook.svg";
import lk_svg from "../static/img/linkedin.svg";
import pt_svg from "../static/img/pinterest.svg";
import em_svg from "../static/img/email.svg";

import { emptyLink } from "../../utils/utils";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="media-links">
            <div className="col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
              <div className="facebook">
                <Link to={emptyLink}>
                  <img className="img-responsive" src={fb_svg} />
                </Link>
              </div>
            </div>

            <div className="col-sm-1 col-md-1">
              <div className="linkedin">
                <Link to={emptyLink}>
                  <img className="img-responsive" src={lk_svg} />
                </Link>
              </div>
            </div>

            <div className="col-sm-1 col-md-1">
              <div className="pinterest">
                <Link to={emptyLink}>
                  <img className="img-responsive" src={pt_svg} />
                </Link>
              </div>
            </div>

            <div className="col-sm-1 col-md-1">
              <div className="email-icon">
                <Link to={emptyLink}>
                  <img className="img-responsive" src={em_svg} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 text-right">
            <div className="personal-contact phone">
              <h4>Phone: XXXXXX</h4>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 text-left">
            <div className="personal-contact email-personal-contact">
              <h4>Email: XXXXX@gmail.com</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-4 text-center">
            <div className="company-information">
              <h3>XXXX</h3>
              <h4>Copyright &copy; 2021</h4>
              <h4>NY</h4>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="home-footer">
              <h4>
                <Link to="/">Home</Link>
              </h4>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="portfolio-footer">
              <h4>
                <Link to="/portfolio">Portfolio</Link>
              </h4>
              <ul>
                <li>
                  <Link to={emptyLink}>Project1</Link>
                </li>
                <li>
                  <Link to={emptyLink}>Project2</Link>
                </li>
                <li>
                  <Link to={emptyLink}>Project3</Link>
                </li>
                <li>
                  <Link to={emptyLink}>See All</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="resume-footer">
              <h4>
                <Link to={emptyLink}>Resume</Link>
              </h4>
              <ul>
                <li>
                  <Link to={emptyLink}>Download</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="contact-footer">
              <h4>
                <Link to="contact">Contact</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
