import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			latitude: null,
			errorMessage: ''
		};
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ latitude: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}
	componentDidMount() {
		console.log('index.js - componentDidMount = component is rendered');
	}

	componentDidUpdate() {
		console.log('index.js - ComponentDidUpdate - component is re-rendered');
	}

	render() {
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.latitude) {
			return <div>Latitude: {this.state.latitude}</div>;
		}

		return <div>Loading....</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
