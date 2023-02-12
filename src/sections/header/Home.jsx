import React from 'react';
import './Home.css';
import data from './data'
import CV from '../../assets/rickie-CV.pdf'
import {HiDownload} from 'react-icons/hi'

function Home() {
  return (
    <div className='header'>
      <div className='content'>
        <h1>full stack  software Engineer</h1>
        <p> i am Rickie this is my  portiofolio 
          am a front and backend software Engineer.
          </p>
        <p>
          <br></br>
          You are a click away from building your dream website or a web app. Send me
          the details of your project for a modern, mobile responsive, highly
          perfomant website today!
        </p>
        <div className='header__cta'>
          <a href={CV} download className='btn primary'>Download CV<HiDownload/></a>
          <a href='#contact' className='btn light'>Let's Talk</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank"
              rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
