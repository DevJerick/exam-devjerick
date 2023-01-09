import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import List from "./components/List";
import About2 from "./components/About2";
import Dark from "./components/Dark";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <About />
      <List />
      <About2 />
      <Dark />
      <Testimonial />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
