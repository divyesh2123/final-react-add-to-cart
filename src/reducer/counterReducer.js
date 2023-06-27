const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'INC':
    return state +1;

  case 'DEC':

    return state -1;

  case 'RESET':

  return 0;

  case 'INCByAMOUNT':

  return state + parseInt(payload);



  default:
    return state
  }
}
