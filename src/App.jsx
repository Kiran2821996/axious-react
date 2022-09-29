// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import axious from "axios";
function App() {
  const [data, setData] = useState([]);
  const [id,setId]=useState(1)
  // useEffect(() => {
  //   axious
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setData([...response.data]));
  // }, []);
  useEffect(() => {
    axious
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) =>{
        console.log(response.data)
        setData(response.data)
      } );
  },[id]);
  const increase =()=>{
    setId(prev=>prev+1)
  }
  return (
    <>
      {/* {data.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })} */}
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <button onClick={increase}>click-{id}</button>
    </>
  );
}

export default App;
