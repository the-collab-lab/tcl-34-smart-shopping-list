import React from 'react';
import './styles.css';
import { TimeFrames } from '../../utils/timeFrames';

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
    <fieldset className="time-frame">
      <legend className="time-frame-legend">
        How soon will you buy this again?
      </legend>

      <label
        htmlFor="soon"
        aria-label="You need to buy this product soon"
        className="time-frame-radio"
      >
        <input
          required
          type="radio"
          id="soon"
          name="timeFrame"
          value={TimeFrames.soon}
          onChange={(event) => handleForm(event)}
          checked={formState.timeFrame === TimeFrames.soon}
        />
        Soon
      </label>

      <label
        htmlFor="kind-of-soon"
        aria-label="You need to buy this product kind of soon"
        className="time-frame-radio"
      >
        <input
          required
          type="radio"
          id="kind-of-soon"
          name="timeFrame"
          value={TimeFrames.kindOfSoon}
          onChange={(event) => handleForm(event)}
          checked={formState.timeFrame === TimeFrames.kindOfSoon}
        />
        Kind of soon
      </label>

      <label
        htmlFor="not-soon"
        aria-label="You need to buy this product not soon"
        className="time-frame-radio"
      >
        <input
          required
          type="radio"
          id="not-soon"
          name="timeFrame"
          value={TimeFrames.notAnySoon}
          onChange={(event) => handleForm(event)}
          checked={formState.timeFrame === TimeFrames.notAnySoon}
        />
        Not soon
      </label>
    </fieldset>
  </div>
);

export default AddForm;
