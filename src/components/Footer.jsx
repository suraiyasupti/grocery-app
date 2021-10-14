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
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:suptisuraiya8@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
      </p>
      <p>
        &copy; {currentYear} <strong>Fresh</strong> - Organic Grocery Store
      </p>
    </footer>
  );
};

export default Footer;
