import React from 'react';
import connect from 'App/hocs/connect';

const ConfirmedFilter = props => {
	const { isFiltered, toggleFiltered } = props;

	return (
		<div>
			<h2>Invitees</h2>
			<label>
				<input type='checkbox' checked={isFiltered} onChange={toggleFiltered} />
				Hide those who haven't responded
			</label>
		</div>
	);
};

export default connect(ConfirmedFilter);
