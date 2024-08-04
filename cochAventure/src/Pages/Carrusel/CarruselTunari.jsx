import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrusel.css';

const CarruselPairumani = () => {
  return (
    <div className="carrusel-destino">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        centerMode={true}
        centerSlidePercentage={50}
        dynamicHeight={false}
      >
        <div>
          <img src='https://www.villatunari.gob.bo/uploads/atractivo/572805561154763429780693245735721808825409_1a36c6be434cfe9.jpeg' alt="Image 1" />
        </div>
        <div>
          <img src='https://boliviatravelsite.com/Images/Attractionphotos/villa-tunari-private-tour-02.jpg' alt="Image 2" />
        </div>
        <div>
          <img src='https://cabañaideal.com/wp-content/uploads/Mirador-Villa-Tunari.webp' alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarruselPairumani;