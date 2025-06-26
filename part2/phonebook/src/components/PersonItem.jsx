const PersonItem = ({ person, toggleDelete }) => {
  return (
    <li>
      {person.name} {person.number}&nbsp;
      <button onClick={toggleDelete}>delete</button>
    </li>
  );
};

export default PersonItem;
