import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import HeaderAlertComponent from "./HeaderAlertComponent";
import CarouselComponent from "./Carousel";
import CategoryComponent from "./CategoryComponent";
import TrendingProductsComponent from "./TrendingProductsComponent";

function HomeLayoutComponent() {
  return (
    <>
      <Alert className="p-0 theme-third m-0">
        <HeaderAlertComponent />
        <CarouselComponent />
      </Alert>
      <CategoryComponent />
      <TrendingProductsComponent />
    </>
  );
}

export default HomeLayoutComponent;
