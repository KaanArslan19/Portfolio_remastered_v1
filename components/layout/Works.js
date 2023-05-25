import classes from "./Works.module.css";
import { useState } from "react";
import { images } from "/public/images/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";
const Works = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const [swiper, setSwiper] = useState(null);
  const [swiperMobile, setSwiperMobile] = useState(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMidDevice = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const imagesMobile = [
    images.ecommerceMobile,
    images.twitterMobile,
    images.realtorMobile,
  ];

  const imagesPc = [images.ecommercePc, images.twitterPc, images.realtorPc];
  const activeButton = () => {
    const buttonElement = document.getElementById(`${swiper?.activeIndex}`);
    const btnElList = document.querySelectorAll(".button-projects");
    btnElList.forEach(() => {
      document
        .querySelector(".active-button")
        ?.classList.remove("active-button");
    });

    buttonElement?.classList.add("active-button");
  };

  return <section id="works" className={classes.container}></section>;
};

export default Works;
