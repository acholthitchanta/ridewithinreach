import { Card, Image, Figure, Stack } from "react-bootstrap"
import landing from "../assets/images/landing.png"
import costgraphic from "../assets/images/costgraphic.png"
import intro from "../assets/images/intro.jpg"
import gearaccess from "../assets/images/gearaccess.jpg"
import parterpathways from "../assets/images/parterpathways.png"
import researchandpolicy from "../assets/images/researchandpolicy.png"
import wheelIcon from "../assets/images/logos/wheel.svg"
import handshakeIcon from "../assets/images/logos/handshake.svg"
import megaphoneIcon from "../assets/images/logos/megaphone.svg"
import { useEffect, useRef, useState } from "react"
import { getSponsorsBucket } from "../services/DataService"
//import { Card, Image, Figure, Stack } from "react-bootstrap"
import { Link } from 'react-router'

const SPONSOR_ITEM_WIDTH = 150
const SPONSOR_GAP = 20

function Home() {

  const [sponsors, setSponsors] = useState([])
  const [sponsorsLoading, setSponsorsLoading] = useState(true)
  const [sponsorStartIndex, setSponsorStartIndex] = useState(0)
  const [sponsorTrackTransitionEnabled, setSponsorTrackTransitionEnabled] = useState(true)
  const [sponsorAvailableWidth, setSponsorAvailableWidth] = useState(0)
  const sponsorAvailabilityRef = useRef(null)

  const sponsorVisibleCount = Math.max(
    1,
    Math.floor((sponsorAvailableWidth + SPONSOR_GAP) / (SPONSOR_ITEM_WIDTH + SPONSOR_GAP))
  )

  const sponsorsViewportWidth = sponsorVisibleCount * SPONSOR_ITEM_WIDTH
    + Math.max(sponsorVisibleCount - 1, 0) * SPONSOR_GAP

  useEffect(()=>{

      async function fetchSponsors(){
          const sponsorsData = await getSponsorsBucket()

          if (sponsorsData.length == 0){
            console.log("no sponsors found")
          }

          setSponsors(sponsorsData)
          setSponsorsLoading(false)
      }

      fetchSponsors();

  },[])

  useEffect(()=>{
      const el = sponsorAvailabilityRef.current
      if (!el) return

      const observer = new ResizeObserver((entries) => {
          setSponsorAvailableWidth(entries[0].contentRect.width)
      })
      observer.observe(el)

      return () => observer.disconnect()
  },[])

  useEffect(()=>{
      setSponsorTrackTransitionEnabled(false)
      setSponsorStartIndex(sponsorVisibleCount)
  },[sponsorVisibleCount])

  useEffect(()=>{
      if (sponsors.length <= sponsorVisibleCount) return

      const id = setInterval(() => {
          setSponsorStartIndex((i) => i + 1)
      }, 2000)

      return () => clearInterval(id)
  },[sponsors, sponsorVisibleCount])

  useEffect(()=>{
      if (sponsorTrackTransitionEnabled) return

      const rafId = requestAnimationFrame(() => setSponsorTrackTransitionEnabled(true))
      return () => cancelAnimationFrame(rafId)
  },[sponsorTrackTransitionEnabled])

  const extendedSponsors = sponsors.length > sponsorVisibleCount
    ? [
        ...sponsors.slice(-sponsorVisibleCount),
        ...sponsors,
        ...sponsors.slice(0, sponsorVisibleCount),
      ]
    : sponsors

  function handleSponsorTrackTransitionEnd(){
      if (sponsors.length <= sponsorVisibleCount) return

      if (sponsorStartIndex >= sponsors.length + sponsorVisibleCount) {
          setSponsorTrackTransitionEnabled(false)
          setSponsorStartIndex(sponsorVisibleCount)
      }
  }

  return (
    <>
      <Figure className="landing">
        <Figure.Image
          src={landing}
        />
        <Figure.Caption>Keeping the trail within reach.</Figure.Caption>
      </Figure>
      <div className="spacer medium-green"/>

      <section className="white section-right">
        <div className="intro-text text">
          <h1>RIDE WITHIN REACH</h1>
          <p>Ride Within Reach is a 501(c)(3) organization based in Northwest Arkansas that
            aims to elevate opportunities for youth to participate in mountain biking.
            We partner with coaches, mentors, and local businesses to support
            underrepresented communities who lack the resources necessary to partake in the sport.</p>
        </div>
        <Image src={intro} className="square section-img"/>
      </section>


      <section className="green section-left">
        <div className="text">
          <h1>WHY THIS MATTERS</h1>
          <p>
            Higher-income families spend significantly more on their
            child's primary sport each year. This discrepancy shows up
            in equipment, coaching, and travel, where financially struggling 
            students cannot perform as well as their more fortunate peers.
          </p>
          <p>
            This gap is especially apparent in mountain biking, which
            has a higher starting cost than many other sports.
            Families will
            need to afford not just bikes (which can start
            at $500 minimum!), but safety gear, transportation, and regular maintenance
            before a student can participate consistently.
          </p>
          <p>
            NWA full of incredible biking trails, but the high
            starting cost to ride consistently discourages kids who
            want to be part of such activities.
            We aim to close this gap and provide youth with the
            resources and opportunities they need to enjoy all
            that our Natural State has to offer.
          </p>
          <br />
          <blockquote className="stat-quote">
            <p>
              Aspen Institute Project Play reported that families earning $100,000+ spent
              $1,471 more per year on a child&apos;s primary sport than families earning
              under $50,000.
            </p>
            <footer>Aspen Institute Project Play, 2024 Parent Survey</footer>
          </blockquote>
        </div>
        <Image src={costgraphic} className="padded-img section-img" />
      </section>

      <section className="light-green">
        <div className="text">
          <h1 className="text-center">OUR PROGRAMS</h1>

          <Stack direction="horizontal" gap={4} className="program-cards">
              <Card className="program-card">
                <div className="program-card-media">
                  <Card.Img src={gearaccess} />
                  <span className="program-card-badge">
                    <img src={wheelIcon} alt="" />
                  </span>
                </div>
                <Card.Body>
                  <Card.Title>Gear Access</Card.Title>
                  <Card.Text>We fund students with all of the equipment they need to ride:
                    bikes, helmets, safety gear,
                    maintenance vouchers,
                    and beginner resources.</Card.Text>
                </Card.Body>
              </Card>

              <Card className="program-card">
                <div className="program-card-media">
                  <Card.Img src={parterpathways} />
                  <span className="program-card-badge">
                    <img src={handshakeIcon} alt="" />
                  </span>
                </div>
                <Card.Body>
                  <Card.Title>Partner Pathways</Card.Title>
                  <Card.Text>
                    We connect students and families with our network of
                    local shops, coaches, teams, and mentors, giving
                    students opportunities to compete and learn about the sport.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="program-card">
                <div className="program-card-media">
                  <Card.Img src={researchandpolicy} />
                  <span className="program-card-badge">
                    <img src={megaphoneIcon} alt="" />
                  </span>
                </div>
                <Card.Body>
                  <Card.Title>Research & Policy</Card.Title>
                  <Card.Text>
                    As NWA grows its cities to accommodate for our growing
                    population, we would like to advocate for
                    the preservation and continued development of bike trails for
                    our community.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Stack>
        </div>
      </section>

      <section className="section-medium">
        <div className="header">
          <h1>OUR SPONSORS</h1>
        </div>
          <div className="sponsors-availability" ref={sponsorAvailabilityRef}>
            <div className="sponsors-viewport" style={{ width: `${sponsorsViewportWidth}px` }}>
              <div
                className="sponsors-track"
                onTransitionEnd={handleSponsorTrackTransitionEnd}
                style={{
                  '--sponsor-item-width': `${SPONSOR_ITEM_WIDTH}px`,
                  '--sponsor-gap': `${SPONSOR_GAP}px`,
                  transform: `translateX(-${(sponsorsLoading ? 0 : sponsorStartIndex) * (SPONSOR_ITEM_WIDTH + SPONSOR_GAP)}px)`,
                  transition: sponsorTrackTransitionEnabled ? undefined : 'none',
                }}
              >
                {sponsorsLoading
                  ? Array.from({ length: sponsorVisibleCount }).map((_, i) => (
                      <div key={i} className="sponsor-placeholder" />
                    ))
                  : extendedSponsors.map((url, i) => (
                      <div key={`${url}-${i}`} className="sponsor-item">
                        <img src={url} alt="Sponsor logo" />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-medium">
         <div className="header">
          <h1 style={{textAlign:"right"}}>
            Want to contribute?
          </h1>
         </div>
        
         
           <div className="donation-options">
          
            

            <Card as={Link} to="/donate" className="donation-box green">
             <Card.Body>
              <Card.Title>Sponsor a Rider</Card.Title>
              <Card.Text>Donate directly to a kid in need. Any donation will help provide necessary
                equipment like helmets, pads, gloves, or even entire bikes!
              </Card.Text>
                <span className="donation-box-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                 </svg>
                </span>

             </Card.Body>
            </Card>
            
            <Card as={Link} to="/sponsors"  className="donation-box medium-dark-green">
              <Card.Body>
                <Card.Title>PARTNER WITH US</Card.Title>
               <Card.Text>Whether you're
                a bike shop who can provide bike maintenance or a local business who supports our cause;
                we rely on you to create a more accessible community for young mountain bikers.
               </Card.Text>
              <span className="donation-box-arrow">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                 </svg>
                </span>
              </Card.Body>
              </Card>

              <Card as={Link} to="/donate" className="donation-box medium-green">
               <Card.Body>
                <Card.Title>Volunteer</Card.Title>
                <Card.Text> Volunteers are how we 
                  run our events, provide coaching, and upkep a safe enviornment for young riders. Whether you can ride, fix bikes, or just want to help, we have a place 
                  for you as a volunteer!
                 </Card.Text>

                <span className="donation-box-arrow">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                 </svg>
                </span>
              </Card.Body>
              
            </Card>

          
           </div> 
          

        </section>
          
        
    
      

      </>
  )
}

export default Home
