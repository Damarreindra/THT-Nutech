import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserInfo from "../components/UserInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../utils/Store/ServiceSlice";
import Lottie from "lottie-react";
import loadingAnimation from "../lottie/loading.json";
import PaymentForm from "../components/PaymentForm";

function Payment() {
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.services);
  const [service, setService] = useState(null);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      const foundService = data.find(
        (item) => item.service_code.toLowerCase() === code
      );
      if (foundService) {
        setService(foundService);
      } else {
        navigate("/404");
      }
    }
  }, [data, code, navigate]);

  if (loading)
    return (
      <div className="w-full justify-center items-center">
        <Lottie
          animationData={loadingAnimation}
          className="w-full max-w-md mx-auto"
        />
      </div>
    );

  if (!service) return null;
  return (
    <Layout>
      <UserInfo />
       <PaymentForm item={service}/>
    </Layout>
  );
}

export default Payment;
