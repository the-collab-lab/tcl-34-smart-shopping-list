import React, { useState } from 'react';
import './styles.css';

const InputItem = (props) => {
  const [value, setValue] = useState('');
  const { setNewItem, formState, handleForm } = props;

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
        name="productName"
        type="text"
        placeholder="Item"
        onKeyDown={handleKeyDown}
        value={formState.productName}
        onChange={(event) => handleForm(event)}
      />
      <fieldset className="time-frame">
        <leyend className="time-frame-question">
          How soon will you buy this again?
        </leyend>
        <label>
          <input
            type="radio"
            value="7"
            name="timeFrame"
            id="timeFrame"
            onChange={(event) => props.handleForm(event)}
          />
          Soon
        </label>
        <label>
          <input
            type="radio"
            value="14"
            name="timeFrame"
            id="timeFrame"
            onChange={(event) => props.handleForm(event)}
          />
          Kind of Soon
        </label>
        <label>
          <input
            type="radio"
            value="30"
            name="timeFrame"
            id="timeFrame"
            onChange={(event) => props.handleForm(event)}
          />
          Not Soon
        </label>
        <span class="required" />
      </fieldset>
    </div>
  );
};

export default InputItem;
