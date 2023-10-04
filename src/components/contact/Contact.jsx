import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import '../../components/about/about.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Info</h5>
      <h2>CONTATTI</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option1'>
            <AiOutlineMail  className='about__icon'/>
            <h4>Email</h4>
            <h5>fartade3@gmail.com</h5>
           <a href='mailto:fartade3@gmail.com' target="_blank">Invia e-mail</a>
          </article>

          <article className='contact__option2'>
            <AiOutlineWhatsApp  className='about__icon'/>
            <h4>Whatsapp</h4>
            <h5>3791227150</h5>
           <a href='https://wa.me/3791227150' target="_blank">Scrivimi su Whatsapp</a>
          </article>

          <article className='contact__option3'>
            <AiOutlinePhone  className='about__icon'/>
            <h4>Mobile</h4>
            <h5>3791227150</h5>
           <a href='tel:393791227150' target="_blank">Chiama</a>
          </article>

        </div>      
      </div>
    </section> 
  )
}

export default Contact