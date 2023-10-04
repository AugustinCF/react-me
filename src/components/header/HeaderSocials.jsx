import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/augustin-fartade-3480931a4/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/AugustinCF" target="_blank"><FiGithub/></a>
        <a href="https://www.behance.net/augustinfartade" target="_blank"><AiFillBehanceCircle/></a>
    </div>
  )
}

export default HeaderSocials