import React from 'react'
import './footer.css'
import {FiGithub} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceCircle} from 'react-icons/ai'
import Logo from '../../assets/LOGO.png'

 
 
 const Footer = () => {
   return (
     <footer>
      <a href='#' className='footer__logo'>
        <img src={Logo} alt="" />
      </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className="footer__socials">
      <li><a href="https://www.linkedin.com/in/augustin-fartade-3480931a4/" target="_blank"><AiFillLinkedin/> </a></li>
      <li><a href="https://github.com/AugustinCF" target="_blank"><FiGithub/></a> </li>
      <li> <a href="https://www.behance.net/augustinfartade" target="_blank"><AiFillBehanceCircle/> </a></li>
      </div>
      <div className="footer__copyright">
        <small>&copy; ACF. 2023 </small>
      </div>
     </footer>
   )
 }
 
 export default Footer