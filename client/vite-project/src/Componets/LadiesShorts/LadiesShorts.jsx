import React, { useState } from "react";

import ladiesShorts from "../../assets/img/products/ladiesShorts.png";
import ladiesShorts2 from "../../assets/img/products/ladiesShorts2.png";
import ladiesShorts4 from "../../assets/img/products/ladiesShorts4.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ladiesShortsimg1 from "../../assets/img/products/ladiesShorts.png"
import ladiesShortsimg2 from "../../assets/img/products/ladiesShorts1.3.png"
import ladiesShortsimg3 from "../../assets/img/products/ladiesShorts1.1.png"
import ladiesShortsimg4 from "../../assets/img/products/ladiesShorts1.2.png"

import ButterFlyShortsimg1 from "../../assets/img/products/ButterFlyShorts3.jpg"
import ButterFlyShortsimg2 from "../../assets/img/products/ButterFlyShorts2.jpg"
import ButterFlyShortsimg3 from "../../assets/img/products/ButterFlyShorts1.jpg"
import ButterFlyShortsimg4 from "../../assets/img/products/ButterFlyShorts4.jpg"

import BermudaShortsimg1 from "../../assets/img/products/ladiesShorts4.png"
import BermudaShortsimg2 from "../../assets/img/products/BermudaShorts1.png"
import BermudaShortsimg3 from "../../assets/img/products/BermudaShorts2.png"
import BermudaShortsimg4 from "../../assets/img/products/BermudaShorts3.png"





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



const LadiesShorts = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };



  const LadiesShorts1 = [
    {
      id: "ActiveWear-images",
      title: "LadiesShorts",
      images: [
        { src: ladiesShortsimg1, alt: "Image 1" },
        { src: ladiesShortsimg2, alt: "Image 2" },
        { src: ladiesShortsimg3, alt: "Image 3" },
        { src: ladiesShortsimg4, alt: "Image 4" },
      ],
    },
  ];
  const LadiesShorts2 = [
    {
      id: "ActiveWear-images1",
      title: "ButterFlyShorts",
      images: [
        { src: ButterFlyShortsimg1, alt: "Image 1" },
        { src: ButterFlyShortsimg2, alt: "Image 2" },
        { src: ButterFlyShortsimg3, alt: "Image 3" },
        { src: ButterFlyShortsimg4, alt: "Image 4" },
      ],
    },
  ];
  const LadiesShorts3 = [
    {
      id: "ActiveWear-images2",
      title: "BermudaShorts",
      images: [
        { src: BermudaShortsimg1, alt: "Image 1" },
        { src: BermudaShortsimg2, alt: "Image 2" },
        { src: BermudaShortsimg3, alt: "Image 3" },
        { src: BermudaShortsimg4, alt: "Image 4" },
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
              <h1 className="text-2xl font-semibold mt-8 mb-4">Shorts</h1>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
              <div className="" id="product-grid">
                {LadiesShorts1.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom  group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full   object-cover"
                      src={ladiesShorts}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {LadiesShorts2.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={ladiesShorts2}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {LadiesShorts3.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={ladiesShorts4}
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
                title={[...LadiesShorts1, ...LadiesShorts2, ...LadiesShorts3 ].find((p) => p.id === visibleProductId)?.title}
                images={[ ...LadiesShorts1,  ...LadiesShorts2,...LadiesShorts3].find((p) => p.id === visibleProductId)?.images}
                onClose={() => setVisibleProductId(null)}
                Discription={[ ...LadiesShorts1, ...LadiesShorts2, ...LadiesShorts3].find((p) => p.id === visibleProductId)?.Discription}
                Name={[ ...LadiesShorts1,  ...LadiesShorts2, ...LadiesShorts3].find((p) => p.id === visibleProductId)?.Name}    
                Highlights={[ ...LadiesShorts1, ...LadiesShorts2, ...LadiesShorts3].find((p) => p.id === visibleProductId)?.Highlights}


            />
          )}
        </div>
      </div>
      <Footer />

    </main>
  );
};

export default LadiesShorts;

