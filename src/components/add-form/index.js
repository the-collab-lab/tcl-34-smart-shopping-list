import React from 'react';
import RadioInput from '../radio-input';
import './styles.css';

const AddForm = ({ formState, handleForm }) => (
  <form className="addform-container">
    <label htmlFor="productName" className="addform-container-label">
      Item name:
      <input
        className="input-item"
        id="productName"
        name="productName"
        type="text"
        placeholder="Write here the item to add..."
        value={formState.productName}
        onChange={(event) => handleForm(event)}
        required
      />
    </label>
    <fieldset className="time-frame" defaultValue="7">
      <legend className="time-frame-legend">
        How soon will you buy this again?
      </legend>
      <RadioInput
        onChange={(event) => handleForm(event)}
        value="7"
        name="timeFrame"
        label="Soon"
        className="time-frame-radio"
        required
        checked
      />
      <RadioInput
        onChange={(event) => handleForm(event)}
        value="14"
        name="timeFrame"
        label="Kind of Soon"
        className="time-frame-radio"
        required
      />
      <RadioInput
        onChange={(event) => handleForm(event)}
        value="30"
        name="timeFrame"
        label="Not Soon"
        className="time-frame-radio"
        required
      />
    </fieldset>
  </form>
);

export default AddForm;
