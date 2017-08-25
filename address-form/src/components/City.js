import React from 'react';

const City = (props) => {
  return (
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" />
      <p>{props.city}</p>
    </div>
  )
}

export default City;
