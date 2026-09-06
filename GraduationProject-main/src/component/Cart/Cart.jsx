import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlus,
  faMinus,
  faTrash,
  faArrowLeft,
  faLock,
  faCheck,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

import { toast, Toaster } from "sonner";

export default function Cart(props) {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [orderCompleted, setOrderCompleted] = useState(false);

  // Update localStorage
  function updateCart(updatedCart) {
  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  window.dispatchEvent(new Event("cartUpdated"));
  }

  // Increase quantity
  function increaseQuantity(id) {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    updateCart(updatedCart);
  }

  // Decrease quantity
  function decreaseQuantity(id) {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  }

  // Remove product
  function removeItem(id) {
    const removedProduct = cartItems.find(
      (item) => item.id === id
    );

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);

    // Sonner remove notification
    toast.success("Removed from Cart", {
      description:
        removedProduct?.title ||
        "Product removed successfully",
      duration: 3000,
    });
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = cartItems.length > 0 ? 20 : 0;

  // Final total
  const total = subtotal + shipping;

  // Checkout
  function handleCheckout() {
    if (cartItems.length === 0) {
      return;
    }

    // Clear cart
    localStorage.removeItem("cart");

    // Update UI
    setCartItems([]);

    // Show completed order UI
    setOrderCompleted(true);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  return (
    <>
      {/* ================= SONNER ================= */}
      <Toaster
        position="bottom-right"
        richColors
        closeButton
      />

      {/* ================= HERO SECTION ================= */}
      {!orderCompleted && (
        <section className="bg-gray-900 text-white pt-20">
          <div className="max-w-7xl mx-auto px-5 py-12">

            <div className="text-center">

              <span className="text-[#874dc3] font-semibold">
                YOUR SHOPPING CART
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold mt-3">
                Shopping{" "}
                <span className="text-[#874dc3]">
                  Cart
                </span>
              </h1>

              <p className="text-gray-400 mt-4">
                Review your items before completing your purchase.
              </p>

            </div>

          </div>
        </section>
      )}

      {/* ================= ORDER COMPLETED ================= */}
      {orderCompleted ? (
        <section className="bg-gray-50 min-h-screen py-16 px-5 pt-45">

          <div className="max-w-2xl mx-auto">

            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 sm:p-12 text-center">

              {/* Success Icon */}
              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                "
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Order Completed!
              </h1>

              {/* Description */}
              <p className="text-gray-500 mt-4 max-w-md mx-auto leading-relaxed">
                Thank you for your purchase. Your order has been successfully
                placed and will be processed shortly.
              </p>

              {/* Order Status */}
              <div className="bg-gray-50 rounded-2xl p-5 mt-8 text-left">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#874dc3]/10
                      text-[#874dc3]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FontAwesomeIcon icon={faBoxOpen} />
                  </div>

                  <div>

                    <p className="font-semibold text-gray-900">
                      Order Confirmed
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Your order is being prepared.
                    </p>

                  </div>

                </div>

              </div>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  mt-8
                  bg-[#874dc3]
                  hover:bg-[#7540aa]
                  text-white
                  px-8
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                  duration-300
                "
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </section>
      ) : (
        <>
          {/* ================= CART SECTION ================= */}
          <section className="bg-gray-50 py-12 min-h-screen">

            <div className="max-w-7xl mx-auto px-5">

              {cartItems.length === 0 ? (

                /* ================= EMPTY CART ================= */
                <div className="flex justify-center">

                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 sm:p-14 text-center max-w-xl w-full">

                    <div
                      className="
                        w-20
                        h-20
                        mx-auto
                        rounded-full
                        bg-[#874dc3]/10
                        text-[#874dc3]
                        flex
                        items-center
                        justify-center
                        text-3xl
                        mb-6
                      "
                    >
                      <FontAwesomeIcon icon={faBoxOpen} />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900">
                      Your Cart is Empty
                    </h2>

                    <p className="text-gray-500 mt-3">
                      Looks like you haven't added any products to your cart
                      yet.
                    </p>

                    <Link
                      to="/products"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        mt-7
                        bg-[#874dc3]
                        hover:bg-[#7540aa]
                        text-white
                        px-8
                        py-3
                        rounded-lg
                        font-semibold
                        transition
                        duration-300
                      "
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                      Browse Products
                    </Link>

                  </div>

                </div>

              ) : (

                /* ================= CART WITH PRODUCTS ================= */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* ================= CART ITEMS ================= */}
                  <div className="lg:col-span-2 space-y-5">

                    {cartItems.map((item) => (

                      <div
                        key={item.id}
                        className="
                          bg-white
                          rounded-2xl
                          border
                          border-gray-200
                          p-5
                          hover:shadow-md
                          transition
                        "
                      >

                        <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                          {/* Product Image */}
                          <div
                            className="
                              w-full
                              sm:w-28
                              h-28
                              bg-gray-100
                              rounded-xl
                              flex
                              items-center
                              justify-center
                              overflow-hidden
                              shrink-0
                            "
                          >

                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain p-3"
                            />

                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">

                            <p className="text-sm text-[#874dc3] capitalize">
                              {item.category}
                            </p>

                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-1 line-clamp-2">
                              {item.title}
                            </h2>

                            <p className="text-lg font-semibold text-[#874dc3] mt-2">
                              ${item.price.toFixed(2)}
                            </p>

                          </div>

                          {/* Quantity */}
                          <div className="flex items-center gap-3">

                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              aria-label={`Decrease quantity of ${item.title}`}
                              className="
                                w-9
                                h-9
                                rounded-lg
                                bg-gray-100
                                hover:bg-[#874dc3]
                                hover:text-white
                                transition
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <span className="font-semibold w-6 text-center">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              aria-label={`Increase quantity of ${item.title}`}
                              className="
                                w-9
                                h-9
                                rounded-lg
                                bg-gray-100
                                hover:bg-[#874dc3]
                                hover:text-white
                                transition
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>

                          </div>

                          {/* Item Total */}
                          <div className="sm:text-right min-w-[90px]">

                            <p className="text-sm text-gray-500">
                              Item Total
                            </p>

                            <p className="text-lg font-bold text-gray-900 mt-1">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>

                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.title}`}
                            className="
                              text-red-500
                              hover:text-red-700
                              transition
                              flex
                              items-center
                              gap-2
                              font-medium
                            "
                          >
                            <FontAwesomeIcon icon={faTrash} />

                            <span>
                              Remove
                            </span>

                          </button>

                        </div>

                      </div>

                    ))}

                    {/* Continue Shopping */}
                    <div>

                      <Link
                        to="/products"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[#874dc3]
                          hover:text-[#7540aa]
                          font-semibold
                          transition
                        "
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Continue Shopping
                      </Link>

                    </div>

                  </div>

                  {/* ================= ORDER SUMMARY ================= */}
                  <div>

                    <div
                      className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray-200
                        p-6
                        sticky
                        top-24
                      "
                    >

                      <h2 className="text-2xl font-bold text-gray-900">
                        Order Summary
                      </h2>

                      {/* Items Count */}
                      <div className="flex justify-between mt-7 text-gray-600">

                        <span>
                          Items
                        </span>

                        <span>
                          {cartItems.reduce(
                            (total, item) => total + item.quantity,
                            0
                          )}
                        </span>

                      </div>

                      {/* Subtotal */}
                      <div className="flex justify-between mt-4 text-gray-600">

                        <span>
                          Subtotal
                        </span>

                        <span>
                          ${subtotal.toFixed(2)}
                        </span>

                      </div>

                      {/* Shipping */}
                      <div className="flex justify-between mt-4 text-gray-600">

                        <span>
                          Shipping
                        </span>

                        <span>
                          ${shipping.toFixed(2)}
                        </span>

                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-200 my-5"></div>

                      {/* Total */}
                      <div className="flex justify-between text-xl font-bold text-gray-900">

                        <span>
                          Total
                        </span>

                        <span className="text-[#874dc3]">
                          ${total.toFixed(2)}
                        </span>

                      </div>

                      {/* Checkout */}
                      <button
                        type="button"
                        onClick={handleCheckout}
                        className="
                          w-full
                          mt-7
                          bg-[#874dc3]
                          hover:bg-[#7540aa]
                          text-white
                          py-3
                          rounded-lg
                          font-semibold
                          transition
                          duration-300
                          flex
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        <FontAwesomeIcon icon={faCheck} />

                        Proceed to Checkout
                      </button>

                      <p
                        className="
                          text-center
                          text-sm
                          text-gray-500
                          mt-4
                          flex
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        <FontAwesomeIcon
                          icon={faLock}
                          className="text-[#874dc3]"
                        />

                        Secure and fast checkout
                      </p>

                    </div>

                  </div>

                </div>
              )}

            </div>

          </section>
        </>
      )}
    </>
  );
}