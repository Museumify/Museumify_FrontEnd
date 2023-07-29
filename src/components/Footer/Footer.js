import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from "../assets/backgroundImage.png";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start bg-light text-muted"
      style={{ backgroundImage: `url(${image})` }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
        <div className="me-3 d-none d-lg-block" style={{ fontSize: "14px" }}>
          <span style={{ color: "white" }}>
            Get connected with us on social networks:
          </span>
        </div>
        <div style={{ color: "white", fontSize: "14px" }}>
          <a href="www.facebook.com" className="me-2 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="www.twitter.com" className="me-2 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="www.instgram.com" className="me-2 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="www.linkedin.com" className="me-2 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Museumify" className="me-2 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div
          className="container text-center text-md-start mt-1"
          style={{ fontSize: "14px" }}
        >
          <div className="row mt-1">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">
              <h6 style={{ color: "white" }} className="text-uppercase fw-bold mb-1">
                <i className="fas fa-gem me-1"></i>Museumify
              </h6>
              <p style={{ color: "white" }}>
                Explore a diverse collection of captivating art from renowned
                artists and talented creators worldwide. Unleash your creativity
                and share your artistic masterpieces with the world by joining
                our vibrant community of art enthusiasts.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1">
              <h6 style={{ color: "white" }} className="text-uppercase fw-bold mb-1">
                Contact
              </h6>
              <p style={{ color: "white" }}>
                <i className="fas fa-home me-1"></i> Amman, Jordan
              </p>
              <p style={{ color: "white" }}>
                <i className="fas fa-envelope me-1"></i>
                info@museumify.com
              </p>
              <p style={{ color: "white" }}>
                <i className="fas fa-phone me-1"></i> +962 797638918
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white", fontSize: "12px" }}
      >
        © {new Date().getFullYear()} Museumify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


