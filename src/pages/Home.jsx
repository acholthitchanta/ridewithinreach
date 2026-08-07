import { Card, Image, Figure, Stack } from "react-bootstrap"
import landing from "../assets/images/landing.jpg"
import costgraphic from "../assets/images/costgraphic.png"
import intro from "../assets/images/intro.jpg"

function Home() {
  return (
    <div>
      <Figure className="landing">
        <Figure.Image
          src={landing}
        />
        <Figure.Caption>Keeping the trail within reach.</Figure.Caption>
      </Figure>
      <div className="spacer medium-green"/>

      <div className="white section section-right">
        <div className="intro-text text">
          <h1>RIDE WITHIN REACH</h1>
          <p>Ride Within Reach is a 501(c)(3) organization based in Northwest Arkansas that
            aims to elevate opportunities for youth to participate in mountain biking.
            We partner with coaches, mentors, and sponsors to support
            underrepresented communities who lack the resources necessary to partake in the sport.</p>
        </div>
        <Image src={intro} className="square"/>
      </div>


      <div className="green section section-left">
        <div className="text">
          <h1>WHY WE STARTED THIS</h1>
          <p>
            Higher-income families spend significantly more on their
            child's primary sport each year. This spending gap shows up
            in equipment, coaching, travel, and program access.
            However, this gap is especially apparent in mountain biking, which
            has a higher starting cost than many other sports.
          </p>
          <p>
            Families will
            need to afford not just bikes (entry-level mountain bikes can start
            at $500 minimum!), but safety gear, transportation, and consistent maintenance
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
        <Image src={costgraphic} className="padded-img" />
      </div>

      <div className="light-green section">
        <div className="text">
          <h1 className="text-center">OUR PROGRAMS</h1>

          <Stack direction="horizontal" gap={3}>
              <Card>
                <Card.Title>Gear Access</Card.Title>
                <Card.Text>We fund students with all of the equipment they need to ride:
                  bikes, helmets, safety gear, 
                  maintenance vouchers, 
                  and beginner resources.</Card.Text>
              </Card>

              <Card>
                <Card.Title>Partner Pathways</Card.Title>
                <Card.Text>
                  We connect students and families with our network of 
                  local shops, coaches, teams, and mentors, giving 
                  students opportunities to compete and learn about the sport.
                </Card.Text>
              </Card>

              <Card>
                <Card.Title>Research & Policy</Card.Title>
                <Card.Text>
                  As NWA grows its cities to accommodate for our growing 
                  population, we risk losing our local bike trails and students' access to them. 
                  We aim  to advocate preserving and expanding outdoor recreational
                  spaces for our community as a whole.
                </Card.Text>
              </Card>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Home
