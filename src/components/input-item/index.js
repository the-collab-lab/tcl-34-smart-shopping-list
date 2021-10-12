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
    <div className="item-form">
      <p className="item-name">Item name:</p>
      <input
        className="input-item"
        type="text"
        placeholder="Item"
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p className="time-frame-question">How soon will you buy this again?</p>
      <div className="time-frame">
        <label>
          <input type="radio" value="Soon" name="timeframe" id="timeframe" />
          Soon
        </label>
        <label>
          <input
            type="radio"
            value="Kind of Soon"
            name="timeframe"
            id="timeframe"
          />
          Kind of Soon
        </label>
        <label>
          <input
            type="radio"
            value="Not Soon"
            name="timeframe"
            id="timeframe"
          />
          Not Soon
        </label>
        <span class="required" />
      </div>
    </div>
  );
};

export default InputItem;
