import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {MdOutlineContactMail} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'
 
 
const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
 
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><BiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className= {activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a> 
    </nav>
  )
}

export default Nav