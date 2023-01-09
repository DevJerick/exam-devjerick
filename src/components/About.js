import React from "react";
import "../style/about.css";
import talk from "../img/talk.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <div className='about-img'>
          <Zoom>
            <img src={talk} alt='Pic' />
          </Zoom>
        </div>

        <Fade right>
          <div className='about-text'>
            <div className='about-bar'></div>
            <h1>You're in good hands</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quia vitae repudiandae minima modi dolore eveniet nam perspiciatis
              in illo iste nihil nesciunt itaque, consequatur harum nobis!
              Veniam obcaecati at magni similique tenetur beatae. Ab temporibus
              cumque alias nisi voluptatibus laudantium ipsa nemo libero.
              Consectetur adipisci unde tempore nobis dicta?
            </p>

            <Link
              to='about2'
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
        </Fade>
      </div>
    </div>
  );
};

export default About;
