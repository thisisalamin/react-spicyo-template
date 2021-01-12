import FooterImage from "../../assets/images/img.jpg";
import FooterLogo from "../../assets/images/logo1.jpg";

const Footer = () => {
  return (
    <div>
      <fooetr>
        <div class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <h2>
                  Request A<strong class="white"> Call Back</strong>
                </h2>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <form class="main_form">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        class="form-control"
                        placeholder="Name"
                        type="text"
                        name="Name"
                      />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        class="form-control"
                        placeholder="Email"
                        type="text"
                        name="Email"
                      />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        class="form-control"
                        placeholder="Phone"
                        type="text"
                        name="Phone"
                      />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        class="textarea"
                        placeholder="Message"
                        type="text"
                        name="Message"
                      ></textarea>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <button class="send">Send</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="img-box">
                  <figure>
                    <img src={FooterImage} alt="img" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="footer_logo">
                  <a href="index.html">
                    <img src={FooterLogo} alt="logo" />
                  </a>
                </div>
              </div>
              <div class="col-md-12">
                <ul class="lik">
                  <li class="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/recipe">Recipe</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-12">
                <div class="new">
                  <h3>Newsletter</h3>
                  <form class="newtetter">
                    <input
                      class="tetter"
                      placeholder="Your email"
                      type="text"
                      name="Your email"
                    />
                    <button class="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <p>
                © 2021 All Rights Reserved. Design by
                <a href="https://www.facebook.com/thisismdalamin"> Mohamed Alamin</a>
              </p>
            </div>
          </div>
        </div>
      </fooetr>
    </div>
  );
};

export default Footer;
