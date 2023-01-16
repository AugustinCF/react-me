import React from 'react'
import './about.css'
import ME from '../../assets/aboutme.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
     <section id='about'>
 

      <div className="container about__container">
        <div className="about__me">
          <div className="about__MeImage">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Expreience</h5>
              <small>3+ Years working</small> 
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed projects</small> 
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Skills</h5>
              <small>Develop & Design</small> 
            </article>

            

          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iusto distinctio, assumenda ab vitae consequatur provident. Saepe dolores, ipsam veritatis a, laborum nulla nihil quidem sed iure, inventore blanditiis fugit.
          </p>
            <a href='#' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
     </section> 
  )
}

export default About