import React, { useEffect, useState } from "react";
import cozy1 from "../../assets/img/products/Ex3.jpg";
import CozyKnitwear2 from "../../assets/img/products/Cozy Knitwear2.jpg";
import CozyKnitwears from "../../assets/img/products/Cozy Knitwear3.jpg";
import CozyKnitwear4 from "../../assets/img/products/Cozy Knitwear4.jpg";
import CozyKnitwear5 from "../../assets/img/products/Cozy Knitwear5.jpg";
import CozyKnitwear6 from "../../assets/img/products/Cozy Knitwear6.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import CozyKnitwearimg1 from "../../assets/img/products/Ex3.jpg"
import CozyKnitwearimg2 from "../../assets/img/products/cozy2.jpg"
import CozyKnitwearimg3 from "../../assets/img/products/cozy3.jpg"
import CozyKnitwearimg4 from "../../assets/img/products/cozy1.jpg"

import CozyKnitwear1img1 from "../../assets/img/products/Cozy Knitwear2.jpg"
import CozyKnitwear1img2 from "../../assets/img/products/Cozy Knitwear2.1.jpg"
import CozyKnitwear1img3 from "../../assets/img/products/Cozy Knitwear2.3.jpg"
import CozyKnitwear1img4 from "../../assets/img/products/Cozy Knitwear2.4.jpg"

import CozyKnitwear2img1 from "../../assets/img/products/Cozy Knitwear3.jpg"
import CozyKnitwear2img2 from "../../assets/img/products/Cozy Knitwear3.1.jpg"
import CozyKnitwear2img3 from "../../assets/img/products/Cozy Knitwear3.2.jpg"
import CozyKnitwear2img4 from "../../assets/img/products/Cozy Knitwear3.3.jpg"
import { IoMdCloseCircle } from "react-icons/io";






const ProductImages = ({ title, images = [], onClose, Highlights, Discription, Name }) => {
    // Ensure Highlights is always an array
    Highlights = typeof Highlights === "string" ? Highlights.split(",") : Highlights;

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

const Cozyknitting = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: "Inner-Elastic-images",
      title: "SUMMER T-SHIRT & SHORTS SET",
      Discription:"Stay cool, stylish, and comfortable all summer long with our Women's T-Shirt & Shorts Set. Designed for effortless wear, this set combines a lightweight, breathable T-shirt with soft, airy shorts, making it perfect for warm days and relaxed outings.Crafted from premium, moisture-wicking fabric, this set keeps you fresh and dry while offering a relaxed yet flattering fit. Whether you're lounging at home, heading to the beach, or running errands, this versatile set ensures all-day comfort and ease.",
      Name : "SUMMER T-SHIRT & SHORTS SET",
      Highlights:"Breathable & Lightweight: Perfect for hot summer days,Soft & Comfortable Fit: Made with skin-friendly fabric for irritation-free wear,Versatile & Stylish: Ideal for casual outings lounging or vacation wear",
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
      title: "WOMEN'S HALF SHIRT & JOGGERS",
      Discription:"Stay trendy and comfortable with our stylish Half Shirt & Embroidered Joggers Set. This perfect blend of casual and chic features a modern cropped half shirt paired with soft, embroidered joggers, offering a relaxed yet fashionable look.Made from breathable, high-quality fabric, this set ensures all-day comfort, whether you're lounging, working out, or stepping out in style. The joggers’ delicate embroidery adds an elegant touch, making this a must-have for any wardrobe.",
      Name : "WOMEN'S HALF SHIRT & JOGGERS",
      Highlights:"Breathable & Lightweight: Perfect for hot summer days,Soft & Comfortable Fit: Made with skin-friendly fabric for irritation-free wear,Versatile & Stylish: Ideal for casual outings lounging or vacation wear",
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
      Discription : "Drift into comfort and style with our Short Pajama Set, designed for a lightweight and breathable feel. This set features a soft, airy top paired with comfortable shorts, making it perfect for a restful night's sleep or lounging at home.Crafted from skin-friendly, moisture-wicking fabric, it ensures cool, irritation-free wear all night long. The relaxed fit allows for easy movement, keeping you comfortable in every season.",
      title: "WOMEN'S SHORT PAJAMA SET",
      Name : "WOMEN'S SHORT PAJAMA SET",
      Highlights:"Soft & Breathable Fabric: Keeps you cool and comfy,Relaxed Fit: Perfect for sleeping or lounging,Lightweight & Stylish: Ideal for warm nights and cozy mornings",
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
              <h1 className="text-2xl font-semibold py-4">Cozy-Knitwear</h1>
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
              <h1 className="text-2xl font-semibold mt-8 py-5">Pants</h1>
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

