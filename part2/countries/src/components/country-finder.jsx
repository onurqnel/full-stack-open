const CountryFinder = ({ countryValue, onCountryChange }) => {
  return (
    <div>
      <input value={countryValue} onChange={onCountryChange} />
    </div>
  );
};

export default CountryFinder;
