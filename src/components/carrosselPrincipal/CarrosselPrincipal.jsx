import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carrossel.css";
import 'swiper/css/effect-fade';
import { Pagination,Autoplay,EffectFade } from "swiper/modules";

import imagem1 from "../../assets/imagensCarrosselPrincipal/imagem1.png";
import imagem2 from "../../assets/imagensCarrosselPrincipal/imagem2.png";
import imagem3 from "../../assets/imagensCarrosselPrincipal/imagem3.jpg";
import imagem4 from "../../assets/imagensCarrosselPrincipal/imagem4.jpg";
import imagemMobile from '../../assets/imagensCarrosselPrincipal/BannerMobile.jpg'
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
      imgMobile: imagemMobile
    },
    {
      id: 2,
      img: imagem2,
    },
    {
      id: 3,
      img: imagem3,
    },
    {
      id: 4,
      img: imagem4,
    },
  ];

  const getImgSrc = () => {
    if (windowWidth < 375) {
      return imagens.map((item) => item.imgMobile);
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