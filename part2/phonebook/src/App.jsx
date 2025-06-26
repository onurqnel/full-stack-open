import { useEffect, useState } from "react";
import PersonItem from "./components/PersonItem";
import FilterInput from "./components/FilterInput";
import AddContactForm from "./components/AddContactForm";
import contactService from "./services/contacts";

const App = () => {
  const [contactList, setContactList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    contactService.getAll().then((initialContacts) => {
      setContactList(initialContacts);
    });
  }, []);

  const handleAddContact = (event) => {
    event.preventDefault();
    const existingPerson = contactList.find(
      (person) => person.name === inputName
    );

    const newContact = {
      name: inputName,
      number: inputNumber,
    };

    if (existingPerson) {
      const confirmReplace = window.confirm(
        `${inputName} is already in the phonebook. Replace the old number with the new one?`
      );
      if (confirmReplace) {
        const updatedContact = { ...existingPerson, number: inputNumber };
        contactService
          .update(existingPerson.id, updatedContact)
          .then((returnedContact) => {
            setContactList(
              contactList.map((person) =>
                person.id !== existingPerson.id ? person : returnedContact
              )
            );
            setInputName("");
            setInputNumber("");
          });
      }
      return;
    }
    contactService.create(newContact).then((returnedContact) => {
      setContactList(contactList.concat(returnedContact));
      setInputName("");
      setInputNumber("");
    });
  };

  const filteredContacts = contactList.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const deleteOf = (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    contactService.remove(id).then(() => {
      setContactList(contactList.filter((c) => c.id !== id));
    });
  };

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
        {filteredContacts.map((person) => (
          <PersonItem
            key={person.id}
            person={person}
            toggleDelete={() => deleteOf(person.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
