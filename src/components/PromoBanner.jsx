import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanner } from "../utils/Store/BannerSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

function PromoBanner() {
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.banners);

  useEffect(() => {
    dispatch(fetchBanner());
  }, []);

  return (
    <div className="flex  justify-center flex-col mt-5">
            <p className="font-semibold mb-3">Temukan promo menarik</p>

    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      slidesPerView={4} 

      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="max-w-[100%] lg:max-w-[100%]"
    >
      {banner && banner.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center gap-6 mb-20 group relative cursor-pointer">
          <img 
                src={item.banner_image} 
                width={300}
              />
        
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}

export default PromoBanner;
