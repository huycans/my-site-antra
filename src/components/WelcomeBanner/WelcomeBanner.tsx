import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./welcomebanner.css";

export default function WelcomeBanner() {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="entry-banner text-center">
            <h1 id="hello">Hello, I'm</h1>
            <h1 id="name">XXXX</h1>
            <h1 id="person-description">
              UI Developer. UX Desinger. Problem Solver.
            </h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="banner-buttons">
            <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
              <HashLink
                smooth
                to="/#about"
                className="btn btn-default btn-border"
              >
                Info
              </HashLink>
            </div>

            <div className="col-sm-1 col-md-1">
              <HashLink
                smooth
                to="/#projects"
                className="btn btn-default btn-border"
              >
                Portfolio
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
