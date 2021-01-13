import Nav from "../../components/nav";
import About from "../../components/about";
import Footer from "../../components/footer";

const AboutPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />
      {/* End Navigation Bar */}
      <div class="yellow_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start About */}
      <About />
      {/* End About */}

      {/* Footer */}
        <Footer />
      {/* Footer End */}
    </div>
  );
};

export default AboutPage;
