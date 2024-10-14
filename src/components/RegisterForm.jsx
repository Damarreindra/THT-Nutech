import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as RiIcons from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../utils/Store/UserSlice";
import Alert from "./Alert";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [email, setEmail] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const passwords = watch("password");

  const dispatch = useDispatch();

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = () => {
    const userCredentials = {
      email,
      first_name,
      last_name,
      password,
    };
    dispatch(registerUser(userCredentials)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setEmail("");
        setPassword("");
        setFirst_Name("");
        setLast_Name("");
        setPasswordConfirm("")
        setSuccess(result.payload.message)
      } else {
        setError(result.payload?.message);
      }
    });
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="flex justify-center items-center gap-2 mb-5">
          <img src="../images/Logo.png" alt="Logo" />
          <h1 className="font-bold text-xl">SIMS PPOB</h1>
        </div>
        <h1 className="font-bold text-2xl mb-3 text-center">
          Lengkapi data untuk membuat akun
        </h1>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
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
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
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

          <div className="relative w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <RiIcons.RiLockPasswordLine />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Buat password"
              className={`w-full p-3 pl-10 pr-10 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? <RiIcons.RiEyeOffLine /> : <RiIcons.RiEyeLine />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative w-full mb-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <RiIcons.RiLockPasswordLine />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwords || "Passwords do not match",
              })}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Konfirmasi password"
              className={`w-full p-3 pl-10 pr-10 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            <button
              type="button"
              onClick={toggleConfirmPassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showConfirmPassword ? (
                <RiIcons.RiEyeOffLine />
              ) : (
                <RiIcons.RiEyeLine />
              )}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1 absolute right-0 mb-3">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {error && (
              <p className="text-red-500 text-sm mb-1 text-right">
                {error}
              </p>
            )}
          <button
            type="submit"
            className="w-full bg-red-600 text-white rounded p-3 hover:bg-red-900"
          >
            Register
          </button>
          <p className="text-center mt-3">
            Sudah punya akun? Login{" "}
            <Link className="text-red-500 font-bold" to={"/login"}>
              di sini
            </Link>
          </p>
        </form>
        {success && (
              <>
                   <Alert message={success} onClose={()=>setSuccess(null)}/>
              </>
            )}
      </div>
    </div>
  );
}

export default RegisterForm;
