import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu
    document.body.classList.remove("mobile-nav-active"); // Remove class from body
  };
    return(
        <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about font-times">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename font-times">Inara Textiles</span>
              </a>
              <div className="footer-contact pt-3 cursor-pointer">
                <p className="font-times">
                  13/1, Kuppanna Gounder Street, Periyar Colony, Anupparpalayam
                  Pudur,
                </p>
                <p>TIRUPUR, TAMILNADU, INDIA 641652</p>
                <p className="mt-3 cursor-pointer">
                  <strong>Phone:</strong> <span>+91 7558 8306 35</span>
                </p>
                <p className="cursor-pointer">
                  <strong>Email:</strong> <span>info@inaratextiles.in</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="" className="cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="" className="cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="" className="cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="" className="cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 footer-links font-times">
              <h4 className=" cursor-pointer font-times ">Useful Links</h4>
              <ul>
                <li>
                  <a onClick={() => handleNavigation("/")}>Home</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/About")}>About us</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/Services")}>Services</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/Services")}>Terms of service</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 footer-links font-times">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a onClick={() => handleNavigation("/")}>Garment Designing</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Sourcing Materials</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Pattern Making</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Cutting</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Sewing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links font-times">
              <h4>Our Services2</h4>
              <ul>
                <li>
                  <a onClick={() => handleNavigation("/")}>Finishing</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Quality Control</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Packing</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Shipping</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/")}>Retail</a>
                </li>
              </ul>
            </div>
            {/* <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services3</h4>
              <ul>
                <li>
                  <a href="#">Marketing and Sales</a>
                </li>
                <li>
                  <a href="#">Inspection</a>
                </li>
                <li>
                  <a href="#">Testing</a>
                </li>
                <li>
                  <a href="#">Trimming</a>
                </li>
                <li>
                  <a href="#">Pressing</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Inara Textiles</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
    
            Designed by <a href="">Inara</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
