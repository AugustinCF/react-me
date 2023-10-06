import React from 'react'
import CV from "../../assets/cv-Augustin-Fartade - ENG.pdf"
import CV1 from "../../assets/cv Augustin Fartade.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={CV} className="btn  ">View CV - ENG</a>
        <a href={CV1} className="btn  ">View CV - ITA</a> */}
        <a href='#contact' className='btn '>Let's Talk</a>   
    </div>
  )
}

export default CTA