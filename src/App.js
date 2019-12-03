import React, {Component} from 'react'
import jsonData from './contacts.json'
import image from './vodafone_logo.svg'
import SearchInput from './SearchInput'
import Contacts from './Contacts'
import AddContactForm from './AddContactForm'
import ContactView from './ContactView'
import EditContactForm from './EditContactForm'
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css'
const contacts = jsonData.contacts
const lastId = Math.max(...contacts.map( contact => contact.id))

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			contacts,
			filteredContacts: [],
			nextId: lastId
		}
		this.filterOnLetter = this.filterOnLetter.bind(this)
        this.reset = this.reset.bind(this)
		this.search = this.search.bind(this)
		this.addContact = this.addContact.bind(this)
		this.editContact = this.editContact.bind(this)
		this.deleteContact = this.deleteContact.bind(this)
	}
	filterOnLetter(letter){
		const filteredContacts = this.state.contacts.filter( contact => contact.name[0] === letter)
		this.setState({filteredContacts})
	}
	reset(){
		this.setState({filteredContacts: []})
		this.props.history.push('/')
	}
	search(input){
		input = input.toLowerCase()
		const foundContacts = this.state.contacts.filter( contact => {
			return contact.name.toLowerCase().includes(input) || contact.email.includes(input) || contact.phoneNumber.includes(input)
		})
		this.setState({filteredContacts: foundContacts})
	}
	addContact(input){
		this.setState( prevState => {
			return{
				contacts: [...this.state.contacts, {id: prevState.nextId + 1, ...input}],
				nextId: prevState.nextId + 1
			}
		})
	}
	editContact(input){
		const editedContacts = this.state.contacts.map( contact => {
			if(contact.id === Number(input.id)){
				return input
			}
			return contact
		})
		this.setState({contacts: editedContacts})
	}
	deleteContact(id){
		const remainingContacts = this.state.contacts.filter( contact => contact.id !== id)
		this.setState({contacts: remainingContacts})
		this.props.history.push('/')
	}
	render(){
		return (
			<div className="App container mt-4 p-0">
				<div className="d-sm-flex justify-content-between mx-3">
					<img src={image} alt="Vodafone" onClick={this.reset}/>
					<SearchInput search={this.search}/>
				</div>
				<Switch>
					<Route exact path={["/", "/letters/:letter"]} render={props => (
						<Contacts
							{...props}
							contacts={this.state.contacts}
							filteredContacts={this.state.filteredContacts}
							filterOnLetter={this.filterOnLetter}
							reset={this.reset}
						/>
					)}/>
					<Route exact path="/addcontact" render={props => (
						<AddContactForm
							{...props}
							addContact={this.addContact}
						/>
					)}/>
					<Route exact path="/contacts/:contact" render={props => (
						<ContactView
							{...props}
							contacts={this.state.contacts}
							deleteContact={this.deleteContact}
						/>
					)}/>
					<Route exact path="/contacts/:contact/edit" render={props => (
						<EditContactForm
							{...props}
							contacts={this.state.contacts}
							editContact={this.editContact}
						/>
					)}/>
				</Switch>
				<p className="copyright">All Rights Reserved. VSSB 2018.</p>
			</div>
		);
	}
}

export default withRouter(App);