const CountryInfo = ({ country }) => {
  if (!country) return null;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <img
        src={country.flags?.png}
        alt={`Flag of ${country.name.common}`}
        width="120"
      />
    </div>
  );
};

export default CountryInfo;
