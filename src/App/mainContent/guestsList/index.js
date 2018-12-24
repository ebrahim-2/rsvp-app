import React from 'react';
import Guest from './Guest';
import PendingGuest from './PendingGuest';
import connect from 'App/hocs/connect';

const GuestsList = props => {
	const { guests, pendingGuest, isFiltered } = props.state;
	const {
		toggleConfirmation,
		toggleEditing,
		setName,
		deletePerson
	} = props;

	return (
		<ul>
			<PendingGuest name={pendingGuest} />
			{guests
				.filter(guest => {
					if (isFiltered) return guest.isConfirmed;
					return guest;
				})
				.map(guest => (
					<Guest
						name={guest.name}
						isConfirmed={guest.isConfirmed}
						handleConfrimation={() => toggleConfirmation(guest.id)}
						key={guest.id}
						isEditing={guest.isEditing}
						handleEditing={e => toggleEditing(guest.id)}
						setName={e => setName(e.target.value, guest.id)}
						handleRemove={() => deletePerson(guest.id)}
					/>
				))}
		</ul>
	);
};

export default connect(GuestsList);
