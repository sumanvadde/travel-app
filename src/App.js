import React from "react";
import './App.css';
// import Header from "./Header";
// import Welcome from "./Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import Contactus from "./Contactus";
// import About from "./About";
import Navbar from "./Navbar";


function App() {
  return(
<div>
<Router>
  <Navbar />
  </Router>
 {/* <Home />
 <Contactus />
 <About /> */}

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
