import React from "react";

export default function Body() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container text-center">
          <br />
          {/* changes of h5 are required for responsive */}
          <h5 className="my-4">About Me:</h5>   
          <div className="col-12">
            <p className="row">
              Enthusiastic and dedicated university student pursuing a degree
              while honing my skills as a frontend web developer. Eager to
              contribute my creativity and technical expertise to real-world
              projects, while continuously expanding my knowledge in the
              ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container my-4" id="third">
        <h4>Portfolio/Projects:</h4>
        <ul className="links">
          <li>wajahathussain.portfolio.webdev.me</li>
          <li>covid-19/app/vercel.com</li>
          <li>gps-tracker-app/reactjs/codesandbox.io</li>
          <li>codemania.vercel.com</li>
          <li>standard-calculator/reactjs/jsfiddle.com</li>
          <li>codecompany/react/webdev.com</li>
          <li>wajahathussain.portfolio.webdev.me</li>
          <li>covid-19/app/vercel.com</li>
          <li>gps-tracker-app/reactjs/codesandbox.io</li>
          <li>codemania.vercel.com</li>
          <li>standard-calculator/reactjs/jsfiddle.com</li>
          <li>codecompany/react/webdev.com</li>
        </ul>
      </div>
      <br />
      <div className="container" id="fourth">
        <h4>Experience:</h4>
        <ol>
          <li>Interns Pakistan</li>
          <h6>June,2023 - July-2023</h6>
          <li>Lets Grow More</li>
          <h6>August,2023 - September,2023</h6>
          <li>Code Clause</li>
          <h6>Spetember,2023 - Present</h6>
          <li>Code Alpha</li>
          <h6>Spetember,2023 - Present</h6>
          <li>Code Soft</li>
          <h6>Spetember,2023 - Present</h6>
        </ol>
      </div>
    </div>
  );
}