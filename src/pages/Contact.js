import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q4lxrol", "template_of10xtk", form.current, {
        publicKey: "5b31Fwfho-fqCxTi3",
      })
      .then(
        () => {
          setSubmissionStatus("success");
        },
        (error) => {
          setSubmissionStatus("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Container fluid>
      <Row className="flex-column d-flex align-items-center ">
        <div className="about-div ">
          <h1 className="about text-center">CONTACT</h1>
          <p className="about-text text-center">
            I’m not hard to find, let's connect and build something truly
            spectacular!
          </p>
        </div>
        <Col xs={10} md={8} lg={6} className="resume_bg p-2 bg-color my-3">
          <div>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="from_name"
                  placeholder="USER NAME"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="from_email"
                  placeholder="USER EMAIL"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>MESSAGE</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
              </Form.Group>
              <Button type="submit" value="Send">
                Submit
              </Button>
            </Form>
            {submissionStatus === "success" && (
              <p className="text-success mt-3">
                Message has been sent successfully!
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-danger mt-3">
                Messege failed. Please try again later.
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
