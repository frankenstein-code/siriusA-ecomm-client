import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

function CategoryComponent() {
  return (
    <>
      <Container className="my-5">
        <Row style={{ textAlign: "center", gap: "15px" }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: "18rem",
                boxShadow: "1px 1px 1px 1px grey",
                background: "#ffa",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: "18rem",
                boxShadow: "1px 1px 1px 1px grey",
                background: "#ffa",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: "18rem",
                boxShadow: "1px 1px 1px 1px grey",
                background: "#ffa",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryComponent;
