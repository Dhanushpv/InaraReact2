import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Banner from "../../assets/img/wooden-table.jpg"
import mensShorts1 from "../../assets/img/products/mensShorts2.jpg"
import mensShorts2 from "../../assets/img/products/mensShorts3.jpg"
import mensShorts3 from "../../assets/img/products/mensShorts4.jpg"
import mensShorts4 from "../../assets/img/products/mensShorts1.jpg"

import MenTrackpants1 from "../../assets/img/products/Men'sTrackpants1.jpg"
import MenTrackpants2 from "../../assets/img/products/Men'sTrackpants3.jpg"
import MenTrackpants3 from "../../assets/img/products/Men'sTrackpants2.jpg"
import MenTrackpants4 from "../../assets/img/products/Men'sTrackpants4.jpg"

import LadiesUnderwear1 from "../../assets/img/products/catlog (11).jpg"
import Cozyknitting1 from "../../assets/img/products/Ex3.jpg"
import ActiveWear1 from "../../assets/img/products/Ex2.jpg"
import LadiesShorts1 from "../../assets/img/products/Ex1.jpg"
import MensVest1 from "../../assets/img/products/underwear(s).jpg"
import Shorts1 from "../../assets/img/products/catlog (6).jpg"
import MensTShirts1 from "../../assets/img/products/tShirt.jpg"
import TrackPants1 from "../../assets/img/products/catlog (4).jpg"
import { IoMdCloseCircle } from "react-icons/io";





