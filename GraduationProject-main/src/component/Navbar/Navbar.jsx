import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function getCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartCount(totalQuantity);
  }

  useEffect(() => {
    getCartCount();

    window.addEventListener("cartUpdated", getCartCount);

    return () => {
      window.removeEventListener("cartUpdated", getCartCount);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 flex justify-between bg-gray-900 text-white w-full">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">

        {/* Logo */}
        <Link
          className="text-3xl font-bold font-heading"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          TechStore
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li>
            <Link className="hover:text-[#874dc3]" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="hover:text-[#874dc3]" to="/categories">
              Categories
            </Link>
          </li>

          <li>
            <Link className="hover:text-[#874dc3]" to="/products">
              Products
            </Link>
          </li>

          <li>
            <Link className="hover:text-[#874dc3]" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center space-x-5">

          {/* Cart */}
          <Link
            className="flex items-center hover:text-[#874dc3] relative"
            to="/cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {/* Cart Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-[#874dc3] text-white text-xs font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            className="flex items-center hover:text-[#874dc3]"
            to="/login"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>

        </div>
      </div>

      {/* Mobile Cart */}
      <Link
        className="xl:hidden flex mr-6 items-center relative"
        to="/cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        {/* Mobile Cart Badge */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-[#874dc3] text-white text-xs font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="self-center mr-12 xl:hidden"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-[#874dc3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 md:hidden">
          <ul className="flex flex-col px-5 py-4 space-y-4 font-semibold font-heading">

            <li>
              <Link
                className="block hover:text-[#874dc3]"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="block hover:text-[#874dc3]"
                to="/categories"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                className="block hover:text-[#874dc3]"
                to="/products"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                className="block hover:text-[#874dc3]"
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                className="block hover:text-[#874dc3]"
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}