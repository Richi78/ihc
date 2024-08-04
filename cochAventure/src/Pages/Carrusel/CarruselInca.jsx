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
          <img src='https://i.pinimg.com/736x/4f/fa/31/4ffa31190c9f16c49e36760b97852cb4.jpg' alt="Image 1" />
        </div>
        <div>
          <img src='https://www.uyuniviajes.com/blog/wp-content/uploads/2020/12/incallajta-uyuni-viajes.jpg' alt="Image 2" />
        </div>
        <div>
          <img src='https://i.pinimg.com/736x/4f/fa/31/4ffa31190c9f16c49e36760b97852cb4.jpg' alt="Image 2" />
        </div>
        <div>
          <img src='https://2.bp.blogspot.com/-qtPUOlEcxE4/Wfid9KZXgfI/AAAAAAAAC3o/NsXPFGZp2bAaBm0YHitwrYOgJNyfyKejACLcBGAs/s1600/Incallajta-lugar-de-los-incas-turismo-cochabamba.jpg' alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarruselPairumani;