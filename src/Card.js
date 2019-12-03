import React from 'react'
import {withRouter} from 'react-router-dom'
import './Card.css'

const Card = ({name, email, phoneNumber, history, id}) => (
    <div className="col-xs-12 col-sm-6 col-md-4 p-3">
        <div className="card text-center p-0" onClick={() => {history.push(`/contacts/${id}`)}}>
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p className="card-text">{email}</p>
                <p className="card-text">{phoneNumber}</p>
            </div>
        </div>
    </div>
)

export default withRouter(Card)