import React, { Component } from 'react'

class SearchBar extends Component{

	constructor(props){

		super(props);

		this.state = { term: ''}; // amnually cahnges the state
	}

	render() {
		return (
			<div className ="search-bar">
				<input       // controlled component due to the next component
					value = {this.state.term}  
					onChange={event => this.onInputChange(event.target.value)} />
				
			</div>
	);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);

	}
	
 
}

export default SearchBar;
 