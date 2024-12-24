import { Carousel, Image } from "antd";
import "./CarouselMain.css";

export default function CarouselMain() {
  return (
    <>
      <Carousel
        arrows
        infinite={true}
        // autoplay
        className="caurusel"
      >
        <div className="caurusel-item">
          <Image
            className="caurusel-img"
            src="src/components/MainPage/CarouselMain/1.png"
          />
        </div>
        <div className="caurusel-item">
          <Image
            className="caurusel-img"
            src="src/components/MainPage/CarouselMain/2.png"
          />
        </div>
        <div className="caurusel-item">
          <Image
            className="caurusel-img"
            src="src/components/MainPage/CarouselMain/3.png"
          />
        </div>
        <div className="caurusel-item">
          <Image
            className="caurusel-img"
            src="src/components/MainPage/CarouselMain/4.png"
          />
        </div>
      </Carousel>
    </>
  );
}
