import React, { useEffect, useState } from "react"; 
import ActiveWear1 from "../../assets/img/products/Active Wear1.jpg";
import ActiveWear2 from "../../assets/img/products/Active Wear2.jpg";
import ActiveWear3 from "../../assets/img/products/Active Wear3.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ActiveWearimg1 from "../../assets/img/products/Active Wear1.jpg"
import ActiveWearimg2 from "../../assets/img/products/Active Wear1.3.jpg"
import ActiveWearimg3 from "../../assets/img/products/Active Wear1.2.jpg"
import ActiveWearimg4 from "../../assets/img/products/Active Wear1.5.jpg"

import Nightwear1 from "../../assets/img/products/Nightwear2.jpg"
import Nightwear2 from "../../assets/img/products/Active Wear2.jpg"
import Nightwear3 from "../../assets/img/products/Nightwear3.jpg"
import Nightwear4 from "../../assets/img/products/Nightwear1.jpg"
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



const ActiveWear = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const ActiveWears = [
    {
      id: "ActiveWear-images",
      title: "COTTON BLOUSE/TOP",
      Discription:"Add a touch of elegance and comfort to your wardrobe with our Frill-Trimmed Cotton Top, Blouse, Lace Blouse, or Pintucked Blouse. Designed with delicate frill details, this top adds a feminine and stylish flair to any outfit while ensuring breathable, all-day comfort.",
      Name : "COTTON BLOUSE/TOP",
      Highlights:"Blue Blouse: A casual soft and flowing fabric perfect for everyday wear.,	Brown Blouse: A dressy blouse with ruffle details ideal for semi-formal occasions,Pink Blouse: A delicate possibly lace-trimmed blouse for an elegant touch,	Grey Blouse: A structured blouse suitable for business casual settings.",
      images: [
        { src: ActiveWearimg1, alt: "Image 1" },  
        { src: ActiveWearimg2, alt: "Image 2" },
        { src: ActiveWearimg3, alt: "Image 3" },
        { src: ActiveWearimg4, alt: "Image 4" },
      ],
    },
  ];
  const ActiveWears1 = [
    {
      id: "ActiveWear-images1",
      title: "SHORT NIGHTWEAR",
      Discription:"Enjoy a comfortable and stylish night's sleep with our Short Nightwear Collection. Designed for breathability and ease, these pieces offer a lightweight, relaxed fit, perfect for warm nights or lounging at home.Crafted from soft, skin-friendly fabrics, they provide maximum comfort while ensuring a chic and effortless look. Whether you prefer short pajama sets, nightdresses, or camisole sets, our collection has something for everyone",
      Name : "SHORT NIGHTWEAR",
      Highlights:"Soft & Breathable Fabric: Keeps you cool and cozy all night,Lightweight & Relaxed Fit: Ideal for warm weather.,Stylish & Comfortable: Perfect for sleep or lounging",
      images: [
        { src: Nightwear1, alt: "Image 1" },
        { src: Nightwear2, alt: "Image 2" },
        { src: Nightwear3, alt: "Image 3" },
        { src: Nightwear4, alt: "Image 4" },
      ],
    },
  ];
  const ActiveWears2 = [
    {
      id: "ActiveWear-images2",
      title: "Slips",
      // images: [
      //   { src: Sleevelessimg1, alt: "Image 1" },
      //   { src: Sleevelessimg2, alt: "Image 2" },
      //   { src: Sleevelessimg3, alt: "Image 3" },
      //   { src: Sleevelessimg4, alt: "Image 4" },
      // ],
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
              <h1 className="text-2xl font-semibold mt-8 mb-4">Active wear</h1>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6" id="product-grid">
              <div className="" id="product-grid">
                {ActiveWears.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom  group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full   object-cover"
                      src={ActiveWear1}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {ActiveWears1.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={ActiveWear2}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="text-white text-xl font-semibold">{product.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div className="" id="product-grid">
                {ActiveWears2.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-zoom group"
                    onClick={() => toggleProductImages(product.id)}
                  >
                    <img
                      alt={product.title}
                      className="w-full  object-cover"
                      src={ActiveWear3}
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
                title={[...ActiveWears, ...ActiveWears1, ...ActiveWears2 ].find((p) => p.id === visibleProductId)?.title}
                images={[ ...ActiveWears,  ...ActiveWears1,...ActiveWears2].find((p) => p.id === visibleProductId)?.images}
                onClose={() => setVisibleProductId(null)}
                Discription={[ ...ActiveWears, ...ActiveWears1, ...ActiveWears2].find((p) => p.id === visibleProductId)?.Discription}
                Name={[ ...ActiveWears,  ...ActiveWears1, ...ActiveWears2].find((p) => p.id === visibleProductId)?.Name}    
                Highlights={[ ...ActiveWears, ...ActiveWears1, ...ActiveWears2].find((p) => p.id === visibleProductId)?.Highlights}


            />
          )}
        </div>
      </div>
      <Footer />
    </main>

  );
};

export default ActiveWear;

