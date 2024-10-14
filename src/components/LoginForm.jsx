import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as RiIcons from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/Store/AuthSlice";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true)
    let userCredentials = { email, password };
    dispatch(loginUser(userCredentials)).then((result) => {
      setLoading(false)

      if (result.meta.requestStatus === "fulfilled") {
        setEmail("");
        setPassword("");

        localStorage.setItem("token", result.payload.data.token);
        window.location.href = "/home";
      } else {
        setError(result.payload?.message);
      }
    });
  };

  return (
    <div>
      <div className="max-w-md mx-auto ">
        <div className="flex justify-center items-center gap-2 mb-5">
          <img src="../images/Logo.png" alt="Logo" />
          <h1 className="font-bold text-xl">SIMS PPOB</h1>
        </div>
        <h1 className="font-bold text-2xl mb-3 text-center">
          Masuk atau buat akun untuk memulai
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
          {error && (
            <p className="text-red-500 text-sm mb-1 text-right">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-red-600 text-white rounded p-3 hover:bg-red-900"
          >
             {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
          <p className="text-center mt-3">
            Belum punya akun? Registrasi{" "}
            <Link className="text-red-500 font-bold" to={"/register"}>
              di sini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
