import React from 'react';
import connect from 'App/hocs/connect';

function idGenerator() {
	return (
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9)
	);
}

const GuestInputForm = props => {
	const { pendingGuest } = props.state;
	const { invite, handleInputChange } = props;
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				const person = {
					id: idGenerator(),
					idEditing: false,
					isConfirmed: false,
					name: pendingGuest
				};
				invite(person);
			}}
		>
			<input
				type='text'
				value={pendingGuest}
				placeholder='Invite Someone'
				onChange={handleInputChange}
			/>
			<button type='submit' name='submit' value='submit'>
				Submit
			</button>
		</form>
	);
};

export default connect(GuestInputForm);
