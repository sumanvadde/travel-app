import React from "react";
import './App.css';
import Header from "./Header";
import Welcome from "./Welcome";

function App() {
  return(
<div>
<Welcome color= "red" />


 <Header color= "blue" text="hello"/>  

 {/* {new Array(10).fill(0).map((_, i) => {
   console.log(i)
 return i % 2==0 ?<Helloworld color= "pink"/> :<Helloworld color= "blue"/>
 }
 
  )}
   */}
</div>
  )
};
 

export default App;
