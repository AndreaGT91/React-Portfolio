import React from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Header1 from "../components/Header1";
import Row from "../components/Row";
import Column from "../components/Column";
import Anchor from "../components/Anchor";
import Input from "../components/Input";
import Icon from "../components/Icon";

function Contact() {
  return (
    <Wrapper>
      <Container>
        <Header1>Contact</Header1>
        <hr />
        <br />
        <Row>
          <Column>
            <Row>
              <Column page="Contact">
                <Anchor htmlRef="mailto:andrea@bentleytech.com" title="Email">
                  <Icon classes="material-icons">alternate_email</Icon>
                  <Input value="andrea@bentleytech.com" type="email" />
                </Anchor>
              </Column>
              <Column page="Contact">
                <Anchor htmlRef="tel:+1-770-847-6763" title="Phone">
                  <Icon classes="material-icons">smartphone</Icon>
                  <Input value="+1 770.847.6763" type="tel" />
                </Anchor>
              </Column>
              <Column page="Contact">
                <Anchor htmlRef="https://www.linkedin.com/in/andrea-c-bentley/" title="LinkedIn">
                  <Icon classes="fa fa-linkedin" size="24px"></Icon>
                  <Input value="Andrea-C-Bentley" type="url" />
                </Anchor>
              </Column>
              <Column page="Contact">
                <Anchor htmlRef="https://github.com/AndreaGT91/" title="GitHub">
                  <Icon classes="fa fa-github" size="36px"></Icon>
                  <Input value="AndreaGT91" type="url" />
                </Anchor>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Contact;