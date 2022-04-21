import './style.css'
import { NavLink,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Navbar = () => {
  const [open,setOpen]= useState(false);
  const [screenwidth,setScreenwidth] =useState(0)

  const trackScreenWidth = () =>{
  const width = window.innerWidth;
  setScreenwidth(width);
if (width > 800){
  setOpen(true)
}
  }

  const handleClose = () => {
    if(window.innerWidth < 800){
      setOpen(false)
    }
    }


  useEffect(()=>{
   trackScreenWidth();
   window.addEventListener('resize',trackScreenWidth);
   return ()=>{
     window.removeEventListener("resize",trackScreenWidth)
   }
  },[])
  return (

    <nav className='navbar'>
    <div className="nav-wrapper">
        <div className="logo">
     <Link to='/'>
         <img src={`${process.env.PUBLIC_URL}/aa logo.png`} alt="logo_image" />
     </Link>
        </div>

        <div className="list-wrapper">
   
           
            <img src={`${process.env.PUBLIC_URL}/bars.png.crdownload`} alt="bars" onClick={() =>{ setOpen(!open)}}  style={{opacity: open ? 0 : 1 }}  />
            <img src={`${process.env.PUBLIC_URL}/cross.jpg`} alt="cross"  onClick={() =>{ setOpen(!open)}}      style={{opacity: open ? 1 : 0 }}/>  

            <ul style={{left: open ? "0" : "-100vw"}}>
            <li>  <NavLink  to='/'        style= { ({isActive}) => { return { color: isActive ? "blue" : "black" }}}  onClick={handleClose}>       Home           </NavLink></li>
            <li>  <NavLink to="/about"    style= { ({isActive}) => { return { color: isActive ? "blue" : "black" }}}  onClick={handleClose}>     About       </NavLink></li>
            <li>  <NavLink to="/skills"   style= { ({isActive}) => { return { color: isActive ? "blue" : "black" }}}  onClick={handleClose}>     Skills     </NavLink></li>
            <li>  <NavLink to="/works"    style= { ({isActive}) => { return { color: isActive ? "blue" : "black" }}}  onClick={handleClose}>    Works      </NavLink></li>
            <li>  <NavLink to="/contact"  style= { ({isActive}) => { return { color: isActive ? "blue" : "black" }}}  onClick={handleClose}>    Contact  </NavLink></li>
          </ul>

        </div>
    </div>
    </nav>
      )
}

export default Navbar