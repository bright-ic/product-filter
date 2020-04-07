
export const reducer = (state = {}, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'setFilters': return {...state, filters: payload, loader:{...state.loader, isLoading:false}}

    case 'setSelectedFilter': return {...state, selectedFilter: payload}

    case 'setCarOwners': return {...state, carOwners: payload, loader:{...state.loader, isLoading:false}}

    case "setLoader": return {...state, loader: {...state.loader, isLoading:payload.isLoading, msg: typeof payload.msg !== "undefined" ? payload.msg: ''}}

    case "setShowFilter": return {...state, showFilter: payload}

    default: return state;
  }
}