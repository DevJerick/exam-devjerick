import { useState } from "react";
import { Link } from "react-scroll";
const Scroll = () => {
  const [scroll, setScroll] = useState(false);

  const showButton = () => {
    if (window.scrollY >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", showButton);

  return (
    <>
      {scroll && (
        <Link to='home' spy={true} smooth={true} offset={-5} duration={700}>
          <button className='scroll-top'>
            <i className='bx bx-up-arrow-alt'></i>
          </button>
        </Link>
      )}
    </>
  );
};

export default Scroll;
