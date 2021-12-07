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

import profilePic from "../assets/Profile.jpg";
import resumePDF from "../assets/Andrea-Bentley-Resume.pdf";

function About() {
  return (
    <Wrapper>
      <Container>
        <Header1>About</Header1>
        <hr />
        <br />
        <Row>
          <Column page="About">
            <Anchor htmlRef={resumePDF}>
              <Figure classes="profile-figure">
                <Image source={profilePic} altText="Headshot of Andrea Bentley" />
                <figcaption>Resume</figcaption>
              </Figure>
            </Anchor>
            <Paragraph>My name is Andrea Bentley, and I am a Full Stack Web Developer. 
              I can fulfill your website needs on a freelance basis, and I am also seeking 
              a full-time, entry-level position as a Full-Stack or Front-End Web Developer.
              I am available in the Atlanta, GA metro area, and I can work remotely. 
            </Paragraph>
            <Paragraph>I completed the Georgia Tech Full Stack Web Development boot camp 
              in 2020 to add knowledge of recent technologies to what I learned while 
              earning my Bachelor's in Computer Science years ago. I have seven years 
              of software development experience from before the days of Google and 
              Stack Overflow, when you just had to figure out everything for yourself. 
              I have the enthusiasm of a recent graduate with the experience of a 
              seasoned developer.
            </Paragraph>
            <Paragraph>I am passionate about Front End development because I enjoy the 
              psychology of how to make an interface that is easily understood by the 
              end user. I also have a solid understanding of Back End development. I 
              truly just love coding and creating new applications. I delight in using 
              my detective skills to track down software defects. I understand the 
              importance of communication and writing efficient, user-friendly, easily 
              maintainable code that adheres to established standards.
            </Paragraph>
            <Paragraph>I am known for being thorough, dependable, a critical thinker, a 
              problem solver, and an exceptional collaborator, yet able to work 
              independently. I have exemplary written and verbal communication skills. 
              I like working with others and consider myself laid back and easy to get 
              along with. I also do very well working on my own. I look forward to 
              learning new skills, and I am always happy to share what I know with others.
            </Paragraph>
            <Paragraph>
              Whatever job I commit to, I commit to it 100%. That is why I took a long 
              hiatus from my career to raise my two children. I did not work at all until 
              my youngest started kindergarten, and then I worked part-time for schools 
              to maintain the same calendar and schedule as my children. I am now the
              proud mother of two young adults, and I am ready to resume my career.
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;
