import React,{useEffect, useState} from 'react'
import axious from 'axios'

export function Insta() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axious
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) =>{
          console.log(response.data);
          setData([...response.data])
    })
  return
}

