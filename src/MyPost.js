import React from 'react'
import { useFetch } from './customhook/useFetch'

export default function MyPost() {

    const {loading, data} =useFetch("https://jsonplaceholder.typicode.com/posts");


    console.log(data);

  return (
    <div>MyPost</div>
  )
}
