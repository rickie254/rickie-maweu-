import React, { Fragment, useEffect } from 'react'
import person2 from "../../assets/meag.jpeg"
import './about.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease" })
  })
  return (

    <section className="about" id='about'>


      <div data-aos="fade-left" className="about-column">
        <div className="about-text">
          <div className="about-tittle">
            <h2>Hello, My Name Is  <span> Rickie Maweu  </span></h2>
          </div>
          <p>
            I am a Fullstack web developer from Nairobi, Kenya.
             I am Tech enthusiast and an  kinda a Engineering geek. I am passionate About
            web development, Cloud computing and I also 
            like gaming .
          </p>
        </div>
      </div>
      <div data-aos="fade-right" className="about-column">
        <div className="about-pic">
          <img src={person2} alt="Person" />
        </div>
      </div>
    </section>
  )
}

export default About