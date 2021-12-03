import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Add from "./add";
import Edit from "./edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
