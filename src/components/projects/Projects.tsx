import "./projects.scss"
import { BiWorld, BiCode } from "react-icons/bi"

const Projects = () => {
  return (
    <section className="section projects">
      <h2>Projects</h2>
      <ul className="projects__list">
        <li>
          <h3>Audiophile</h3>
          <img src="audiophile.jpg" loading="lazy" alt="" />
          <p>
            Build using React, TypeScript, Sass, and Redux. The website allows
            users to explore and "purchase" audio products. The cart management
            is handled with redux and allows users to add, remove, and adjust
            the quantity of items in their cart. Uses React Router for
            navigating trough pages, includes form validation at checkout and
            loads data from a JSON file.
          </p>
          <div className="projects__buttons">
            <a
              href="https://szymonstrzelec-audiophile.netlify.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/audiophile"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>

        <li>
          <h3>Dictionary</h3>
          <img src="dictionary.jpg" loading="lazy" alt="" />
          <p>
            Build using React, TypeScript and Sass. Allows users to search for a
            word and fetches the data from the dictionary API. Inclues a
            dark/light theme switch and font selection.
          </p>
          <div className="projects__buttons">
            <a
              href="https://szymonstrzelec-dictionary.netlify.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/dictionary"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>

        <li>
          <h3>Space</h3>
          <img src="space.jpg" loading="lazy" alt="" />
          <p>
            Build using React, TypeScript and Sass. Displays various information
            related to space that are loaded form a JSON file. Uses React Router
            for navigating and Framer Motion for animations.
          </p>
          <div className="projects__buttons">
            <a
              href="https://szymonstrzelec-space.netlify.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/space"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>

        <li>
          <h3>Game Browser</h3>
          <img src="browser.jpg" loading="lazy" alt="" />
          <p>
            Full-Stack game browser app build with React, TypeScript and Sass.
            An express server fetches the data from an API and sends it to the
            frontend.
          </p>
          <div className="projects__buttons">
            <a
              href="https://gamebrowser.up.railway.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/game-browser"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>

        <li>
          <h3>Twitch Clone</h3>
          <img src="twitch.jpg" loading="lazy" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et
            aspernatur, voluptate optio nihil itaque alias reiciendis magni
            dolores vel at iure distinctio dolorem ullam minima! Eaque molestias
            porro incidunt.
          </p>
          <div className="projects__buttons">
            <a
              href="https://szymonstrzelec-twitch.netlify.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/twitchclone"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>

        <li>
          <h3>Memmory Game</h3>
          <img src="memmory.jpg" loading="lazy" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            consectetur accusamus? Voluptates qui numquam nihil molestiae maxime
            cupiditate, tenetur, enim, facilis est modi tempora nam deserunt
            quod reiciendis ipsa repudiandae.
          </p>
          <div className="projects__buttons">
            <a
              href="https://memmorygame.vercel.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/Memmory-Game"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>
        <li>
          <h3>Rot13</h3>
          <img src="rot13.jpg" loading="lazy" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            consectetur accusamus? Voluptates qui numquam nihil molestiae maxime
            cupiditate, tenetur, enim, facilis est modi tempora nam deserunt
            quod reiciendis ipsa repudiandae.
          </p>
          <div className="projects__buttons">
            <a
              href="https://szymonstrzelec-rot13.netlify.app"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/rot13"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>
        <li>
          <h3>Tic Tac Toe</h3>
          <img src="tictactoe.jpg" loading="lazy" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            consectetur accusamus? Voluptates qui numquam nihil molestiae maxime
            cupiditate, tenetur, enim, facilis est modi tempora nam deserunt
            quod reiciendis ipsa repudiandae.
          </p>
          <div className="projects__buttons">
            <a
              href="https://github.com/smn0000/TicTacToe"
              target="_blank"
              className="projects__button"
            >
              <BiWorld />
              Website
            </a>
            <a
              href="https://github.com/smn0000/tictactoe"
              target="_blank"
              className="projects__button"
            >
              <BiCode />
              Code
            </a>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
