import React from "react";
import "../style/testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import house from "../img/house-bg.jpg";
import Fade from "react-reveal/Fade";

const Testimonial = () => {
  const responsive = {
    400: {
      items: 1, // from this breakpoint 678 to 959
      center: false, // only within 678 and next - 959
    },
    500: {
      items: 1, // from this breakpoint 678 to 959
      center: true, // only within 678 and next - 959
    },
    800: {
      items: 2, // from this breakpoint 678 to 959
      center: true, // only within 678 and next - 959
    },
    1440: {
      items: 2, // from this breakpoint 960 to 1199
      margin: 20, // and so on...
      center: true,
    },
  };

  return (
    <div className='testimonial' id='testimonial'>
      <Fade>
        <div className='testimonial-container'>
          <div className='testimonial-bar'></div>

          <OwlCarousel
            className='owl-theme'
            items={2}
            autoplay={false}
            dots={true}
            loop
            margin={10}
            nav={false}
            center={true}
            mergeFit
            responsive={responsive}>
            <div className='item'>
              <p className='item-comment'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda delectus rem eligendi consequatur placeat, quo
                mollitia possimus exercitationem ab unde? Cumque nihil maiores,
                doloremque suscipit explicabo nulla officiis eum. Accusamus. "
              </p>
              <div className='profile'>
                <div className='profile-img'>
                  <img src={house} alt='profile' />
                </div>
                <div className='profile-name'>
                  <h1>Ocho Toleran</h1>
                  <p>Client</p>
                </div>
              </div>
            </div>

            <div className='item'>
              <p className='item-comment'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda delectus rem eligendi consequatur placeat, quo
                mollitia possimus exercitationem ab unde? Cumque nihil maiores,
                doloremque suscipit explicabo nulla officiis eum. Accusamus. "
              </p>
              <div className='profile'>
                <div className='profile-img'>
                  <img src={house} alt='profile' />
                </div>
                <div className='profile-name'>
                  <h1>Robert Cruz</h1>
                  <p>Client</p>
                </div>
              </div>
            </div>

            <div className='item'>
              <p className='item-comment'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda delectus rem eligendi consequatur placeat, quo
                mollitia possimus exercitationem ab unde? Cumque nihil maiores,
                doloremque suscipit explicabo nulla officiis eum. Accusamus. "
              </p>
              <div className='profile'>
                <div className='profile-img'>
                  <img src={house} alt='profile' />
                </div>
                <div className='profile-name'>
                  <h1>Jane Doe</h1>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </Fade>
    </div>
  );
};

export default Testimonial;
