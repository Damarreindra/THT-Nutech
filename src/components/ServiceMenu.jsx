import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../utils/Store/ServiceSlice";
import { Link } from "react-router-dom";

function ServiceMenu() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);



  return (
    <div className="rounded bg-slate-100 p-5 shadow-md mb-5">
      <div className="flex flex-wrap justify-center gap-6">
        {data
          ? data.map((item, index) => {
              return (
                <Link
                  to={`/payment/${item.service_code.toLowerCase()}`}
                  key={index}
                  className="flex flex-col items-center space-y-2 w-24 sm:w-28"
                  
                >
                  <img src={item.service_icon} className="w-10 h-10" alt="" />
                  <p className="text-sm text-center font-semibold">
                    {item.service_name}
                  </p>
                </Link>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ServiceMenu;
