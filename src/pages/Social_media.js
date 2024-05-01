import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { imageDatasocail } from '../data/imageData';
import SocialData from '../components/SocialData';
import ImageCarousel from '../components/ImageCarousel';
const Social_media = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleImageClick = (index) => {
      setSelectedImageIndex(index);
    };
  return (
    <Container fluid>
    <Row>
      <Col className='d-flex flex-wrap justify-content-center gap-2 py-5'>
        {imageDatasocail.map((item, index) => (
          <SocialData item={item} key={item.id} index={index} handleImageClick={handleImageClick} />
        ))}
      </Col>
    </Row>
    {selectedImageIndex !== null && <ImageCarousel selectedIndex={selectedImageIndex} />}
  </Container>
  )
}

export default Social_media
