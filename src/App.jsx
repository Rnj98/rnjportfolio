import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./pages/styles/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/skills/Skills";
import './App.css'




export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </div>
  );
}