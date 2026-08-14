import React, { useState } from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export const LineCountButton = ({ onConfirm }) => {
  const [lineCountInput, setLineCountInput] = useState('');

  const handleClick = () => {
    const parsedLineCount = Number(lineCountInput);
    if (!Number.isInteger(parsedLineCount) || parsedLineCount < 1 || parsedLineCount > 4) {
      alert('Please enter a whole number between 1 and 4.');
      return;
    }
    onConfirm(parsedLineCount);
  };

  return (
    <>
      <input
        type="number"
        min="1"
        max="4"
        value={lineCountInput}
        onChange={(event) => setLineCountInput(event.target.value)}
        placeholder="Enter number of lines (1-4)"
      />
      <Button label="Lines" onClick={handleClick} />
    </>
  );
};

export const FontButton = ({ onConfirm }) => {
  const [fontInput, setFontInput] = useState('');

  const handleClick = () => {
    const parsedFont = Number(fontInput);
    if (!Number.isInteger(parsedFont) || parsedFont < 1 || parsedFont > 4) {
      alert('Please enter a whole number between 1 and 4 for the font.');
      return;
    }
    onConfirm(parsedFont);
  };

  return (
    <>
      <input
        type="number"
        min="1"
        max="4"
        value={fontInput}
        onChange={(event) => setFontInput(event.target.value)}
        placeholder="Enter font number (1-4)"
      />
      <Button label="Font" onClick={handleClick} />
    </>
  );
};

export const StyleButton = ({ onConfirm }) => {
  const [styleInput, setStyleInput] = useState('');

  const handleClick = () => {
    const parsedStyle = Number(styleInput);
    if (!Number.isInteger(parsedStyle) || parsedStyle < 1 || parsedStyle > 3) {
      alert('Please enter a whole number between 1 and 3 for the style.');
      return;
    }
    onConfirm(parsedStyle);
  };

  return (
    <>
      <input
        type="number"
        min="1"
        max="3"
        value={styleInput}
        onChange={(event) => setStyleInput(event.target.value)}
        placeholder="Enter style number (1-3)"
      />
      <Button label="Style" onClick={handleClick} />
    </>
  );
};

export default Button;
