import React from 'react'
import AddContactButton from './AddContactButton'
import {Link} from 'react-router-dom'
import './ContactView.css'

const ContactView = ({match, contacts, history, deleteContact}) => {
    const selectedContact = contacts.find( contact => contact.id === Number(match.params.contact))
    return(
        <div>
            <h1 className="my-5">{`${selectedContact.name}'s Profile`}</h1>
            <div className="form-group row justify-content-center">
                <p className="col-2 text-right">Name:</p>
                <p className="col-3 text-left">{selectedContact.name}</p>
            </div>
            <div className="form-group row justify-content-center">
                <p className="col-2 text-right">E-mail:</p>
                <p className="col-3 text-left vodafone-red">{selectedContact.email}</p>
            </div>
            <div className="form-group row justify-content-center mb-5">
                <p className="col-2 text-right">Phone:</p>
                <p className="col-3 text-left vodafone-red">{selectedContact.phoneNumber}}</p>
            </div>
            <button
                type="button"
                className="btn btn-outline-danger px-4"
                onClick={() => {deleteContact(selectedContact.id)}}
            >
                Delete
            </button>
            <button
                type="button"
                className="btn btn-outline-dark ml-4 px-4"
                onClick={() => history.push(`/contacts/${selectedContact.id}/edit`)}
            >
                Edit
            </button>
            <Link to="/addcontact"><AddContactButton/></Link>
        </div>
    )
}

export default ContactView