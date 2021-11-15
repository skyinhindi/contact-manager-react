import React from 'react';
import Card from './Card';

const CardList = ({details, onDelete}) => {
    return (
        <div className="cardList">
            {console.log(details)}
            {details.map((detail) => (<Card key={detail.email} name={detail.name} email={detail.email} onDelete={onDelete}/>))}
        </div>
    )
}

export default CardList;
