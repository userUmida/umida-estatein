import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer container">
          <div className="footer-left">
            <img src="imgs/logo.svg" alt="" />
            <div className="email">
              <div className="email-box">
                <img src="imgs/iconic.png" alt="" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name=""
                  id=""
                />
              </div>
              <img src="imgs/email.png" alt="" />
            </div>
          </div>
          <div className="footer-right">
            <ul>
              <span>Home</span>
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQ’s</li>
            </ul>
            <ul>
              <span>About Us</span>
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How It Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
            <ul>
              <span>Properties</span>
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
            <ul>
              <span>Services</span>
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
            <ul>
              <span>Contact Us</span>
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottoms">
          {" "}
          <div className="footer-bottom container">
            <h5>@2023 Estatein. All Rights Reserved. Terms & Conditions</h5>
            <img src="imgs/media.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
