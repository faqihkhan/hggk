import './css/home.css';
import React from 'react';
import Navigate from '../pages/Navigate';

export default function Home() {
  return (
    <div>
      <Navigate />
      <div className='good'>
        <div className='text-1xl text-center'>Home</div>
      </div>
    </div>
  )
}
