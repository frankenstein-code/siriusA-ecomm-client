import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="theme-secondary">
        <Row style={{ textAlign: "center" }}>
          <Col>
            <p>This is some footer text.</p>
            <p>This is some footer text.</p>
            <p>This is some footer text.</p>
          </Col>
          <Col>
            <h6>Quick Links</h6>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
          </Col>
          <Col>
            <h6>Categories</h6>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
          </Col>
          <Col>
            <h6>Support</h6>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ background: "#000" }}>
        <Row style={{ textAlign: "center" }}>
          <Col style={{ color: "#fff" }}>Sometext</Col>
          <Col style={{ color: "#fff" }}>Sometext</Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
