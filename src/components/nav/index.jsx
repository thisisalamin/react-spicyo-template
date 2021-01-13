import Logo from "../../assets/images/logo.png";
import PhoneIcon from "../../assets/images/phone_icon.png";
import MailIcon from "../../assets/images/mail_icon.png";
import LocationIcon from "../../assets/images/location_icon.png";
import SearchIcon from "../../assets/images/search_icon.png";
import MenuIcon from "../../assets/images/menu_icon.png";

const Nav = () => {
  return (
    <div>
      <div className="sidebar">
        {/* Sidebar */}
        <nav id="sidebar">
          <div id="dismiss">
            <i className="fa fa-arrow-left"></i>
          </div>
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="recipe">Recipe</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="content">
        {/* header  */}
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="full">
                  <a className="logo" href="/">
                    <img src={Logo} alt="#" />
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="full">
                  <div className="right_header_info">
                    <ul>
                      <li className="dinone">
                        <span className="contact-dinone">Contact Us :</span>
                        <img src={PhoneIcon} alt="#" />
                        <a href="#">987-654-3210</a>
                      </li>
                      <li className="dinone">
                        <img alt="#" src={MailIcon} />
                        <a href="#">demo@gmail.com</a>
                      </li>
                      <li className="dinone">
                        <img src={LocationIcon} alt="#" />
                        <a href="#">104 New york , USA</a>
                      </li>
                      <li className="button_user">
                        <a className="button active" href="#">
                          Login
                        </a>
                        <a className="button" href="#">
                          Register
                        </a>
                      </li>
                      <li>
                        <img src={SearchIcon} alt="#" />
                      </li>
                      <li>
                        <button type="button" id="sidebarCollapse">
                          <img src={MenuIcon} alt="#" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header */}
    </div>
    </div>
  );
};

export default Nav;
