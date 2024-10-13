import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as RiIcons from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function UserEditForm({user}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="flex justify-center items-center gap-2 mb-5">
          <h1 className="font-bold text-xl">{`${user.first_name}`+" "+`${user.last_name}`}</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MdAlternateEmail />
            </span>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              value={user.email}
              placeholder="Masukan email"
              className={`w-full p-3 pl-10 pr-10 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <RiIcons.RiUser3Line />
            </span>
            <input
              type="text"
              {...register("nama_depan", {
                required: "First name is required",
              })}
              value={user.first_name}
              placeholder="Masukan nama depan"
              className={`w-full p-3 pl-10 pr-10 border ${
                errors.nama_depan ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.nama_depan && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nama_depan.message}
              </p>
            )}
          </div>
          <div className="relative w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <RiIcons.RiUser3Line />
            </span>
            <input
              type="text"
              {...register("nama_belakang", {
                required: "Last name is required",
              })}
              value={user.last_name}

              placeholder="Masukan nama belakang"
              className={`w-full p-3 pl-10 pr-10 border ${
                errors.nama_belakang ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.nama_belakang && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nama_belakang.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white rounded p-3 hover:bg-red-900"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEditForm;
