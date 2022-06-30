import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import AboutMe from './components/AboutMe';
import Studies from './components/Studies';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <img src="yo1.jpeg" className="col-5 rounded-circle p-5" alt='me'></img>
          <div className="col-7 container ps-5">
            <div className="row align-items-center">
              <h1 className='Text fw-bold fs-1'>SERGI FERREZ</h1>
              <hr className='bg-customLight p-1 ms-2' />
              <h3 className='Text'>Programador multiplataforma enfocado en el desarrollo de codigo limpio, elegante y eficiente.</h3>  
            </div>
          </div>
        </div>
      </div>
      <hr className='bg-customLight p-1'/>
      <AboutMe/>
      <Studies/>
    </>
  );
}

export default App;
