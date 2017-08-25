import React from 'react';

const ZipCode = (props) => {
  return (
    <div>
      <label htmlFor="zipCode">Zip Code:</label>
      <input type="text" id="zip-code" name="zipCode" />
      <p>{props.zipCode}</p>
    </div>
  )
}

export default ZipCode;
