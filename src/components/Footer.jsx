import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/suraiyasupti/grocery-app"
          target="_blank"
        >
          Contact Us
        </a>
        <span> / </span>
        <a href="mailto:suptisuraiya8@gmail.com" target="_blank">
          Need Help? Connect with Helpdesk
        </a>
        <span> / </span>
        <a href="https://www.google.com/maps/place/Federation+University+Australia/@-37.6264367,143.8889065,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad144fa122cca73:0xc0d2bd8d84c65803!8m2!3d-37.626441!4d143.8910952" target="_blank">
          Locate Us
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Fresh</strong> - Organic Grocery Store
      </p>
    </footer>
  );
};

export default Footer;
