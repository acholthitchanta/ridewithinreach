import { Routes, Route } from 'react-router'
import AppNav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurWork from './pages/OurWork.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Donate from './pages/Donate.jsx'

function App() {
  return (
    <div>
      <AppNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  )
}

export default App
