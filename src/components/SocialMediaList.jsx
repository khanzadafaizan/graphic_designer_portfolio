import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";

export default function SocialMediaList() {
  const [socialMEdia, setsocialMEdia] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const importedImages = importAll(
      require.context("../image/social_media", false, /\.(png|jpe?g|svg)$/)
    );

    setsocialMEdia(importedImages);

    return () => {
      setsocialMEdia([]);
    };
  }, []);
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <Row>
        <Col className="d-flex flex-wrap justify-content-center mx-2">
          {socialMEdia.length === 0 && <Loading />}
          {socialMEdia.map((image, id) => (
            <Link key={id} to={`/social/${id}`}>
              <SocialMedia socialMedia={image} />
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
