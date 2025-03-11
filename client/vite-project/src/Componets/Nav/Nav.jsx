


import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import InaraLogo from "../../assets/img/icons/inaralogo2.png";

function Nav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("mobile-nav-active", !isMenuOpen); // Add/Remove class on body
  };

  // Handle navigation and close the menu
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu
    document.body.classList.remove("mobile-nav-active"); // Remove class from body
  };

  return (
    <header id="header" className="header d-flex justify-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a onClick={() => handleNavigation("/")} className="d-flex align-items-center justify-center">
          <img className="InaraLogo" src={InaraLogo} alt="Inara Textiles and Garments Logo" />
          <span className="ms-1 text-left">
            <h1 className="mb-0 text-3xl tracking-wide">Inara</h1>
          </span>
        </a>

        <nav id="navmenu" className={`navmenu ${isMenuOpen ? "mobile-nav-active" : ""}`} aria-label="Primary Navigation">
          <ul className={isMenuOpen ? "open" : ""}>
            <li><a onClick={() => handleNavigation("/")} className="cursor-pointer  font-times">Home</a></li>
            <li><a onClick={() => handleNavigation("/About")}className="cursor-pointer font-times">About</a></li>
            <li><a onClick={() => handleNavigation("/Services")}className="cursor-pointer font-times">Services</a></li>
            <li><a onClick={() => handleNavigation("/Products")}className="cursor-pointer font-times">Products</a></li>
            <li><a onClick={() => handleNavigation("/Contact")}className="cursor-pointer font-times">Contact</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <span className="mobile-nav-toggle d-xl-none" title="Toggle Navigation" onClick={toggleMenu}>
            <CiMenuFries size={28} />
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
