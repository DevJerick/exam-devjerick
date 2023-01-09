import React from "react";
import "../style/main.css";
import Slide from "react-reveal/Slide";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div className='main' id='home'>
      <div className='main-container'>
        <Slide left>
          <div className='main-text'>
            <h1>
              Beautiful <br />
              homes made <br />
              for you
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              distinctio ea molestiae? Maxime aperiam autem voluptates illo
              soluta! Delectus illum omnis temporibus quod quae laboriosam
              suscipit pariatur iure blanditiis optio.
            </p>
          </div>
        </Slide>
      </div>
      <div className='bottom-container'>
        <div className='bottom-link'>
          <Link to='list' spy={true} smooth={true} offset={-240} duration={500}>
            <span>See all listings</span>
            <i className='fa-sharp fa-solid fa-arrow-right-long'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
