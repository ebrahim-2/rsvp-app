import { Container } from 'unstated';

class stateContainer extends Container {
	state = {
		isFiltered: false,
		pendingGuest: '',
		guests: JSON.parse(localStorage.getItem('guests')) || []
	};
	handleInputChange = e =>
		this.setState({
			pendingGuest: e.target.value
		});
	invite = person => {
		this.setState(
			{
				guests: [{ ...person }, ...this.state.guests],
				pendingGuest: ''
			},
			() => localStorage.setItem('guests', JSON.stringify(this.state.guests))
		);
	};
	deletePerson = idToRemove => {
		return this.setState(
			{
				guests: this.state.guests.filter(guest =>
					idToRemove === guest.id ? false : guest
				)
			},
			() => localStorage.setItem('guests', JSON.stringify(this.state.guests))
		);
	};
	getTotalInvited = () => this.state.guests.length;
	getAttendingGuests = () =>
		this.state.guests.filter(guest => guest.isConfirmed === true).length;
	getUnConfirmedGuests = () =>
		this.state.guests.length - this.getAttendingGuests();

	toggle = (property, idToChange) =>
		this.setState(
			{
				guests: this.state.guests.map(guest => {
					if (idToChange === guest.id) {
						return {
							...guest,
							[property]: !guest[property]
						};
					}
					return guest;
				})
			},
			() => localStorage.setItem('guests', JSON.stringify(this.state.guests))
		);
	setName = (name, idToChange) => {
		this.setState(
			{
				guests: this.state.guests.map(guest => {
					if (idToChange === guest.id)
						return {
							...guest,
							name
						};
					return guest;
				})
			},
			() => localStorage.setItem('guests', JSON.stringify(this.state.guests))
		);
	};
	toggleConfirmation = id => this.toggle('isConfirmed', id);
	toggleEditing = id => this.toggle('isEditing', id);

	toggleFiltered = () => this.setState({ isFiltered: !this.state.isFiltered });
}

export default stateContainer;
