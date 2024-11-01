import React from "react";
import { Card } from "react-bootstrap";

function Logos({ logos }) {
  return (
    <Card style={{ width: "18.5rem", border: "none", cursor: "pointer" }}>
      <Card.Body>
        <Card.Img src={logos} />
      </Card.Body>
    </Card>
  );
}

export default Logos;
