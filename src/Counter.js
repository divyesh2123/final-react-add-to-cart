import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ByAmount, Decr, Incr, Reset } from './action/counterAction';
import { useState } from 'react';

export default function Counter() {

    const [input,setInput] = useState(3);

    const changeHandelr = (e)=> {

        setInput(e.target.value);

    }

  const counter =   useSelector(y=>y.counter);

  const dis = useDispatch();

  const incr = ()=> {

    dis({type:'INC_ASYC'})

  }

  const decr = ()=> {

    dis(Decr())

  }

  const reset = ()=> {

    dis(Reset())

  }

  const incByAmout = ()=> {

    dis(ByAmount(input));

  }
  return (
    <div>
        
        {counter}


    <input type='text' onChange={changeHandelr} />

        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
        <button onClick={reset}>Reset</button>

        <button onClick={incByAmout}>IncrementBy</button>
    </div>
  )
}
