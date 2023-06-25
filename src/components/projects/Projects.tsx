import "./projects.scss"
import { BiWorld, BiCode } from "react-icons/bi"

const Projects = () => {
  return (
    <section className="section projects">
      <h2>Projects</h2>
      <ul className="projects__list">
        <li>
          <h3>Audiophile</h3>
          <div className="project__wrapper">
            <img
              src="quiz.jpg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                Build using React, TypeScript, Sass. A quiz website that uses
                serverless api to get a list of available categories and random
                questions form selected categories
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-quiz.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/quiz"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <h3>Audiophile</h3>
          <div className="project__wrapper">
            <img
              src="Audiophile.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                Build using React, TypeScript, Sass, and Redux. The website
                allows users to explore and "purchase" audio products. The cart
                management is handled with redux and allows users to add,
                remove, and adjust the quantity of items in their cart. Uses
                React Router for navigating trough pages, includes form
                validation at checkout and loads data from a JSON file.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-audiophile.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/audiophile"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <h3>Dictionary</h3>
          <div className="project__wrapper">
            <img
              src="Dictionary.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                Build using React, TypeScript and Sass. Allows users to search
                for a word and fetches the data from the dictionary API. Inclues
                a dark/light theme switch and font selection.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-dictionary.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/dictionary"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <h3>Space</h3>
          <div className="project__wrapper">
            <img
              src="Space.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                Build using React, TypeScript and Sass. Displays various
                information related to space that are loaded form a JSON file.
                Uses React Router for navigating and Framer Motion for
                animations.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-space.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/space"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <h3>Game Browser</h3>
          <div className="project__wrapper">
            <img
              src="Browser.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                A game browser that fetches data from API from an express
                backend server. Also my first project build with typescript and
                sass. I used a react library Framer Motion to animate the
                website.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://gamebrowser.up.railway.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/game-browser"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <h3>Twitch Clone</h3>
          <div className="project__wrapper">
            <img
              src="Twitch.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                A react Twitch UI clone. I wanted to recreate this design to
                learn Tailwind CSS.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-twitch.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/twitchclone"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <h3>Memmory Game</h3>
          <div className="project__wrapper">
            <img
              src="memmory.jpg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                My first React project - a memmory game. Uses vanilla JS to
                generate a set of randomly selected pictures, has a difficulty
                setting and allows users to create a custom sized board up to
                8x8.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://memmorygame.vercel.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/Memmory-Game"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <h3>Rot13</h3>
          <div className="project__wrapper">
            <img
              src="Rot13.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                A ROT13 encoder/decoder, takes an input and an algorythm
                converts it to ROT13/plain text
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-rot13.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/rot13"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <h3>Tic Tac Toe</h3>
          <div className="project__wrapper">
            <img
              src="Tictactoe.jpeg"
              loading="lazy"
              alt=""
              className="project__image"
            />
            <div className="project__left">
              <p className="project__description">
                One of my earlier projects, built with vanilla JS. It's a simple
                Tic-Tac-Toe game.
              </p>

              <div className="projects__buttons">
                <a
                  href="https://szymonstrzelec-tictactoe.netlify.app"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiWorld />
                  Website
                </a>
                <a
                  href="https://github.com/smn0000/tictactoe"
                  target="_blank"
                  className="projects__button"
                  role="button"
                >
                  <BiCode />
                  Code
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
