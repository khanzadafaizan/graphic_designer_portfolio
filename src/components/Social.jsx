import React, { useState, useEffect } from "react";
import { Carousel, CloseButton, Col, Container, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Social() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../image/social_media", false, /\.(png|jpe?g|svg)$/)
  );

  const imageData = images.map((img, index) => ({
    id: index,
    img: img,
  }));

  useEffect(() => {
    const parsedId = parseInt(id);
    if (!isNaN(parsedId) && parsedId >= 0 && parsedId < imageData.length) {
      setSelectedIndex(parsedId);
    } else {
      setSelectedIndex(0);
    }
  }, [id, imageData.length]);

  const handleSelect = (newSelectedIndex) => {
    setSelectedIndex(newSelectedIndex);
    navigate(`/social/${newSelectedIndex}`);
  };

  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col className="mt-2">
          <div className="d-flex justify-content-end pb-3">
            <Link to={"/socialmedia"}>
              <CloseButton className="bg-light" />
            </Link>
          </div>
          <Carousel
            activeIndex={selectedIndex}
            onSelect={handleSelect}
            fade
            className="carousel"
          >
            {imageData.map((item, key) => (
              <Carousel.Item key={key}>
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt={`image-${item.id}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
