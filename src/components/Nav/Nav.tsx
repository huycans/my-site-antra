import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../static/img/logo.svg";

export default function Nav() {
  return (
    <header className="navigation">
      <div className="container-fluid">
        <div className="nav-items row">
          <div className="logo-div col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
          </div>

          <div className="nav-links col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="portfolio">Portfolio</Link>
              </div>
              <div>
                <Link to="contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
