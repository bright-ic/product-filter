import React, {useState, useEffect, useCallback, useReducer} from 'react';
import './App.css';
import Filter from "./components/filter/filter";
import CarOwners from "./components/carowners/carOwners"
import filterService from "./services/filterServices";
import carOwnersService from "./services/carOwnersService";
import {Loading} from "./components/loading";
import {Header} from "./components/header";
import {reducer} from "./reducer/reducer";

const initialState = {filters:{}, selectedFilter:{}, carOwners:[], loader:{isLoading:true, msg:''}, showFilter:true};
const  App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(Object.values(state.filters).length === 0) {
      getFilters();
    }

    if(Object.values(state.selectedFilter).length > 0) {
      dispatch({type:"setLoader", payload: {isLoading:true}});
      getCarOwners(state.selectedFilter);
    }

    return ()=> {}
  },[state.selectedFilter]);

  const getFilters = async () => {
    try {
      let data = await filterService.getFilters();
      if( typeof data == "string") {
        dispatch({type:"setLoader", payload: {isLoading:false, msg: "Sorry! something broke. Check your network connection"}});
      }
      else {
        dispatch({type:"setFilters", payload:data});
      }
    }
    catch(err) {
      alert(err.message);
    }
  }

  const getCarOwners = async (filter) => {
    try {
      let data = await carOwnersService.getCarOwners(filter);
      if( typeof data == "string") {
        dispatch({type:"setLoader", payload: {isLoading:false, msg: "Sorry! something broke. Check your network connection"}});
      }
      else {
        dispatch({type:"setCarOwners", payload:data});
      }
      dispatch({type:"setShowFilter", payload:false});
    }
    catch(err) {
      alert(err.message);
    }
  }

  const selectedFilterHandler = useCallback((id)=> {
    dispatch({type:"setSelectedFilter", payload: state.filters[id]});
  });

  const showHomePage = () => {
    if(!state.showFilter) {
      dispatch({type:"setShowFilter", payload:true});
      dispatch({type:"setSelectedFilter", payload: {}});
    }
  }

  if(state.loader.isLoading) {
    return <Loading/>
  }

  return (
    <>
    <Header showHomePage={showHomePage} />
    {state.showFilter ? 
    ( <Filter
      filters = {Object.values(state.filters)}
      selectedFilterHandler={selectedFilterHandler}
      />) : 
    ( <CarOwners carowners={state.carOwners} />)}
    </>
  );
 
}

export default App;
