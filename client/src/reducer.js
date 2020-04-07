
export const reducer = (state = {}, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'setFilters':
      if(typeof payload.msg === "undefined") return {...state, filters: payload.data, loader:{...state.loader, isLoading:false}}
      else  return {...state, filters: payload.data, loader:{isLoading:false, msg: payload.msg}}
      break;

    case 'setSelectedFilter': return {...state, selectedFilter: payload}

    case 'setCarOwners':
      if(typeof payload.msg === "undefined") return {...state, carOwners: payload.data, loader:{...state.loader, isLoading:false}}
      else  return {...state, carOwners: payload.data, loader:{isLoading:false, msg: payload.msg}}
      break;

    case "setLoader": return {...state, loader: {...state.loader, isLoading:payload}}

    case "setShowFilter": return {...state, showFilter: payload}

    default: return state;
  }
}