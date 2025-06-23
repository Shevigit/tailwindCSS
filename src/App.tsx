import React, { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import GridA from "./pages/GridA";
import { Button } from "./components/ui/button";
import { CompletionBox, DashboardSummary } from "./pages/DashboardSummary";
import MyRecordingControls from "./pages/MyRecordingControls";
import DashboardPage from "./pages/DashboardPage";
import { MessageModalProvider } from "./components/ui/MessageModalContext";


export default function App() {
    const [isDisplay,setIsdisplsy]=useState(false)
  const handleGrid=()=>{
  setIsdisplsy(!isDisplay)
  }
  
  return (
    <div>
  <MessageModalProvider>
        <Home></Home>
    </MessageModalProvider> 

    </div>
  );
}
