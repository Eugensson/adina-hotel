"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { sliderList } from "@/lib/data";

export const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {sliderList.map(({ id, title, image }) => (
        <SwiperSlide key={id} className="relative h-full">
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div className="absolute z-20 text-white text-center">
              <p className="uppercase font-tertiary tracking-[6px] mb-5">
                Just Enjoy and Relax
              </p>
              <h1 className="text-4xl lg:text-7xl font-primary uppercase tracking-[2px] max-w-[920px] leading-tight mb-6">
                {title}
              </h1>
              <button className="mx-auto btn btn-primary btn-lg">
                See our rooms
              </button>
            </div>
            <Image
              src={image}
              alt="Hotel Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute w-full h-full bg-black/70" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
