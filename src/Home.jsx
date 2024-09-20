import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Home.css';
import WeatherWidget from './components/WeatherWidget';

function Home() {
  return (
    <div className='home w-full flex flex-col md:flex-row gap-x-10 justify-between'>
      {/* Weather Widget moves to the top on smaller screens */}
      <div className='w-full md:w-1/2'>
        <WeatherWidget/>
      </div>

      {/* The list will take full width on smaller screens */}
      <div className='flex flex-col w-full md:w-1/2 h-full justify-around gap-4'>
        <div className='content'>
          <Link to="/todo">Todo App</Link> 
        </div>
        <div className='content'>
          <Link to="/sticky">Sticky Note</Link>  
        </div>
        <div className='content'>
          <Link to="/calender"> Calendar</Link> 
        </div>
        <div className='content'>
          <Link to="/tictoc">Tick-Tock-toe</Link>     
        </div>
        <div className='content'>
          <Link to="/paint">Paint Application</Link>  
        </div>
        <div className='content'>
          <Link to="/hellokitty">Hello Kitty</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
