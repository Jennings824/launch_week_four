import React from 'react';

const Address = (props) => {
  return (
    <div>
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" />
      <p>{props.address}</p>
    </div>
  )
}

export default Address;
