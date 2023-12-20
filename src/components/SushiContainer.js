import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( {API, sushisArray}) {

const [arrayTracker, setArrayTracker] = useState(4)
const [displayArray, setDisplayArray] = useState([])

 function handleMoreButton(){
  setArrayTracker(arrayTracker+4)
  handleSetDisplayArray()
 }

 function handleSetDisplayArray(){
  let newArray = sushisArray.slice(arrayTracker-4,arrayTracker)
  newArray = newArray.map((sushi) => {
    return(
    <Sushi 
    key={sushi.id} 
    sushi={sushi} 
    handleSushiClick={handleSushiClick}/>
    );
  })
  setDisplayArray(newArray)
 }


 function handleSushiClick(id){
  console.log(id)
  
 }

  return (
    <div className="belt">
      {displayArray}
      <MoreButton handleMoreButton={handleMoreButton}/>
    </div>
  );
  }

export default SushiContainer;
