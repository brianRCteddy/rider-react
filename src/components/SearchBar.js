import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: 'Input keywords here'
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search: </label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value.toLocaleUpperCase() })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
