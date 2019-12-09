import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
	onSearchSubmit(term) {
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: { query: term },
				headers: {
					Authorization: 'Client-ID df39419b935c69dd541f9c3b75b3d5940a05a3acc9e5605cbaede0e7b29fb807'
				}
			})
			.then((response) => console.log(response.data.results), (err) => err);
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSearch={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
