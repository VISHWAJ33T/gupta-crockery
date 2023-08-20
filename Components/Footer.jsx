import React from "react";

const Footer = () => {
  return (
    <div className="footer-box">
      <h1
        className="text-3xl font-bold mb-5"
        style={{ color: "white", textAlign: "center", marginTop: "0px" }}
      >
        Gupta Crockery
      </h1>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <p className="footer-heading">About Us</p>
            <a className="footer-link" href="#">
              Aim
            </a>
            <a className="footer-link" href="#">
              Vision
            </a>
            <a className="footer-link" href="#">
              Testimonials
            </a>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Services</p>
            <a className="footer-link" href="#">
              Writing
            </a>
            <a className="footer-link" href="#">
              Internships
            </a>
            <a className="footer-link" href="#">
              Coding
            </a>
            <a className="footer-link" href="#">
              Teaching
            </a>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Contact Us</p>
            <a className="footer-link" href="#">
              Uttar Pradesh
            </a>
            <a className="footer-link" href="#">
              Ahemdabad
            </a>
            <a className="footer-link" href="#">
              Indore
            </a>
            <a className="footer-link" href="#">
              Mumbai
            </a>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Social Media</p>
            <a className="footer-link" href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a className="footer-link" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </a>
            <a className="footer-link" href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </a>
            <a className="footer-link" href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
