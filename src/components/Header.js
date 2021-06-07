import React, {useState} from 'react';
import {ReactComponent as CloseMenu} from '../assets/close.svg';
import {ReactComponent as MenuIcon} from '../assets/menu.svg';
function Header(){
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
          <a href="!#">
            <h2 >digiyouth</h2>
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          
          <li className="option" onClick={closeMobileMenu}>
            <a href="!#">home</a>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <a href="!#">about</a>
          </li>
          
          <li className="option" onClick={closeMobileMenu}>
            <a href="!#">team</a>
          </li>

          <li className="option jsOne" onClick={closeMobileMenu}>
            <a className="jsTwo" href="!#">contact</a>
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

  export default Header;