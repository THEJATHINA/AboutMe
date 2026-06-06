import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import QuickSnapshot from './components/QuickSnapshot'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Achievements from './components/Achievements'
import ResumeHighlights from './components/ResumeHighlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <QuickSnapshot />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Achievements />
        <ResumeHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
