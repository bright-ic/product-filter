import React from "react";
import car from "../../images/jeep.jpg";

export const CardOwnersCard = () => (
  <div className="carowners__card">
    <div className="carowner__carimage_container">
      <img src={car} />
    </div>
    <div className="carowner__detail">
      <div className="carowners__name">Bright Onwukwe</div>
      <div className="carowners_car_nfo">
        <div><div className="subheading">Brand</div><br/>Buick</div>
        <div><div className="subheading">Year</div><br/>1990</div>
        <div><div className="subheading">Color</div><br/><span className="car_color" style={{backgroundColor:"yellow"}}></span></div>
      </div>
      <div className="carowners_info">
        <div><div className="subheading">Country</div><br/>China</div>
        <div><div className="subheading">Gender</div><br/>Male</div>
        <div><div className="subheading">Job</div><br/>Mechanical Systems Engineer</div>
      </div>
      <div className="carowners__email"><span className="subheading">Email: </span>email@gmail.com</div>
      <div className="carowners__bio"><span className="subheading">Bio</span> Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dict</div>
    </div>
  </div>
)