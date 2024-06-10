import React, { useState } from 'react';
import ProgressBar from './ProgressBAr' 
import './ProgressBar.css'; // Import your CSS file

function InputWithProgressBar() {
    const maxValue = 5;
  const [inputValue, setInputValue] = useState(null);
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [stars, setStars] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 1 && value <= 5) {
      setInputValue(value);
    } else {
      setInputValue('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = parseInt(inputValue, 10);
    if (value >= 1 && value <= 5) {
      setProgressBarValue(value * 20);
      setStars(Array(value).fill('★'));
    } else {
      alert('Please enter a number between 1 and 5.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Overall Rating</label>
        <input
          type="number"
            id="input"
          value={inputValue}
          onChange={handleInputChange}
          min={1}
          max={5}
        />
        <button type="submit">Submit</button>
      </form>
          <ProgressBar className="pg-bar" bgcolor="#6a1b9a" completed={inputValue*20} />
      
      <div className="stars">

        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
        <div className='answer'>
            {inputValue} / {maxValue}
        </div>
      
    </div>
  );
}

export default InputWithProgressBar;