import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurWork from './pages/OurWork.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Donate from './pages/Donate.jsx'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/our-work">Our Work</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/donate">Donate</Link>
      </nav>

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
