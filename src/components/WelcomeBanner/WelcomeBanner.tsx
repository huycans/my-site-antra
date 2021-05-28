import React from "react";
import { Link } from "react-router-dom";
import { emptyLink } from "../../utils/utils";
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
              <Link to={emptyLink} className="btn btn-default btn-border">
                Info
              </Link>
            </div>

            <div className="col-sm-1 col-md-1">
              <Link to={emptyLink} className="btn btn-default btn-border">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
