
import React from 'react';
import './App.css';
import { Button } from 'bootstrap';
import LanguagePicker from './components/LanguagePicker';

function App() {
  return (
    <div className="App Text">
      <header className="Header">
        <LanguagePicker/>
        <Button>asdas</Button>
      </header>
    </div>
  );
}

export default App;
