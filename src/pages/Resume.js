import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BtnStyle from "../components/BtnStyle";
function Resume() {
  const cvData = [
    {
      id: "1",
      title: "Graphic Designer & Animator",
      time: "2022(CONTINUE)",
      company: "Black & Brown Bakers",
      description:
        "In black and brown bakers.I’m working in creative and marketing team.",
    },
    {
      id: "2",
      title: "Graphic Designer & Animator",
      time: "2021-2022",
      company: "Ezec",
      description:
        "Ezec is a digital marketing agency.My worked is to create an attractive design for clients.",
    },
    {
      id: "3",
      title: "Junior Graphic Designer & Animator",
      time: "2021-2021",
      company: "Blue Ribbon Bakers",
      description:
        "For blue ribbon bakery.Iworked as a graphics designer only one month, My work is manage social media, design minimal social media posts, 2nd animation for upcoming events.",
    },
    {
      id: "4",
      title: "Graphic Designer",
      time: "2020-2021",
      company: "SOURCEBEE",
      description:
        "I worked in sourcebee it's a digital marketing agency as a graphics designer for one year, my worked is to create an attractive design for clients who wants to boost up their product sales.",
    },
  ];
  return (
    <Container fluid className="bg-color">
      <Row>
        <Col className="justify-content-center d-flex py-5">
          <BtnStyle title={"Resume"} />
        </Col>
      </Row>
      <Container className="">
        <Row>
          <h4 className="mt-1">Experience</h4>

          <Col>
            {cvData.map((detail, key) => (
              <Row className="py-3 bg-light my-3" key={key}>
                <Col xs={12} md={4} className="p-md-5 p-2">
                  <h5 className="text-primary fw-bold">{detail.time}</h5>
                  <h5 className="pt-1">{detail.company}</h5>
                </Col>
                <Col xs={12} md={6} className="p-md-5 p-2 pt-5 ">
                  <h5>{detail.title}</h5>
                  <p>{detail.description}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Row>
          <h4 className="mt-1">Education</h4>

          <Col>
            <Row className="py-3 bg-light my-3">
              <Col xs={6} md={6} className="p-md-5 p-2">
                <h5 className="text-primary fw-bold">2020-2020</h5>
                <h5 className="pt-1">Course: Graphic Designing</h5>
                <h5 className="pt-1">IT World Education</h5>
              </Col>
              <Col xs={6} md={6} className="p-md-5 p-2 ">
                <h5 className="text-primary fw-bold">2019-2020</h5>
                <h5 className="pt-1">Intermediate</h5>
                <h5 className="pt-1">Kohsar Degree College</h5>
              </Col>
              <Col xs={6} md={6} className="p-md-5 p-2 ">
                <h5 className="text-primary fw-bold">2016-2017</h5>
                <h5 className="pt-1">Matric</h5>
                <h5 className="pt-1">High School of Education World</h5>
              </Col>
              <Col xs={6} md={6} className="p-md-5 p-2 ">
                <h5 className="text-primary fw-bold">Language</h5>
                <h5 className="pt-1">Urdu</h5>
                <h5 className="pt-1">English</h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <h4 className="mt-1">Skills</h4>

          <Col>
            <Row className="py-3 bg-light my-3">
              <Col xs={6} md={6} className="p-md-5 p-2">
                <h5 className="pt-1"> Abobe Illustrator</h5>
                <h5 className="pt-1"> Abobe Photoshop</h5>
                <h5 className="pt-1"> Abobe Indesign</h5>
                <h5 className="pt-1">Coreldraw</h5>

              </Col>
              <Col xs={6} md={6} className="p-md-5 p-2 ">
                <h5 className="pt-1"> Abobe Premiere Pro</h5>
                <h5 className="pt-1"> Abobe After Effects</h5>
                <h5 className="pt-1">Sony Vegas</h5>
              </Col>
              <Col xs={6} md={6} className="p-md-5 p-2 ">
                <h5 className="text-primary fw-bold">Contact</h5>
                <h5 className="pt-1">Phone : </h5><span>+923160387855</span>
                <h5 className="pt-3">Email : </h5><span>amaankhanzada98@gmail.com</span>
                <h5 className="pt-3">Address : </h5><span>House:238/Block:A Latifabad/Hyderabad,71000</span>
              </Col>
              <Col xs={6} md={6} className="p-md-5 p-2 ">
                <h5 className="text-primary fw-bold">Interests</h5>
                <h5 className="pt-1">Gaming, Designing</h5>
                <h5 className="pt-1">Music, Illustration</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
