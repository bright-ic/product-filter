import React, {useState, useEffect} from "react";
import filterService from "../services/filterServices";
import {Loading} from "./loading";

const Filter = () => {
  const [filters, setFilters] = useState({isLoading: true, msg: '', data: []});

  useEffect(() => {
    if(filters.data.length === 0) {
      getFilters();
    }
  },[]);

  const getFilters = async () => {
    let data = await filterService.getFilters();
    
    if( typeof data == "string") {
      setFilters({...filters, isLoading:false, msg: "Sorry! something broke. Check your network connection"})
    }
    else {
      setFilters({...filters, isLoading:false, data})
    }
    console.log("filter values,", data);
  }

  if(filters.isLoading) {
    return <Loading/>
  } 

  return (
    <div className="filter__cardContainer">
      {/* each filter container starts */}
      <div className="fillter__card">
        <div className="filter__year">1990 - 2010</div>
        <div className="filter__gender">Male</div>
        <div className="filter__countries"><span>France</span> <span>United States</span> <span>Brazil</span></div>
        <div className="filter__colors"><span style={{backgroundColor: 'yellow'}}></span> <span style={{backgroundColor: 'blue'}}></span></div>
      </div>
      {/* each filter container ends */}
    </div>
  )
}

export default Filter;