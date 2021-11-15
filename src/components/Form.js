import React from 'react'
import { useState } from 'react/cjs/react.development';

const Form = ({onSend}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        onSend(name, email);
        setName('');
        setEmail('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name..." />
                <br/>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email..."/>
                <br/>
                <input className="btn" type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Form;
