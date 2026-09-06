import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { toast, Toaster } from "sonner";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get category from URL
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

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

        setProducts(techProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError("Something went wrong while loading products.");
        setLoading(false);
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

  const filteredProducts = products.filter((product) => {
    const searchValue = search.toLowerCase().trim();

    // Category filter
    const matchesCategory =
      !selectedCategory ||
      product.category === selectedCategory;

    // Search filter
    const matchesSearch =
      product.title.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue) ||
      (product.brand &&
        product.brand.toLowerCase().includes(searchValue));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Toaster position="bottom-right" richColors closeButton />

      <section className="bg-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-5 py-14 md:py-18">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="
                inline-block
                bg-[#874dc3]/10
                text-[#874dc3]
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                mb-5
              "
            >
              OUR PRODUCTS
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Explore Our{" "}
              <span className="text-[#874dc3]">Products</span>
            </h1>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              Discover the latest technology products, from powerful laptops and
              smartphones to gaming gear and accessories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-5">
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
              mb-8
            "
          >
            <div>
              <p className="text-[#874dc3] font-semibold">SHOP NOW</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                {selectedCategory
                  ? selectedCategory
                      .split("-")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")
                  : "Tech Products"}
              </h2>
            </div>

            <div className="relative w-full sm:w-72">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search tech products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  outline-none
                  focus:border-[#874dc3]
                  focus:ring-2
                  focus:ring-[#874dc3]/20
                  transition
                "
              />
            </div>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div
                  className="
                    w-12
                    h-12
                    border-4
                    border-gray-200
                    border-t-[#874dc3]
                    rounded-full
                    animate-spin
                    mx-auto
                  "
                ></div>

                <p className="text-gray-500 mt-4">
                  Loading tech products...
                </p>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-red-500 font-semibold">{error}</p>
            </div>
          )}

          {!loading && !error && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-5xl mb-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                No Products Found
              </h3>

              <p className="text-gray-500 mt-2">
                Try searching for another tech product.
              </p>
            </div>
          )}

          {!loading && !error && filteredProducts.length > 0 && (
            <div
              className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  gap-6
                "
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="
                      group
                      bg-white
                      rounded-2xl
                      border
                      border-gray-200
                      overflow-hidden
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                >
                  <div
                    className="
                        relative
                        bg-gray-100
                        h-64
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="
                          w-full
                          h-full
                          object-contain
                          p-6
                          group-hover:scale-105
                          transition
                          duration-300
                        "
                    />

                    {product.discountPercentage > 0 && (
                      <span
                        className="
                            absolute
                            top-3
                            left-3
                            bg-red-500
                            text-white
                            text-xs
                            font-bold
                            px-3
                            py-1
                            rounded-full
                          "
                      >
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <p
                      className="
                          text-sm
                          text-[#874dc3]
                          font-semibold
                          capitalize
                        "
                    >
                      {product.category}
                    </p>

                    {product.brand && (
                      <p className="text-xs text-gray-400 mt-1">
                        {product.brand}
                      </p>
                    )}

                    <h3
                      className="
                          text-xl
                          font-bold
                          text-gray-900
                          mt-1
                          line-clamp-1
                        "
                    >
                      {product.title}
                    </h3>

                    <p
                      className="
                          text-gray-500
                          text-sm
                          mt-2
                          line-clamp-2
                        "
                    >
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FontAwesomeIcon icon={faStar} />
                      </div>

                      <span className="text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      {product.stock} items available
                    </p>

                    <div
                      className="
                          flex
                          items-center
                          justify-between
                          gap-3
                          mt-5
                        "
                    >
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>

                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="bg-gray-900 hover:bg-[#874dc3] text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300"
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && (
            <div className="text-center mt-12">
              <p className="text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {products.length}
                </span>{" "}
                tech products
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-5">
          <div
            className="
              bg-gray-900
              rounded-3xl
              px-6
              py-12
              md:px-12
              text-center
              text-white
            "
          >
            <p className="text-[#874dc3] font-semibold">NEED HELP?</p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Can't Find What You're Looking For?
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Contact our support team and we'll help you find the perfect
              product for your needs.
            </p>

            <Link
              to="/contact"
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}