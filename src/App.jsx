import { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'
import Projects from './components/projects.jsx'
import About from './components/about.jsx'
import Footer from './components/footer.jsx'
import Experience from './components/experience.jsx'
import './css/app.css'
import './css/bootstrap.min.css'
import './css/unicons.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/tooplate-style.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
