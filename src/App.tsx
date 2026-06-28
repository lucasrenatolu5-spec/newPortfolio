import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Background from './components/Background/Background'
import Cursor from './components/Cursor/Cursor'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger once fonts/images have settled.
    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <>
      <Cursor />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
