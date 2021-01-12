import TitleImage from "../../assets/images/title.png";
import ClientImage from "../../assets/images/client.jpg";
import ClientIcon from "../../assets/images/client_icon.png";

const Clients = () => {
  return (
    <div>
      <div className="Client">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <i>
                  <img src={TitleImage} alt="#" />
                </i>
                <h2>Our Client</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="Client_box">
                <img src={ClientImage} alt="#" />
                <h3>Roock Due</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn’t anything
                  embarrassing hidden in the middle of text.
                </p>
                <i>
                  <img src={ClientIcon} alt="#" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
