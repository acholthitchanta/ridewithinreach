import landing from '../assets/images/Donate.jpg'
import {Card, Figure} from 'react-bootstrap'
import {useEffect, useRef, useState} from "react"

const DONATION_TIERS = [
{ amount: "$1", text:" placeholder text"},
{ amount: "$10", text:" placeholder text"},
{ amount: "$100", text:" placeholder text"},
{ amount: "$1,000", text:" placeholder text"},
{ amount: "$2,000", text:" placeholder text"},
]


function Donate() {
  const [tierIndex, setTierIndex] = useState(0)
  const [percent, setPercent] = useState(0)
  const scrollSectionRef = useRef(null)

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
      setTierIndex(Math.round(Math.pow(progress, 0.5) * (DONATION_TIERS.length - 1)))
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
<>
  <Figure className="landing">   
    <Figure.Image src={landing} />
       <Figure.Caption>DONATE</Figure.Caption>
  </Figure>

  <section className="light-green section">
    <div className="header">
      <h1 style={{textAlign:"center"}}>
        What can my contribution do? 
      </h1>
      <p className="donate-text">
        Any amount you can contribute is greatly appreciated! 


      </p>
      <p className="donate-text">  
        Your donation will go directly to paying for the necessary equipment and all fees asscoated with coaching and racing for young mountain bikers
      </p>
      <p className="donate-text">
        Thank you for your support!
      </p>s
    </div>
  </section>

  <section className='light-green' style={{height: '50vh'}}/>

  <section className='light-green section'>
  <div
    className="donation-scroll-section"
    ref={scrollSectionRef}
    style={{ height: `${DONATION_TIERS.length * 40}vh` }}
  >
    <div className="donation-scroll-sticky">
      <div className="donation-slider">
        <div className="tier-list">
          {DONATION_TIERS.map((tier, index) => (
            <div
              key={tier.amount}
              className={`tier-info ${index === tierIndex ? "active" : ""}`}
            >
              <h3>{tier.amount}</h3>
              <p>{tier.text}</p>
            </div>
          ))}
        </div>
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
              <span
                key={tier.amount}
                className={index === tierIndex ? "active" : ""}
              >
                {tier.amount}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
    
  </section>
</>
  )
}

export default Donate
