import React, { useState } from 'react';
import './styles.css';

const InputItem = (props) => {
  const [value, setValue] = useState('');
  const setNewItem = props.setNewItem;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNewItem(value);
      setValue('');
    }
  };

  return (
    <div className="form-item">
      <p>Item name:</p>
      <input
        className="input-item"
        type="text"
        placeholder="What need to be done"
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>How soon will you buy this again?</p>
      <div className="time-frame">
        <input type="radio" value="Soon" name="timeframe" /> Soon
        <input type="radio" value="Kind of Soon" name="timeframe" /> Kind of
        Soon
        <input type="radio" value="Not Soon" name="timeframe" /> Not Soon
      </div>
    </div>
  );
};

export default InputItem;
