import React from "react";
import {FilterCard} from "./filterCard";
import filterIcon from "../../images/filter.png";


const Filter = ({filters, selectedFilterHandler}) => {

  return (
    <div className="filter__cardContainer">
      <div className="filter_title"><img src={filterIcon} className="filterIcon" alt="filter"/> <div className="filter_pad">Filter</div></div>
      {filters && filters.length > 0 ? (
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