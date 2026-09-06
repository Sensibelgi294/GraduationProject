import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLaptop,
  faMobileScreenButton,
  faHeadphones,
  faTabletScreenButton,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Categories(props) {
  const categories = [
    {
      id: 1,
      name: "Laptops",
      category: "laptops",
      description:
        "Powerful laptops for work, study, gaming, and everyday use.",
      icon: faLaptop,
    },
    {
      id: 2,
      name: "Smartphones",
      category: "smartphones",
      description:
        "Discover the latest smartphones with powerful performance and modern features.",
      icon: faMobileScreenButton,
    },
    {
      id: 3,
      name: "Tablets",
      category: "tablets",
      description:
        "Portable tablets for entertainment, creativity, productivity, and everyday use.",
      icon: faTabletScreenButton,
    },
    {
      id: 4,
      name: "Mobile Accessories",
      category: "mobile-accessories",
      description:
        "Chargers, cables, power banks, cases, and other essential mobile accessories.",
      icon: faHeadphones,
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#874dc3]/10 text-[#874dc3] px-4 py-2 rounded-full text-sm font-semibold mb-5">
              EXPLORE OUR STORE
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Find Your
              <span className="text-[#874dc3]"> Perfect Tech</span>
            </h1>

            <p className="mt-5 text-gray-400 text-lg leading-relaxed">
              Explore our technology categories and discover the perfect
              products for work, entertainment, gaming, and everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-5">

          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[#874dc3] font-semibold mb-2">
              CATEGORIES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Shop by Category
            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl">
              Browse our technology categories and find the products that
              are right for you.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                to={`/products?category=${category.category}`}
                key={category.id}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-[#874dc3]/10 rounded-2xl flex items-center justify-center text-3xl text-gray-700 group-hover:text-[#874dc3] transition duration-300">
                  <FontAwesomeIcon icon={category.icon} />
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold text-gray-900 mt-6 group-hover:text-[#874dc3] transition">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mt-3 leading-relaxed text-sm">
                  {category.description}
                </p>

                {/* Browse Button */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[#874dc3] font-semibold text-sm">
                    Browse Products
                  </span>

                  <span className="text-lg text-[#874dc3] group-hover:translate-x-2 transition-transform">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-gray-900 rounded-3xl px-6 py-12 md:px-12 text-center text-white">
            <div className="max-w-2xl mx-auto">

              <span className="text-[#874dc3] font-semibold">
                CAN'T DECIDE?
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Explore All Products
              </h2>

              <p className="text-gray-400 mt-4">
                Take a look at our complete collection and find the perfect
                technology for you.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 mt-7 bg-[#874dc3] hover:bg-[#7540aa] text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Products

                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}