import "./sass/global.scss"
import "./app.scss"
import Hero from "./components/hero/Hero"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <>
      <Hero />
      <main className="main">
        <Nav />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  )
}

export default App
