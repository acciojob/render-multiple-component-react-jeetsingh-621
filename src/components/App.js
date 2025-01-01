import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const projects = [
    {
      name: "SocialVeins",
      description: "A platform to connect like-minded people.",
    },
    {
      name: "HealthTrack",
      description: "An app for monitoring and managing personal health.",
    },
    {
      name: "EduLearn",
      description: "An online learning platform for students.",
    },
  ];
  return (
    <div id="main" className="ns-wrapper">
      {projects.map((item, index) => {
        return <div key={index} className="project">
          <h1 data-ns-test="project-name">{item.name}</h1>
          <h6 data-ns-test="project-description">{item.description}</h6>
        </div>;
      })}
    </div>
  );
};

export default App;
