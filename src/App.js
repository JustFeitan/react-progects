import React from 'react';
import './styles/app.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {Outlet} from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
      <div>
            <AppRouter/>
      </div>
  )
}

export default App;
