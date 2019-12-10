import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
	searchSubmitHandler = (term) => {
		console.log(term);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.searchSubmitHandler} />
			</div>
		);
	}
}

export default App;
