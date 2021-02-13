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
            <Paragraph>My name is Andrea Bentley, and I am a Full Stack Web Developer. I have a Bachelor of Science in 
              Information and Computer Science from The Georgia Institute of Technology. I graduated with Honor in the 
              Cooperative Program, and I received a Certificate in Engineering Psychology. I was a software developer 
              for seven years before taking a hiatus to be a full-time parent. In order to refresh my skills, I 
              completed the Georgia Tech Professional Education Coding Bootcamp in 2020. I really enjoy Front End 
              development, but I have all the skills for Full Stack development, as well. I am an analytical thinker 
              with great problem solving skills. I excel in both written and verbal communication, and I consider 
              integrity and dependability to be my top skills. I am currently seeking a full-time position in the 
              metro Atlanta area that is in-person, remote, or a hybrid.
            </Paragraph>
            <Paragraph>I am passionate about Front End development because I enjoy the psychology of how to make an 
              interface that is easily understood by the end user. I revel in using my detective skills to track down 
              software defects. I love working with others and consider myself laid back and easy to get along with. 
              I also do very well working on my own. I understand the importance of communication and writing easily 
              maintainable, efficient code. I love to learn new skills, and I am always happy to share what I know 
              with others.
            </Paragraph>
            <Paragraph>In my software career, I am very proud of the Time and Billing application we developed for 
              accountants while I was working at PACS Software. Their legacy DOS system was not Y2K compliant, and 
              it was generally old and outdated. We redesigned the application for Windows 95 from the ground up. 
              The ultimate reward was talking to clients at our User Conference about how much they loved the new 
              application and how easy it was to use.
            </Paragraph>
            <Paragraph>In my current position as the Registrar at a public middle school, I have learned that I am 
              very fortunate. Parents who are registering their students at our school feel very comfortable sharing 
              their stories with me, and they are often heartbreaking. It is a compliment to me that I am able to make 
              the parents feel at ease about entrusting our school with their children.
            </Paragraph>
            <Paragraph>In my personal life, I am blessed that I was able to stay home with my own children until 
              they were in school, and then to work part-time so that I could be home when they were home. I am 
              proud of my two now-adult daughters who are good, kind people. With my parenting mission accomplished, 
              I am ready to resume my software career!
            </Paragraph>
            <Paragraph>Just a note about my profile picture… professionals will tell you never to use a selfie, 
              especially not one taken in your car. I had just come from voting at my local polling place in 
              March of 2019. It was a small, municipal election, and I wanted to remind my friends on social media 
              to get and vote. I snapped that picture in my car; the full version shows my “I voted” sticker. 
              After posting the picture, I received SO many compliments. I looked more closely at the photograph 
              and realized it was the best picture anyone had ever taken of me. I look genuinely happy because I 
              WAS happy. I do not believe it is possible for a professional headshot to capture the real me the 
              way that this picture does.
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;
