import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Handle form without refreshing the page
    console.log("Message submitted:", formData);

    // Show success UI
    setMessageSent(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  function sendAnotherMessage() {
    setMessageSent(false);
  }

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">

          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block bg-[#874dc3]/10 text-[#874dc3] px-4 py-2 rounded-full text-sm font-semibold mb-5">
              GET IN TOUCH
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Contact
              <span className="text-[#874dc3]"> Us</span>
            </h1>

            <p className="mt-5 text-gray-400 text-lg leading-relaxed">
              Have a question or need help? Our team is here to help you.
              Send us a message and we will get back to you as soon as
              possible.
            </p>

          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Information */}
            <div>

              <p className="text-[#874dc3] font-semibold mb-2">
                CONTACT INFORMATION
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Let's Talk
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed max-w-lg">
                Whether you have a question about our products, your order,
                or anything else, feel free to contact us.
              </p>

              <div className="mt-8 space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 bg-[#874dc3]/10 rounded-xl flex items-center justify-center text-xl text-[#874dc3]">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Email
                    </h3>

                    <p className="text-gray-500 mt-1 break-all">
                      support@techstore.com
                    </p>

                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 bg-[#874dc3]/10 rounded-xl flex items-center justify-center text-xl text-[#874dc3]">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Phone
                    </h3>

                    <p className="text-gray-500 mt-1">
                      +20 123 456 7890
                    </p>

                  </div>

                </div>

                {/* Location */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 bg-[#874dc3]/10 rounded-xl flex items-center justify-center text-xl text-[#874dc3]">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Location
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Cairo, Egypt
                    </p>

                  </div>

                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 bg-[#874dc3]/10 rounded-xl flex items-center justify-center text-xl text-[#874dc3]">
                    <FontAwesomeIcon icon={faClock} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Working Hours
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Saturday - Thursday
                    </p>

                    <p className="text-gray-500">
                      9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= CONTACT FORM / SUCCESS UI ================= */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">

              {!messageSent ? (

                <>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Fill out the form below and we'll get back to you.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                  >

                    {/* Name */}
                    <div>

                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20 transition"
                      />

                    </div>

                    {/* Email */}
                    <div>

                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20 transition"
                      />

                    </div>

                    {/* Subject */}
                    <div>

                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject
                      </label>

                      <input
                        type="text"
                        id="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20 transition"
                      />

                    </div>

                    {/* Message */}
                    <div>

                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        rows="5"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-[#874dc3] focus:ring-2 focus:ring-[#874dc3]/20 transition"
                      ></textarea>

                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-[#874dc3] hover:bg-[#7540aa] text-white py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />

                      Send Message
                    </button>

                  </form>
                </>

              ) : (

                /* ================= SUCCESS UI ================= */
                <div className="min-h-[500px] flex flex-col items-center justify-center text-center">

                  {/* Success Icon */}
                  <div
                    className="
                      w-20
                      h-20
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
                  <h2 className="text-3xl font-bold text-gray-900">
                    Message Sent Successfully!
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
                    Thank you for contacting us. We have received your
                    message and our support team will get back to you
                    as soon as possible.
                  </p>

                  {/* Status */}
                  <div className="w-full max-w-md bg-gray-50 rounded-2xl p-5 mt-8 text-left">

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
                          shrink-0
                        "
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>

                      <div>

                        <p className="font-semibold text-gray-900">
                          We'll be in touch
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Please check your email for our response.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Send Another Message */}
                  <button
                    type="button"
                    onClick={sendAnotherMessage}
                    className="
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
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />

                    Send Another Message
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-gray-50 pb-16">

        <div className="max-w-7xl mx-auto px-5">

          <div className="bg-gray-900 rounded-3xl px-6 py-12 text-center text-white">

            <h2 className="text-3xl md:text-4xl font-bold">
              Need Help With Your Order?
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions
              regarding your orders or products.
            </p>

            <p className="text-[#874dc3] font-semibold mt-5">
              support@techstore.com
            </p>

          </div>

        </div>

      </section>
    </>
  );
}