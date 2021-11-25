import React from 'react';
import RadioInput from '../radio-input';
import './styles.css';
import { FiX } from 'react-icons/fi';

const AddForm = ({ formState, handleForm }) => (
  <div className="addform-container">
    <label htmlFor="productName" className="addform-container-label">
      Item name:
      <input
        className="input-itemform"
        id="productName"
        name="productName"
        type="text"
        maxLength="30"
        placeholder="Write here the item to add..."
        value={formState.productName}
        onChange={(event) => handleForm(event)}
        required
      />
    </label>
    {formState.productName && (
      <button
        className="close-icon"
        aria-label="This button clears the content of the input."
        onClick={() => handleForm('')}
      >
        <FiX />
      </button>
    )}
    <fieldset className="time-frame" defaultValue="7">
      <legend className="time-frame-legend">
        How soon will you buy this again?
      </legend>
      <RadioInput
        onChange={(event) => handleForm(event)}
        value="7"
        name="timeFrame"
        label="Soon"
        aria-label="timeFrame Soon"
        className="time-frame-radio"
        required
        checked
      />
      <RadioInput
        onChange={(event) => handleForm(event)}
        value="14"
        name="timeFrame"
        aria-label="timeFrame Kind of Soon"
        label="Kind of Soon"
        className="time-frame-radio"
        required
      />
      <RadioInput
        onChange={(event) => handleForm(event)}
        value="30"
        name="timeFrame"
        label="Not Soon"
        aria-label="timeFrame Not Soon"
        className="time-frame-radio"
        required
      />
    </fieldset>
  </div>
);

export default AddForm;
