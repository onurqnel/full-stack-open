const CountryInfo = ({ country }) => {
  if (!country) return null;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="240"
      />
    </div>
  );
};

export default CountryInfo;
