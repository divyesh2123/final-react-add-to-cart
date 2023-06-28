import React from 'react'
import { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addToCart, first } from './action/productAction';
import fetchProduct from './asycaction/productasycAction';

const mapStateToProps = (state) => ({

  data : state.product
})



 function Product({data,dispatch}) {

  //  const produ = useSelector(y=>y.product);

  //  const dis = useDispatch();

    useEffect(()=> {

       

      dispatch(fetchProduct("https://fakestoreapi.com/products"))

        


    },[])

    const handleAddToCart = (value)=> {


      dispatch(addToCart(value));
    }

    console.log(data);
  return (
    <div className='row'>

      {
        data.data.map((value)=>{

          return ( 
            <div className='col-4'>
            <div className="card" style={{width:'400px'}}>
            <img className="card-img-top" src={value.image} 
            alt="Card image" style={{width:'100%', height:'200px'}}/>
            <div className="card-body">
              <h4 className="card-title">{value.title}</h4>
              <h4 className="card-title">{value.price}</h4>
              <p className="card-text">{value.description.slice(0,50)}</p>
              <a href="#" className="btn btn-primary" onClick={()=> {handleAddToCart(value) } }>Add To Cart</a>
            </div>
          </div>
          </div>
          )
        })
      }
      


    </div>
  )
}

export default connect(mapStateToProps)(Product)