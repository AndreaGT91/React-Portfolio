import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Header1 from "../components/Header1";
import Header6 from "../components/Header6";
import Row from "../components/Row";
import Project from "../components/Project";
import projects from "../assets/projects.json"

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
            Projects listed in reverse chronological order. Group projects and 
            homeworks are from Georgia Tech Coding Bootcamp in 2020. The oldest 
            are fairly simple, but they increase in complexity as time goes on.
          </Header6>
        </Row>
        <Row>
          {projects.map(project => ( 
            <Project key={project.id} {...project}></Project>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;