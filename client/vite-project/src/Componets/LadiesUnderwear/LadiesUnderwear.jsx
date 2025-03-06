import React, { useEffect, useState } from "react";
import ladiesinnerelastic4 from "../../assets/img/products/ladiesinnerelastic4.jpg";
import ladiesouter12 from "../../assets/img/products/ladiesouter12.jpg";
import Slips1 from "../../assets/img/products/Slips1.jpg";
import Spaghetti1 from "../../assets/img/products/Spaghetti1.jpg";
import SleevelessTop1 from "../../assets/img/products/Sleeveless Top1.jpg";
import trends1 from "../../assets/img/products/trends.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ladiesinnerelastic1 from "../../assets/img/products/ladiesinnerelastic5.jpg"
import ladiesinnerelastic2 from "../../assets/img/products/ladiesinnerelastic4.jpg"
import ladiesinnerelastic3 from "../../assets/img/products/ladiesinnerelastic3.jpg"
import ladiesinnerelastic5 from "../../assets/img/products/ladiesinnerelastic2.jpg"

import ladiesouter1 from "../../assets/img/products/ladiesouter12.jpg"
import ladiesouter2 from "../../assets/img/products/ladiesouter3.jpg"
import ladiesouter3 from "../../assets/img/products/ladiesouter4.jpg"
import ladiesouter4 from "../../assets/img/products/ladiesouter2.jpg"

import Slipsimg1 from "../../assets/img/products/Slips3.jpg"
import Slipsimg2 from "../../assets/img/products/Slips4.jpg"
import Slipsimg3 from "../../assets/img/products/Slips5.jpg"
import Slipsimg4 from "../../assets/img/products/Slips2.jpg"

import Spaghettiimg1 from "../../assets/img/products/Spaghetti2.jpg"
import Spaghettiimg2 from "../../assets/img/products/Spaghetti3.jpg"
import Spaghettiimg3 from "../../assets/img/products/Spaghetti4.jpg"
import Spaghettiimg4 from "../../assets/img/products/Spaghetti5.jpg"

import Sleevelessimg1 from "../../assets/img/products/Sleeveless Top1.jpg"
import Sleevelessimg2 from "../../assets/img/products/Sleeveless Top4.jpg"
import Sleevelessimg3 from "../../assets/img/products/Sleeveless Top3.jpg"
import Sleevelessimg4 from "../../assets/img/products/Sleeveless Top2.jpg"

import trendsimg1 from "../../assets/img/products/trends.jpg"
import trendsimg2 from "../../assets/img/products/trends1.jpg"
import trendsimg3 from "../../assets/img/products/trends2.jpg"
import trendsimg4 from "../../assets/img/products/trends3.jpg"
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
            <h2 className="text-2xl font-semibold mx-10 pt-2">{title}</h2>
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

