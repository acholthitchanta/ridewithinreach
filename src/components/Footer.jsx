import React from 'react'

import instagram from '../assets/logos/instagram.svg'
import linkedin from '../assets/logos/linkedin.svg'
import logo from '/public/logolong.png'
import image from '../assets/images/footer.jpg'


export default function Footer() {
  return (
    <footer className="light-green section">
        <div className="footer-content">
            <img src={logo} width="500px" />
            <div className="footer-columns">
                <div className="contact">
                    <h3>CONTACT US</h3>
                    <div className="contact-info">
                        <p>Fayetteville, Arkansas</p>
                        <p><a href="tel:+14695070024">+1 (469) 507-0024</a></p>
                        <p><a href="mailto:contact@ridewithinreach.org">contact@ridewithinreach.org</a></p>
                    </div>
                </div>

                <div className="contact">
                    <h3>EXPLORE</h3>
                    <div className="links">
                        <p><a>Meet the Team</a></p>
                        <p><a>What We Do</a></p>
                        <p><a>Our Supporters</a></p>
                        <p><a>Sponsor a Rider!</a></p>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <a href="https://instagram.com/ridewithinreach" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/ride-within-reach" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
            </div>
        </div>

        <img src={image} className="footer-image" alt="" />
    </footer>
  )
}
