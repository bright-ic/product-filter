import React from "react";
import {CardOwnersCard} from "./carOwnersCard";

const CarOnwers = ({carowners}) => {

  if(carowners.length === 0) {
    return (<div className="container">No record was found</div>)
  }

  return (
    <div className="container">
      {Array.isArray(carowners) && carowners.length > 0 && (
        carowners.map(carowner => (
          <CardOwnersCard key={carowner.id} carowner={carowner} />
        ))
      )}
    </div>
  )
}

export default CarOnwers;