import React from "react";
import meme from "../../img/6b4upqv6at321.jpg";
import { Row, CardCol } from "./Container";

export function Card() {
  return (
    <div className="card">
      <img src={meme} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export function CardSection() {
  return (
    <Row>
      <CardCol>
        <Card />
      </CardCol>

      <CardCol>
        <Card />
      </CardCol>
    </Row>
  );
}
