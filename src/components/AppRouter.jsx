import React from "react";
import MyButton from "./UI/button/MyButton";
import { BrowserRouter, Link, Route, Routes, Switch, Navigate } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';

function AppRouter() {

    return (
        <Routes>
            <Route path='/about' Component={About}/>  
            <Route path='/posts' Component={Posts}/>  
            <Route path='/error' Component={Error}/>  
            <Route
            path="*"
            element={<Navigate to="/error" Component={Error} />}
            />
        </Routes>
    );
  }
  
  export default AppRouter;