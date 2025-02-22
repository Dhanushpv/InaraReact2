import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Banner from "../../assets/img/wooden-table.jpg"

function Contact() {
      const navigate = useNavigate();
return (

<>
<Nav />
  <main className="main py-24 p-8">
    {/* Page Title */}
    <div className="pt-14">
      <div className="bg-white overflow-hidden rounded-[15px]  sm:h-auto lg:h-full">
        <div className="relative isolate px-4 sm:px-6 lg:px-8">
          {/* Background Image */}
          <div
            className="rounded-lg absolute inset-0 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] mix-blend-multiply"
            aria-hidden="true"
          >
            <img
             src={Banner}
              className="object-cover w-full h-full opacity-40"
              alt="Wooden Table"
            />
          </div>
          {/* Content */}
          <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight  sm:leading-tight lg:leading-snug text-gray-950">
                CONTACT US
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    {/* Contact Section */}
    <section className="">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-map-marker-alt text-[#9AC8F7] text-3xl"></i>
            </div>
            <h2 className="text-center text-xl font-semibold mb-2">Address</h2>
            <p className="text-center text-gray-700">
              No.10, Kuppanna Gounder Street, Periyar Colony, Anupparpalayam
              Pudur, TIRUPUR, TAMILNADU, INDIA 641603
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-phone-alt text-[#9AC8F7] text-3xl"></i>
            </div>
            <h2 className="text-center text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-center text-gray-700">+91 9747 7477 98</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-envelope text-[#9AC8F7] text-3xl"></i>
            </div>
            <h2 className="text-center text-xl font-semibold mb-2">Email Us</h2>
            <p className="text-center text-gray-700">sales@inaratextiles.in</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className=" bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="" data-aos="fade-up" data-aos-delay={300}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15658.655264650748!2d77.3179596!3d11.1383962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9076e878788cf%3A0x48abfa3f87e64993!2sInara%20textiles%20%26%20Garments!5e0!3m2!1sen!2sin!4v1727717762211!5m2!1sen!2sin"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 400 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <input
                className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                placeholder="Subject"
                type="text"
              />
              <textarea
                className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                placeholder="Message"
                rows={4}
                defaultValue={""}
              />
              <button
                className="bg-[#9AC8F7] text-white py-2 px-4 rounded-lg w-full hover:bg-[#7ab6e5] transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />

  {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Preloader */}
  {/* <div id="preloader"></div> */}
  {/* Vendor JS Files */}
  {/* Main JS File */}
</>


)

}

export default Contact;