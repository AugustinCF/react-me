import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://bihance.com" target="_blank"><AiFillBehanceCircle/></a>
    </div>
  )
}

export default HeaderSocials