import React from 'react';

const PhoneNumber = (props) => {
  return (
    <div>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" id="phone-number" name="phoneNumber" />
      <p>{props.phoneNumber}</p>
    </div>
  )
}

export default PhoneNumber;
