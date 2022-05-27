import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
// import ComponentToPrint from "./ComponentToPrint";
import {useLocation} from "react-router-dom";

function Tela2(){
  let componentRef = useRef();
  const search = useLocation().search;
  var senha = new URLSearchParams(search).get('senha');
  console.log("senha",senha);
  return (
    <>
      <div>
        <h2 style={{color: "green"}}>{senha}</h2>
      </div>
    </>
  );
}

export default Tela2;