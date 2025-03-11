import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Banner from "../../assets/img/wooden-table.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true); // Show loading state
    setResponseMessage(""); // Clear previous messages
  
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0]; // YYYY-MM-DD format
    const currentTime = now.toLocaleTimeString("en-US", { hour12: false }); // HH:MM:SS format (24-hour)
  
    const formDataWithDateTime = {
      ...formData,
      date: currentDate,
      time: currentTime,
    };
  
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzsUehQHuXwbgb-QpUQfcikv_VhFFTRP-SPHNhH2OWoYGn5ahGHd0Eiqz2p0t9maos9/exec",
        {
          method: "POST",
          mode: "no-cors", // Since no-cors prevents fetching response data, we assume success
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithDateTime),
        }
      );
  
      // Show success message and clear form
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form fields
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Nav />
      <main className="main py-24 p-8">
        {/* Page Title */}
        <div className="pt-14" data-aos="zoom-out"
      data-aos-delay={100}>
          <div className="bg-white overflow-hidden rounded-[15px] sm:h-auto lg:h-full">
            <div className="relative isolate px-4 sm:px-6 lg:px-8">
              <div
                className="rounded-lg absolute inset-0 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] mix-blend-multiply"
                aria-hidden="true"
              >
                <img
                  src={Banner}
                  className="object-cover w-full h-full opacity-40"
                  alt="Wooden Table"
                />
              </div>
              <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-32">
                <div className="text-center" data-aos="fade-up"
              data-aos-delay={300}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight sm:leading-tight lg:leading-snug text-gray-950">
                    CONTACT US
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="">
          <div className="container mx-auto p-4" data-aos="fade-up"
              data-aos-delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up"
              data-aos-delay={300}>
                <div className="flex items-center justify-center mb-4">
                  <i className="fas fa-map-marker-alt text-[#9AC8F7] text-3xl"></i>
                </div>
                <h2 className="text-center text-xl font-semibold mb-2" data-aos="fade-up"
              data-aos-delay={300}>
                  Address
                </h2>
                <p className="text-center text-gray-700" >
                  No.10, Kuppanna Gounder Street, Periyar Colony, Anupparpalayam
                  Pudur, TIRUPUR, TAMILNADU, INDIA 641603
                </p>
              </div>

              {/* Call Us */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up"
              data-aos-delay={300}>
                <div className="flex items-center justify-center mb-4">
                  <i className="fas fa-phone-alt text-[#9AC8F7] text-3xl"></i>
                </div>
                <h2 className="text-center text-xl font-semibold mb-2">
                  Call Us
                </h2>
                <p className="text-center text-gray-700">+91 9747 7477 98</p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up"
              data-aos-delay={300}>
                <div className="flex items-center justify-center mb-4">
                  <i className="fas fa-envelope text-[#9AC8F7] text-3xl"></i>
                </div>
                <h2 className="text-center text-xl font-semibold mb-2">
                  Email Us
                </h2>
                <p className="text-center text-gray-700">sales@inaratextiles.in</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" data-aos="fade-up"
              data-aos-delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15658.655264650748!2d77.3179596!3d11.1383962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9076e878788cf%3A0x48abfa3f87e64993!2sInara%20textiles%20%26%20Garments!5e0!3m2!1sen!2sin!4v1727717762211!5m2!1sen!2sin"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 400 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Form */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up"
              data-aos-delay={300}>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                    placeholder="Your Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9AC8F7]"
                    placeholder="Message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="bg-[#9AC8F7] text-white py-2 px-4 rounded-lg w-full hover:bg-[#7ab6e5] transition duration-300"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                 
                </form>
                {responseMessage && (
                  <p className="text-center mt-2 text-green-600">{responseMessage}</p>
                )}

              </div>
            </div>
          </div>
        </section>
      </main>
      <div data-aos="fade-up" data-aos-delay={300}>  <Footer  /> </div>
     
    </>
  );
}

export default Contact;
