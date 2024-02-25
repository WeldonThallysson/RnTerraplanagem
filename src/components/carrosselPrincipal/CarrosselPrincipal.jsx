import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carrossel.css";
import 'swiper/css/effect-fade';
import { Pagination,Autoplay,EffectFade } from "swiper/modules";
import { imagens } from "../../Mocks/DataCarrouselPrincipal";


const CarrosselPrincipal = () => {
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

 useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
 }, []);


  const getImgSrc = () => {
    if (windowWidth < 475) {
      return imagens.map((item) => item.imgMobile);
    } else if (windowWidth < 265) {
      return imagens.map((item) => item.imgMobileSmall);
    } else {
      return imagens.map((item) => item.img);
    }
  };

  return (
    <Box>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{delay: 3000}}
        effect={'fade'}
        modules={[Pagination,Autoplay,EffectFade]}
        className="mySwiper"
      >
        {getImgSrc().map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt="Imagens aleatorias da RN" />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </Box>
  );
};

export default CarrosselPrincipal;