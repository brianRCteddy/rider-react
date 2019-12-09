import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
	onSubmitInput(term) {
		console.log(term);
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmitted={this.onSubmitInput} />
			</div>
		);
	}
}

export default App;
