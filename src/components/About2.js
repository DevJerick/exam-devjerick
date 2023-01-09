import React from "react";
import "../style/about2.css";
import Zoom from "react-reveal/Zoom";
import talk from "../img/talk.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const About2 = () => {
  return (
    <div className='about2' id='about2'>
      <div className='about-container2'>
        <Fade left>
          <div className='about2-text'>
            <div className='about2-text-container'>
              <div className='about-bar'></div>
              <h1>You're in good hands</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                ipsam tempore et ad commodi explicabo necessitatibus consectetur
                cupiditate repellat labore rem aut provident voluptatum ipsa
                veniam reprehenderit esse incidunt amet similique, possimus
                doloribus. Officia repudiandae explicabo in esse cum voluptatem
                repellendus!
              </p>

              <Link
                to='dark'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <button>
                  <span>Learn more</span>
                  <i className='fa-sharp fa-solid fa-arrow-right-long'></i>
                </button>
              </Link>
            </div>
          </div>
        </Fade>
        <div className='about2-img'>
          <Zoom>
            <img src={talk} alt='Pic' />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About2;
