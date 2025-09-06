import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"

import Project from "./components/Project"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Achievement from "./components/Achievement"
import { Routes, Route, useLocation } from "react-router-dom"
import ProjectDetail from "./pages/ProjectDetail"
import BrandHeader from "./components/BrandHeader"
import { useEffect } from "react"


function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return (
    <>
     <Routes>
      <Route path="/" element={
        <>
          <Navbar/>
          <Header/>
          <About/>
          <Services/>

          <Project/>
          <Review/>
          <Contact/>
          <Footer/>
        </>
      }/>
      <Route path="/projects/:slug" element={
        <>
          <BrandHeader/>
          <ProjectDetail/>
          <Footer/>
        </>
      } />
     </Routes>
    </>
  )
}

export default App
