import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Banner from "../../assets/img/wooden-table.jpg"
import Servicesimg1 from "../../assets/img/Services/services (5).png"
import OurServices1 from "../../assets/img/Services/sample_services1.png"
import OurServices2 from "../../assets/img/Services/sample_services3.png"
import OurServices3 from "../../assets/img/Services/sample_services4.png"
import OurServices4 from "../../assets/img/Services/sample_services5.png"
import privateservices1 from "../../assets/img/Services/private_services1.png"
import privateservices2 from "../../assets/img/Services/private_services2.png"
import privateservices3 from "../../assets/img/Services/private_services3.png"
import privateservices4 from "../../assets/img/Services/private_services4.png"
import CustomisedService1 from "../../assets/img/Services/custom_services1.png"
import CustomisedService2 from "../../assets/img/Services/custom_services2.png"
import CustomisedService3 from "../../assets/img/Services/custom_services3.png"
import CustomisedService4 from "../../assets/img/Services/custom_services4.png"




 

function Services() {
      const navigate = useNavigate();
return (

<>
<Nav />

  <main className="main pt-5 pb-5 p-8 ">
    <div
      className="pt-14 container-fluid"
      data-aos="zoom-out"
      data-aos-delay={100}
    >
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
            className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-32"
            data-aos="zoom-out"
            data-aos-delay={100}
          >
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 sm:leading-tight lg:leading-snug">
                Customized Apparel Services for Your Unique Style.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services Section */}
    <div
      className="relative isolate overflow-hidden bg-white px-6 py-24  lg:overflow-visible lg:px-0"
      data-aos="zoom-out"
      data-aos-delay={100}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          {/* <defs>
      <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs> */}
          {/* <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
      <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
    </svg> */}
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
        <div
          className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Delivering Excellence, Faster
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                A Seamless Workflow
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700 text-wrap text-justify">
                At Inara Textiles and Garments, we take pride in our 25 years of
                expertise in the textiles and garments industry. Our streamlined
                processes ensure that your requirements are met with precision
                and speed. From concept to creation, we prioritize quality and
                efficiency, delivering products that exceed expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className=" servicesimg w-[48rem] h-[49rem]  max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={Servicesimg1}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <ul role="list" className=" space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 size-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900 text-justify">
                      Tailored Solutions for Every Need :-
                    </strong>{" "}
                    We craft premium garments to your specifications, ensuring
                    prompt delivery and exceptional quality through rigorous
                    checks.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 size-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900 text-justify">
                      Services You Can Rely On :-
                    </strong>
                    We offer seamless production transitions, expert support
                    from fabric selection to packaging, and eco-friendly
                    practices to minimize environmental impact.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 size-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                    <path
                      fillRule="evenodd"
                      d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900 text-justify">
                      Additional Services :-
                    </strong>{" "}
                    We bring ideas to life with innovative designs, handle bulk
                    orders for global delivery, and provide dedicated support
                    for a seamless experience
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Services Section */}
    <div className="bg-white" data-aos="fade-up" data-aos-delay={100}>
      <h1 className="text-black text-center text-4xl font-semibold">
        Our Services
      </h1>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-14 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="image-grid grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 hidden lg:grid">
          <img
            src={OurServices1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={OurServices2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={OurServices3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={OurServices4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay={100}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sample Making Service
          </h2>
          <p className="mt-4 text-gray-500 text-justify">
            Sample making services in the garment industry focus on creating
            prototype products that showcase the design and quality of garments.
            These services help clients visualize and refine their ideas before
            moving to full production, catering to diverse needs ranging from
            individual designers to corporate clients.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Sample Designs</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Developing prototype designs that bring the client’s vision to
                life for review and approval.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Branding Samples:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Producing prototypes with custom labels, tags, or embroidery to
                highlight brand identity.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Fabric Options:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Providing fabric samples for clients to select the most suitable
                material for their needs.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Color Variations:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Offering samples in a range of colors and patterns to match
                client preferences.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Special Features:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Incorporating unique elements like special pockets, adjustable
                straps, or decorative stitching into the sample to showcase
                potential design features.
              </dd>
            </div>
          </dl>
        </div>
        <div className="image-grid grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 lg:grid">
          <img
            src={OurServices1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={OurServices2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={OurServices3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={OurServices4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>

    
    <div className="bg-white" data-aos="fade-up" data-aos-delay={100}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-14 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div data-aos="fade-right" data-aos-delay={100}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Private Labeling Service
          </h2>
          <p className="mt-4 text-gray-500 text-justify ">
            Private labeling services empower clients to establish their own
            unique brand identity by offering high-quality, customizable
            products under their label. By providing tailored solutions, garment
            manufacturers help businesses achieve their specific branding and
            product goals efficiently.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Brand-Centric Designs
              </dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Manufacturers work closely with clients to create designs that
                align with their brand vision and market positioning.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Custom Packaging</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Clients can choose from a curated selection of fabrics that meet
                their quality standards and aesthetic requirements.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Personalized Color Schemes
              </dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Incorporating specialized elements such as unique stitching
                patterns, innovative closures, or tailored fits to distinguish
                the client’s products.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Flexible Product Features
              </dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Allowing clients to choose from a variety of fabrics and
                materials.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Enhanced Brand Identity
              </dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Private labeling with custom branding boosts market presence and
                helps businesses align products with their brand ethos
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={privateservices1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={privateservices2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={privateservices3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={privateservices4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>




    <div className="bg-white" data-aos="fade-up" data-aos-delay={100}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 sm:py-14 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {/* Image grid for small screens */}
        <div className="image-grid grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 hidden lg:grid Customisedimg">
          <img
            src={CustomisedService1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={CustomisedService1}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={CustomisedService1}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={CustomisedService1}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
        {/* Content */}
        <div data-aos="fade-left" data-aos-delay={100}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customised Service
          </h2>
          <p className="mt-4 text-gray-500 text-justify">
            Customized services in the garment industry allow for unique,
            tailor-made products that cater to specific client needs. By
            offering these tailored services, garment manufacturers can meet the
            diverse needs of their clients, ranging from individual consumers to
            corporate clients.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Personalized Designs:
              </dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Offering bespoke designs that reflect the client's vision and
                specifications.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Custom Sizing:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Providing made-to-measure garments that fit perfectly.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Unique Branding:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Adding custom labels, tags, and embroidery to enhance brand
                identity.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Fabric Selection</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Allowing clients to choose from a variety of fabrics and
                materials.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Color Options:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Offering a wide range of colors and patterns to suit individual
                preferences.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Special Features:</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">
                Incorporating unique features like special pockets, adjustable
                straps, or specific stitching techniques.
              </dd>
            </div>
          </dl>
        </div>
        {/* Image grid for large screens */}
        <div className="image-grid grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 lg:grid Customisedimgmain">
          <img
            src={CustomisedService1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={CustomisedService2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={CustomisedService3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={CustomisedService4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>


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

export default Services;