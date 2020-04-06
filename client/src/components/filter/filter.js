import React from "react";
import {FilterCard} from "./filterCard";


const Filter = ({filters, selectedFilterHandler}) => {

  if(filters.length === 0) {
    return (<div className="container">No filter found</div>)
  }

  return (
    <div className="filter__cardContainer">
      {filters ? (
       filters.map(filter => (
        <FilterCard 
        key={filter.id}
        id={filter.id}
        start_year={filter.start_year}
        end_year = {filter.end_year}
        gender = {filter.gender}
        countries={filter.countries}
        colors = {filter.colors}
        selectedFilterHandler={selectedFilterHandler}
        />
        ))
      ) : (<div className="container">No filter found</div>)}
    </div>
  )
}

export default Filter;