const LadiesUnderwear = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };
  const products = [
    {
      id: "Inner-Elastic-images",
      title: "OUTER ELASTIC",
      Discription:"Designed for both comfort and style, our Outer Elastic Panties offer a secure fit without compromising on ease. The elastic sits on the outer edge, preventing direct contact with the skin, reducing irritation, and ensuring a smooth, comfortable wear Made from soft, breathable, and lightweight fabric, these panties allow for excellent airflow, keeping you fresh and dry throughout the day. The fabric is also gentle on the skin, making it a perfect choice for all-day wear",
      Name : "OUTER ELASTIC (Panties)",
      Highlights:"Non-Irritating Fit: Outer elastic prevents digging and discomfort,Breathable & Lightweight: Keeps you feeling cool and fresh,	Ideal for All Skin Types: Soft, hypoallergenic fabric for ultimate comfort",
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
      Discription : "The inner elastic sits flat against the skin, eliminating the digging and pinching that can leave red marks and indentations. The fabric used in these panties is soft, breathable, and gentle against the skin. The fabric helps air to circulate easily, minimizing moisture buildup and keeping you feeling fresh and dry. The fabric is hypoallergenic, which reduces the danger of irritation and pain. These panties are perfect for all-day wear, providing a comfortable and secure fit.",
      title: "INNER ELASTIC PANTIES",
      Name : "Panties (INNER ELASTIC)",
      Highlights:"They are an ideal choice for everyday wear, allowing women to move with ease and confidence,They are suitable for all skin types and sensitivities,•	They are a comfortable alternative to ill-fitting underwear.",
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
      title: "RACERBACK TANK TOP",
      Discription : "Elevate your everyday comfort with our Racerback Tank Top, designed for a perfect blend of style, flexibility, and breathability. The racerback design allows for unrestricted movement, making it an ideal choice for active wear or casual comfortCrafted from soft, lightweight, and breathable fabric, this tank top enhances air circulation, keeping you cool and dry throughout the day. The smooth, irritation-free fit ensures all-day comfort, making it suitable for all skin types.",

      Name : "RACERBACK TANK TOP",
      Highlights:"Freedom to Move: Racerback design offers flexibility and ease., Soft & Breathable Fabric: Keeps you comfortable in all seasons.,They are suitable for all skin types and sensitivities,Versatile Wear: Perfect for workouts  layering or lounging.",

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
      title: "SPAGHETTI TOP",
      Discription : "Stay effortlessly stylish and comfortable with our Spaghetti Top, designed for a lightweight and breathable feel. Featuring delicate spaghetti straps, this top offers a sleek and elegant look while ensuring unrestricted movement for all-day comfort. Made from soft, breathable, and skin-friendly fabric, it allows for excellent airflow, keeping you cool and fresh in any season. The gentle, irritation-free fit makes it suitable for all skin types, providing a second-skin feel.",
      Name : "SPAGHETTI TOP",
      Highlights:"Minimal & Chic: Thin straps for a stylish elegant touch, Soft & Breathable Fabric: Keeps you cool and comfortable.,They are suitable for all skin types and sensitivities,Versatile Wear: Perfect for workouts  layering or lounging.",

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

      title: "SLEEVELESS SHIRTS",
      Discription : "Experience the perfect combination of comfort and versatility with our Sleeveless Shirts, designed for a relaxed and breathable fit. Whether you're working out, layering, or enjoying a casual day out, these shirts offer maximum freedom of movement without compromising on style.Crafted from soft, lightweight, and moisture-wicking fabric, they ensure optimal airflow, keeping you cool and dry all day long. The smooth, irritation-free design makes them suitable for all skin types, providing a comfortable and secure fit.",
      Name : "SLEEVELESS SHIRTS",
      Highlights:"Unrestricted Movement: Perfect for active and casual wear., Soft & Breathable Fabric: Keeps you cool and comfortable.,They are suitable for all skin types and sensitivities,Versatile Wear: Perfect for workouts  layering or lounging.",
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
      title: "TRUNKS",
      Discription : "Designed for ultimate comfort and support, our Ladies' Trunks offer a secure and flexible fit that moves with you. With a slightly longer cut than traditional panties, these trunks provide full coverage while maintaining a stylish and modern look.Made from soft, breathable, and stretchable fabric, they allow for excellent airflow, keeping you cool and fresh throughout the day. The smooth, irritation-free seams ensure a gentle feel against the skin, making them suitable for all-day wear.",
      Name : "TRUNKS",
      Highlights:"Full Coverage & Support: A perfect balance of style and comfort, Soft & Breathable Fabric: Keeps you cool and comfortable.,They are suitable for all skin types and sensitivities,Versatile Wear: Ideal for daily use lounging or activewear",
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
              <h1 className="text-2xl font-semibold mb-4 py-3">Panties</h1>
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
              <h1 className="text-2xl font-semibold mt-8 mb-4 py-3">Slips</h1>
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
              <h1 className="text-2xl font-semibold mt-8 mb-4 py-3">TRUNKS</h1>
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

