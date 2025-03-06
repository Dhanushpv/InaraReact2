import React, { useEffect, useState }  from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import tShirt from "../../assets/img/products/tShirt.jpg";
import MensPoloTShirts from "../../assets/img/products/MensPoloTShirts.jpg";
import  OversizedTshirt from "../../assets/img/products/OversizedT-shirt.jpg";

import MensTShirtsimg1 from "../../assets/img/products/MensTShirts4.jpg"
import MensTShirtsimg2 from "../../assets/img/products/MensTShirts1.jpg"
import MensTShirtsimg3 from "../../assets/img/products/MensTShirts2.jpg"
import MensTShirtsimg4 from "../../assets/img/products/MensTShirts3.jpg"

import PoloTShirts1 from "../../assets/img/products/MensPoloTShirts1.jpg"
import PoloTShirts2 from "../../assets/img/products/MensPoloTShirts2.jpg"
import PoloTShirts3 from "../../assets/img/products/MensPoloTShirts3.jpg"
import PoloTShirts4 from "../../assets/img/products/MensPoloTShirts4.jpg"

import OversizedTshirtimg1 from "../../assets/img/products/OversizedT-shirt1.jpg"
import OversizedTshirtimg2 from "../../assets/img/products/OversizedT-shirt2.jpg"
import OversizedTshirtimg3 from "../../assets/img/products/OversizedT-shirt3.jpg"
import OversizedTshirtimg4 from "../../assets/img/products/OversizedT-shirt4.jpg"
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


function MensTShirts() {
    const [visibleProductId, setVisibleProductId] = useState(null);

    const toggleProductImages = (productId) => {
      setVisibleProductId((prevId) => (prevId === productId ? null : productId));
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  
    const TShirts = [
      {
        id: "ActiveWear-images",
        title: "Crew Neck T-Shirt",
        Discription:"A crew neck T-shirt is a timeless and essential wardrobe staple known for its round, close-fitting neckline and simple yet stylish design. These T-shirts offer a clean, casual look that suits various occasions, from everyday wear to layering under jackets and sweaters.",
        Name : "Crew Neck T-Shirt",
        Highlights:"Round Neckline – Sits close to the base of the neck for a classic fit.,Soft & Breathable Fabric – Typically made from cotton.,Versatile Styling – Can be worn casually or as a layering piece under jackets hoodies or blazers.,Durable & Easy to Maintain – High-quality crew necks retain their shape after multiple washes.,Available in Various Colors & Patterns – Choose from solid colors stripes and graphic prints.",
        images: [
          { src: MensTShirtsimg1, alt: "Image 1" },
          { src: MensTShirtsimg2, alt: "Image 2" },
          { src: MensTShirtsimg3, alt: "Image 3" },
          { src: MensTShirtsimg4, alt: "Image 4" },
        ],
      },
    ];
    const PoloTShirts = [
      {
        id: "ActiveWear-images1",
        title: "Polo Shirts ",
        Discription:"A polo shirt is a short-sleeved, collared shirt with a buttoned placket at the neckline. It offers a perfect balance between casual and formal wear, making it ideal for work, sports, and everyday fashion. Originally designed for tennis and golf, polo shirts have become a wardrobe essential for men and women.",
        Name : "Polo Shirts ",
        Highlights:"Collared Design – Features a soft or structured collar for a refined look.,Buttoned Placket – Offers a versatile neckline that can be worn open or closed.,Short Sleeves – Provides a comfortable fit for warm weather.,Breathable Fabric – Typically made from cotton or polyester blends.,Versatile Styling – Can be dressed up or down for various occasions., Available in Various Colors & Patterns – Choose from solid colors stripes and graphic prints.", 
        images: [
          { src: PoloTShirts1, alt: "Image 1" },
          { src: PoloTShirts2, alt: "Image 2" },
          { src: PoloTShirts3, alt: "Image 3" },
          { src: PoloTShirts4, alt: "Image 4" },
        ],
      },
    ];
    const OversizedTshirtimg = [
      {
        id: "ActiveWear-images2",
        title: "OversizedT-shirt",
        Discription:"An oversized T-shirt is a loose-fitting top with a relaxed silhouette that offers a casual and comfortable look. These T-shirts are designed to be roomy and oversized, providing a laid-back style that can be dressed up or down for various occasions.",
        Name : "OversizedT-shirt",  
        Highlights:"Loose & Relaxed Fit – Offers a roomy and comfortable silhouette.,Soft & Breathable Fabric – Typically made from cotton or cotton blends.,Versatile Styling – Can be worn with jeans shorts leggings or skirts.,Durable & Easy to Maintain – High-quality oversized tees retain their shape after multiple washes.,Available in Various Colors & Patterns – Choose from solid colors stripes and graphic prints.",
        images: [
          { src: OversizedTshirtimg1, alt: "Image 1" },
          { src: OversizedTshirtimg2, alt: "Image 2" },
          { src: OversizedTshirtimg3, alt: "Image 3" },
          { src: OversizedTshirtimg4, alt: "Image 4" },
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
                <h1 className="text-2xl font-semibold mt-8 mb-4">T-Shirts</h1>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
                <div className="" id="product-grid">
                  {TShirts.map((product) => (
                    <div
                      key={product.id}
                      className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom  group"
                      onClick={() => toggleProductImages(product.id)}
                    >
                      <img
                        alt={product.title}
                        className="w-full   object-cover"
                        src={tShirt}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
  
                <div className="" id="product-grid">
                  {PoloTShirts.map((product) => (
                    <div
                      key={product.id}
                      className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                      onClick={() => toggleProductImages(product.id)}
                    >
                      <img
                        alt={product.title}
                        className="w-full  object-cover"
                        src={MensPoloTShirts}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
  
                <div className="" id="product-grid">
                  {OversizedTshirtimg.map((product) => (
                    <div
                      key={product.id}
                      className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                      onClick={() => toggleProductImages(product.id)}
                    >
                      <img
                        alt={product.title}
                        className="w-full  object-cover"
                        src={OversizedTshirt}
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
                  title={[...TShirts, ...PoloTShirts, ...OversizedTshirtimg ].find((p) => p.id === visibleProductId)?.title}
                  images={[ ...TShirts,  ...PoloTShirts,...OversizedTshirtimg].find((p) => p.id === visibleProductId)?.images}
                  onClose={() => setVisibleProductId(null)}
                  Discription={[ ...TShirts, ...PoloTShirts, ...OversizedTshirtimg].find((p) => p.id === visibleProductId)?.Discription}
                  Name={[ ...TShirts,  ...PoloTShirts, ...OversizedTshirtimg].find((p) => p.id === visibleProductId)?.Name}    
                  Highlights={[ ...TShirts, ...PoloTShirts, ...OversizedTshirtimg].find((p) => p.id === visibleProductId)?.Highlights}
  
  
              />
            )}
          </div>
        </div>
        <Footer />
  
      </main>
    );
}

export default MensTShirts