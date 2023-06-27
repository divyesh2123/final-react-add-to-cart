export const Incr = () => ({
  type: 'INC',
  
})


export const Decr = () => ({
  type: 'DEC',
 
})

export const Reset = () => ({
  type: 'RESET',
  
})

export const ByAmount = (payload) => ({
  type: 'INCByAMOUNT',
  payload
})


