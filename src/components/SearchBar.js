import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: ''
	};

	inputChangeHandler = (e) => {
		this.setState({ term: e.target.value });
	};

	submitFormHandler = (event) => {
		event.preventDefault();

		//Make sure we call
		//callback from component
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" action="submit" onSubmit={this.submitFormHandler}>
					<div className="field">
						<label>Video Search</label>
						<input onChange={this.inputChangeHandler} type="text" value={this.state.term} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
