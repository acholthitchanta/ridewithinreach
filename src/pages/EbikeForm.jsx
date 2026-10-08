import { useRef, useState } from 'react'

const FORM_ID = '1FAIpQLSdv-e06QBY1tQyBIQIsQj8gkq3uzxvw1PVgJ55lEZyQKyrGgw'
const FORM_SRC = `https://docs.google.com/forms/d/e/1FAIpQLSdv-e06QBY1tQyBIQIsQj8gkq3uzxvw1PVgJ55lEZyQKyrGgw/viewform?usp=embeded=true`

const EBIKE_URL = 'https://www.nwarpc.org/bicycle-and-pedestrian/ebike-ar/'

// Iframe loads before the confirmation page appears.
// 1 for a single-page form; add 1 for every "Next" section break.
const LOADS_BEFORE_CONFIRMATION = 1

function EbikeForm() {
  const loads = useRef(0)
  const [submitted, setSubmitted] = useState(false)

  function handleLoad() {
    loads.current += 1
    if (loads.current > LOADS_BEFORE_CONFIRMATION) {
      setSubmitted(true)
      window.location.replace(EBIKE_URL)
    }
  }

  return (
    <section className="white">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '5vw 1rem' }}>
        <div className="intro-text text">
          <h1>Tri-Region E-Bike Program</h1>
          <p>
            {submitted
              ? 'Thanks — taking you to the application…'
              : 'Answer a few quick questions and we’ll send you straight to the application.'}
          </p>
          <p><a href={EBIKE_URL}>Skip to the application</a></p>
        </div>

        <iframe
          title="E-Bike Program questions"
          src={FORM_SRC}
          onLoad={handleLoad}
          style={{
            display: 'block',
            width: '100%',
            height: '1100px',
            border: 0,
          }}
        >
          Loading…
        </iframe>
      </div>
    </section>
  )
}

export default EbikeForm
