import "../style/dark.css";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";

const Dark = () => {
  return (
    <div className='dark' id='dark'>
      <div className='dark-container'>
        <div className='dark-text'>
          <div className='dark-bar'></div>
          <Zoom>
            <h1 className='dark-title'>Your're in good hands</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique accusamus, odit laboriosam repellendus fuga repellat
              enim tempore voluptatibus rerum iusto debitis perspiciatis placeat
              sapiente eveniet excepturi nemo officia molestiae ad.
            </p>
          </Zoom>

          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={100}
            duration={500}>
            <button>
              <span>Learn more</span>
              <i className='fa-sharp fa-solid fa-arrow-right-long'></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dark;
