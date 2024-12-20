import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-content">
        <div className="footer-start">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="icon-circle"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="icon-circle"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="icon-circle"
            rel="noreferrer"
          >
            <i className="fa-brands fa-x fa"></i>
          </a>
        </div>

        <div className="footer-end">
          <div className="contact">
            <i className="fa-solid fa-envelope"></i>
            <p className="contact-text">Contacto: ART@gmail.com</p>
          </div>
          <div className="contact">
            <i className="fa-solid fa-house"></i>
            <p className="contact-text">Dirección: Av. Providencia 1212</p>
          </div>
          <div className="contact">
            <i className="fa-solid fa-phone contact-icon"></i>
            <p className="contact-text">Contacto: +56 999999999</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
