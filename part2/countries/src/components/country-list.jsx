const Countries = ({ country, toggleShow }) => {
  return (
    <div>
      <li>
        {country.name}&nbsp;
        <button onClick={toggleShow}>Show</button>
      </li>
    </div>
  );
};

export default Countries;
