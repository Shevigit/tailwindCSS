import React, { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import GridA from "./pages/GridA";
import { Button } from "./components/ui/button";
import { CompletionBox, DashboardSummary } from "./pages/DashboardSummary";


export default function App() {
    const [isDisplay,setIsdisplsy]=useState(false)
  const handleGrid=()=>{
  setIsdisplsy(!isDisplay)
  }
  
  return (
    <div>
      <CompletionBox></CompletionBox>
      <DashboardSummary></DashboardSummary>

             <Button variant="danger" onClick={handleGrid}>לגריד</Button>
     {isDisplay?<GridA></GridA>:<Home></Home>} 
    </div>
  );
}
