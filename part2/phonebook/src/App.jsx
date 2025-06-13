import { useState } from "react";
import PersonItem from "./components/PersonItem";
import FilterInput from "./components/FilterInput";
import AddContactForm from "./components/AddContactForm";

const App = () => {
  const [contactList, setContactList] = useState([
    { name: "Onur Onel", number: "+1 613 853 1334" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleAddContact = (event) => {
    event.preventDefault();
    const newContact = { name: inputName, number: inputNumber };

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

  const filteredContacts = contactList.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterInput
        filterValue={filterName}
        onFilterChange={(e) => setFilterName(e.target.value)}
      />
      <h2>Add</h2>
      <AddContactForm
        inputName={inputName}
        inputNumber={inputNumber}
        onNameChange={(e) => setInputName(e.target.value)}
        onNumberChange={(e) => setInputNumber(e.target.value)}
        onAddContact={handleAddContact}
      />
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map((person, index) => (
          <PersonItem key={index} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
