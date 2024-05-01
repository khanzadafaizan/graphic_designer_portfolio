import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import profile from "../image/profile.png";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
function About() {
  
  return (
    <>
      <Container fluid>
        <Row className="">
          <Col md={5} className="col_left bg-color"></Col>
          <Col md={7} className="profile_row ">
            <Row className=" p-0 m-0">
              <Col xs={12} sm={12} md={5} lg={5} className="about_me px-0 py-5 m-0">
                <div>
                  <div className="user-profile m-auto mt-4">
                    <img src={profile} />
                  </div>
                  <h2 className="text-center py-3">Amaan Khanzada</h2>
                  <hr className="hr" />
                  <h5 className="about_grap py-3 text-center">
                    GRAPHIC DESIGNER{" "}
                  </h5>
                </div>
                {/* hover, hover-focus, plain-hover-focus, hover-focus-active */}
                <SocialIcons/>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="py-5">
                <div className="ms-4 pt-5">
                  <h1 className="designer">
                    I'm Amaan Khanzada, a creative and innovative Graphic
                    Designer.{" "}
                  </h1>
                  <div className="my-3 my-md-3 my-lg-5">
                    <Link to={"/resume"}>
                      <button
                        type="button"
                        className="btn btn-primary  rounded-pill"
                      >
                        RESUME
                      </button>
                    </Link>
                  </div>
                  <p className="pt-3 fw-bold">
                    {" "}
                    Please take a moment to explore my projects and view my CV.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
