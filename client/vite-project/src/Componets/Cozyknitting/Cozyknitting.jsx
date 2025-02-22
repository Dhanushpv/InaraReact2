import React, { useState } from "react";
import cozy1 from "../../assets/img/products/Ex3.png";
import CozyKnitwear2 from "../../assets/img/products/Cozy Knitwear2.png";
import CozyKnitwears from "../../assets/img/products/Cozy Knitwear3.png";
import CozyKnitwear4 from "../../assets/img/products/Cozy Knitwear4.png";
import CozyKnitwear5 from "../../assets/img/products/Cozy Knitwear5.png";
import CozyKnitwear6 from "../../assets/img/products/Cozy Knitwear6.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import CozyKnitwearimg1 from "../../assets/img/products/Ex3.png"
import CozyKnitwearimg2 from "../../assets/img/products/cozy2.jpg"
import CozyKnitwearimg3 from "../../assets/img/products/cozy3.jpg"
import CozyKnitwearimg4 from "../../assets/img/products/cozy1.jpg"

import CozyKnitwear1img1 from "../../assets/img/products/Cozy Knitwear2.png"
import CozyKnitwear1img2 from "../../assets/img/products/Cozy Knitwear2.1.png"
import CozyKnitwear1img3 from "../../assets/img/products/Cozy Knitwear2.3.png"
import CozyKnitwear1img4 from "../../assets/img/products/Cozy Knitwear2.4.png"

import CozyKnitwear2img1 from "../../assets/img/products/Cozy Knitwear3.png"
import CozyKnitwear2img2 from "../../assets/img/products/Cozy Knitwear3.1.png"
import CozyKnitwear2img3 from "../../assets/img/products/Cozy Knitwear3.2.png"
import CozyKnitwear2img4 from "../../assets/img/products/Cozy Knitwear3.3.png"







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
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{Name || "Product Name"}</h1>
            </div>
            
            {/* Product Description */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <p className="text-base text-gray-900 mt-2">{Discription || "No description available."}</p>
            </div>
  
            {/* Highlights */}
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
          </div>
        </div>
      </div>
    );
};

