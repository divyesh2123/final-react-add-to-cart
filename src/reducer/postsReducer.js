const initialState = {
    data: [],
    error: {},
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'POST_REQ':
    return { ...state, isLoading: true }

  case 'POST_SUC':

  return {...state, isLoading: false, data : payload};


  case 'POST_FAIL':

  return {...state, isLoading: false,error: payload}

  default:
    return state
  }
}
