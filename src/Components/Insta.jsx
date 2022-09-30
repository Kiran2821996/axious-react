import React,{useEffect, useState} from 'react'
import axious from 'axios'

export function Insta() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axious
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) =>{
          
          console.log("data",response.data);
          console.log("data2",response.data);
          setData([...response.data])})
    },[])

  return (
    <>
    {data.map(items=>{
      // console.log(items.url);
      return( 
      <div className='main_contianer' key={items.id} >
        <div className='top_container'>
          <img src={items.thumbnailUrl
} alt="" />

        </div>
        <div className='middle_container'>
        <img src={items.url} alt="" />
        </div>
        <div className='low_container'></div>
             
      </div>
      
     )
 
})}
    </>
    
    
  )
}

