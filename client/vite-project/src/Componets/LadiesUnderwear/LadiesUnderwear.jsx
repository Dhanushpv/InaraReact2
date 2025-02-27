import React, { useState } from "react";
import ladiesinnerelastic4 from "../../assets/img/products/ladiesinnerelastic4.png";
import ladiesouter12 from "../../assets/img/products/ladiesouter12.png";
import Slips1 from "../../assets/img/products/Slips1.png";
import Spaghetti1 from "../../assets/img/products/Spaghetti1.png";
import SleevelessTop1 from "../../assets/img/products/Sleeveless Top1.png";
import trends1 from "../../assets/img/products/trends.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ladiesinnerelastic1 from "../../assets/img/products/ladiesinnerelastic5.png"
import ladiesinnerelastic2 from "../../assets/img/products/ladiesinnerelastic4.png"
import ladiesinnerelastic3 from "../../assets/img/products/ladiesinnerelastic3.png"
import ladiesinnerelastic5 from "../../assets/img/products/ladiesinnerelastic2.png"

import ladiesouter1 from "../../assets/img/products/ladiesouter12.png"
import ladiesouter2 from "../../assets/img/products/ladiesouter3.jpg"
import ladiesouter3 from "../../assets/img/products/ladiesouter4.jpg"
import ladiesouter4 from "../../assets/img/products/ladiesouter2.jpg"

import Slipsimg1 from "../../assets/img/products/Slips3.png"
import Slipsimg2 from "../../assets/img/products/Slips4.png"
import Slipsimg3 from "../../assets/img/products/Slips5.png"
import Slipsimg4 from "../../assets/img/products/Slips2.png"

import Spaghettiimg1 from "../../assets/img/products/Spaghetti2.png"
import Spaghettiimg2 from "../../assets/img/products/Spaghetti3.png"
import Spaghettiimg3 from "../../assets/img/products/Spaghetti4.png"
import Spaghettiimg4 from "../../assets/img/products/Spaghetti5.png"

import Sleevelessimg1 from "../../assets/img/products/Sleeveless Top1.png"
import Sleevelessimg2 from "../../assets/img/products/Sleeveless Top4.jpg"
import Sleevelessimg3 from "../../assets/img/products/Sleeveless Top3.jpg"
import Sleevelessimg4 from "../../assets/img/products/Sleeveless Top2.jpg"

import trendsimg1 from "../../assets/img/products/trends.png"
import trendsimg2 from "../../assets/img/products/trends1.jpg"
import trendsimg3 from "../../assets/img/products/trends2.jpg"
import trendsimg4 from "../../assets/img/products/trends3.jpg"







