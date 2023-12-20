import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushisArray, setSushisArray] = useState([])
  const [sushiPrice, setSushiPrice] = useState(0)
  const [plates, setPlates] =[]


  useEffect(() => {
   fetch("http://localhost:3001/sushis")
   .then(res => res.json())
   .then(setSushisArray)
  },[])


  function handleSushiClick(event){
    console.log(event.target)
  }
  function sushiEaten(){ 
   // on click the value of sushi price is returned and subtracted by 
    //a total (state in App.js) that is passed as prop to Table.js)
  }

  return (
    <div className="app">
      <SushiContainer API={API} sushisArray={sushisArray}/>
      <Table plates={plates} sushiPrice={sushiPrice}/>
    </div>
  );
}

export default App;
