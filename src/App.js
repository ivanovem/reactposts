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
      {/* <Routes>
        <Route path='/about' Component={About}/>  
        <Route path='/posts' Component={Posts}/>  
        <Route path='/error' Component={Error}/>  
        <Route
        path="*"
        element={<Navigate to="/error" Component={Error} />}
        />
      </Routes> */}
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

