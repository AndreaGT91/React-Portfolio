import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Header1 from "../components/Header1";
import Header6 from "../components/Header6";
import Row from "../components/Row";
import Column from "../components/Column";
// import Anchor from "../components/Anchor";
// import Figure from "../components/Figure";
// import Image from "../components/Image";

function Portfolio() {
  return (
    <Wrapper>
      <Container>
        <Header1>Portfolio</Header1>
        <hr />
        <br />
        <Row>
          <Header6>
            Click on image for deployed application; sclick on caption for GitHub repository.
          </Header6>
          <Header6>
            In February 2020, I began the Georgia Tech Coding Bootcamp in Web Development. 
            These are the individual homework and group project assignments, most recent first. 
            The oldest are fairly simple, but they increase in complexity as time goes on.
          </Header6>
        </Row>
        <Row>
          <Column page="Portfolio">
            <figure>
              <a href="https://recipe-xchange.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Recipe-Xchange.png" alt="Recipe Exchange website" /></a>
              <a href="https://github.com/AndreaGT91/Recipe-Xchange" target="_blank" rel="noopener noreferrer">
                <figcaption>Recipe Xchange (Group Project)</figcaption>
              </a>
            </figure>
          </Column>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="https://aqueous-river-75295.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Task-Manager.png" alt="Task Manager website" /></a>
              <a href="https://github.com/AndreaGT91/Task-Manager" target="_blank" rel="noopener noreferrer">
                <figcaption>Task Manager (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="./assets/images/Employee-Tracker.gif" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Employee-Tracker.png" alt="Employee Tracker CLI" /></a>
              <a href="https://github.com/AndreaGT91/Employee-Tracker" target="_blank" rel="noopener noreferrer">
                <figcaption>Employee Tracker - CLI (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="https://rocky-wildwood-54310.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Note-Taker.png" alt="Note Taker website" /></a>
              <a href="https://github.com/AndreaGT91/Note-Taker" target="_blank" rel="noopener noreferrer">
                <figcaption>Note Taker (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="./assets/images/Team-Template-Generator.gif" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Team-Template-Generator.png" alt="Team Template Generator CLI" /></a>
              <a href="https://github.com/AndreaGT91/Team-Template-Generator" target="_blank" rel="noopener noreferrer">
                <figcaption>Team Template Generator - CLI (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
            <figure>
              <a href="./assets/images/Readme-Generator.gif" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Readme-Generator.png" alt="Readme Generator CLI" /></a>
              <a href="https://github.com/AndreaGT91/Readme-Generator" target="_blank" rel="noopener noreferrer">
                <figcaption>Readme Generator - CLI (Homework)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4 portfolio-div">
            <figure>
              <a href="https://andreagt91.github.io/Park-Planner/" target="_blank" rel="noopener noreferrer">
                <img className="my-image" src="./assets/images/Park-Planner.png" alt="Park Planner website" /></a>
              <a href="https://github.com/AndreaGT91/Park-Planner" target="_blank" rel="noopener noreferrer">
                <figcaption>Park Planner (Group Project)</figcaption>
              </a>
            </figure>
          </div>
          <div className="col s12 m6 l4" portfolio-div>
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
          </div>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;