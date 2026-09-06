import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Remove old error message
    setError("");

    // Get registered user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists
    if (!savedUser) {
      setError("The login information you entered is incorrect");
      return;
    }

    // Check email and password
    if (
      savedUser.email !== email ||
      savedUser.password !== password
    ) {
      setError("The login information you entered is incorrect");
      return;
    }

    // Login successful
    // localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

    // Go to Home page
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10 pt-26">
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          {/* Header */}
          <div className="text-center mb-8">

            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl"
              style={{ backgroundColor: "#874dc3" }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your Tech Store account
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Error Message */}
            {error && (
              <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                className="
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-300
                  rounded-xl
                  outline-none
                  transition
                  focus:border-[#874dc3]
                  focus:ring-2
                  focus:ring-[#874dc3]/20
                "
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                className="
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-300
                  rounded-xl
                  outline-none
                  transition
                  focus:border-[#874dc3]
                  focus:ring-2
                  focus:ring-[#874dc3]/20
                "
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between mb-6">

              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="
                    w-4
                    h-4
                    accent-[#874dc3]
                    cursor-pointer
                  "
                />

                Remember me
              </label>

              <a
                href="#"
                className="text-sm font-semibold text-[#874dc3] hover:underline"
              >
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                text-white
                font-semibold
                transition
                duration-200
                hover:opacity-90
                hover:shadow-lg
                active:scale-[0.98]
              "
              style={{ backgroundColor: "#874dc3" }}
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">

            <div className="h-px bg-gray-200 flex-1"></div>

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px bg-gray-200 flex-1"></div>

          </div>

          {/* Register */}
          <div className="text-center">

            <p className="text-sm text-gray-500">
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="
                inline-block
                mt-2
                font-bold
                text-[#874dc3]
                hover:underline
              "
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}