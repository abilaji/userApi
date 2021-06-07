import React from 'react'
import Images from '../assets/imgs'

function Footer() {
  return (
    <>
      <footer>
        <div className="warp">
          <div className="foo-style">
          <h2>get in touch</h2>
            <p >For business inquiries, please send an email to :
             <br /> <img className="icon" src={Images.pesanImage} alt="email" /> abilaji96@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
