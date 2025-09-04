import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add"; 
import ProjectContextProvider from "./context/ProjectContextProvider";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="montserrat">
    <Router>
      <ProjectContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<Add />} />
          <Route path="/add-project/:id" element={<Add />} />
        </Routes>
        <Footer/>
         <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </ProjectContextProvider>
    </Router>
    </div>
  );
};

export default App;
