import React from 'react';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';
import GuestsList from 'App/mainContent/guestsList';

const Main = () => {
	return (
		<div className='main'>
			<ConfirmedFilter />
			<Counter />
			<GuestsList />
		</div>
	);
};

export default Main;
