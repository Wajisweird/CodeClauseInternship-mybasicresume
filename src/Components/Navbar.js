import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* changes are required */}
      <nav className="navbar bg-warning">
        <div className="container-fluid">
          <div className="container" id="myname">
            <h3 className="navbar-brand">QAZI WAJAHAT HUSSAIN</h3>
            <h6 className="ms-4">Front-End Web Developer</h6>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container" id="pic">
            {/* <img src="/src/dp.jpeg" alt="" /> */}
            <br />
          </div>
        </div>
      </nav>
    </div>
  );
}