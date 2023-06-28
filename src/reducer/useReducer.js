const initialState = {

    isloading: false,
    data:[],
    error:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'DISPLAY_LOADING_SCREEN':
    return { ...state, isloading: true }

  case 'LOAD_USER_DATA':

  return {...state,isloading: false, data: payload}


  case 'LOAD_USER_FAILED':

  return {...state,isloading:false, error: true}

  default:
    return state
  }
}
