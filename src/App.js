import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [news,setNews] = useState([]);
  useEffect(()=>{
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then((res)=>res.json())
    .then((data)=>{
      setNews(data);
    },[]);
  })

  return (
    <div className="App">
      <h1>News</h1>
      <div className="container">
        {
          news.map((item,key)=>{
            return <Card item={item} key={key}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
