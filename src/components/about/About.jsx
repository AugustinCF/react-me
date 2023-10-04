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
              <h5>Esperienza</h5>
              <small>Più di 3 anni di lavoro</small> 
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Progetti</h5>
              <small>Oltre 50 progetti completati</small> 
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Skills</h5>
              <small>Develop & Design</small> 
            </article>

            

          </div>
          <p>
          Ciao, il mio nome è Augustin, sono esperto nello sviluppo e nella progettazione web-app. I miei  linguaggi preferiti sono PHP e Python. Mi piace sviluppare sia il front-end che il back-end e cerco costantemente di migliorare le mie competenze e di rimanere aggiornato con le tendenze e le migliori pratiche del settore, il che mi rende un valore aggiunto per qualsiasi progetto.
          </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
     </section> 
  )
}

export default About