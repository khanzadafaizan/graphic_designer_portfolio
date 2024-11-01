import React from "react";
import { Card } from "react-bootstrap";

export default function SocialMedia({ socialMedia }) {
  return (
    <Card style={{ width: "18.5rem", border: "none", cursor: "pointer" }}>
      <Card.Body>
        <Card.Img src={socialMedia} />
      </Card.Body>
    </Card>
  );
}
