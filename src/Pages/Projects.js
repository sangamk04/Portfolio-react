import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/kitto.png"
              title="Clone of Kitto.com"
              description="Ketto is an online crowdfunding platform that allows individuals, corporates and NGOs to raise funds for their favourite social causes and ideas using social media and e-commerce. "
              tech="Tech-Stacks"
              techD="React | Redux | React-Router | Styled-Components | local-storage | Chakra UI  "
              link="https://ketto-true-mine3269.netlify.app/"
              a="https://github.com/J-Prajwal/ketto-cw--true-mine-3269"
            />
          </Col>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/sports.png"
              title="Clone of Sportsjam.in"
              description="This is a e-commerce website clone. where you can buy sport's things. Like Sport's clouths ,Sport's Shoe, badmental,bat etc. "
              tech="Tech-Stacks"
              techD="React | Redux | React-Router | Styled-Components | local-storage "
              link="https://mellow-selkie-e2bcd4.netlify.app/"
              a="https://github.com/SatsAjeet/SportsJam-clone"
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/everhour.png"
              title="Clone of Everhour.com"
              description="Everhour is an app that calculates your work hours, the work hours of your team, or a particular team member and pulls this data together into handy detailed reports. Add, remove, highlight data, change data columns, or add some extra information and simply share them within the app. "
              tech="Tech-Stacks"
              techD="React | Redux | React-Router | Styled-Components | Chakra UI | local-storage "
              link="https://everhour-clone-1.netlify.app/"
              a="https://github.com/gkomsai/cumbersome-circle-9157"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/jcrew.png"
              title="Clone of J-crew.com"
              description="About
              J.Crew is an E-commerce website where you can buy many products Like women's, men's, and children's apparel and accessories, including swimwear, outerwear, lounge-wear, bags, sweaters, denim, dresses, suiting, and shoes. "
              tech="Tech-Stacks"
              techD="React | Redux | React-Router | Styled-Components | Chakra UI | local-storage "
              link="https://github.com/sangamk04/Clone-Of-Jcrew.com"
              a="https://github.com/sangamk04/Clone-Of-Jcrew.com"
            />
          </Col>

      
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/dunzo.png"
              title="Clone of Dunzo.com"
              description="This Website is an Indian company that delivers groceries and essentials, fruits and vegetables, meat, pet supplies, food, and medicines in major cities."
              tech="Tech-Stacks"
              techD="Html | JavaScript | Css | Api | local-storage |"
              link="https://stirring-mandazi-87d93f.netlify.app/"
              a="https://github.com/Rounak-09/Dunzo"
            />
          </Col>

          <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/style.png"
              title="Clone of Stylecraze.com"
              description="This is a global women’s platform that aims to answer one question. What do
              women want? From health and wellness to lifestyle and beauty."
              tech="Tech-Stacks"
              techD="Html | JavaScript | Css | "
              link="https://gracious-rosalind-ba3031.netlify.app/"
              a="https://github.com/Rajat-soni-vst-au4/Stylecraze-masai"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/sports.png"
              title="Clone of Sportsjam.in"
              description="This is a typical e-commerce website clone. The flow of our website starts from a landing page then to a product page that leads to a description page which takes to cart and payment page. "
              tech="Tech-Stacks"
              techD="React | Redux | React-Router | Styled-Components | local-storage "
              link="https://cloneofsportsjamunit4.netlify.app/"
              a="https://github.com/sangamk04/Clone_of_Sportsjam.in"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
