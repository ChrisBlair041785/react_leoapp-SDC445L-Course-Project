import React, { useState, useEffect } from 'react';

const TextField = ({ value, onChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter Text"
        />
    );
}

export const LineTextFields = ({ lineCount, previewClassName, onTextsChange }) => {
    const [lineTexts, setLineTexts] = useState([]);

    useEffect(() => {
        setLineTexts(Array(lineCount || 0).fill(''));
    }, [lineCount]);

    const handleLineTextChange = (index) => (e) => {
        setLineTexts((prev) => {
            const updated = [...prev];
            updated[index] = e.target.value;
            onTextsChange(updated);
            return updated;
        });
    };

    if (!lineCount) return null;

    return (
        <div className="line-textfields">
            {Array.from({ length: lineCount }).map((_, index) => (
                <div className="line-textfield-row" key={index}>
                    <TextField
                        value={lineTexts[index] || ''}
                        onChange={handleLineTextChange(index)}
                    />
                    <span className={previewClassName}>{lineTexts[index]}</span>
                </div>
            ))}
        </div>
    );
};

export default TextField;