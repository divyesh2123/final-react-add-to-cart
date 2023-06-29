import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PostData() {

    const p =useSelector(y=>y.post);

    const dis = useDispatch();

    console.log(p);

    useEffect(()=> {

        dis({type:'POST_REQ'})

    },[])
  return (
    <div>PostData</div>
  )
}
