import React from 'react';

const State = (props) => {
  return (
    <div>
      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" />
      <p>{props.stateLivedIn}</p>
    </div>
  )
}

export default State;
