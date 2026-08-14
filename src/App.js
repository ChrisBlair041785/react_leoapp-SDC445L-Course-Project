import React, {useState} from 'react'; 
import './App.css';
import { LineCountButton, FontButton, StyleButton } from './Components/Button'
import DogTagTemplate from './assets/Dog Tag Template.png';
import { LineTextFields } from './Components/TextField';

function App() {

  const [storedLineCount, setStoredLineCount] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const fontClasses = ['Stencil', 'Arial', 'Bradley', 'Lucida'];
  const styleClasses = ['Bold', 'Italic', 'Underline'];
  const previewClassName = [
    selectedFont ? fontClasses[selectedFont - 1] : '',
    selectedStyle ? styleClasses[selectedStyle - 1] : '',
  ].join(' ').trim();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Tag Laser Engraving Order Form </h1>
        <p>Chris Blair - ChrBla3661 - SDC445Lab Course Project</p>
      </header>
      <h2>Customize your Dog Tag by making the selections below:</h2>
      <div className="line-selection">
        <h3>How many lines of text would you like on your dog tag, 1, 2, 3, or 4?</h3>
        <LineCountButton onConfirm={setStoredLineCount} />
        {storedLineCount !== null && (
          <p>Number of lines: {storedLineCount}</p>
        )}
      </div>

      <div className="Font-Selection">
        <h3>Font Selection:</h3>
        <ul className="font-list">
          <li className="Stencil">1.Stencil - Example Texts, ABCdef 123</li>
          <li className="Arial">2. Arial - Example Texts, ABCdef 123</li>
          <li className="Bradley">3. Bradley Hand - Example Texts, ABCdef 123</li>
          <li className="Lucida">4. Lucida Handwriting - Example Texts, ABCdef 123</li>
        </ul>
        <FontButton onConfirm={setSelectedFont} />
        {selectedFont !== null && <p>Selected font: {selectedFont}</p>}
      </div>

      <div className="Style-selection">
        <h3>Style Selection:</h3>
        <ul className="StyleList">
          <li className="Bold">1. Bold</li>
          <li className="Italic">2. Italic</li>
          <li className="Underline">3. Underline</li>
        </ul>
        <StyleButton onConfirm={setSelectedStyle} /><br/>
        {selectedStyle !== null && <p>Selected style: {selectedStyle}</p>}
      </div> 

      <h3>Enter Text for Each Line:</h3>
      <LineTextFields lineCount={storedLineCount} previewClassName={previewClassName} />

      <img src={DogTagTemplate}
        alt="Dog Tag Template" />
    </div>
  );
}

export default App;
