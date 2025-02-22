import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxVideo } from "react-icons/rx";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Banner from "../../assets/img/wooden-table.jpg"
import Aboutimg1 from "../../assets/img/Services/floor-hanger-with-stylish-knitted-clothes-tropical-beach.jpg"
import AboutIcon1 from "../../assets/img/icons/Premium Fabrics.png"
import PremiumFabrics from "../../assets/img/Premium Fabricsimg.jpg"
import Serviceimg from "../../assets/img/Customer Serviceimg.jpg"
import CustomerService from "../../assets/img/icons/Customer Service.png"
import Sustainability from "../../assets/img/icons/Sustainability.png"
import PremiumFabricsimg1 from "../../assets/img/Premium Fabricsimg1.jpg"

 


function About() {
      const navigate = useNavigate();
return (

<>
<Nav />

  <main className="main pt-14 p-8   ">
    <div className="pt-14" data-aos="zoom-out" data-aos-delay={100}>
      <div className="bg-white overflow-hidden rounded-[15px]  sm:h-auto lg:h-full">
        <div className="relative isolate px-4 sm:px-6 lg:px-8">
          {/* Background Image */}
          <div
            className="rounded-lg absolute inset-0 bg-gradient-to-r from-[#0000] to-[#0000] mix-blend-multiply"
            aria-hidden="true"
          >
            <img
              src={Banner}
              className="object-cover w-full h-full opacity-60"
              alt="Wooden Table"
            />
          </div>
          {/* Content */}
          <div
            className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-32"
            data-aos="zoom-out"
            data-aos-delay={100}
          >
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 sm:leading-tight lg:leading-snug z-40">
                Empowering clothing that reflects you.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About Section */}
    <section id="about" className="about section">
      <div className="container">
        <div className="row position-relative">
          <div
            className="col-lg-7 about-img rounded-lg"
            data-aos="zoom-out"
            data-aos-delay={100}
          >
            <img
              className="rounded-lg"
              src={Aboutimg1}
            />
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
            <h2 className="inner-title">Overview of our organization</h2>
            <div className="our-story">
              {/* <h4>Est 2024</h4> */}
              <h3>Who We Are</h3>
              <p className="text-justify">
                Welcome to Inara Textiles and Garments! We specialize in
                high-quality knitted apparel for men, women, and children,
                blending craftsmanship with comfort. Our custom solutions ensure
                excellence for all ages and occasions.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    15+ Years of Expertise in textiles and knitted garments,
                    delivering premium private label manufacturing.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Commitment to Quality &amp; Innovation to produce
                    high-quality apparel for women, men, and children.{" "}
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Exceptional Craftsmanship with meticulous attention to
                    detail, ensuring industry-standard excellence.
                  </span>
                </li>
              </ul>
              <p className="text-justify">
                We partner with clients to deliver tailored garments that
                reflect their brand. From concept to production, we ensure
                style, comfort, and durability for timeless and trend-forward
                pieces.
              </p>
              {/* <div className="watch-video d-flex align-items-center position-relative">
              <RxVideo />
                <a
                  href="../src/assets/img/hero-carousel/inaraintro.gif"
                  className="glightbox stretched-link"
                  data-type="video"
                  data-source="youtube"
                >
                  Watch Video
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /About Section */}
    <section className="py-12">
      <h1
        className="text-center text-3xl tracking-wide py-5 "
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {" "}
        INARA Textiles Sourcing Advantage
      </h1>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="text-center" data-aos="fade-up" data-aos-delay={100}>
            <img
              alt="Premium Fabrics Icon"
              className="mx-auto mb-4"
              height={50}
              src={AboutIcon1}
              width={80}
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">
              Premium Fabrics
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              High-quality garments demand premium materials. Our approach
              focuses on designing and developing exceptional fabrics for our
              products.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                alt="Detailed image of premium fabric with intricate patterns and textures"
                className="w-full h-[28rem]"
                height={400}
                src={PremiumFabrics}
                width={600}
              />
            </div>
          </div>
          <div className="text-center " data-aos="fade-up" data-aos-delay={100}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                alt="Detailed image of premium fabric with intricate patterns and textures"
                className="w-full  h-[28rem]"
                height={400}
                src={Serviceimg}
                width={600}
              />
            </div>
            <img
              alt="Customer Service Icon"
              className="mx-auto mb-4"
              height={20}
              src={CustomerService}
              width={80}
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">
              Customer Service
            </h2>
            <p className="text-gray-700 text-justify">
              We support you throughout every stage of the process. Our
              commitment to exceptional communication and dedication for our
              products to customer service.
            </p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay={100}>
            <img
              alt="Sustainability Icon"
              className="mx-auto mb-4"
              height={50}
              src={Sustainability}
              width={80}
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">
              Sustainability
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              Oeko-Tex, WRAP, Sedex, and CTPAT certifications. By 2021,
              renewable resources are expected to make up 80% of our energy. The
              goal is to create systems and solutions that support long-term
              ecological health.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                alt="Detailed image of premium fabric with intricate patterns and textures"
                className="w-full  h-[28rem]"
                height={400}
                src={PremiumFabricsimg1}
                width={600}
              />
            </div>
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

export default About;