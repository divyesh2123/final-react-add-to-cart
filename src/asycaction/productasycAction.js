const fetchProduct = (usersUrl) => (dispatch) => {
   
    
    return fetch(usersUrl)
      .then(response => response.json())
      .then((json) => {

          dispatch({ type: "GET_PRODUCT", payload :json })
      
      }).catch((r)=> {

        dispatch({ type: "GET_PRODUCT_FAILED", payload : r })

      })
  }

  export default fetchProduct;
