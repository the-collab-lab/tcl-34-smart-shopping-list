import React from 'react';
import RadioInput from '../radio-input';
import './styles.css';

const AddForm = ({ formState, handleForm }) => (
  <div className="addform-container">
    <label htmlFor="productName">
      Item name:
      <input
        className="input-item"
        id="productName"
        name="productName"
        type="text"
        placeholder="Item"
        value={formState.productName}
        onChange={(event) => handleForm(event)}
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
  </div>
);

export default AddForm;
