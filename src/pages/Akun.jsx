import React, { useEffect } from "react";
import Layout from "../components/Layout";
import UserImageForm from "../components/UserImageForm";
import UserEditForm from "../components/UserEditForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../utils/Store/UserSlice";
import Lottie from "lottie-react";
import loadingAnimation from "../lottie/loading.json";

function Akun() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { updatedUser } = useSelector((state) => state.updateUser);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch, updatedUser]);

  

  return (
    <>
      <Layout>
        {user ? (
          <>
            <UserImageForm user={user} />
            <UserEditForm user={user} />
          </>
        ) : (
          <div className="w-full justify-center items-center">
            <Lottie
              animationData={loadingAnimation}
              className="w-full max-w-md mx-auto"
            />
          </div>
        )}
      </Layout>
    </>
  );
}

export default Akun;
