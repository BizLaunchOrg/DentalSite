import type { FC } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Invisalign from './pages/Services/Invisalign'
import Results from './pages/Results/Results'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import Branches from './pages/Branches/Branches'
import Booking from './pages/Booking/Booking'

const ScrollToTop: FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/invisalign" element={<Invisalign />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
