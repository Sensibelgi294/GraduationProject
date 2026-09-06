import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (user.email === email) {
        setError("An account with this email already exists.");
        return;
      }
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("loggedInUser", JSON.stringify(user)); 

    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10 pt-26">
      <div className="w-full max-w-md">

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
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join Tech Store today
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

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20"
              />
            </div>

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
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20"
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20"
              />
            </div>

            {/* Terms */}
            <div className="mb-6">
              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 mt-1 accent-[#874dc3]"
                />

                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#874dc3] font-semibold hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold transition duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
              style={{ backgroundColor: "#874dc3" }}
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <div className="text-center mt-6">

            <p className="text-sm text-gray-500">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="inline-block mt-2 font-bold text-[#874dc3] hover:underline"
            >
              Login
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}