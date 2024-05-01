import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { imageDatasocail } from '../data/imageData';
import CloseButton from 'react-bootstrap/CloseButton';

function ImageSocialCarousel() {
    const { id } = useParams(); // Extract the id parameter from the URL
    const [selectedIndex, setSelectedIndex] = useState(0); // State to store selected index, default to 0
  
    useEffect(() => {
      // Find the index of the image with the given id
      const index = imageDatasocail.findIndex(item => item.id === id);
  
      // If the index is found, update the selected index
      if (index !== -1) {
        setSelectedIndex(index);
      } else {
        // If the index is not found, default to 0
        setSelectedIndex(0);
      }
    }, [id]);
  
    const handleSelect = (selectedIndex, e) => {
      // Update the selected index
      setSelectedIndex(selectedIndex);
    };
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col className="my-5">
          {/* Close button outside Carousel.Item */}
          <div className='d-flex justify-content-end pb-3'>
            <Link to={'/social_mida'}>
              <CloseButton className='bg-light' />
            </Link>
          </div>
          <Carousel activeIndex={selectedIndex} onSelect={handleSelect} fade className="carousel">
            {imageDatasocail.map((item, key) => (
              <Carousel.Item key={key}>
                <img src={item.img} className="d-block w-100" alt={`image-${item.id}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default ImageSocialCarousel
