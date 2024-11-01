import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logos from "./Logos";
import { Link } from "react-router-dom";

function PostList() {
  const [images, setImages] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const importedImages = importAll(
      require.context("../image/logos", false, /\.(png|jpe?g|svg)$/)
    );

    setImages(importedImages);

    return () => {
      setImages([]);
    };
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-wrap mx-2">
          {images.map((image, id) => (
            <Link key={id} to={`/logo/${id}`}>
              <Logos logos={image} />
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default PostList;