import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

export default function MyUseReducer() {

   

 const [input,setInput] = useState('');

 const handlerReducer =(state, action)=> {

    switch(action.type)
    {
        case 'ADD':
            let d = [...state];
            d.push(action.payload);

            return d;

         default :

         return state;

    }
        
 }

 const [data,setData]   = useReducer(handlerReducer,[])

 
 const changeHandler= (e)=> {


    setInput(e.target.value);
 }

 const handleSave = ()=> {

    setData({type:'ADD',payload: input});

 }

 console.log(data);
  return (
    <div>

        <input type='text' onChange={changeHandler} />

        <input type='button' onClick={handleSave} value="Save Data"/>
        

    </div>
  )
}
