import React from 'react'
import './Contact.css' 
import { assets } from '../../assets/assets/assets'

import bg from '../../assets/bggood.png'

export const Contact = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
      <div className="footer-left">
          <img className='loog' src={bg} alt="" />
          <p>Cinch provides customised Ai solutions for streamlining your business operations!
          </p>
          <div className="footer-social-icon">
            <a href="https://www.facebook.com/profile.php?id=100011141617447" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="Facebook" />
             </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="Twitter" />
                 </a>
                 <a href="https://www.linkedin.com/in/srikrishna-hireholi/" target="_blank" rel="noopener noreferrer">
                   <img src={assets.linkedin_icon} alt="LinkedIn" />
                     </a>
          </div>
      </div>
      <div className="footer-centre">
          <h2>COMPANY</h2>
          <ul>
              <li>Home</li>
              <li>Motive</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Testimony</li>
              <li>Privacy Policy</li>  
          </ul>
      </div>        
      <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
              <li>+91 9019755311</li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" > <li>srikrishnanfs@gmail.com</li> </a>
          </ul>
      </div>

    </div>
    <hr />
    <p className='footer-copyright'>
    Copyright 2024. All rights reserved.
    </p>
  </div>
  )
}
