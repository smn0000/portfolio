import "./about.scss"
import { BiDownload } from "react-icons/bi"
const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about__left">
        <h2>About me</h2>
        <p>
          Hey, I'm a front-end developer living in Poland. I graduated from a
          technical school with an IT technician title. When I'm not coding, you
          can find me playing Path of Exile or shooting hoops on the basketball
          court. I got interested in web development during school, and I've
          been hooked ever since. I love learning new skills and staying
          up-to-date in this ever-evolving field.
        </p>
        <a href="resume.pdf" download className="download__btn">
          <BiDownload size={30} />
          <span>Resume</span>
        </a>
      </div>
      <div className="about__right"></div>
    </section>
  )
}

export default About
