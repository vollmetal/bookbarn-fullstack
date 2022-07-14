import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AddBook from './components/AddBook';
import Registration from './components/Registration';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path = "/" element = {<App />} />
          <Route path = "/add-book" element = {<AddBook />} />
          <Route path='/registration' element = {<Registration />} />
          <Route path='/login' element = {<Login />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
