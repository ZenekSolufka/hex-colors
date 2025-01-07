import React, { useState } from 'react';
import { parseHexColor } from '../utils/colorUtils';

const InputForm = ({ onColorUpdate }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // Funkcja do obsługi zmiany w polu tekstowym
  const handleChange = (e) => {
    let value = e.target.value;

    // Usuń niedozwolone znaki
    value = value.replace(/[^0-9a-fA-F]/g, '');
    setInputValue(`#${value}`);
  };

  // Funkcja do obsługi wyboru koloru w color picker
  const handleColorPick = (e) => {
    const color = e.target.value; // Pobierz kolor z picker
    setInputValue(color); // Ustaw kolor w polu input
    try {
      const colorData = parseHexColor(color); // Parsujemy kolor
      onColorUpdate(colorData); // Aktualizujemy dane koloru
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Funkcja do obsługi wysłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();

    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    if (!hexPattern.test(inputValue)) {
      setError('Invalid HEX code. Please use format #RRGGBB.');
      return;
    }

    try {
      const colorData = parseHexColor(inputValue);
      onColorUpdate(colorData);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div className="inputs">
      <input className='text'
        type="text"
        placeholder="Enter HEX (e.g., #ffffff)"
        value={inputValue}
        onChange={handleChange}
        style={{
          padding: '10px',
        }}
      />
      <input className='color'
        type="color"
        onChange={handleColorPick}
        style={{
          cursor: 'pointer',
        }}
      />
      </div>
      <button className='btn' type="submit" 
      style={{ padding: '10px', cursor: 'pointer' }}>
        Show Color
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default InputForm;
