import React from "react";
import "./TopBanner.css";
// import features1 from "../../images/feature1.png";
// import features2 from "../../images/feature2.png";
// import features3 from "../../images/feature3.png";
// import features4 from "../../images/feature4.png";
import topData from "../../Data/TopData"
const TopBanner = () => {
  return (
    <div className=" container bg-brand p-3 mt-1">
      <div className="container top-banner justify-contents-center align-items-center">
        <img src="" alt="" />
        <div className="row">
          {/* <div style={{ boederRadius: "40px"}} className="col  m-2 sm-div text-light">
            <img src={features1} width="60" className="img-fluid" alt="" />
            <a href="/" className="text-decoration-none fw-bold  text-dark p-2">
              Free Shipping
            </a>
          </div>
          <div className="col m-2 sm-div">
            <img src={features2} width="60" className="img-fluid" alt="" />
            <a href="/" className="text-decoration-none fw-bold text-dark p-2">
              Groccery Shopping
            </a>
          </div>
          <div className="col m-2 sm-div">
            <img src={features3} width="60" className="img-fluid" alt="" />
            <a href="/" className="text-decoration-none fw-bold text-dark p-2">
              Digital Sheba
            </a>
          </div>
          <div className="col m-2  sm-div">
            <img src={features4} width="60" className="img-fluid" alt="" />
            <a href="/" className="text-decoration-none fw-bold text-dark p-2">
              Daraz Mall
            </a>
          </div> */}
          {
            topData.map(data=>
              <div key={data.id} style={{ borderRadius: '50px' }} className="col m-2 bg-white">
              <img src={data.image} width='50' className='img-fluid py-1' alt={data.name} />
              <a href={data.link} className='text-decoration-none text-dark fw-bold ps-2'>{data.name}</a>
          </div>
              )
          }
        </div>
      </div>
    </div>

  );
};

export default TopBanner;
