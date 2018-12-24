import React from 'react';
import GuestName from './GuestName';

const Guest = props => {
	const {
		name,
		isConfirmed,
		handleConfrimation,
		isEditing,
		handleEditing,
		setName,
		handleRemove
  } = props;
  
	return (
		<li className={isConfirmed ? 'responded' : 'pending'}>
			<GuestName isEditing={isEditing} setName={setName}>
				{name}
			</GuestName>
			<label>
				<input
					type='checkbox'
					checked={isConfirmed ? true : false}
					onChange={handleConfrimation}
				/>
				Confirmed
			</label>
			<button onClick={handleEditing}>{isEditing ? 'save' : 'edit'}</button>
			<button onClick={handleRemove}>remove</button>
		</li>
	);
};

export default Guest;
