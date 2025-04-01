import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.jpeg";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Bhavesh S Jain</h1>
          <h4>Your Instructor</h4>
          <p>
            Hello! I'm Bhavesh S Jain, a passionate MERN stack developer
            with a love for building scalable, robust and responsive applications.
            My forte encompasses React, Node.js, MongoDB, and Express.js underpinned by certifications in Cloud Foundations and Cloud Architecting by AWS. 
            The commitment to continuous learning and applying novel solutions to real-world problems defines my ethos. 
            I cherish collaborative work, believing it to be the cornerstone of innovative development.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/bhaveshjain2603"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://sbk-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-s-jain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
