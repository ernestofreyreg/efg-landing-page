import React from "react";
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { CardSection } from "./Card";
import { Container, Row, Col } from "./Container";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Jumbotron title="A Warm welcome!" buttonLabel="Call to action" />
          </Col>
        </Row>

        <CardSection />
      </Container>
    </div>
  );
};

export default Home;
