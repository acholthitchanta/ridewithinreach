import { Routes, Route } from 'react-router'
import AppNav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurWork from './pages/OurWork.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Donate from './pages/Donate.jsx'
import './styles/custom.scss'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'



function App() {

  useEffect( ()=>{
    const lenis = new Lenis({})

    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafID = requestAnimationFrame(raf)

    return () =>{
      cancelAnimationFrame(rafID)
      lenis.destroy();
    }

  },[])

  return (
    <div>
      <ScrollToTop />
      <AppNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
