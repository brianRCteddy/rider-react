import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {
	searchSubmitHandler = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				part: term,
				q: term
			}
		});
		console.log(response);
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
