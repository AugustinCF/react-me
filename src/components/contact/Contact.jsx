import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Cotact me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>fartade3@gmail.com</h5>
           <a href='mailto:fartade3@gmail.com' target="_blank">Send me an email</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp/>
            <h4>Whatsapp</h4>
            <h5>224343245234</h5>
           <a href='mailto:fartade3@gmail.com' target="_blank">Send me an email</a>
          </article>

          <article className='contact__option'>
            <AiOutlinePhone/>
            <h4>Mobile</h4>
            <h5>224343245234</h5>
           <a href='mailto:fartade3@gmail.com' target="_blank">Send me an email</a>
          </article>

        </div>
        <form action="">
          <input type="text" className='name' placeholder='Name' required/> 
          <input  type="email" className='email' placeholder='email' required/> 
          <textarea name="message"   rows="7" placeholder='Message' required>Message</textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section> 
  )
}

export default Contact