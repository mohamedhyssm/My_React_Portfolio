import { Hero } from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App
