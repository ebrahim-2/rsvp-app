import React from 'react';


const PendingGuest = props => {
  const { name } = props;
  
  if (name) {
    return (
      <li className='pending'>
        {name}
      </li>
    );
  }
  else {
    return null;
  }
};

export default PendingGuest;
