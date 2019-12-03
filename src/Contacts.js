import React from 'react'
import Card from './Card'
import AddContactButton from './AddContactButton'
import {NavLink, Link} from 'react-router-dom'
import './Contacts.css'

const Contacts = ({contacts, filteredContacts, filterOnLetter, reset}) => {
    const contactsToDisplay = filteredContacts.length ? filteredContacts : contacts
    const contactCards =  contactsToDisplay.map( contact => (
        <Card
            key={contact.id}
            {...contact}
        />
    ))
    const selectedLetter = {color: '#e60000'}
    const letters = contacts.reduce( (acc, nv) => {
        let firstLetter = nv.name[0]
        if( !acc.includes(firstLetter) ){
            acc.push(firstLetter)
        }
        return acc
    }, []).sort().map( (letter, i) => {
        return(
            <NavLink
                className="letter"
                key={i}
                activeStyle={selectedLetter}
                to={`/letters/${letter}`}
                onClick={(e) => filterOnLetter(letter)}
            >
                {letter}
            </NavLink>
        )
    })
    return(
        <div>
            <h1 className="contacts my-4" onClick={reset}>Contacts</h1>
            <div className="mb-4">{letters}</div>
            <div className="row mx-0">{contactCards}</div>
            <Link to="/addcontact"><AddContactButton/></Link>
        </div>
    )
}

export default Contacts