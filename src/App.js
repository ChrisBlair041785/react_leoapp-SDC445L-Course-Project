import React, {useState} from 'react'; 
import './App.css';
import Button from './Button'
import DogTagTemplate from './assets/Dog Tag Template.png';

function App() {
const handleLines = () => {};
const handleFont = () => {}; 
const handleStyle = () => {};

  return (
    <div className="App">
      <h1>Dog Tag Laser Engraving Order Form </h1>
      <Button label="Lines" onClick={handleLines} />
      <Button label="Font" onClick={handleFont} />
      <Button label="Style" onClick={handleStyle} /><br/>
      <textarea placeholder="Enter your text here"></textarea><br/>
      <img src={DogTagTemplate}
        alt="Dog Tag Template" />

    </div>
  );
}

export default App;
