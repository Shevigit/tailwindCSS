import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/SidebarContainer";
import Home from "./pages/Home";
import SidebarContainer from "./pages/SidebarContainer";


export default function App() {
  return (
    <div>
      <SidebarContainer />
 <Home></Home>
    </div>
  );
}
