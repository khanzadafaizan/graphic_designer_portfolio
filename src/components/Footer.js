import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <Container className='py-3 '>
        <Row>   
            <Col id='contact' xs={12} className='justify-content-md-between d-flex flex-wrap gap-3  '>
                <div className=''>
                    <h5 className='pb-2'>Phone</h5>
                    <p>+923160387855</p>
                </div>
                <div className=''>
                    <h5 className='pb-2'>Email</h5>
                    <p>amaankhanzada98@gmail.com</p>
                </div>
                <div>
                <h5 className='pb-2'>Follow</h5>
                <SocialIcons/>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
