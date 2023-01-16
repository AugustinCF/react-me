import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineProject} from 'react-icons/ai'
import {SiFuturelearn} from 'react-icons/si'
import {MdMiscellaneousServices} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'
 
const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
 
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><BiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineProject/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><SiFuturelearn/></a>
      <a href='#services'onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a> 
      <a href='#contact'onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><AiOutlineUser/></a> 
    </nav>
  )
}

export default Nav