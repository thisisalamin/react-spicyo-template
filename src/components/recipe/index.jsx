import Recipe1 from "../../assets/images/rs1.png";
import Recipe2 from "../../assets/images/rs2.png";
import Recipe3 from "../../assets/images/rs3.png";
import Recipe4 from "../../assets/images/rs4.png";
import Recipe5 from "../../assets/images/rs5.png";

const Recipe = () => {
  return (
    <div>
      <section class="resip_section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="ourheading">
                <h2>Our Recipes</h2>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="owl-carousel owl-theme">
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe1} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Homemade</h3>
                        <h4>
                          <span class="theme_color">$</span>10
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe2} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Noodles</h3>
                        <h4>
                          <span class="theme_color">$</span>20
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe3} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Egg</h3>
                        <h4>
                          <span class="theme_color">$</span>30
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe4} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Sushi Dizzy</h3>
                        <h4>
                          <span class="theme_color">$</span>40
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe5} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>The Coffee Break</h3>
                        <h4>
                          <span class="theme_color">$</span>50
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe1} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Homemade</h3>
                        <h4>
                          <span class="theme_color">$</span>10
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe2} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Noodles</h3>
                        <h4>
                          <span class="theme_color">$</span>20
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe3} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Egg</h3>
                        <h4>
                          <span class="theme_color">$</span>30
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe4} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>Sushi Dizzy</h3>
                        <h4>
                          <span class="theme_color">$</span>40
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <div class="product_blog_img">
                        <img src={Recipe5} alt="#" />
                      </div>
                      <div class="product_blog_cont">
                        <h3>The Coffee Break</h3>
                        <h4>
                          <span class="theme_color">$</span>50
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipe;
