 const fetchUser = (usersUrl) => (dispatch) => {
    dispatch({ type: "DISPLAY_LOADING_SCREEN" })
    
    return fetch(usersUrl)
      .then(response => response.json())
      .then((json) => {

          dispatch({ type: "LOAD_USER_DATA", payload :json })
      
      }).catch((r)=> {

        dispatch({ type: "LOAD_USER_FAILED", payload : r })

      })
  }

  export default fetchUser;
