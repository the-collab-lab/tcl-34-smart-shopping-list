import React, { useState } from 'react';
import RadioInput from '../radio-input';
import './styles.css';

const AddForm = ({ formState, handleForm }) => {
  const [value, setValue] = useState('');
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setValue('');
    }
  };

  return (
    <>
      <label htmlFor="productName">
        Item name:
        <input
          className="input-item"
          id="productName"
          name="productName"
          type="text"
          placeholder="Item"
          onKeyDown={handleKeyDown}
          value={formState.productName}
          onChange={(event) => handleForm(event)}
          style={{ marginTop: '8px' }}
          required
        />
      </label>
      <fieldset className="time-frame" defaultValue="7">
        <legend>How soon will you buy this again?</legend>
        <RadioInput
          styles="time-frame-label"
          onChange={(event) => handleForm(event)}
          value="7"
          name="timeFrame"
          label="Soon"
          required
          checked
        />
        <RadioInput
          styles="time-frame-label"
          onChange={(event) => handleForm(event)}
          value="14"
          name="timeFrame"
          label="Kind of Soon"
          required
        />
        <RadioInput
          onChange={(event) => handleForm(event)}
          value="30"
          name="timeFrame"
          label="Not Soon"
          required
        />
      </fieldset>
    </>
  );
};

export default AddForm;
