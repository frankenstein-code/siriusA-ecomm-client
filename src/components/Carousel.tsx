import Carousel from "react-bootstrap/Carousel";
import pic from "../../public/images/carousel2.jpg";
import Image from "next/image";
function CarouselComponent() {
  return (
    <Carousel fade variant="light">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={pic}
          alt="First slide"
          height={400}
        />
        <Carousel.Caption style={{ color: "#fff" }}>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
