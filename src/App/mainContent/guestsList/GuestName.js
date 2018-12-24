import React from 'react';

const GuestName = props => {
	const { isEditing, children, setName } = props;

	if (isEditing) {
		return <input type='text' value={children} onChange={setName} />;
  }
	return <span>{children}</span>;
};

export default GuestName;
