import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return(
        <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Inara Textiles</span>
              </a>
              <div className="footer-contact pt-3">
                <p>
                  13/1, Kuppanna Gounder Street, Periyar Colony, Anupparpalayam
                  Pudur,
                </p>
                <p>TIRUPUR, TAMILNADU, INDIA 641652</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+91 7558 8306 35</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@inaratextiles.in</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Garment Designing</a>
                </li>
                <li>
                  <a href="#">Sourcing Materials</a>
                </li>
                <li>
                  <a href="#">Pattern Making</a>
                </li>
                <li>
                  <a href="#">Cutting</a>
                </li>
                <li>
                  <a href="#">Sewing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services2</h4>
              <ul>
                <li>
                  <a href="#">Finishing</a>
                </li>
                <li>
                  <a href="#">Quality Control</a>
                </li>
                <li>
                  <a href="#">Packing</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Retail</a>
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
