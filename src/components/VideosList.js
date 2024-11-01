import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";

export default function VideosList() {
  const [videos, setvideos] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const importedImages = importAll(
      require.context("../videos", false, /\.(mp4|webm|mov)$/)
    );

    setvideos(importedImages);

    return () => {
      setvideos([]);
    };
  }, []);
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <Row>
        <Col
          sm={12}
          className="d-flex flex-wrap gap-2 mx-2 justify-content-center"
        >
          {videos.length === 0 && <Loading />}
          {videos.map((videos, id) => (
            <Videos videos={videos} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