const ProductImages = ({ title, images = [], onClose, Highlights, Discription, Name }) => {
  // Ensure Highlights is always an array
  Highlights = typeof Highlights === "string" ? Highlights.split(",") : Highlights;

  return (
    <div className=" inset-0 flex items-center justify-center   w-full">
      <div className="p-3 rounded-lg shadow-lg max-w-8xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button className=" font-semibold" onClick={onClose}><IoMdCloseCircle className="w-8 h-8" /></button>
        </div>

        {/* Image Gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 ">
          {images.length > 0 ? (
            <>
            
              <img
                src={images[0].src || "https://via.placeholder.com/400"}
                alt="Product image 1"
                className="singleproducts   size-full rounded-lg object-cover lg:block"
              />
              <div className=" singleproducts lg:grid lg:grid-cols-1 lg:gap-y-8 ">
                <img
                  src={images[1].src || "https://via.placeholder.com/400"}
                  alt="Product image 2"
                  className="aspect-3/2 w-full rounded-lg object-cover"
                />
                <img
                  src={images[2].src || "https://via.placeholder.com/400"}
                  alt="Product image 3"
                  className="aspect-3/2 w-full  rounded-lg object-cover"
                />
              </div>
              <img
                src={images[3].src || "https://via.placeholder.com/400"}
                alt="Product image 4"
                className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
              />
            </>
          ) : (
            <p className="text-center text-gray-500">No images available</p>
          )}
        </div>

        {/* Product Info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8">
  
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{Name || "Product Name"}</h1>
            
            <div className="mt-4">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <p className="text-base text-gray-900 mt-2">{Discription || "No description available."}</p>
            </div>
          </div>
          
          <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
              {Array.isArray(Highlights) && Highlights.length > 0 ? (
                Highlights.map((highlight, index) => <li key={index}>{highlight}</li>)
              ) : (
                <li>No highlights available.</li>
              )}
            </ul>
          </div>
  
        </div>
      </div>
    </div>
  );
};
function Products() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      const navigate = useNavigate();
      const [visibleProductId, setVisibleProductId] = useState(null);

      const toggleProductImages = (productId) => {
        setVisibleProductId((prevId) => (prevId === productId ? null : productId));
      };
      const Menshorts = [
        {
          id: "ActiveWear-images",
          title: "Shorts",
          Discription:"Bermuda shorts are knee-length shorts designed for both casual and semi-formal wear. Known for their relaxed fit and breathable fabric, they offer a perfect balance between comfort and style. These shorts are a great choice for summer outings, vacations, and everyday wear. They are available in a variety of colors and patterns to suit your personal style.",
          Name : "Men’s Vest",
          Highlights:"Comfortable & Stylish – Designed for a relaxed fit and a trendy look.,Breathable Fabric – Made of lightweight materials to keep you cool.,Versatile – Suitable for casual and semi-formal occasions.,Variety of Colors – Available in a range of colors and patterns.,Easy to Care For – Machine washable for easy maintenance.",
          images: [
            { src: mensShorts1, alt: "Image 1" },
            { src: mensShorts2, alt: "Image 2" },
            { src: mensShorts3, alt: "Image 3" },
            { src: mensShorts4, alt: "Image 4" },
          ],
        },
      ];
      const MenTracks = [
        {
          id: "Men'sTrackpants-images",
          title: "Tracks",
          Discription:"Track pants are a type of athletic wear designed for comfort and flexibility. They are made of soft, stretchy fabric that allows for easy movement during physical activities. These pants are perfect for workouts, sports, and casual wear. They are available in a variety of colors and styles to suit your personal taste.",
          Name : "Men’s Track Pants",
          Highlights:"Comfortable & Stylish – Designed for a relaxed fit and a trendy look.,Breathable Fabric – Made of lightweight materials to keep you cool.,Versatile – Suitable for workouts sports and casual wear.,Variety of Colors – Available in a range of colors and patterns.,Easy to Care For – Machine washable for easy maintenance.",
          images: [
            { src: MenTrackpants1, alt: "Image 1" },
            { src: MenTrackpants2, alt: "Image 2" },
            { src: MenTrackpants3, alt: "Image 3" },
            { src: MenTrackpants4, alt: "Image 4" },
          ],
        },
      ];
return (

<>
<Nav />
  <main className="main pt-14 p-8">
    {/* Page Title */}
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
            data-aos="zoom-out"
            data-aos-delay={100}
            className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-32"
          >
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 sm:leading-tight lg:leading-snug">
                Empowering clothing that reflects you.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    {/* Products Section */}
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <div className="py-4" data-aos="zoom-out" data-aos-delay={100}>
          <h1 className="text-gray-600 text-3xl  font-semibold ">
            Ladies Products
          </h1>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 "
        >
          <div
            data-aos="fade-down"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
          >
            <a onClick={() => navigate("/LadiesUnderwear")}>
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full"
                src={LadiesUnderwear1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">
                  Undergarments
                </h2>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
          >
            <a onClick={() => navigate("/Cozyknitting")}>
              <img
                alt="Organized Desk Collection - A tidy desk with a mouse pad, coffee mug, and plants"
                className="w-full h-full"
                 src={Cozyknitting1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">
                  Cozy Knitwear
                </h2>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
          >
            <a onClick={() => navigate("/ActiveWear")}>
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full"
                 src={ActiveWear1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">
                  Active Wear
                </h2>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
          >
            <a onClick={() => navigate("/LadiesShorts")}>
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full"
                 src={LadiesShorts1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">Shorts</h2>
              </div>
            </a>
          </div>
        </div>
        <div className="py-4" data-aos="zoom-out" data-aos-delay={100}>
          <h1 className="text-gray-600 text-3xl  font-semibold ">Mens</h1>
        </div>
        {!visibleProductId && (
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 "
        >
          <div
            data-aos="fade-down"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
          >
            <a onClick={() => navigate("/MensShorts")}>
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full "
                src={MensVest1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">
                  Undergarments
                </h2>
              </div>
            </a>
          </div>
          {Menshorts.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
            key={product.id}
            onClick={() => toggleProductImages(product.id)}
          >
            
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full "
                src={Shorts1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">Shorts</h2>
              </div>
           
          </div>
          ))}
          <div
            data-aos="fade-down"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
          >
            <a onClick={() => navigate("/MensTShirts")}>
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full "
                src={MensTShirts1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">T-Shirts</h2>
              </div>
            </a>
          </div>
          {MenTracks.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom"
            key={product.id}
            onClick={() => toggleProductImages(product.id)}
          >
            
              <img
                alt="Handcrafted Collection - A leather keychain with keys on a wooden surface"
                className="w-full h-full "
                src={TrackPants1}
                width={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover-text">
                <h2 className="text-white text-xl font-semibold">
                  Track Pants
                </h2>
              </div>
            
          </div>
          ))}
        </div>
        )}
      </div>
      {visibleProductId && (
              <ProductImages
                  title={[...Menshorts,...MenTracks ].find((p) => p.id === visibleProductId)?.title}
                  images={[ ...Menshorts,...MenTracks ].find((p) => p.id === visibleProductId)?.images}
                  onClose={() => setVisibleProductId(null)}
                  Discription={[ ...Menshorts,...MenTracks ].find((p) => p.id === visibleProductId)?.Discription}
                  Name={[ ...Menshorts,...MenTracks].find((p) => p.id === visibleProductId)?.Name}    
                  Highlights={[ ...Menshorts,...MenTracks].find((p) => p.id === visibleProductId)?.Highlights}
  
  
              />
            )}
    </div>
    {/* /Products Section */}
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

export default Products;