import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation(); 
    return (
        <AnimatePresence> 
         <Routes location={location} key={location.pathname}>
     
     <Route exact path='/' element={<Home />}/>   
     <Route path='/about'  element={<About />} />
     <Route path='/skills' element= {<Skills />} />
     <Route path='/works' element= {<Projects />} />
     <Route path='/contact' element= {<Contact />} />
     
         </Routes>
     </AnimatePresence>
 
  )
}

export default AnimatedRoutes