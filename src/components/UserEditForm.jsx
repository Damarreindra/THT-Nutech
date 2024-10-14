import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as RiIcons from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateUser } from "../utils/Store/UpdateUserSlice";
import Alert from "./Alert";

function UserEditForm({ user }) {
  const [editable, setEditable] = useState(false);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [message, setMessage] = useState("")
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    let userData = { firstName, lastName };
    dispatch(updateUser(userData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setMessage(result.payload?.message);
        setEditable(false)
      } else {
        setMessage(result.payload?.message);
      }
    });

  };

  const handleEdit = () => {
    setEditable((prevState) => !prevState);
    setFirstName(user.first_name)
    setLastName(user.last_name)
  }


  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="flex justify-center items-center gap-2 mb-5">
          <h1 className="font-bold text-xl">
            {`${user.first_name}` + " " + `${user.last_name}`}
          </h1>
        </div>

        <form>
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
              readOnly
              placeholder="Masukan email"
              className={`w-full p-3 pl-10 pr-10 border cursor-default bg-gray-200 ${
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              readOnly={!editable}
              placeholder="Masukan nama depan"
              className={`w-full p-3 pl-10 pr-10 border read-only:cursor-default read-only:bg-gray-200 ${
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              readOnly={!editable}
              placeholder="Masukan nama belakang"
              className={`w-full p-3 pl-10 pr-10 border read-only:cursor-default read-only:bg-gray-200 ${
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
            type="button"
            onClick={editable ? handleSubmit : handleEdit  }
            className="w-full bg-red-600 text-white rounded p-3 hover:bg-red-900"
          >
            {editable ? "Simpan" : "Edit Profil"}
          </button>
          {editable && (
            <button
              type={"button"}
              onClick={handleEdit}
              className="w-full  text-gray-400 rounded p-3 mt-3"
            >
              Batalkan
            </button>
          )}
        </form>
      </div>
      {
        message && (
          <Alert message={"Edit profil "+ message} onClose={()=>setMessage(null)}/>
        )
      }
    </div>
  );
}

export default UserEditForm;