const ProductImages = ({ title, images = [], onClose, Highlights, Discription, Name }) => {
    // Ensure Highlights is always an array
    Highlights = typeof Highlights === "string" ? Highlights.split(",") : Highlights;

    return (
      <div className=" inset-0 flex items-center justify-center   w-full">
        <div className="p-3 rounded-lg shadow-lg max-w-8xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <button className="text-2xl font-semibold" onClick={onClose}>&times;</button>
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
          {/* <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{Name || "Product Name"}</h1>
            </div>
            
           
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <p className="text-base text-gray-900 mt-2">{Discription || "No description available."}</p>
            </div>
  
           
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
                {Array.isArray(Highlights) && Highlights.length > 0 ? (
                  Highlights.map((highlight, index) => <li key={index}>{highlight}</li>)
                ) : (
                  <li>No highlights available.</li>
                )}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    );
};

const LadiesUnderwear = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };
  const products = [
    {
      id: "Inner-Elastic-images",
      title: "Inner Elastic",
      Discription:"Our high-quality panties are designed for comfort and style. Sign up for our subscription service to be the first to access new and exclusive releases. We also offer bulk production for businesses and special orders.",
      Name : "Panties (Inner-Elastic)",
      Highlights:"Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton",
      images: [
        { src: ladiesinnerelastic1, alt: "Image 1" },
        { src: ladiesinnerelastic2, alt: "Image 2" },
        { src: ladiesinnerelastic3, alt: "Image 3" },
        { src: ladiesinnerelastic5, alt: "Image 4" },
      ],
    },
   
  ];
  const outer = [
    {
      id: "Outer-Elastic-images",
      Discription : "Our high-quality panties are designed for comfort and style. Sign up for our subscription service to be the first to access new and exclusive releases. We also offer bulk production for businesses and special orders.",
      title: "Outer Elastic",
      Name : "Panties (Outer-Elastic)",
      Highlights:"Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton",
      images: [
        { src: ladiesouter1, alt: "Image 1" },
        { src: ladiesouter2, alt: "Image 2" },
        { src: ladiesouter3, alt: "Image 3" },
        { src: ladiesouter4, alt: "Image 4" },
      ],
    },
   
  ];
  const slips = [
    {
      id: "Slips-images",
      title: "Slips",
      images: [
        { src: Slipsimg1, alt: "Image 1" },
        { src: Slipsimg2, alt: "Image 2" },
        { src: Slipsimg3, alt: "Image 3" },
        { src: Slipsimg4, alt: "Image 4" },
      ],
    },
  ];
  const slips1 = [
    {
      id: "Slips-images1",
      title: "Slips",
      images: [
        { src: Spaghettiimg1, alt: "Image 1" },
        { src: Spaghettiimg2, alt: "Image 2" },
        { src: Spaghettiimg3, alt: "Image 3" },
        { src: Spaghettiimg4, alt: "Image 4" },
      ],
    },
  ];
  const slips2 = [
    {
      id: "Slips-images2",
      title: "Slips",
      images: [
        { src: Sleevelessimg1, alt: "Image 1" },
        { src: Sleevelessimg2, alt: "Image 2" },
        { src: Sleevelessimg3, alt: "Image 3" },
        { src: Sleevelessimg4, alt: "Image 4" },
      ],
    },
  ];
  const trends = [
    {
      id: "Trends-images",
      title: "Trends",
      images: [
        { src: trendsimg1, alt: "Image 1" },
        { src: trendsimg2, alt: "Image 2" },
        { src: trendsimg3, alt: "Image 3" },
        { src: trendsimg4, alt: "Image 4" },
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
              {/* Panties Section */}
              <h1 className="text-2xl font-semibold mb-4">Panties</h1>
              <div className="flex grid grid-cols-1 md:grid-cols-3 gap-6 " id="product-grid">
              <div className="">
                {products.map((product) => (
                    <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                    >
                    {/* Image */}
                    <img
                        alt={product.title}
                        className="w-full  object-cover "
                        src={ladiesinnerelastic4}
                    />

                    {/* Hover Overlay - Fixed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                    </div>
                ))}
                </div>


              <div className="">
                {outer.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full h-full object-cover"
                      src={ladiesouter12}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              </div>
              

              {/* Slips Section */}
              <h1 className="text-2xl font-semibold mt-8 mb-4">Slips</h1>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
              <div className="" id="product-grid">
                {slips.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom  group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full   object-cover"
                      src={Slips1}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {slips1.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={Spaghetti1}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {slips2.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={SleevelessTop1}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              </div>

              {/* Trends Section */}
              <h1 className="text-2xl font-semibold mt-8 mb-4">Trends</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
                {trends.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={trends1}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Product Images Modal */}
          {visibleProductId && (
            <ProductImages
                title={[...products, ...slips, ...trends, ...outer, ...slips1, ...slips2 ].find((p) => p.id === visibleProductId)?.title}
                images={[...products, ...slips, ...trends, ...outer, ...slips1,...slips2].find((p) => p.id === visibleProductId)?.images}
                onClose={() => setVisibleProductId(null)}
                Discription={[...products, ...slips, ...trends, ...outer, ...slips1, ...slips2].find((p) => p.id === visibleProductId)?.Discription}
                Name={[...products, ...slips, ...trends, ...outer, ...slips1, ...slips2].find((p) => p.id === visibleProductId)?.Name}    
                Highlights={[...products, ...slips, ...trends, ...outer, ...slips1, ...slips2].find((p) => p.id === visibleProductId)?.Highlights}


            />
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LadiesUnderwear;

