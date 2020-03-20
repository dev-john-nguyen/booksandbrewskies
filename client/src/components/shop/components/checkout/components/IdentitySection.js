import React from 'react';


const IdentitySection = ({ name, email, phone, handleInputChange }) => {
  return (
    <>
    <div className="mb-3">
      <div className="input-group">
        <input
        className="form-control"
        name="name"
        placeholder="Name"
        required
        value={name}
        onChange={handleInputChange}
        />
        </div>
      </div>



      <div className="mb-3">
        <div className="input-group">
          <input
          className="form-control"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleInputChange}
          />
          </div>
      </div>


    <div className="mb-3">
        <div className="input-group">
          <input
          className="form-control"
          name="phone"
          placeholder="Phone"
          required
          value={phone}
          onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  )
}

export default IdentitySection;
