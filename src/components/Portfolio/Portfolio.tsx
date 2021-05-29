import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { emptyLink } from "../../utils/utils";
import "./portfolio.css";

const projectData = [
  {
    title: "LUV TALK Website",
    description:
      "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.",
    link: "",
    className: "luvtalk-project",
  },
  {
    title: "Personal Website",
    description:
      "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests",
    link: "",
    className: "personal-website-project",
  },
  {
    title: "Strike Zone Analysis",
    description:
      "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
    link: "",
    className: "strike-zone-project",
  },
];

export default function Portfolio() {
  //an array that keep refs to the projects
  const projectRefs = useRef(new Array());

  //display the projects
  const projectDisplay = projectData.map((project) => {
    const link = project.link !== "" ? project.link : emptyLink;
    return (
      <div key={project.title} className="col-sm-4 col-md-4 text-center">
        <div
          ref={(projectRef) => projectRefs.current.push(projectRef)}
          className={project.className}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="row">
            <Link
              to={link}
              className="project-more-btn btn btn-default btn-border"
            >
              More
            </Link>
          </div>
        </div>
      </div>
    );
  });

  //effect that will run after rendering, so that projects's heights are available
  useEffect(() => {
    console.log("projectRefs.current", projectRefs.current);
    if (projectRefs.current.length !== 0) {
      let maxHeight = 0;
      let maxRef: null | JSX.IntrinsicElements = null;
      //find the tallest project element
      projectRefs.current.forEach((ref) => {
        if (maxHeight < ref.offsetHeight) maxHeight = ref.offsetHeight;
        maxRef = ref;
      });

      //set all project elements to maxHeight
      projectRefs.current.forEach((ref) => {
        ref.style.minHeight = maxHeight + 1 + "px";
      });
    }
  });

  return (
    <div className="projects" id="projects">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="projects-header">
              <h1>Projects and Portfolio</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="projects-header-quote">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>
        </div>

        <div className="row">{projectDisplay}</div>

        <div className="row">
          <div className="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
            <div className="see-more-button">
              <Link
                to={emptyLink}
                className="btn btn-default btn-border"
                href="#"
              >
                More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
