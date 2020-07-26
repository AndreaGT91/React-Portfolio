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
              <Anchor htmlRef="https://github.com/AndreaGT91/Task-Manager">
                <figcaption>Task Manager (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="http://bentleytech.com/assets/images/Employee-Tracker.gif">
                <Image classes="my-image" source={require("../assets/Employee-Tracker.png")} altText="Employee Tracker" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Employee-Tracker">
                <figcaption>Employee Tracker - CLI (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://rocky-wildwood-54310.herokuapp.com">
                <Image classes="my-image" source={require("../assets/Note-Taker.png")} altText="Note Taker" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Note-Taker">
                <figcaption>Note Taker (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="http://bentleytech.com/assets/images/Team-Template-Generator.gif">
                <Image classes="my-image" source={require("../assets/Team-Template-Generator.png")} altText="Team Template Generator" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Team-Template-Generator">
                <figcaption>Team Template Generator - CLI (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="http://bentleytech.com/assets/images/Readme-Generator.gif">
                <Image classes="my-image" source={require("../assets/Readme-Generator.png")} altText="Readme-Generator" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Readme-Generator">
                <figcaption>Readme Generator - CLI (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://andreagt91.github.io/Park-Planner/">
                <Image classes="my-image" source={require("../assets/Park-Planner.png")} altText="Park Planner" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Park-Planner">
                <figcaption>Park Planner (Group Project)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://andreagt91.github.io/Homework6/">
                <Image classes="my-image" source={require("../assets/Weather-Dashboard.png")} altText="Weather Dashboard" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Homework6">
                <figcaption>Weather Dashboard (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://andreagt91.github.io/Homework5/">
                <Image classes="my-image" source={require("../assets/Work-Day-Scheduler.png")} altText="Work Day Scheduler" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Homework5">
                <figcaption>Work Day Scheduler (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://andreagt91.github.io/Homework4/">
                <Image classes="my-image" source={require("../assets/Coding-Quiz.png")} altText="Coding Quiz" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Homework4">
                <figcaption>Coding Quiz (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
          <Column page="Portfolio">
            <Figure>
              <Anchor htmlRef="https://andreagt91.github.io/Homework3/">
                <Image classes="my-image" source={require("../assets/Password-Generator.png")} altText="Password Generator" />
              </Anchor>
              <Anchor htmlRef="https://github.com/AndreaGT91/Homework3">
                <figcaption>Password Generator (Homework)</figcaption>
              </Anchor>
            </Figure>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;