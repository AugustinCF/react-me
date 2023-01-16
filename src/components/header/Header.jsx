import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
     <header>
      <div className="container header__container">
        <h5>Hello is me</h5>
        <h1>Augustin</h1>
         <h5 className="text-light">Im Fullstack Developer</h5>
         <CTA/>
         <HeaderSocials/>

         <div className="me">
          <img  src={ME} alt="" />
         </div>
      </div>

      <a href='#contact' className='scroll__down'>Scroll down</a>
      
     </header>

  )
}

export default Header