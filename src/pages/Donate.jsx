import landing from '../assets/images/Donate.jpg'
import {Card, Figure} from 'react-bootstrap'
import {useEffect, useRef, useState} from "react"
import bikemaingraphic from '../assets/images/bikemaingraphic.png'
import safteyequip from '../assets/images/safteyequip.png'
import racefeegraphic from '../assets/images/racefeegraphic.png'
import entrybikegraphic from '../assets/images/entrybikegraphic.png'

const DONATION_TIERS = [
{ amount: "", text: ""},
{ amount: "$50", text: "Covers the costs of maintenance that keeps bikes on trails and provides basic tools for kids to upkeep their bikes themselves.", image: bikemaingraphic },
{ amount: "$100", text: "Provides necessary saftey equipment and quality of life accessories to keep kids safe and make the ride more fun.", image: safteyequip},
{ amount: "$500", text: "Pays for an entire season of bike racing and helps to cover the costs of travel and lodging.", image: racefeegraphic, imageScale: 1.25},
{ amount: "$1,000", text: "Funds an entry-level mountain bike for one rider along with basic maintenance tools.", image: entrybikegraphic, imageScale: 1.75},
//{ amount: "$2,000", text: "Fully equips one rider for the season, bike, gear, and a year of maintenance."},
{ amount: "$5,000", text: "Fully equips and supports 10 riders for the season as our Trailhead Sponsor.", },
{ amount: "$10,000", text: "Fully equips and supports 20 riders for the season as our Presenting Sponsor.", },

]


function Donate() {
  const [tierIndex, setTierIndex] = useState(0)
  const [percent, setPercent] = useState(0)
  const scrollSectionRef = useRef(null)
  const currentTier = DONATION_TIERS[tierIndex]

  const [lastImage, setLastImage] = useState(null)
  useEffect(() => {
    if (currentTier.image) setLastImage({ src: currentTier.image, scale: currentTier.imageScale ?? 1 })
  }, [currentTier.image, currentTier.imageScale])

  useEffect(() => {
    let frameId = null

    function updateProgress() {
      frameId = null
      const section = scrollSectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollableHeight = rect.height - window.innerHeight
      const startOffset = window.innerHeight * 0.25
      const progress = scrollableHeight > 0
        ? Math.min(1, Math.max(0, (startOffset - rect.top) / scrollableHeight))
        : 0

      setPercent(progress * 100)
      const tierStep = Math.min(DONATION_TIERS.length - 1, Math.floor(progress * (DONATION_TIERS.length - 1)))
      setTierIndex(tierStep)
    }

    function handleScroll() {
      if (frameId === null) frameId = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
<div className="light-green">
  <Figure className="landing">   
    <Figure.Image src={landing} />
       <Figure.Caption>
        <h1>DONATE</h1>
        <p>Any amount you can contribute is greatly appreciated! Your donation will go directly to paying for the necessary equipment and all fees associated with coaching and racing for young mountain bikers.</p>
        </Figure.Caption>
  </Figure>

    <div className="spacer"/>


  <section className='light-green mt-2'>
  <div
    className="donation-scroll-section"
    ref={scrollSectionRef}
    style={{ height: '350vh' }}

  >
    <div className="donation-scroll-sticky">
      <div className="donation-slider">
        <div className="slider-row">
          <div className="slider-wrap">
            <input
              type="range"
              min="0"
              max={DONATION_TIERS.length - 1}
              step="1"
              value={tierIndex}
              readOnly
              tabIndex={-1}
              style={{
                background: `linear-gradient(to right, #828b55 ${percent}%, #ddd ${percent}%)`
                }}
              />
            <div className="slider-ticks">
              {DONATION_TIERS.map((tier) => (
                <span key={tier.amount} className="tick" />
              ))}
            </div>
          </div>
          <div className="slider-tabs">
            {DONATION_TIERS.map((tier, index) => (
              tier.text && (
                <div
                  key={tier.amount}
                  className={index === tierIndex ? "active" : ""}
                  style={{ top: `${(index / (DONATION_TIERS.length - 1)) * 100}%` }}
                >
                  <h3>{tier.amount}</h3>
                  <p>{tier.text}</p>
                
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <div 
      className="tier-image"
      style={{ top: `${(tierIndex / (DONATION_TIERS.length - 1)) * 100}%` , opacity: currentTier.image ? 1 : 0,}}
      >
      {lastImage &&( <img src={lastImage.src} alt={currentTier.amount} style={{transform: `scale(${lastImage.scale})`}}/>)}
      
      </div>
      </div>
      
  </div>
  <div className="spacer" style={{height: '1vh'}}/>
    
  </section>
</div>
  )
}

export default Donate
