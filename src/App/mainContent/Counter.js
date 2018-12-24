import React from 'react';
import connect from 'App/hocs/connect';

const Counter = props => {
	return (
		<table className='counter'>
			<tbody>
				<tr>
					<td>Attending:</td>
					<td>{props.getAttendingGuests()}</td>
				</tr>
				<tr>
					<td>Unconfirmed:</td>
					<td>{props.getUnConfirmedGuests()}</td>
				</tr>
				<tr>
					<td>Total:</td>
					<td>{props.getTotalInvited()}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default connect(Counter);
