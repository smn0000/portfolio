import "./skills.scss"

import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di"
import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiSass,
  SiGit,
  SiLinux,
} from "react-icons/si"

const Skills = () => {
  return (
    <section className="section skills">
      <h2>My Skills</h2>
      <ul className="skills__list">
        <li>
          <DiHtml5 size={150} />
          <h3>HTML</h3>
        </li>
        <li>
          <DiCss3 size={150} />
          <h3>CSS</h3>
        </li>
        <li>
          <DiJavascript1 size={150} />
          <h3>JavaScript</h3>
        </li>
        <li>
          <SiTypescript size={150} />
          <h3>TypeScript</h3>
        </li>
        <li>
          <SiReact size={150} />
          <h3>React</h3>
        </li>
        <li>
          <SiSass size={150} />
          <h3>Sass</h3>
        </li>
        <li>
          <SiLinux size={150} />
          <h3>Linux</h3>
        </li>
        <li>
          <SiRedux size={150} />
          <h3>Redux</h3>
        </li>
        <li>
          <SiGit size={150} />
          <h3>Git</h3>
        </li>
      </ul>
    </section>
  )
}

export default Skills
