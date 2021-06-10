import React, {useState} from 'react'
import {ReactComponent as CloseMenu} from '../assets/close.svg'
import {ReactComponent as MenuIcon} from '../assets/menu.svg'
import {HashLink as Link} from 'react-router-hash-link'
// import {Link} from 'react-router-dom'

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick  = () => setClick(!click);
  const closeMobileMenu  = () => setClick(false);
  const [navbar,setNavber] = useState(false);
  const changeNavbar = () => {
    if(window.scrollY >= 80 ){
      setNavber(true);
    } else {
      setNavber(false);
    }
  };

  window.addEventListener('scroll', changeNavbar);
  
  return (
    <>
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="logo-nav">
        <div className="logo">
          <a href="#home">
            <h2 >digiyouth</h2>
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          
          <li className="option" onClick={closeMobileMenu}>
            <Link smooth to="#home">Home </Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link smooth to="#about">About </Link>
          </li>
          
          <li className="option" onClick={closeMobileMenu}>
            <Link smooth to="#team">Team </Link>
          </li>

          <li className="option jsOne" onClick={closeMobileMenu}>
            <Link smooth to="#contact">contact</Link>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
    < />
    )
  }

  export default Navbar;