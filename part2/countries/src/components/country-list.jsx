const CountryList = ({ countries, toggleShow }) => {
  if (typeof countries === "string") {
    return <p>{countries}</p>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          {country.name.common} &nbsp;
          <button onClick={() => toggleShow(country)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
