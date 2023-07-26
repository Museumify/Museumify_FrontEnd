import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from "../assets/backgroundImage.png";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start bg-light text-muted"
      style={{ backgroundImage: `url(${image})` }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "white" }}>
            Get connected with us on social networks:
          </span>
        </div>
        <div style={{ color: "white" }}>
          <a href="www.facebook.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="www.twitter.com" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="www.instgram.com" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="www.linkedin.com" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="www.github.com" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6
                style={{ color: "white" }}
                className="text-uppercase fw-bold mb-4"
              >
                <i className="fas fa-gem me-3"></i>Museumify
              </h6>
              <p style={{ color: "white" }}>
                Explore a diverse collection of captivating art from renowned
                artists and talented creators worldwide. Unleash your creativity
                and share your artistic masterpieces with the world by joining
                our vibrant community of art enthusiasts
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                style={{ color: "white" }}
                className="text-uppercase fw-bold mb-4"
              >
                Contact
              </h6>
              <p style={{ color: "white" }}>
                <i className="fas fa-home me-3"></i> Amman, Jordan
              </p>
              <p style={{ color: "white" }}>
                <i className="fas fa-envelope me-3"></i>
                info@museumify.com
              </p>
              <p style={{ color: "white" }}>
                <i className="fas fa-phone me-3"></i> +962 797638918
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        © {new Date().getFullYear()} Museumify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
