import React from "react";

export default function Second() {
  return (
    <div>
        <br /><br />
      <div className="container">
        <h4 className="ms-3">My Contacts:</h4>
        <br />
        <ul>
          <li>+92 333-5440844</li>
          <li>wajahathuss17@gmail.com</li>
          <li>Islamabad,Pakistan, 04486</li>
          <li>linkedin.com/in/wajahathussain17</li>
        </ul>
      </div>
      <br />
      <div className="container">
        <h4 className="ms-3">
            Skills:
        </h4>
        <br />
        <ul>
            <li>HTML5</li>
            <li>CSS3/ Bootstrap 5/ Tailwind CSS</li>
            <li>JavaScript/ React JS</li>
            <li>UI/ UX</li>
        </ul>
      </div>
      <br />
      <div className="container">
        <h4>Education:</h4>
        <ol>
            <h6>Primary School:</h6>
            <li>The Educator Rwp</li>
            <h6>2017-2019</h6>
            <h6>Secondary School:</h6>
            <li>Punjab Group of Colleges</li>
            <h6>2019-2021</h6>
            <h6>Bachelors  Degree of Computer Science</h6>
            <li>SZABIST Islamabad</li>
            <h6>2021-Present</h6>
        </ol>
      </div>
    </div>
  );
}