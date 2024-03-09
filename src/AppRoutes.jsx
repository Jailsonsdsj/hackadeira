import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home";
import { ClimaticConditions } from "./pages/ClimaticConditions";

  export const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ClimaticConditions" element={<ClimaticConditions />} />
        </Routes>
      </Router>
    );
  };