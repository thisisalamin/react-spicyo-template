import TitleImage from "../../assets/images/title.png";
import BlogImage1 from "../../assets/images/blog_img1.png";
import BlogImage2 from "../../assets/images/blog_img2.png";
import BlogImage3 from "../../assets/images/blog_img3.png";



const Blog = () => {
  return (
    <div>
      <div class="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <i>
                  <img src={TitleImage} alt="#" />
                </i>
                <h2>Our Blog</h2>
                <span>
                  when looking at its layout. The point of using Lorem
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
              <div class="blog_box">
                <div class="blog_img_box">
                  <figure>
                    <img src={BlogImage1} alt="#" />
                    <span>02 FEB 2019</span>
                  </figure>
                </div>
                <h3>Spicy Barger</h3>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
              <div class="blog_box">
                <div class="blog_img_box">
                  <figure>
                    <img src={BlogImage2} alt="#" />
                    <span>02 FEB 2019</span>
                  </figure>
                </div>
                <h3>Egg & Tosh</h3>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div class="blog_box">
                <div class="blog_img_box">
                  <figure>
                    <img src={BlogImage3} alt="#" />
                    <span>02 FEB 2019</span>
                  </figure>
                </div>
                <h3>Pizza</h3>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
