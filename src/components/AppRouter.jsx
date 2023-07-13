import React from "react";

import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import PostIdPage from "./pages/PostIdPage";
import { BrowserRouter, Link, Route, Routes, Switch, Navigate } from 'react-router-dom';
import Login from "./pages/Login";

function AppRouter() {
    const isAuth = false;
    return (
        isAuth
        ?
        <Routes>
            <Route path='/about' Component={About}/>  
            <Route exact path='/posts' Component={Posts}/>  
            <Route exact path='/posts/:id' Component={PostIdPage}/>  
            <Route path='/error' Component={Error}/>  
            <Route
                path="*"
                element={<Navigate to="/error" Component={Error} />}
            />
         </Routes>
        :
        <Routes>
            <Route exact path='login' Component={Login}/>  
            <Route
                path="*"
                element={<Navigate to="/login" Component={Login} />}
            />
         </Routes>
       
    )
  }
  
  export default AppRouter;