const Cozyknitting = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };

  const products = [
    {
      id: "Inner-Elastic-images",
      title: "CozyKnitwear",
      Discription:"Our high-quality panties are designed for comfort and style. Sign up for our subscription service to be the first to access new and exclusive releases. We also offer bulk production for businesses and special orders.",
      Name : "Panties (Inner-Elastic)",
      Highlights:"Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton",
      images: [
        { src: CozyKnitwearimg1, alt: "Image 1" },
        { src: CozyKnitwearimg2, alt: "Image 2" },
        { src: CozyKnitwearimg3, alt: "Image 3" },
        { src: CozyKnitwearimg4, alt: "Image 4" },
      ],
    },
   
  ];
  const Cozywear = [
    {
      id: "Outer-Elastic-images",
      Discription : "Our high-quality panties are designed for comfort and style. Sign up for our subscription service to be the first to access new and exclusive releases. We also offer bulk production for businesses and special orders.",
      title: "CozyKnitwear",
      Name : "Panties (Outer-Elastic)",
      Highlights:"Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton",
      images: [
        { src: CozyKnitwear1img1, alt: "Image 1" },
        { src: CozyKnitwear1img2, alt: "Image 2" },
        { src: CozyKnitwear1img3, alt: "Image 3" },
        { src: CozyKnitwear1img4, alt: "Image 4" },
      ],
    },
   
  ];

  const CozyKnitwear = [
    {
      id: "Cozy-images",
      Discription : "Our high-quality panties are designed for comfort and style. Sign up for our subscription service to be the first to access new and exclusive releases. We also offer bulk production for businesses and special orders.",
      title: "CozyKnitwear",
      Name : "Panties (Outer-Elastic)",
      Highlights:"Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton",
      images: [
        { src: CozyKnitwear2img1, alt: "Image 1" },
        { src: CozyKnitwear2img2, alt: "Image 2" },
        { src: CozyKnitwear2img3, alt: "Image 3" },
        { src: CozyKnitwear2img4, alt: "Image 4" },
      ],
    },
   
  ];
  

  // const slips = [
  //   {
  //     id: "Slips-images",
  //     title: "Slips",
  //     images: [
  //       { src: "../src/assets/img/products/Slips3.png", alt: "Image 1" },
  //       { src: "../src/assets/img/products/Slips4.png", alt: "Image 2" },
  //       { src: "../src/assets/img/products/Slips5.png", alt: "Image 3" },
  //       { src: "../src/assets/img/products/Slips2.png", alt: "Image 4" },
  //     ],
  //   },
  // ];
  // const slips1 = [
  //   {
  //     id: "Slips-images1",
  //     title: "Slips",
  //     images: [
  //       { src: "../src/assets/img/products/Spaghetti2.png", alt: "Image 1" },
  //       { src: "../src/assets/img/products/Spaghetti3.png", alt: "Image 2" },
  //       { src: "../src/assets/img/products/Spaghetti4.png", alt: "Image 3" },
  //       { src: "../src/assets/img/products/Spaghetti5.png", alt: "Image 4" },
  //     ],
  //   },
  // ];
  // const slips2 = [
  //   {
  //     id: "Slips-images2",
  //     title: "Slips",
  //     images: [
  //       { src: "../src/assets/img/products/Sleeveless Top1.png", alt: "Image 1" },
  //       { src: "../src/assets/img/products/Sleeveless Top4.jpg", alt: "Image 2" },
  //       { src: "../src/assets/img/products/Sleeveless Top3.jpg", alt: "Image 3" },
  //       { src: "../src/assets/img/products/Sleeveless Top2.jpg", alt: "Image 4" },
  //     ],
  //   },
  // ];


  return (
    <main className="main pt-14">
      <Nav />
      <div className=" rounded-lg">
        <div className="max-w-7xl mx-auto p-6">
          {!visibleProductId && (
            <>
              {/* cozy Section */}
              <h1 className="text-2xl font-semibold mb-4">Cozy</h1>
              <div className="flex grid grid-cols-1 md:grid-cols-3 gap-6 " id="product-grid">
              <div className="">
                {products.map((product) => (
                    <div
                    key={product.id}
                    className="relative bg-white h-full rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                    >
                    {/* Image */}
                    <img
                        alt={product.title}
                        className="w-full  h-full object-cover "
                        src={cozy1}
                    />

                    {/* Hover Overlay - Fixed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                    </div>
                ))}
                </div>


              <div className="">
                {Cozywear.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full h-full object-cover"
                      src={CozyKnitwear2}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="">
                {CozyKnitwear.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full h-full object-cover"
                      src={CozyKnitwears}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              </div>
              

              {/* pants Section */}
              <h1 className="text-2xl font-semibold mt-8 mb-4">Pants</h1>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
              <div className="" id="product-grid">
                
                  <div
                    
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom  group"
                    
                    
                  >
                    <img
                    
                      className="w-full   object-cover"
                      src={CozyKnitwear4}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold"></h2>
                    </div>
                  </div>
                
              </div>

              <div className="" id="product-grid">
                
                  <div
                    
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    
                  >
                    <img
                      
                      className="w-full  object-cover"
                      src={CozyKnitwear5}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold"></h2>
                    </div>
                  </div>
               
              </div>

              <div className="" id="product-grid">
             
                  <div
                   
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    
                  >
                    <img
                     
                      className="w-full  object-cover"
                      src={CozyKnitwear6}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold"></h2>
                    </div>
                  </div>
               
              </div>
              </div>

            </>
          )}

          {/* Product Images Modal */}
          {visibleProductId && (
            <ProductImages
                title={[...products,  ...Cozywear, ...CozyKnitwear ].find((p) => p.id === visibleProductId)?.title}
                images={[...products,   ...Cozywear, ...CozyKnitwear].find((p) => p.id === visibleProductId)?.images}
                onClose={() => setVisibleProductId(null)}
                Discription={[...products, ...Cozywear, ...CozyKnitwear].find((p) => p.id === visibleProductId)?.Discription}
                Name={[...products, ...Cozywear, ...CozyKnitwear].find((p) => p.id === visibleProductId)?.Name}    
                Highlights={[...products, ...Cozywear, ...CozyKnitwear].find((p) => p.id === visibleProductId)?.Highlights}


            />
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cozyknitting;

