import { BrowserRouter, Link, Route, Routes, Switch, Navigate } from 'react-router-dom';
import Posts from './components/pages/Posts';
import './styles/App.css';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

