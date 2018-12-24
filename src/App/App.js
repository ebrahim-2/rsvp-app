import React, { Component } from 'react';
import Header from 'App/header';
import Main from 'App/mainContent';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;
