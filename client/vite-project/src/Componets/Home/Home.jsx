
import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { PiCubeFocusDuotone } from "react-icons/pi";
import { FaSignature } from "react-icons/fa";
import { TiAdjustBrightness } from "react-icons/ti";
import { CgEditShadows } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Carousel from "../../assets/img/hero-carousel/inaraintro.gif"
import Carousel1 from "../../assets/img/hero-carousel/inaraintro1.jpg"
import Carousel2 from "../../assets/img/hero-carousel/inaraintro2.jpg"
import Carousel3 from "../../assets/img/hero-carousel/inaraintro3.jpg"
import Carousel4 from "../../assets/img/hero-carousel/inaraintro4.gif"
import Ex1 from "../../assets/img/products/Ex1.png"
import Ex2 from "../../assets/img/products/Ex2.png"
import Ex3 from "../../assets/img/products/Ex3.png"
import Ex4 from "../../assets/img/products/Ex4.png"
import Ex5 from "../../assets/img/products/Ex5.jpeg"
import Ex6 from "../../assets/img/products/Ex6.png"
import Ex7 from "../../assets/img/products/Ex7.png"
import icon1 from "../../assets/img/icons/Design and Development.png"
import icon2 from "../../assets/img/icons/Sample Making.png"
import icon3 from "../../assets/img/icons/Production.png"
import Services from "../../assets/img/Services/custom_services4.png"
import AltServices from "../../assets/img/cotton2.jpg"
import Inaraicon from "../../assets/img/icons/inaralogo2.png"



