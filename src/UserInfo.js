import React from 'react'
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import fetchUser from './asycaction/userasyncAction'

const mapStateToProps = (state) => ({

    d : state.user
    
})

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      getProduct: () => dispatch(fetchUser("https://jsonplaceholder.typicode.com/users"))

    }
  }

 function UserInfo(props) {


   console.log(props.d);

   
   useEffect(()=> {


     props.getProduct();

   },[])
  return (
    <div>UserInfo</div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)
