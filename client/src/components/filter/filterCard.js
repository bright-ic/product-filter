import React from "react";

const CreateSpan = ({value, wht}) => (<span style={wht==="color" ? {backgroundColor: value}: {}}>{wht ==="country" ? value:''}</span>);

export const FilterCard = ({start_year, end_year, gender, countries, colors, selectedFilterHandler, id}) => {
  return (
  <div className="fillter__card" onClick={()=> selectedFilterHandler(id)}>
    <div className="filter__year">{start_year} - {end_year} </div>
  {gender && (<div className="filter__gender">{gender}</div>)}
  {countries.length > 0 && (
  <div className="filter__countries">
    {countries.map((country, index) => <CreateSpan key={index} value={country} wht="country" /> )}
    </div>
    )}
  {colors.length > 0 && (
  <div className="filter__colors">
    {colors.map((color, index) => <CreateSpan key={index} value={color} wht="color" /> )}
  </div>
  )}
  </div>
  );
}