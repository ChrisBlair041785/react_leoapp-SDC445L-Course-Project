import React, {useState} from 'react'; 
import './App.css';
import Button from './Button'
import DogTagTemplate from './assets/Dog Tag Template.png';

function App() {
const [lineCountInput, setLineCountInput] = useState('');
const [storedLineCount, setStoredLineCount] = useState(null);
const [fontInput, setFontInput] = useState('');
const [selectedFont, setSelectedFont] = useState(null);
const [styleInput, setStyleInput] = useState('');
const [selectedStyle, setSelectedStyle] = useState(null);

const LineNumCheck = () => {
  const parsedLineCount = Number(lineCountInput);
  if (!Number.isInteger(parsedLineCount) || parsedLineCount < 1 || parsedLineCount > 4) {
    alert('Please enter a whole number between 1 and 4.');
    return;
  }

  setStoredLineCount(parsedLineCount);
};

const handleFont = () => {
  const parsedFont = Number(fontInput);
  if (!Number.isInteger(parsedFont) || parsedFont < 1 || parsedFont > 4) {
    alert('Please enter a whole number between 1 and 4 for the font.');
    return;
  }

  setSelectedFont(parsedFont);
}; 

const handleStyle = () => {
  const parsedStyle = Number(styleInput);
  if (!Number.isInteger(parsedStyle) || parsedStyle < 1 || parsedStyle > 3) {
    alert('Please enter a whole number between 1 and 3 for the style.');
    return;
  }

  setSelectedStyle(parsedStyle);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Tag Laser Engraving Order Form </h1>
        <p>Chris Blair - ChrBla3661 - SDC445Lab Course Project</p>
        <p>Customize your Dog Tag by making the selections below:</p>
      </header>

      <div className="line-selection">
        <h2>How many lines of text would you like on your dog tag, 1, 2, 3, or 4?</h2>
        <input
          type="number"
          min="1"
          max="4"
          value={lineCountInput}
          onChange={(event) => setLineCountInput(event.target.value)}
          placeholder="Enter number of lines (1-4)"
        />
        <Button label="Lines" onClick={LineNumCheck} />
        {storedLineCount !== null && (
          <p>Number of lines: {storedLineCount}</p>
        )}
      </div>

      <div className="Font-Selection">
        <h2>Font Selection:</h2>
        <ul className="font-list">
          <li className="Stencil">1.Stencil - Example Texts, ABCdef 123</li>
          <li className="Arial">2. Arial - Example Texts, ABCdef 123</li>
          <li className="Bradley">3. Bradley Hand - Example Texts, ABCdef 123</li>
          <li className="Lucida">4. Lucida Handwriting - Example Texts, ABCdef 123</li>
        </ul>
        <input 
          type="number"
          min="1"
          max="4"
          value={fontInput}
          onChange={(event) => setFontInput(event.target.value)}
          placeholder="Enter font number (1-4)"
        />
        <Button label="Font" onClick={handleFont} />
        {fontInput !== 'null' && <p>Selected font: {fontInput}</p>}
      </div>

      <div className="Style-selection">
        <h2>Style Selection:</h2>
        <ul className="StyleList">
          <li className="Bold">1. Bold</li>
          <li className="Italic">2. Italic</li>
          <li className="Underline">3. Underline</li>
        </ul>
        <input
          type="number"
          min="1"
          max="3"
          value={styleInput}
          onChange={(event) => setStyleInput(event.target.value)}
          placeholder="Enter style number (1-3)"
        />
        <Button label="Style" onClick={handleStyle} /><br/>
        {styleInput !== 'null' && <p>Selected style: {styleInput}</p>}
        </div>
        

      <textarea placeholder="Enter your text here"></textarea><br/>
      <img src={DogTagTemplate}
        alt="Dog Tag Template" />

    </div>
  );
}

export default App;
