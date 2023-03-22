import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Projects } from "./data/projectList";
import { Card } from "./components/Card.js";
import NB2 from "./components/NB2";
import NavItem from "./components/NavItem";
import inPic from "./assets/In-White-34px-R.png";
import githubPic from "./assets/GitHub-Mark-Light-32px.png";
import resume from "./assets/resume-icon-white.png";

function App() {
  return (
    <>
      <NB2>
        <NavItem link="https://codewilling.github.io/resume/" image={resume}>
          Resume
        </NavItem>
        <NavItem
          link="https://www.linkedin.com/in/sean-flores"
          image={inPic}
        ></NavItem>
        <NavItem
          link="https://www.github.com/codewilling"
          image={githubPic}
        ></NavItem>
      </NB2>
      <Main />
      {/* <Opener /> */}
      <div className="projectContainer">
        {Projects.map((project, i) => (
          <Card project={project} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
