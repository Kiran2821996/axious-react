import React, { useEffect, useState } from "react";
import axious from "axios";
export function Comments() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData]=useState([])
  const [search,setSearch]=useState("")
  const [btn,setbtn]=useState("")
  useEffect(() => {
    axious
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) =>{
        console.log(response.data);
        setData([...response.data])
        setFilteredData([...response.data])
      } );
  }, []);
  useEffect(()=>{
    const filtered = data.filter((comment)=>{
      if(comment.name){
        return comment.name.includes(search.toLowerCase())
      }
    });
    setFilteredData(filtered)
  },[btn])
  return (
    <>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
    <button onClick={()=>setbtn(search)}>Search</button>
      {filteredData.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.name}</h1>
          </div>
        );
      })}
    </>
  );
}

