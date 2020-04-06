import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Filter from "./components/filter/filter";
import CarOwners from "./components/carowners/carOwners"
import filterService from "./services/filterServices";
import carOwnersService from "./services/carOwnersService";
import {Loading} from "./components/loading";

const  App = () => {
  const [filters, setFilters] = useState({});
  const [selectedFilter, setSelectedFilter] = useState({});
  const [carOwners, setCarOwners] = useState([]);
  const [loader, setLoader] = useState({isLoading:true, msg:''});
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    if(Object.values(filters).length === 0) {
      getFilters();
    }

    if(Object.values(selectedFilter).length > 0) {
      setLoader({isLoading:true});
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
      setFilters(data);
      setLoader({...loader, isLoading:false});
    }
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
    setShowFilter(false);
  }

  const selectedFilterHandler = useCallback((id)=> {
    setSelectedFilter(filters[id]);
  })

  if(loader.isLoading) {
    return <Loading/>
  }

  if(showFilter) {
    return (
      <Filter
      filters = {Object.values(filters)}
      selectedFilterHandler={selectedFilterHandler}
      />
    );
  }
  else {
    return (
      <CarOwners carowners={carOwners} />
    );
  }
 
}

export default App;
