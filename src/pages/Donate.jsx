import landing from '../assets/images/Donate.jpg'
import {Card, Figure} from 'react-bootstrap'
import {useState} from "react"

const DONATION_TIERS = [
{ amount: "$1", text:" asdlkjfasdf"},
{ amount: "$10", text:" asadsdlkjfasdf"},
{ amount: "$50", text:" asdlasdfkjfasdf"},
{ amount: "$100", text:" asdlkfddejfasdf"},
]


function Donate() {
  const [tierIndex, setTierIndex] = useState(0)
  const currentTier = DONATION_TIERS[tierIndex]
  const percent = (tierIndex / (DONATION_TIERS.length - 1)) * 100
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
      </p>
    </div>
    
  <div className="donation-slider">
    <input 
      type="range"
      min="0"
      max={DONATION_TIERS.length - 1}
      step="1"
      value={tierIndex}
      onChange={(e) => setTierIndex(Number(e.target.value))}
      style={{ 
        background: 'linear-gradient(to top, #828b55 ${percent}%, #ddd ${percent}%)'
        }}
      />
    <div>
      <h3>{currentTier.amount}</h3>
      <p>{currentTier.text}</p>
    </div>
  </div>

  </section>

</>
  )
}

export default Donate
