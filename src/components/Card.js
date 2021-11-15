import React from 'react'

const Card = ({name, email, onDelete}) => {
    return (
        <div className="card">
            {<button className="btn" onClick={() => onDelete(email)}>Delete</button>}
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    )
}

export default Card;
