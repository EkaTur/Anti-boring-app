import { useEffect, useLayoutEffect, useState } from 'react';
import React from 'react';
import gsap from 'gsap';
import './App.css';

function App() {

  const [newAdvice, setNewAdvice] = useState('');

  useLayoutEffect(() => {
    gsap.fromTo('.box-3', {y: -50, opacity: 0}, {y: 40, opacity: 1, duration: 3})

  }, [])


  useEffect(() => {
    getAdvice();
  }, []);

  const handleClick = () => {
    gsap.fromTo('.box-1', { rotation: 0 }, { rotation: 360 });
    gsap.fromTo('.box-2', { scale: 0 }, { scale: 2 });
  }

  const getAdvice = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data.activity);
    setNewAdvice(data.activity);
} 



  return (
    <div>
      <div className='Container'>
        <h1 className='box-3'>Are you bored and you don't know what to do?</h1>
      </div>
      <div className='Container'>
        <p>Get advice and be busy!</p>
      </div>
      <div className='Container'>
        <button className='box-1' onClick={() => { getAdvice(); handleClick(); }}>CLICK HERE!</button>
      </div>
      <div className='Container'>
        <h2 className='Advice box-2'>{newAdvice}</h2>
      </div>
    </div>
  );
}

export default App;
