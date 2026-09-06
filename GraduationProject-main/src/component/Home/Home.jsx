import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faTruckFast,
  faLock,
  faStar,
  faHeadset,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import { toast, Toaster } from "sonner";

import heroImg from "../../assets/hero.png";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0")
      .then((response) => {
        const techCategories = [
          "smartphones",
          "laptops",
          "tablets",
          "mobile-accessories",
        ];

        const techProducts = response.data.products.filter((product) =>
          techCategories.includes(product.category)
        );

        setProducts(techProducts.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addToCart(product) {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          category: product.category,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Added to Cart", {
      description: product.title,
      duration: 4000,
      action: {
        label: "View Cart",
        onClick: () => {
          window.location.href = "/cart";
        },
      },
    });
  }

  return (
    <>
      <Toaster position="bottom-right" richColors closeButton />

      <div className="bg-gray-50 pt-20">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-900 min-h-screen text-white flex items-center">

          <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Hero Content */}
              <div>

                <span className="inline-block bg-[#874dc3]/10 text-[#874dc3] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  NEW COLLECTION
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Upgrade Your
                  <span className="text-[#874dc3]"> Tech </span>
                  Experience
                </h1>

                <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                  Discover the latest laptops, smartphones, tablets,
                  and accessories designed to take your technology
                  experience to the next level.
                </p>

                {/* Hero Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  <Link
                    to="/products"
                    className="bg-[#874dc3] hover:bg-[#7540aa] text-white px-7 py-3 rounded-lg font-semibold text-center transition duration-300"
                  >
                    Shop Now
                  </Link>

                  <Link
                    to="/categories"
                    className="border border-gray-600 hover:border-gray-400 px-7 py-3 rounded-lg font-semibold text-center transition duration-300"
                  >
                    Explore Categories
                  </Link>

                </div>

              </div>

              {/* Hero Image */}
              <div className="flex justify-center">

                <img
                  src={heroImg}
                  alt="Latest technology products"
                  className="w-full max-w-lg object-contain"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= WHY SHOP WITH US ================= */}
        <section className="py-16">

          <div className="max-w-7xl mx-auto px-5">

            {/* Section Header */}
            <div className="text-center mb-10">

              <p className="text-[#874dc3] font-semibold mb-2">
                WHY TECHSTORE
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Everything You Need in One Place
              </h2>

              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                We make finding and buying your favorite technology
                simple, secure, and convenient.
              </p>

            </div>


            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Fast Delivery */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300">

                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl text-[#874dc3]">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>

                <h3 className="text-xl font-bold mt-5 text-gray-900">
                  Fast Delivery
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Get your favorite technology delivered quickly and safely.
                </p>

              </div>


              {/* Secure Shopping */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300">

                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl text-[#874dc3]">
                  <FontAwesomeIcon icon={faLock} />
                </div>

                <h3 className="text-xl font-bold mt-5 text-gray-900">
                  Secure Shopping
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Shop with confidence with a safe and simple checkout experience.
                </p>

              </div>


              {/* Quality Products */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300">

                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl text-[#874dc3]">
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <h3 className="text-xl font-bold mt-5 text-gray-900">
                  Quality Products
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Discover reliable technology from trusted product categories.
                </p>

              </div>


              {/* Customer Support */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300">

                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl text-[#874dc3]">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>

                <h3 className="text-xl font-bold mt-5 text-gray-900">
                  Customer Support
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Our support team is always ready to help you find the right tech.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TOP PICKS ================= */}
        <section className="py-16 bg-white">

          <div className="max-w-7xl mx-auto px-5">

            {/* Section Header */}
            <div className="flex justify-between items-end mb-8">

              <div>

                <p className="text-[#874dc3] font-semibold mb-2">
                  TOP PICKS
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Featured Products
                </h2>

              </div>

              <Link
                to="/products"
                className="hidden sm:block text-[#874dc3] font-semibold hover:text-[#7540aa]"
              >
                View All →
              </Link>

            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300"
                >

                  {/* Product Image */}
                  <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition duration-300"
                    />

                    {product.discountPercentage > 0 && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}

                  </div>


                  {/* Product Information */}
                  <div className="p-5">

                    <p className="text-sm text-[#874dc3] font-semibold capitalize">
                      {product.category}
                    </p>

                    {product.brand && (
                      <p className="text-xs text-gray-400 mt-1">
                        {product.brand}
                      </p>
                    )}

                    <h3 className="text-lg font-bold text-gray-900 mt-1 line-clamp-1">
                      {product.title}
                    </h3>


                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-3">

                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500"
                      />

                      <span className="text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>

                    </div>


                    {/* Price + Cart */}
                    <div className="flex justify-between items-center mt-5">

                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>

                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="bg-gray-900 hover:bg-[#874dc3] text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300"
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="mr-2"
                        />

                        Add
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= PROMO BANNER ================= */}
        <section className="py-16">

          <div className="max-w-7xl mx-auto px-5">

            <div className="bg-gray-900 rounded-3xl px-6 py-12 md:px-12 md:py-16 text-white text-center">

              <p className="text-[#874dc3] font-semibold">
                SPECIAL OFFER
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Build Your Perfect Setup
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Find everything you need for your gaming, work, or entertainment
                setup in one place.
              </p>

              <Link
                to="/products"
                className="inline-block mt-7 bg-[#874dc3] hover:bg-[#7540aa] px-7 py-3 rounded-lg font-semibold transition duration-300"
              >
                Start Shopping
              </Link>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="py-16 bg-white">

          <div className="max-w-7xl mx-auto px-5">

            <div className="text-center">

              <p className="text-[#874dc3] font-semibold">
                NEED HELP?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                We're Here to Help
              </h2>

              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Have a question about a product or need help choosing
                the right technology? Our team is ready to help.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-7 bg-[#874dc3] hover:bg-[#7540aa] text-white px-7 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FontAwesomeIcon icon={faHeadset} />
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}