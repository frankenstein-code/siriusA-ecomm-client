import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

const items = [
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 2",
    description: "Description for item 2",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 3",
    description: "Description for item 3",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 4",
    description: "Description for item 4",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 5",
    description: "Description for item 5",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 6",
    description: "Description for item 6",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 7",
    description: "Description for item 7",
  },
  {
    imageSrc: "https://via.placeholder.com/150x150",
    title: "Item 8",
    description: "Description for item 6",
  },
];

const Item = ({ item }: any) => {
  return (
    <Col>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={item.imageSrc} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const TrendingProductsComponent = () => {
  const itemsPerSlide = 4;

  const renderCarouselItems = () => {
    const slides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      const slideItems = items.slice(i, i + itemsPerSlide);
      const slide = (
        <Carousel.Item key={i}>
          <Row>
            {slideItems.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </Row>
        </Carousel.Item>
      );
      slides.push(slide);
    }
    return slides;
  };

  return (
    <Container className="my-5 trending-product">
      <div style={{ display: "flex" }}>
        <h2>TRENDING THIS WEEK!</h2>
      </div>
      <Carousel interval={3000} indicators={false} variant="dark">
        {renderCarouselItems()}
      </Carousel>
    </Container>
  );
};

export default TrendingProductsComponent;
