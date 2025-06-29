const CountryList = ({ countries, toggleShow }) => {
  return (
    <div>
      <li>
        {countries.name}&nbsp;
        <button onClick={toggleShow}>Show</button>
      </li>
    </div>
  );
};

export default CountryList;
