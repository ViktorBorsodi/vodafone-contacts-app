import React, {Component} from 'react';

class AddContactForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			phoneNumber: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}
	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
  	}
	handleSubmit(e){
		e.preventDefault()
		this.props.addContact(this.state)
		this.setState({name: '', email: '', phoneNumber: ''})
		this.props.history.push('/')
	}
	render() {
		return (
			<div>
				<h1 className="mb-5">Add New Contact</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group text-left mb-3">
						<label htmlFor="name">Name</label>
						<input
							id="name"
							type="text"
							name="name"
							className="form-control"
							placeholder="Enter Name"
							value={this.state.name}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group text-left mb-3">
						<label htmlFor="email">Email address</label>
						<input
							id="email"
							type="email"
							name="email"
							className="form-control"
							placeholder="Enter Email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group text-left">
						<label htmlFor="phone-number">Phone number</label>
						<input
							id="phone-number"
							type="text"
							name="phoneNumber"
							className="form-control"
							placeholder="Enter Phone"
							value={this.state.phoneNumber}
							onChange={this.handleChange}
							required
							pattern="^\+36\d{8}$"
							title="Please start with '+36' then type 8 numbers"
						/>
					</div>
					<button type='submit' className="btn btn-outline-dark mt-4">Add Contact</button>
				</form>
			</div>
		)
	}
}

export default AddContactForm;