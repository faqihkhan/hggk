import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from '../component/home';
import Navigate from './Navigate';
import Profile from '../component/profile';
import About from '../component/aboute';


export default function Dashboard() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/' element={<Navigate />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
        <Route path='/aboute' element={<About />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}
