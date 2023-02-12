import React from 'react'
import './AboutMe.css'
import img from '../assets/img1.jpg'
import im3 from '../assets/img3.jpg'
import im4 from '../assets/im4.jpg'


function AboutMe() {
   return (
      <div className='me'>
         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img src={img} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <p><h1>What makes me different?</h1>
                  <h3>My Skills</h3>
                  We all have our strengths. I’ve perfected
                  mine <br></br>so you can focus on yours. Get in touch
                  to find <br></br>out how I can help.</p>
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <p><h3>My Values</h3>
                  I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know that I can deliver great results.
                  </p>
            </div>
         </div>

         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img src={im3} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img src={im4} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <p>
                  <h3>My Clients</h3>
                  Because I'm experienced, reliable,
                  and focused on results, I've had the
                  privilege of working with a host of fantastic clients.</p>
            </div>
         </div>
      </div>
   )
}

export default AboutMe;