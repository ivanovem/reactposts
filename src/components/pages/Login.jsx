import React, { useContext } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { AuthContext } from "../context";

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext); 
    const login = (event )=> {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>
                Страница для логина
            </h1>
            <form >
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton onClick={login}>Войти</MyButton>
            </form>
        </div>
    );
  }
  
  export default Login;