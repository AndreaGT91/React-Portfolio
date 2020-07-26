import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Header1 from "../components/Header1";
import Header6 from "../components/Header6";
import Row from "../components/Row";
import Column from "../components/Column";
import Figure from "../components/Figure";
import Anchor from "../components/Anchor";
import Image from "../components/Image";

function Portfolio() {
  return (
    <Wrapper>
      <Container>
        <Header1>Portfolio</Header1>
        <hr />
        <br />
        <Row>
          <Header6>
            Click on image for deployed application; click on caption for GitHub repository.
          </Header6>
          <Header6>
            In February 2020, I began the Georgia Tech Coding Bootcamp in Web Development. 
            These are the individual homework and group project assignments, most recent first. 
            The oldest are fairly simple, but they increase in complexity as time goes on.
          </Header6>
        </Row>
        <Row>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://recipe-xchange.herokuapp.com">
                <Image classes="my-image" source={require("../assets/Recipe-Xchange.png")} altText="Recipe Exchange" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Recipe-Xchange">
                <figcaption>Recipe Xchange (Group Project)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://aqueous-river-75295.herokuapp.com">
                <Image classes="my-image" source={require("../assets/Task-Manager.png")} altText="Task Manager" />
              </Anchor>
              <Anchor>
                <figcaption>Task Manager (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="http://bentleytech.com/assets/images/Employee-Tracker.gif">
                <Image classes="my-image" source={require("../assets/Employee-Tracker.png")} altText="Employee Tracker" />
              </Anchor>
              <Anchor>
                <figcaption>Employee Tracker - CLI (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://rocky-wildwood-54310.herokuapp.com">
                <Image classes="my-image" source={require("../assets/Note-Taker.png")} altText="Note Taker" />
              </Anchor>
              <Anchor>
                <figcaption>Note Taker (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="http://bentleytech.com/assets/images/Team-Template-Generator.gif">
                <Image classes="my-image" source={require("../assets/Team-Template-Generator.png")} altText="Team Template Generator" />
              </Anchor>
              <Anchor>
                <figcaption>Team Template Generator - CLI (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="http://bentleytech.com/assets/images/Readme-Generator.gif">
                <Image classes="my-image" source={require("../assets/Readme-Generator.png")} altText="Readme-Generator" />
              </Anchor>
              <Anchor>
                <figcaption>Readme Generator - CLI (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://andreagt91.github.io/Park-Planner/">
                <Image classes="my-image" source={require("../assets/Park-Planner.png")} altText="Park Planner" />
              </Anchor>
              <Anchor>
                <figcaption>Park Planner (Group Project)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          {/* <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="https://andreagt91.github.io/Homework6/" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Weather-Dashboard.png" alt="Weather Dashboard webpage" /></a>
              <a href="https://github.com/AndreaGT91/Homework6" target="_blank" rel="noopener noreferrer">
                <figcaption>Weather Dashboard (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="https://andreagt91.github.io/Homework5/" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Work-Day-Scheduler.png" alt="Work Day Scheduler webpage" /></a>
              <a href="https://github.com/AndreaGT91/Homework5" target="_blank" rel="noopener noreferrer">
                <figcaption>Work Day Scheduler (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="https://andreagt91.github.io/Homework4/" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Coding-Quiz.png" alt="Coding Quiz webpage" /></a>
              <a href="https://github.com/AndreaGT91/Homework4" target="_blank" rel="noopener noreferrer">
                <figcaption>Coding Quiz (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="https://andreagt91.github.io/Homework3/" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Password-Generator.png" alt="Password Generator webpage" /></a>
              <a href="https://github.com/AndreaGT91/Homework3" target="_blank" rel="noopener noreferrer">
                <figcaption>Password Generator (Homework)</figcaption>
              </a>
            </figure>
          </div> */}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;