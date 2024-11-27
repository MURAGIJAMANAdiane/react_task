import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Learn from "./components/Learn";
import Example from "./example";
import Myusestate from "./components/Myusestate";
import { Link } from "react-router-dom";


export const Contexts = createContext();

function App() {

  const [Name, setName] = useState("Diane");
  const [number, setNumber] = useState(0);

  return (
   
      <Router>
        <center>
          
        <h1>names:MURAGIJIMANA Diane</h1>
        <h2>class:L5 SOD</h2>
       
        <Link to="/">HOME</Link>|
          <Link to="Example">info about react js</Link>|
          <Link to="Learn">useffect hooks</Link>|
          <Link to="Myusestate">usestate hooks</Link>
         <h3>WELCOME TO REACTS HOOKS</h3>
          </center>
        <Routes>
      
          <Route path="/Example" element={<Example />} />
          <Route path="/Learn" element={
            <Contexts.Provider value={Name} >
          <Learn />
          </Contexts.Provider>
          } />
          <Route path="/Myusestate" element={<Myusestate/>} />
        
        </Routes>
      </Router>
  );
}

export default App;
