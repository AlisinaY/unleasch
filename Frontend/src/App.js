import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Features from "./pages/Features";
import AnalyticEvent from "./components/AnalyticEvent";
import MainNavigation from "./components/MainNavigation";
import styles from "./App.module.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavigation />}>
          <Route path="/features" element={<Features />} />
          <Route path="/analyticpage" element={<AnalyticEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
