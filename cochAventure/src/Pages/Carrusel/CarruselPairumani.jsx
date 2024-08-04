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
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/3/7/2_me_1_rochaaaaaa.jpg?itok=3nr7fYiB' alt="Image 1" />
        </div>
        <div>
          <img src='https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2019/12/04/2019120423212523869.jpg' alt="Image 2" />
        </div>
        <div>
          <img src='https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/3/7/2_me_3_rochaaaa.jpg?itok=GhXwze5m' alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarruselPairumani;