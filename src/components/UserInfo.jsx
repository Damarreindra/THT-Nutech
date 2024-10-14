import React, { useEffect, useState } from "react";
import * as RiIcons from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../utils/Store/UserSlice";
import UserInfoSkeleton from "./skeleton/UserInfoSkeleton";
import { fetchBalance } from "../utils/Store/TransactionSlice";
import { formatRupiah } from "../utils/formatterUtils";

function UserInfo() {
  const [visible, setVisible] = useState(false);
  const changeVisibility = () => setVisible(!visible);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { balance } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

 

  return (
    <>
      {user && balance ? (
        <div className="flex mb-5">
          <div className="flex-1">
            <img
              src={
                user.profile_image ===
                "https://minio.nutech-integrasi.com/take-home-test/null"
                  ? "../images/Profile Photo.png"
                  : user.profile_image
              }
              width={100}
            />
            <h2 className="text-base sm:text-lg">Selamat Datang,</h2>
            <h1 className="font-bold text-ba sm:text-2xl">
              {user.first_name} {user.last_name}
            </h1>
          </div>
          <div className="flex flex-col flex-1 rounded-2xl justify-center bg-gradient-to-r from-red-600 to-orange-400 p-4 text-white">
            <h2 className="text-base">Saldo anda</h2>
            <h1 className="font-bold text-2xl">
           <span>{visible ? formatRupiah(balance.balance)  : "******"}</span>
            </h1>
            <div
              className="flex flex-row gap-1 mt-3 cursor-pointer"
              onClick={changeVisibility}
            >
              <p>{visible ? "Sembunyikan" : "Lihat saldo"}</p>
              <span className="mt-1">
                {visible ? <RiIcons.RiEyeCloseLine /> : <RiIcons.RiEye2Line />}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <UserInfoSkeleton />
      )}
    </>
  );
}

export default UserInfo;
