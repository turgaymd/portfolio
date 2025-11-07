"use client";
import { ImFacebook } from "react-icons/im";
import { FaAngleUp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
const Footer = () => {
  const [visible, setVisible] = useState(false);
  const currentDate = new Date().getFullYear();
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <footer>
      <a href="#" className="footer_logo">
        Turgay
      </a>
      <div>
        <div className="social">
          <a
            className="text-white"
            href="https://www.facebook.com/turqay.memmedov.9480"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook />
          </a>
          <a
            className="text-white"
            href="https://www.instagram.com/turqay.mdv/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/turgay-mammadov/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="footer_copyright mt-4">
          {" "}
          © {currentDate} Portfolio - All Rights Reserved
        </p>
      </div>
      <div>
        {visible ? (
          <FaAngleUp fontSize={40} className="topbutton" onClick={scrollTop} />
        ) : (
          <div></div>
        )}
      </div>
    </footer>
  );
};
export default Footer;
