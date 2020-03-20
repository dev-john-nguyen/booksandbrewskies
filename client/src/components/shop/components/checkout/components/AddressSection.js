import React from 'react';
import './css/FormInputStyles.css';

const AddressSection = ({line1, city, state, zip, handleInputChange}) => {
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return(
    <>
    <div className="mb-3">
      <div className="input-group">
        <input
        className="form-control"
        name="line1"
        placeholder="Address"
        required
        value={line1}
        onChange={handleInputChange}
        options={CARD_ELEMENT_OPTIONS}
        />
      </div>
    </div>
    <div className="row mb-3">
    <div className="col">
    <input
    className="form-control"
    name="city"
    placeholder="City"
    required
    value={city}
    onChange={handleInputChange}
    />
    </div>
    <div className="col">
    <input
    className="form-control"
    name="state"
    placeholder="State"
    required
    value={state}
    onChange={handleInputChange}
    />
    </div>
    <div className="col">
    <input
    className="form-control"
    name="zip"
    placeholder="Zip"
    required
    value={zip}
    onChange={handleInputChange}
    />
    </div>
    </div>
    </>
  )
}

export default AddressSection;
