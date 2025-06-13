const AddContactForm = ({
  inputName,
  inputNumber,
  onNameChange,
  onNumberChange,
  onAddContact,
}) => {
  return (
    <form onSubmit={onAddContact}>
      <div>
        Name <input value={inputName} onChange={onNameChange} />
      </div>
      <br />
      <div>
        Number: <input value={inputNumber} onChange={onNumberChange} />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddContactForm;
