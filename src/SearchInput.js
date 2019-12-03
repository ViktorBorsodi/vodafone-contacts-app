import React, {Component} from 'react';
import './SearchInput.css'

class SearchInput extends Component {
	constructor(props){
		super(props);
		this.state = {inputValue: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}
	handleChange(e){
		this.setState({inputValue: e.target.value});
  	}
	handleSubmit(e){
		e.preventDefault()
		this.props.search(this.state.inputValue)
		this.setState({inputValue: ''})
	}
	render() {
		return (
			<form className="SearchInput" onSubmit={this.handleSubmit}>
				<input 
					type="text"
					name="search"
					className="form-control"
					placeholder="Search for contact"
					value={this.state.inputValue}
					onChange={this.handleChange}
				/>
			</form>
		)
	}
}

export default SearchInput;