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
          <img src='https://www.lostiempos.com/sites/default/files/media_imagen/2019/2/16/8_9_me_5_jamessss.jpg' alt="Image 1" />
        </div>
        <div>
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2019/2/16/8_9_me_1_jamessss.jpg?itok=Z6ZXf_2h' alt="Image 2" />
        </div>
        <div>
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_home_apertura_2/public/galerias/20237/dsc_3022.jpg?itok=dD3WPLv9' alt="Image 3" />
        </div>
        <div>
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_home_apertura_2/public/galerias/20212/dsc_7667.jpg?itok=8mZXOF7p' alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarruselPairumani;