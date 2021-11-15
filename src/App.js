import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';


function App() {
  const [details, setDetails] = useState([]);

  const pushDetails = (name, email) => setDetails([...details, {name:name, email:email}]);

  const deleteCard = (email) => {
    setDetails(details.filter((card) => card.email !== email));
  }

  return (
    <div className="App">
      <Form onSend={pushDetails} />
      <br/><br/>
      <CardList details={details} onDelete={deleteCard}/>
    </div>
  );
}

export default App;
