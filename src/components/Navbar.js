import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
    console.log(click);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const iconChange = click ? "bx bx-x" : "bx bx-menu";
  const classChange = click ? "open" : "";
  const bgChange = navbar ? "active" : "";

  const handleClose = () => {
    setClick(false);
  };

  return (
    <nav className={bgChange}>
      <div className='nav-container'>
        <a href='/' className='logo'>
          <i className='bx bx-code-alt'></i>
          <span>DevJerick</span>
        </a>

        <ul className={classChange}>
          <li>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleClose}>
              About
            </Link>
          </li>
          <li>
            <Link
              to='testimonial'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClose}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleClose}>
              Contact
            </Link>
          </li>

          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleClose}
              className='btn'>
              <span>Work with us</span>
              <i className='fa-sharp fa-solid fa-arrow-right-long'></i>
            </Link>
          </li>
        </ul>

        <button onClick={handleClick}>
          <i className={iconChange}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
