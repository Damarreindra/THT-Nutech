import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanner } from "../utils/Store/BannerSlice";

function PromoBanner() {
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.banners);

  useEffect(() => {
    dispatch(fetchBanner());
  }, []);


  return (
    <div>
      <p className="font-semibold mb-3">Temukan promo menarik</p>
      <div className="flex gap-5">
        {banner
          ? banner.map((item, index) => {
              return (
                <div className="" key={index}>
                  <img src={item.banner_image}  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default PromoBanner;
