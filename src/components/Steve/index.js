  
import React from "react";
import img from "../../assets/images/cat-pic.png";
import "./style.css";


const Steve = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <h1 className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Steve Hernandez.
          </h1>
          <h1 className="textColor ls-1 mtb-10">Full Stack Web Development student at the University of Oregon.</h1>
          
          <div className="flexRow" style={{ margin: "30px 0" }}>
          </div>
        </div>
        <div>
          <div className="catImgContainer">
            <img src={img} alt="helloworld" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steve;