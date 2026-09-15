import {getSponsors} from "../services/DataService"
import {useState, useEffect} from "react"



function Sponsors() {
  const [sponsors, setSponsors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSponsors().then((data) => {
      setSponsors(data)
      setLoading(false)
    })
  }, [])
  return (
    <section className="white">
      <div className="support-year-header">
        <h1>2025-2026 Supporters</h1>
      </div>
      <div className="sponsor-grid">
          {sponsors.map((sponsor) => (
          <div className="sponsor-card" key={sponsor.url}>
            <div className="sponsor-logo">
              <img src={sponsor.url} alt="" />
            </div>
           
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors
