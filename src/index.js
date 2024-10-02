import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Router, Route, Outlet, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Map from './Map';
import HelloWorld from './HelloWorld';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import Layout1 from './Layout1';
import Rout from './Rout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Hooks from './Hooks';
import CardHook from './cardHook';
import ImageIncrement from './imageIncrement';
import Faculties from './api';
import FacultyDetail from './api2';
import AddFaculty from './AddFaculty';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/Faculties' element={<Faculties />} />
      <Route path='/Faculties/:id' element={<FacultyDetail />} />
      <Route path='/Faculties/add' element={<AddFaculty />} />
    </Routes>
    </BrowserRouter>
  </>
);

// root.render(
//   <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />} />
//       <Route path='/map' element={<Map />} />
//       <Route path='/hello' element={<HelloWorld />} />
//     </Routes>
//     </BrowserRouter>
//   </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
