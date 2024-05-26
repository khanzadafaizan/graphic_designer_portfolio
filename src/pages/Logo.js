import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoData from '../components/LogoData';
import ImageCarousel from '../components/ImageCarousel';
import {imageData} from"../data/imageData"
function Logo() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Container fluid>
      <Row>
        <Col className='d-flex flex-wrap justify-content-center gap-2 py-5'>
          {imageData.map((item, index) => (
            <LogoData item={item} key={item.id} index={index} handleImageClick={handleImageClick} />
          ))}
        </Col>
      </Row>
      {selectedImageIndex !== null && <ImageCarousel selectedIndex={selectedImageIndex} />}
    </Container>
  );
}

export default Logo;
