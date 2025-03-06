import React, { useEffect, useState } from "react";

import mensundergarments2 from "../../assets/img/products/mensundergarments2.jpg";
import underwear from "../../assets/img/products/underwear(s).jpg";
import mensundergarments3 from "../../assets/img/products/mensundergarments3.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
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
          
        </div>
      </div>
    );
};



const MensVest = () => {
  const [visibleProductId, setVisibleProductId] = useState(null);

  const toggleProductImages = (productId) => {
    setVisibleProductId((prevId) => (prevId === productId ? null : productId));
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const LadiesShorts1 = [
    {
      id: "ActiveWear-images",
      title: "ActiveWear",
      images: [
        { src: "../src/assets/img/products/MensVest.png", alt: "Image 1" },
        { src: "../src/assets/img/products/MensVest1.png", alt: "Image 2" },
        { src: "../src/assets/img/products/MensVest2.png", alt: "Image 3" },
        { src: "../src/assets/img/products/MensVest4.png", alt: "Image 4" },
      ],
    },
  ];
  const LadiesShorts2 = [
    {
      id: "ActiveWear-images1",
      title: "Slips",
      images: [
        { src: "../src/assets/img/products/mensundergarments1.png", alt: "Image 1" },
        { src: "../src/assets/img/products/MensTrunks1.png", alt: "Image 2" },
        { src: "../src/assets/img/products/MensTrunks3.png", alt: "Image 3" },
        { src: "../src/assets/img/products/MensTrunks2.png", alt: "Image 4" },
      ],
    },
  ];
  const LadiesShorts3 = [
    {
      id: "ActiveWear-images2",
      title: "Slips",
      images: [
        { src: "../src/assets/img/products/MenBriefs.png", alt: "Image 1" },
        { src: "../src/assets/img/products/MenBriefs1.png", alt: "Image 2" },
        { src: "../src/assets/img/products/MenBriefs2.png", alt: "Image 3" },
        { src: "../src/assets/img/products/mensundergarments3.png", alt: "Image 4" },
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
              <h1 className="text-2xl font-semibold mt-8 mb-4"></h1>
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
                      src={mensundergarments2}
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
                      src={underwear}
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

export default MensVest;

