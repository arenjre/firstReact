import React, { Component, useState } from "react";
import { useParams, Link } from 'react-router-dom';

function HelpL (){
    let [fname, setFName] = useState("Annand")
      return( 
      <>
      <button onClick={() => {
          console.log("Yeah")
          setFName("")
      }}> OK</button>
      <h1>Hello, {fname}</h1>
      </>
      
      )
  }

export default HelpL