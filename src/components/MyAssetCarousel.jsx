import { Carousel } from "react-bootstrap";

const MyAssetCarousel = () => {
    return (
        <Carousel className="history-carousel">
          <Carousel.Item>
            <div className="carousel-item-placeholder">Placeholder for History 1</div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-placeholder">Placeholder for History 2</div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-placeholder">Placeholder for History 3</div>
          </Carousel.Item>
        </Carousel>
      );
}

export default MyAssetCarousel