import landing from '../assets/images/donate.jpg'
import {Card, Figure} from 'react-bootstrap'
import {useEffect, useRef, useState} from "react"
//import derailleur from '../assets/images/derailleur.png'


const DONATION_TIERS = [
{ amount: "", text: ""},
{ amount: "$50", text: "Helps cover maintenace and repairs for one rider's bike for a season." },
{ amount: "$100", text: "Covers a helmet or a pair of shoes and gloves for one rider."},
{ amount: "$500", text: "Covers a full set of protective gear, plus a helmet, for one rider."},
{ amount: "$1,000", text: "Funds an entry-level mountain bike and safety gear for one rider."},
{ amount: "$2,000", text: "Fully equips one rider for the season, bike, gear, and a year of maintenance."},
{ amount: "$5,000", text: "Fully equips and supports 10 riders for the season as our Trailhead Sponsor."},
{ amount: "$10,000", text: "Fully equips and supports 20 riders for the season as our Presenting Sponsor."},

]


function Donate() {
  const [tierIndex, setTierIndex] = useState(0)
  const [percent, setPercent] = useState(0)
  const scrollSectionRef = useRef(null)
  const currentTier = DONATION_TIERS[tierIndex]

  const [lastImage, setLastImage] = useState(null)
  useEffect(() => {
    if (currentTier.image) setLastImage(currentTier.image)
  }, [currentTier.image])

  useEffect(() => {
    let frameId = null

    function updateProgress() {
      frameId = null
      const section = scrollSectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollableHeight = rect.height - window.innerHeight
      const startOffset = window.innerHeight * 0.5
      const progress = scrollableHeight > 0
        ? Math.min(1, Math.max(0, (startOffset - rect.top) / scrollableHeight))
        : 0

      setPercent(progress * 100)
      const tierStep = Math.min(DONATION_TIERS.length - 1, Math.floor(progress * DONATION_TIERS.length))
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
       <Figure.Caption>DONATE</Figure.Caption>
  </Figure>

  <section className="light-green section-medium">
    <div className="header">
      <h1 style={{textAlign:"center"}}>
        What can my contribution do? 
      </h1>
      <p >
        Any amount you can contribute is greatly appreciated! 


      </p>
      <p>  
        Your donation will go directly to paying for the necessary equipment and all fees asscoated with coaching and racing for young mountain bikers
      </p>
      <p>
        Thank you for your support!
      </p>
    </div>
  </section>


  <section className='light-green section'>
  <div
    className="donation-scroll-section"
    ref={scrollSectionRef}
    style={{ height: `${DONATION_TIERS.length * 40}vh` }}
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
      {lastImage && <img src={lastImage} alt={currentTier.amount}/>}
      </div>
      </div>
      
  </div>
    
  </section>
</div>
  )
}

export default Donate
