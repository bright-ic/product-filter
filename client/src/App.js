import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Filter from "./components/filter/filter";
import filterService from "./services/filterServices";
import carOwnersService from "./services/carOwnersService";
import {Loading} from "./components/loading";

const  App = () => {
  const [filters, setFilters] = useState({isLoading: true, msg: '', data: {}});
  const [selectedFilter, setSelectedFilter] = useState({});
  const [carOwners, setCarOwners] = useState([]);
  const [loader, setLoader] = useState({isLoading:true, msg:''});

  useEffect(() => {
    if(Object.values(filters.data).length === 0) {
      getFilters();
    }

    if(Object.values(selectedFilter).length > 0) {
      setLoader({isLoading:true});
      console.log("pulling carOwners from backend")
      getCarOwners(selectedFilter);
    }

    return ()=> {}
  },[selectedFilter]);

  const getFilters = async () => {
    let data = await filterService.getFilters();
    if( typeof data == "string") {
      setLoader({...loader, isLoading:false, msg: "Sorry! something broke. Check your network connection"});
    }
    else {
      setFilters({...filters, data});
      setLoader({...loader, isLoading:false});
    }
    console.log("filter values,", data);
  }

  const getCarOwners = async (filter) => {
    let data = await carOwnersService.getCarOwners(filter);
    if( typeof data == "string") {
      setLoader({...loader, isLoading:false, msg: "Sorry! something broke. Check your network connection"});
    }
    else {
      setCarOwners(data);
      setLoader({...loader, isLoading:false});
    }
    console.log("filter values,", data);
  }

  const selectedFilterHandler = useCallback((id)=> {
    console.log("id selected is: "+id);
    setSelectedFilter(filters.data[id]);
  })

  if(loader.isLoading) {
    return <Loading/>
  }

  return (
    <Filter
    filters = {Object.values(filters.data)}
    selectedFilterHandler={selectedFilterHandler}
    />
  );
}

export default App;
