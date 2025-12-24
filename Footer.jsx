import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <h2 className="footer-logo">ShringarVastra</h2>

        {/* Subscribe */}
        <div className="footer-subscribe">
          <input type="email" placeholder="Your Email" />
          <button>SUBSCRIBE</button>
        </div>

        {/* Links */}
        <ul className="footer-links">
          <li>Best Sellers</li>
          <li>Gift Ideas</li>
          <li>New Releases</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
        </ul>

        {/* Help */}
        <p className="footer-help">
          Help Line Number : 01130247
        </p>

        {/* Copyright */}
        <p className="footer-copy">
          © 2020 All Rights Reserved. Design by Free Html Templates
        </p>

      </div>
    </footer>
  );
};

export default Footer;