function Home() {

  // useEffect(() => {



  //   // Preloader
  //   // $(window).on("load", function () {
  //   //   if ($("#preloader").length) {
  //   //     $("#preloader")
  //   //       .delay(100)
  //   //       .fadeOut("slow", function () {
  //   //         $(this).remove();
  //   //       });
  //   //   }
  //   // });
  const navigate = useNavigate();
return (

  <>
  <Nav />

  <main className="">
    {/* Hero Section */}
    <section
      id="hero"
      className="hero section"
      data-aos="fade-up"
      data-aos-delay={50}
    >
      <div
        id="heroCarousel"
        className="carousel slide w-full"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={5}
            aria-label="Slide 6"
          />
        </div>
        {/* Carousel Inner */}
        <div className="carousel-inner w-full">
          {/* Slide 1 */}
          <div className="carousel-item active w-full ">
            <img
              src={Carousel}
              className="w-full "
              alt="Slide 1"
            />
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src={Carousel1}
              className="w-full"
              alt="Slide 2"
            />
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src={Carousel2}
              className="w-full"
              alt="Slide 3"
            />
          </div>
          {/* Slide 4 */}
          <div className="carousel-item">
            <img
              src={Carousel3}
              className="w-full"
              alt="Slide 3"
            />
          </div>
          {/* Slide 5 */}
          <div className="carousel-item">
            <img
              src={Carousel4}
              className="w-full"
              alt="Slide 3"
            />
          </div>
        </div>
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    {/* /Hero Section */}
    {/* <our Experience */}
    <div
      className="relative overflow-hidden bg-white"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <div className="">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 sm:pb-32">
          <div className="sm:max-w-lg z-50 relative">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-5">
              Over 25 Years of Experience in the Textile Industry
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              With over 25 years in the textiles and knitted garments game,
              we’re a top-notch private label manufacturer focused on making
              your ideas a reality. We’re all about quality and innovation,
              creating great clothing for women, men, and kids. Our skilled
              craftsmanship and careful attention to detail mean that every
              piece we make meets the highest standards in the industry.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 subtext_ex">
              Whether you’re looking for sustainable fabrics, custom designs, or
              large-scale production, we’ve got you covered. Join the countless
              businesses that trust us to deliver excellence every time.
            </p>
          </div>
          <div>
            <div>
              {/* Decorative image grid */}
              <div className="hidden lg:block absolute inset-0 lg:mx-auto lg:w-full lg:max-w-7xl d-flex justify-center align-items-center opacity-grid z-0">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex1}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex2}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex3}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex4}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex5}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex6}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Ex7}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                onClick={() => navigate("/About")}
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 z-50 relative"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services Section */}
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Capabilities</h2>
        <p>
          We deliver high-quality manufacturing solutions that ensure customer
          satisfaction.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container tex">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fa-solid ">
                  <img
                    className="icon_image"
                    src={icon1}
                    alt=""
                  />
                </i>
              </div>
              <h3>Design and Development:</h3>
              <p>
                This includes conceptualizing clothing designs, creating
                patterns, and selecting fabrics.
              </p>
              <a href="./services.html" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid ">
                  <img
                    className="icon_image1"
                    src={icon2}
                    alt=""
                  />
                </i>
              </div>
              <h3>Sample Making:</h3>
              <p>
                Before full production, samples are created to finalize designs
                and ensure quality.
              </p>
              <a href="./services.html" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid ">
                  <img
                    className="icon_image"
                    src={ icon3 }
                    alt=""
                  />
                </i>
              </div>
              <h3>Production:</h3>
              <p>
                The actual manufacturing process, which can involve cutting,
                sewing, and finishing garments. This stage often includes bulk
                production.
              </p>
              <a href="./services.html" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Service Item */}
        </div>
        <div className=" text-center pt-4 services-more" data-aos="fade-up">
          <a href="./services.html">
            <button className="btn text-center">
              Know more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15px"
                width="15px"
                className="icon"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth="1.5"
                  stroke="#292D32"
                  d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
    {/* /Services Section */}
    {/* Alt Services Section */}
    <section id="alt-services" className="alt-services section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div
            className="col-lg-5 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h3>Inara. Where Elegance Meets Innovation.</h3>
            <p>
              Explore our latest collections of women's tops, where every piece
              is a blend of meticulous craftsmanship and contemporary design.
              From the initial sketch to the final stitch, we promise
              unparalleled quality and style.
            </p>
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={300}
            >
             <i><PiCubeFocusDuotone className="bi bi-patch-check w-96" /></i>

              <div>
                <h4>
                  <a href="./about.html" className="stretched-link">
                    Our Passion
                  </a>
                </h4>
                <p>
                  We believe in the power of self-expression through fashion.
                  Our journey began with a passion for creating garments that
                  not only look stunning but also feel comfortable. We take
                  pride in our commitment to ethical production and sustainable
                  practices.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i><FaSignature  className="bi bi-patch-check w-96" /></i>
              <div>
                <h4>
                  <a href="./about.html" className="stretched-link">
                    Signature Tops
                  </a>
                </h4>
                <p>Discover timeless designs that redefine elegance.</p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <i><TiAdjustBrightness  className="bi bi-patch-check w-96" /></i>
              <div>
                <h4>
                  <a href="./about.html" className="stretched-link">
                    Seasonal Favorites
                  </a>
                </h4>
                <p>Stay ahead with our curated picks for the season.</p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <i><CgEditShadows  className="bi bi-patch-check w-96" /></i>
              <div>
                <h4>
                  <a href="./about.html" className="stretched-link">
                    Exclusive Edits
                  </a>
                </h4>
                <p>
                  Limited edition pieces designed for the discerning
                  fashionista.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
          </div>
          <div
            className="features-image col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img
              src={Services}
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* /Alt Services Section */}
    {/* Get Started Section */}
    <section id="get-started" className="get-started section container pb-5 ">
      <div className="border">
        <div className="bg-gray-400">
          <div className="flex flex-wrap min-h-screen">
            {/* Left Section */}
            <div className="relative w-full lg:w-1/2 flex flex-col justify-end items-start p-8">
              <img
                alt="Decorative background with paper planes and clouds"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={AltServices}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              <div className="relative z-10 mb-8">
                <img
                  alt="Token logo"
                  className=""
                  height={50}
                  src={Inaraicon}
                  width={100}
                />
                <p className="text-gray-700">
                  Tether supports and empowers growing ventures and innovation
                  as a digital token built on multiple blockchains.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a className="text-gray-500 hover:text-gray-700" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-gray-500 hover:text-gray-700" href="#">
                    <i className="fab fa-telegram" />
                  </a>
                  <a className="text-gray-500 hover:text-gray-700" href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a className="text-gray-500 hover:text-gray-700" href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8">
              <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-2">GET IN TOUCH</h1>
                <p className="text-gray-500 mb-6">
                  24/7 We will answer your questions and problems
                </p>
                <form>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">
                      <FaUser  className="w-8"/>
                        <input
                          className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="First Name"
                          type="text"
                        />
                      </label>
                    </div>
                    <div className="flex-1 pt-3 ">
                      <label className="block text-gray-700">
                        <input
                          className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Last Name"
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 ">
                    <label className="block text-gray-700 w-full">
                    <PiEnvelopeSimpleFill className="w-8" />
                      <input
                        className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        type="email"
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 w-full">
                    <MdOutlinePhone className="w-8"/>
                      <input
                        className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone"
                        type="tel"
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 w-full">
                      <textarea
                        className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe your issue"
                        defaultValue={""}
                      />
                    </label>
                  </div>
                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Get Started Section */}
  </main>
<Footer/>
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

export default Home;