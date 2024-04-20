import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [contactVis, setContactVis] = useState("");
  function showContacts() {
    if (!contactVis) setContactVis("active");
    else setContactVis("");
  }
  return (
    <footer>
      <div className="social">
        <a href="https://wa.me/+256758049812" className="handle">
          <img src="/whatsapp.png" alt="whatsapp image link" srcset="" />
        </a>
        <a
          href="mailto:juliusopak@gmail.com?cc=kimdhev@gmail.com&subject=Kololianet%20feedback%20&body=Write%20your%20message%20here...%20Please"
          className="handle"
        >
          <img src="/gmail.png" alt="gmail image link" srcset="" />
        </a>
        <div onClick={showContacts} className="handle">
          <img src="/dialer.png" alt="dialer image link" srcset="" />
          <div className={"tel " + contactVis}>
            <a href="tel:+256758049812">+256 758 049812</a>
            <a href="tel:+256784781124">+256 784 781124</a>
          </div>
        </div>
        {/* <a href="#" className="handle">
            <img src="/public/tiktok.png" alt="" srcset="" />
          </a>
          <a href="#" className="handle">
            <img src="/public/youtube.png" alt="" srcset="" />
          </a> */}
      </div>
      <div className="quick-links">
        <span>Quick Links</span>
        <ul>
          <li>
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              Home
            </Link>
          </li>
          <ul>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Webdesign
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="/graphics">
                Graphics design
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="/printing">
                Printing services
              </Link>
            </li>
          </ul>
          <li>
            <Link onClick={() => window.scrollTo(0, 0)} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={() => window.scrollTo(0, 0)} to="/help">
              Help
            </Link>
          </li>
        </ul>
      </div>
      <p className="developer-info">
        This site was built and is maintained by Kololianet tech services Uganda
      </p>
    </footer>
  );
};

export default Footer;
