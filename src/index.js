import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import './themes/theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main';
import AuthLayout from './layouts/auth';
import Login from './components/Login';
import AuthProtect from './components/AuthProtect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path='/' element={
          // <AuthProtect>
          <MainLayout />
          // </AuthProtect> 
        }>
          <Route path='home' element={<App />} />
          <Route path='hihi' element={<>hihi</>} />
        </Route>
        <Route path='/auth' element={<AuthLayout />} >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<>Đăng ký</>} />
        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
