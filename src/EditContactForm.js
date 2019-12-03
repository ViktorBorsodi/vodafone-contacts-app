import React, {Component} from 'react'
import AddContactButton from './AddContactButton'
import {Link} from 'react-router-dom'

class EditContactForm extends Component {
	constructor(props){
        super(props);
        const selectedContact = props.contacts.find( contact => contact.id === Number(props.match.params.contact))
		this.state = {
            id: selectedContact.id,
			name: selectedContact.name,
			email: selectedContact.email,
			phoneNumber: selectedContact.phoneNumber
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}
	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
  	}
	handleSubmit(e){
        e.preventDefault()
        const selectedContact = this.props.contacts.find( contact => contact.id === Number(this.props.match.params.contact))
        this.props.editContact(this.state)
        this.props.history.push(`/contacts/${selectedContact.id}`)
		this.setState({name: '', email: '', phoneNumber: ''})
		
	}
	render() {
        const selectedContact = this.props.contacts.find( contact => contact.id === Number(this.props.match.params.contact))
		return (
			<div>
				<h1 className="my-5">Edit {selectedContact.name}'s Contact</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group row justify-content-center">
						<label htmlFor="name" className="col-3 col-form-label text-right">Name:</label>
                        <div className="col-7 col-sm-5 col-lg-4">
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
					</div>
					<div className="form-group row justify-content-center">
						<label htmlFor="email" className="col-3 col-form-label text-right">Email:</label>
                        <div className="col-7 col-sm-5 col-lg-4">
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
					</div>
					<div className="form-group row justify-content-center">
						<label htmlFor="phone-number" className="col-3 col-form-label text-right">Phone:</label>
                        <div className="col-7 col-sm-5 col-lg-4">
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
					</div>
                    <div className="form-group row justify-content-center mt-4">
                        <div className="col-3"></div>
                        <div className="col-7 col-sm-5 col-lg-4 text-left">
                            <button type='submit' className="btn btn-outline-dark">Save Contact</button>
                        </div>
                    </div>
				</form>
                <Link to="/addcontact"><AddContactButton/></Link>
			</div>
		)
	}
}

export default EditContactForm;