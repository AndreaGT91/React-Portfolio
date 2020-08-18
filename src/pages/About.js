import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Header1 from "../components/Header1";
import Row from "../components/Row";
import Column from "../components/Column";
import Anchor from "../components/Anchor";
import Figure from "../components/Figure";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

function About() {
  return (
    <Wrapper>
      <Container>
        <Header1>About</Header1>
        <hr />
        <br />
        <Row>
          <Column page="About">
            <Anchor htmlRef={require("../assets/Andrea-Bentley-Resume.pdf")}>
              <Figure classes="profile-figure">
                <Image source={require("../assets/Profile.jpg")} altText="Andrea Bentley" />
                <figcaption>Resume</figcaption>
              </Figure>
            </Anchor>
            <Paragraph>An experienced software developer, looking to enter the world of web development. 
              Expanded the knowledge gained earning a B.S. in Information and Computer Science from the 
              Georgia Institute of Technology by taking their Coding Boot Camp. Just received a Certificate of 
              Completion in Web Development from Georgia Tech Professional Education. Professional experience in 
              object-oriented programming, rapid application development tools, and collaborating with a team 
              to create a finished product. Main area of interest is UI/UX, with strong analytical skills that 
              are well-suited for full-stack development.s UI/UX, with strong analytical skills that are 
              well-suited for full-stack development.
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;
