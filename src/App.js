import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import './App.css'
import Navbar from './components/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'


const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
     <Navbar />
       <AnimatedRoutes />
     <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App