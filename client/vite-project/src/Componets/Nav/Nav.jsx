import React from "react";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Nav(){
    
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("mobile-nav-active", !isMenuOpen); // Add/Remove class on body
  };

    return(
        <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a onClick={() => navigate("/")} className="d-flex align-items-center justify-center">
            <img
              src="../src/assets/img/icons/inaralogo2.png"
              alt="Inara Textiles and Garments Logo"
            />
            <span className="ms-1 text-left">
              <h1 className="mb-0 text-3xl tracking-wide">Inara</h1>
              {/* <h6 class="mb-0 text-xs tracking-tight">Textiles & Garments</h6> */}
            </span>
          </a>
          {/* <nav id="navmenu" className="navmenu" aria-label="Primary Navigation">
            <ul className="">
              <li>
                <a onClick={() => navigate("/")} className="active">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/About")}>About</a>
              </li>
              <li>
                <a onClick={() => navigate("/Services")}>Services</a>
              </li>
              <li>
                <a onClick={() => navigate("/Products")}>Products</a>
              </li>
              <li>
                <a onClick={() => navigate("/Contact")}>Contact</a>
              </li>
            </ul>
            <span
              className="mobile-nav-toggle d-xl-none bi bi-list"  title="Toggle Navigation">
               
              <CiMenuFries /></span>
              
    
           
          </nav> */}
    <nav id="navmenu" className={`navmenu ${isMenuOpen ? "mobile-nav-active" : ""}`} aria-label="Primary Navigation">
          <ul className={isMenuOpen ? "open" : ""}>
            <li>
              <a onClick={() => navigate("/")} className="active">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/About")}>About</a>
            </li>
            <li>
              <a onClick={() => navigate("/Services")}>Services</a>
            </li>
            <li>
              <a onClick={() => navigate("/Products")}>Products</a>
            </li>
            <li>
              <a onClick={() => navigate("/Contact")}>Contact</a>
            </li>
          </ul>
          {/* Mobile Menu Toggle */}
          <span
            className="mobile-nav-toggle d-xl-none"
            title="Toggle Navigation"
            onClick={toggleMenu}
          >
            <CiMenuFries size={28} />
          </span>
        </nav>
        </div>
      </header>
    )
}

export default Nav;