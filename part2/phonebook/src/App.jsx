import { useState } from "react";

const PersonItem = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const App = () => {
  const [contactList, setContactList] = useState([
    { name: "Onur Onel", number: "+1 613 853 1334" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleAddContact = (event) => {
    event.preventDefault();
    const newContact = {
      name: inputName,
      number: inputNumber,
    };
    const isNameExists = contactList.some(
      (person) => person.name === inputName
    );
    const isNumberExists = contactList.some(
      (person) => person.number === inputNumber
    );

    if (isNameExists || isNumberExists) {
      let message = "";
      if (isNameExists) message += `Name "${inputName}" already exists.\n`;
      if (isNumberExists) message += `Number "${inputNumber}" already exists.`;
      return alert(message.trim());
    }

    setContactList(contactList.concat(newContact));
    setInputName("");
    setInputNumber("");
  };

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setInputNumber(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <form onSubmit={handleAddContact}>
        <div>
          Name <input value={inputName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          Number: <input value={inputNumber} onChange={handleNumberChange} />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Contacts</h2>
      <ul>
        {contactList.map((person, index) => (
          <PersonItem key={index} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
