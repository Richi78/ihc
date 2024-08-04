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
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2022/11/28/el_templo_de_tarata_james.jpg?itok=iLBakSiG' alt="Image 1" />
        </div>
        <div>
          <img src='https://i0.wp.com/www.iglesiacbba.org/wp-content/uploads/2023/03/tarata.jpg?fit=800%2C445&ssl=1&w=640' alt="Image 2" />
        </div>
        <div>
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/10/17/3_me_2_rochaaaaaaaaa.jpg?itok=1H1HmMsr' alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarruselPairumani;