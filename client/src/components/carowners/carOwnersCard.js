import React from "react";
import car from "../../images/jeep.jpg";

export const CardOwnersCard = ({carowner}) => (
  <div className="carowners__card">
    <div className="carowner__carimage_container">
      <img src={car} alt="car" />
    </div>
    <div className="carowner__detail">
      <div className="carowners__name">{carowner.first_name} {carowner.last_name}</div>
      <div className="carowners_car_nfo">
        <div><div className="subheading">Brand</div>{carowner.car_model}</div>
        <div><div className="subheading">Year</div>{carowner.car_model_year}</div>
        <div><div className="subheading">Color</div><span className="car_color" style={{backgroundColor:carowner.car_color}}></span></div>
      </div>
      <div className="carowners_info">
        <div><div className="subheading">Country</div>{carowner.country}</div>
        <div><div className="subheading">Gender</div>{carowner.gender}</div>
        <div><div className="subheading">Job</div>{carowner.job_title}</div>
      </div>
      <div className="carowners__email"><span className="subheading">Email:</span> {carowner.email}</div>
      <div className="carowners__bio"><div className="subheading">Bio:</div><div className="bio_detail"> {carowner.bio}</div></div>
    </div>
  </div>
)