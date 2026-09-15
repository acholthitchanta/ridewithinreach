import {Figure} from 'react-bootstrap'
import landing from '../assets/images/ourworklanding.jpeg'
import ebikeprogramcode from '../assets/images/ebikeprogramcode.png'
import uarklogo from '../assets/images/uarklogo.png'




function OurWork() {
   
 const PARTNER_CARDS = [
  {
    src: ebikeprogramcode,
    alt: 'Apply for the Tri-Region E-Bike Program e-bike voucher',
    href: 'https://www.nwarpc.org/bicycle-and-pedestrian/ebike-ar/',
    active: true,
  },
 ]
 
  return (
    <>  
      <div className="light-green">
        <Figure className="landing">   
          <Figure.Image src={landing} />
            <Figure.Caption>
            <h1>OUR WORK</h1>
            <p>Rdie Within Reach is dedicated to constantly evolving and finding new ways to advocate for the mountain biking community</p>
            </Figure.Caption>
         </Figure>   
      </div>


    <section className="white">
      <div className="intro-text text">
        <h1>Community Impact</h1>
        <ul className="listformat">
          <li>RWR hosted a group ride in partnership with FAYMTB, events similar to this along with clinics are a large part of our mission of providing kids with a connection to the MTB community in Northwest Arkansas.</li>
        </ul>
        <ul className="listformat">
          <li>Our outreach representives attend networking and community events regulary to share our misson and network with companies that could become a resource for our riders.</li>
        </ul> 
      </div>
    </section>
    <section className="white section-right">
      <div className="intro-text text">
        <h1>Partner Network</h1>
        <ul className="listformat">
          <li>RWR has partnered up with the Tri-region E-bike program to help push their objective of providing E-bikes to people in need.</li>
        </ul>
      </div>  
    <div className="partner-cards">
      {PARTNER_CARDS.filter(card => card.active).map(card => (
        <a key={card.href} href={card.href} target="_blank" rel="noopener noreferrer">
          <img src={card.src} alt={card.alt} />
        </a> 
      ))}     
    </div>
    </section>
    <section className="white section-left">
      <div className="intro-text text">
        <h1>Research</h1>
        <ul className="listformat">
          <li>RWR is conducting research with Dr. Cian L. Brown, Assistant Professor of Counselor Education and Supervision at the University of Arkansas, in partnership with the Tri-Region E-Bike Voucher Program. The research evaluates the community-level benefits of E-bike voucher programs, including transportation access, affordability, health, and mobility.</li>
        </ul>
      
      </div>
      <img src={uarklogo} className="research-logo" alt="" />
    </section>
  
  
 
    













    </>
  )
}

export default OurWork
