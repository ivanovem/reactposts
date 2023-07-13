import React, { useContext } from "react";

import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import PostIdPage from "./pages/PostIdPage";
import { BrowserRouter, Link, Route, Routes, Switch, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import { AuthContext } from "./context";
import Loader from "./UI/Loader/Loader";

function AppRouter() {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ?
        <Routes>
            <Route path='/about' Component={About}/>  
            <Route exact path='/posts' Component={Posts}/>  
            <Route exact path='/posts/:id' Component={PostIdPage}/>  
            <Route
                path="*"
                element={<Navigate to="/posts" Component={Posts} />}
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