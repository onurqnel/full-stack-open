import { useState } from "react";

const PersonItem = ({ person }) => {
  return <li>{person.name}</li>;
};

const App = () => {
  const [contactList, setContactList] = useState([{ name: "Arto Hellas" }]);
  const [inputName, setInputName] = useState("");

  const handleAddContact = (event) => {
    event.preventDefault();
    const newContact = {
      name: inputName,
    };
    setContactList(contactList.concat(newContact));
    setInputName("");
  };

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <form onSubmit={handleAddContact}>
        Name <input value={inputName} onChange={handleInputChange} />
        <button>add</button>
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
