import React, { useEffect, useState } from "react";

import mensundergarments2 from "../../assets/img/products/mensundergarments2.jpg";
import underwear from "../../assets/img/products/underwear(s).jpg";
import mensundergarments3 from "../../assets/img/products/mensundergarments3.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import MensVest1 from "../../assets/img/products/MensVest.jpg"
import MensVest2 from "../../assets/img/products/MensVest1.jpg"
import MensVest3 from "../../assets/img/products/MensVest2.jpg"
import MensVest4 from "../../assets/img/products/MensVest4.png"

import MensTrunks1 from "../../assets/img/products/mensundergarments1.jpg"
import MensTrunks2 from "../../assets/img/products/MensTrunks1.jpg"
import MensTrunks3 from "../../assets/img/products/MensTrunks3.jpg"
import MensTrunks4 from "../../assets/img/products/MensTrunks2.jpg"

import MenBriefs1 from "../../assets/img/products/MenBriefs.jpg"
import MenBriefs2 from "../../assets/img/products/MenBriefs1.jpg"
import MenBriefs3 from "../../assets/img/products/MenBriefs2.jpg"
import MenBriefs4 from "../../assets/img/products/mensundergarments3.jpg"
import { IoMdCloseCircle } from "react-icons/io";






const ProductImages = ({ title, images = [], onClose, Highlights, Discription, Name }) => {
    // Ensure Highlights is always an array
    Highlights = typeof Highlights === "string" ? Highlights.split(",") : Highlights;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div className=" inset-0 flex items-center justify-center   w-full">
        <div className="p-3 rounded-lg shadow-lg max-w-8xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <button className=" font-semibold" onClick={onClose}><IoMdCloseCircle className="w-8 h-8" /></button>          </div>
  
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



const MensShorts = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MenShorts1 = [
    {
      id: "ActiveWear-images",
      title: "Men’s Vest",
      Discription:"A men’s vest is a sleeveless upper-body garment that is typically worn as an inner layer or as part of formal or casual outfits. It serves various purposes, including providing comfort, absorbing sweat, and enhancing style.",
      Name : "Men’s Vest",
      Highlights:"Soft & Breathable Fabric – Commonly made of cotton depending on the type.,Snug & Comfortable Fit – Designed to be lightweight and non-restrictive.,Versatile Use – Can be worn as innerwear casual wear or part of formal attire.,Stretchable & Durable – Ensures flexibility and long-lasting use.",
      images: [
        { src: MensVest1, alt: "Image 1" },
        { src: MensVest2, alt: "Image 2" },
        { src: MensVest3, alt: "Image 3" },
        { src: MensVest4, alt: "Image 4" },
      ],
    },
  ];
  const MenShorts2 = [
    {
      id: "ActiveWear-images1",
      title: "Boxer Briefs ",
      Discription:"Boxer briefs are a modern men’s underwear style that combines the support of briefs with the coverage of boxers. They provide a snug yet comfortable fit, making them ideal for everyday wear, sports, and formal dressing alike   ",
      Name : "Boxer Briefs ",
      Highlights:"Snug & Supportive Fit – Provides excellent support while maintaining flexibility.,Breathable & Moisture-Wicking – Keeps you cool and dry throughout the day.,Comfortable Waistband – Ensures a secure fit without causing discomfort.,Durable & Stretchable – Made to last and move with your body.",
      images: [
        { src: MensTrunks1, alt: "Image 1" },
        { src: MensTrunks2, alt: "Image 2" },
        { src: MensTrunks3, alt: "Image 3" },
        { src: MensTrunks4, alt: "Image 4" },
      ],
    },
  ];
  const MenShorts3 = [
    {
      id: "ActiveWear-images2",
      title: "Men’s Briefs ",
      Discription:"Men’s briefs are a classic and essential underwear style designed for maximum support, comfort, and flexibility. They feature a snug fit, minimal leg coverage, and a supportive pouch, making them an ideal choice for daily wear, sports, and formal dressing.",
      Name : "Men’s Briefs ",
      Highlights:"Soft & Breathable Fabric – Commonly made of cotton depending on the type.,Snug & Comfortable Fit – Designed to be lightweight and non-restrictive.,Versatile Use – Can be worn as innerwear casual wear or part of formal attire.,Stretchable & Durable – Ensures flexibility and long-lasting use.",
      images: [
        { src: MenBriefs1, alt: "Image 1" },
        { src: MenBriefs2, alt: "Image 2" },
        { src: MenBriefs3, alt: "Image 3" },
        { src: MenBriefs4, alt: "Image 4" },
      ],
    },
  ];



  return (
    <main className="main pt-14">
      <Nav />
      <div className=" rounded-lg">
        <div className="max-w-7xl mx-auto p-6">
          {!visibleProductId && (
            <>

             

              {/* ActiveWear Section */}
              <h1 className="text-2xl font-semibold mt-8 mb-4">Undergarments</h1>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
              <div className="" id="product-grid">
                {MenShorts1.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom  group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full   object-cover"
                      src={mensundergarments2}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {MenShorts2.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={underwear}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {MenShorts3.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={mensundergarments3}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              </div>


            </>
          )}

          {/* Product Images Modal */}
          {visibleProductId && (
            <ProductImages
                title={[...MenShorts1, ...MenShorts2, ...MenShorts3 ].find((p) => p.id === visibleProductId)?.title}
                images={[ ...MenShorts1,  ...MenShorts2,...MenShorts3].find((p) => p.id === visibleProductId)?.images}
                onClose={() => setVisibleProductId(null)}
                Discription={[ ...MenShorts1, ...MenShorts2, ...MenShorts3].find((p) => p.id === visibleProductId)?.Discription}
                Name={[ ...MenShorts1,  ...MenShorts2, ...MenShorts3].find((p) => p.id === visibleProductId)?.Name}    
                Highlights={[ ...MenShorts1, ...MenShorts2, ...MenShorts3].find((p) => p.id === visibleProductId)?.Highlights}


            />
          )}
        </div>
      </div>
      <Footer />

    </main>
  );
};

export default MensShorts;

