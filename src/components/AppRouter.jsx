import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import PostIdPage from "./pages/PostIdPage";

function AppRouter() {

    return (
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
    );
  }
  
  export default AppRouter;