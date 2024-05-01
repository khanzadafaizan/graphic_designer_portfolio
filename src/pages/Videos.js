import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { videoData } from '../data/imageData';
import VideosData from '../components/VideosData';

function Videos() {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex flex-wrap justify-content-center gap-2 py-5'>
          {videoData.map((item, index) => (
            <VideosData item={item.src} key={item.id} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Videos
