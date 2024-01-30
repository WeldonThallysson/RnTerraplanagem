import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carrossel.css";
import 'swiper/css/effect-fade';
import { Pagination,Autoplay,EffectFade } from "swiper/modules";

import imagem1 from "../../assets/imagensCarrosselPrincipal/imagem1.png";
import imagem2 from "../../assets/imagensCarrosselPrincipal/imagem2.jpg";
import imagem3 from "../../assets/imagensCarrosselPrincipal/imagem3.jpg";
import imagem4 from "../../assets/imagensCarrosselPrincipal/imagem4.jpeg";
import imagem5 from "../../assets/imagensCarrosselPrincipal/imagem5.jpeg";

import imagemMobile from '../../assets/imagensCarrosselPrincipal/BannerMobile.jpg'
import BannerMobileSmall from '../../assets/imagensCarrosselPrincipal/BannerMobileSmall.jpg'
import { width } from "@mui/system";

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

 const imagens = [
    {
      id: 1,
      img: imagem1,
      imgMobile: imagemMobile,
      imgMobileSmall: BannerMobileSmall
    },
    {
      id: 2,
      img: imagem2,
      imgMobile: imagem2,
      imgMobileSmall: imagem2
    },
    {
      id: 3,
      img: imagem3,
      imgMobile: imagem3,
      imgMobileSmall: imagem3
    },
    {
      id: 4,
      img: imagem4,
      imgMobile: imagem4,
      imgMobileSmall: imagem4
    },
    {
      id: 5,
      img: imagem5,
      imgMobile: imagem5,
      imgMobileSmall: imagem5
    },
  ];

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