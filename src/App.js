import { BrowserRouter, Link, Route, Routes, Switch, Navigate } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context';
import { useEffect, useState } from 'react';



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      if (localStorage.getItem('auth')) {
        setIsAuth(true)
      }
      setIsLoading(false);
  },[])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

