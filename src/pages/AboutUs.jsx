
import { getTeam } from "../services/DataService"
import {useState, useEffect } from "react"
import {Card, Figure} from 'react-bootstrap'
import landing from '../assets/images/team.jpg'

function AboutUs() {
  const [team, setTeam] = useState([])
  const [teamLoading, setTeamLoading] = useState(true)

  useEffect(() => {
    getTeam().then((data) => {
      setTeam(data)
      setTeamLoading(false)
    })
  }, [])

  return (
    <>
          <Figure className="landing">
        <Figure.Image
          src={landing}
        />
        <Figure.Caption>LEADERSHIP</Figure.Caption>
      </Figure>
    <section className="white" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      {teamLoading && <p>Loading team members...</p>}
      {!teamLoading && team.length > 0 && (
        <div className="team-members">
          {team.map((member) => (
            <Card key={member.id} className="team-card">
              <Card.Img src={member.headshot_url} alt={member.name} className="team-photo" />
              <Card.Body className="team-card-body">
                <Card.Title className="team-name">{member.name}</Card.Title>
                <Card.Text className="team-position">{member.position}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </section>
    </>
  )
}

export default AboutUs
