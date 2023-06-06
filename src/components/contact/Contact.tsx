import "./contact.scss"
import { RxEnvelopeClosed } from "react-icons/rx"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Contact = () => {
  return (
    <footer className="contact">
      <div className="contact__left">
        <h2>Contact Me</h2>
        <h3>I'll make sure to get back to you as soon as possible</h3>
      </div>

      <div className="contact__right">
        <p className="contact__row">
          <span className="contact__subtitle">
            <RxEnvelopeClosed size={30} />
          </span>
          strzelecszymon.3@gmail.com
        </p>
        <p className="contact__row">
          <a
            href="https://www.linkedin.com/in/szymon-strzelec-851a00268/"
            target="_blank"
          >
            <AiFillLinkedin size={40} />
          </a>
          <a href="https://github.com/smn0000" target="_blank">
            <AiFillGithub size={40} />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Contact
