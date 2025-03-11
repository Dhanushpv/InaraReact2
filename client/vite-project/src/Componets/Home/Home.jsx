
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
import Carousel from "../../assets/img/hero-carousel/inaraintro2.gif"
import Carousel1 from "../../assets/img/hero-carousel/inaraintro1.jpg"
import Carousel2 from "../../assets/img/hero-carousel/inaraintro2.jpg"
import Carousel3 from "../../assets/img/hero-carousel/inaraintro3.jpg"
import Carousel4 from "../../assets/img/hero-carousel/inaraintro4.gif"
import Ex1 from "../../assets/img/products/Ex1.jpg"
import Ex2 from "../../assets/img/products/Ex2.jpg"
import Ex3 from "../../assets/img/products/Ex3.jpg"
import Ex4 from "../../assets/img/products/Ex4.jpg"
import Ex5 from "../../assets/img/products/Ex5.jpg"
import Ex6 from "../../assets/img/products/Ex6.jpg"
import Ex7 from "../../assets/img/products/Ex7.jpg"
import icon1 from "../../assets/img/icons/Design and Development.png"
import icon2 from "../../assets/img/icons/Sample Making.png"
import icon3 from "../../assets/img/icons/Production.png"
import Services from "../../assets/img/Services/custom_services4.jpg"
import AltServices from "../../assets/img/cotton2.jpg"
import Inaraicon from "../../assets/img/icons/inara2.png"
import AOS from "aos";
import "aos/dist/aos.css";



function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "", 
      subject: "",
      message: "",
    });
  
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
  
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      setLoading(true); // Show loading state
      setResponseMessage(""); // Clear previous messages
    
      const now = new Date();
      const currentDate = now.toISOString().split("T")[0]; // YYYY-MM-DD format
      const currentTime = now.toLocaleTimeString("en-US", { hour12: false }); // HH:MM:SS format (24-hour)
    
      const formDataWithDateTime = {
        ...formData,
        date: currentDate,
        time: currentTime,
      };
    
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbzsUehQHuXwbgb-QpUQfcikv_VhFFTRP-SPHNhH2OWoYGn5ahGHd0Eiqz2p0t9maos9/exec",
          {
            method: "POST",
            mode: "no-cors", // Since no-cors prevents fetching response data, we assume success
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataWithDateTime),
          }
        );
    
        // Show success message and clear form
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form fields
      } catch (error) {
        console.error("Error:", error);
        setResponseMessage("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    

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
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-5 font-times">
              Over 25 Years of Experience in the Textile Industry
            </h1>
            <p className="mt-6 text-lg leading-relaxed font-times text-gray-600">
              With over 15 years in the textiles and knitted garments game,
              we’re a top-notch private label manufacturer focused on making
              your ideas a reality. We’re all about quality and innovation,
              creating great clothing for women, men, and kids. Our skilled
              craftsmanship and careful attention to detail mean that every
              piece we make meets the highest standards in the industry.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 subtext_ex font-times">
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
      <div className=" section-title  mx-auto" data-aos="fade-up">
        <div className="font-times text-center text-4xl">Our Capabilities</div>
        <span className="font-times text-center">
          We deliver high-quality manufacturing solutions that ensure customer
          satisfaction.
        </span>
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
              <a onClick={() => navigate("/Services")} className="readmore stretched-link">
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
              <a onClick={() => navigate("/Services")} className="readmore stretched-link">
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
              <a onClick={() => navigate("/Services")} className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Service Item */}
        </div>
        <div className=" text-center pt-4 services-more" data-aos="fade-up">
          <span onClick={() => navigate("/Services")} >
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
          </span>
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
    <section id="get-started" className="get-started section container pb-5 " data-aos="fade-up"
              data-aos-delay={300}>
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
                Our fashion empowers and inspires confidence, blending innovation with timeless style.
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                    placeholder="Your Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                    placeholder="Message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="bg-[#9AC8F7] text-white py-2 px-4 rounded-lg w-full hover:bg-[#7ab6e5] transition duration-300"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                 
                </form>
                {responseMessage && (
                  <p className="text-center mt-2 text-green-600">{responseMessage}</p>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Get Started Section */}
  </main>
  <div data-aos="fade-up" data-aos-delay={300}>  <Footer  /> </div>
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