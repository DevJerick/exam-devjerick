import React from "react";
import "../style/footer.css";
import Fade from "react-reveal/Fade";
import Scroll from "./Scroll";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container' id='contact'>
        <div className='footer-text'>
          <Fade left>
            <h1>
              Make your dreams a <span>reality</span>
            </h1>
          </Fade>
          <Fade right>
            <button>
              <span>Work with us</span>
              <i className='fa-sharp fa-solid fa-arrow-right-long'></i>
            </button>
          </Fade>
        </div>

        <div className='footer-content'>
          <Fade left>
            <div className='footer-logo'>
              <a href='/'>
                <i className='bx bx-code-alt'></i>
                <span>DevJerick</span>
              </a>
              <div className='social'>
                <i className='bx bxl-facebook'></i>
                <i className='bx bxl-twitter'></i>
                <i className='bx bxl-instagram'></i>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className='footer-link'>
              <div className='quick-links'>
                <ul>
                  <li>
                    <p>Quick Links</p>
                  </li>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/'>About</a>
                  </li>
                  <li>
                    <a href='/'>Testimonial</a>
                  </li>
                  <li>
                    <a href='/'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='community'>
                <ul>
                  <li>
                    <p>Community</p>
                  </li>
                  <li>
                    <a href='/'>Community Central</a>
                  </li>
                  <li>
                    <a href='/'>Support</a>
                  </li>
                  <li>
                    <a href='/'>Faqs</a>
                  </li>
                  <li>
                    <a href='/'>Help</a>
                  </li>
                </ul>
              </div>
              <div className='overview'>
                <ul>
                  <li>
                    <p>Overview</p>
                  </li>
                  <li>
                    <a href='/'>Term and Use</a>
                  </li>
                  <li>
                    <a href='/'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='/'>Global Sitemap</a>
                  </li>
                  <li>
                    <a href='/'>Local Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <Scroll />
    </footer>
  );
};

export default Footer;
