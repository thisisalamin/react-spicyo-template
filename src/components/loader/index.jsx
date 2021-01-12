import LoaderImage from "../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div>
      <div className="loader_bg">
        <div className="loader">
          <img src={LoaderImage} alt="" />
        </div>
      </div>
      <div className="wrapper"></div>
    </div>
  );
};

export default Loader;
