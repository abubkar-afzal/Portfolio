import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Experience from "./components/experience";
import Skill from "./components/skill";
import Projects from "./components/projects";
import Education from "./components/education";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
export default function Home() {
    return(<>
    {/* all pages will render there */}
    <div >
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skill/>
      <Projects/>
      <Education/>
      <Blogs/>
      <Contact/>
    </div>
    </>)
}
