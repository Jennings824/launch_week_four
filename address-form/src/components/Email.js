import React from 'react';

const Email = (props) => {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <p>{props.email}</p>
    </div>
  )
}

export default Email;
