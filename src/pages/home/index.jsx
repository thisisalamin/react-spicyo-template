import Navbar from "../../components/nav";
import Slider from "../../components/slider";
import Recipe from "../../components/recipe";
import About from "../../components/about";
import Blog from "../../components/blog";
import Clients from "../../components/client";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div className="main-layout">
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}
      {/* start slider section */}
      <Slider />
      {/* end slider section */}
      {/* Recipe section  */}
      <Recipe />
      {/* end recipe section */}
      {/* about */}
      <About />
      {/* End about */}
      {/* blog  */}
      <Blog />
      {/*  end blog  */}
      {/*  Our Client  */}
      <Clients />
      {/* end Our Client */}
      {/* footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
};

export default Home;
