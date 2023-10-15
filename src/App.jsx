import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import { Spinner } from "@chakra-ui/react";
import Home from "./pages/home/home";
import Lobby from "./pages/lobby/Lobby";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/lobby" element={<Lobby />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}

export default App;
