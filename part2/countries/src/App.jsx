import { useEffect, useState } from "react";
import CountryFinder from "./components/country-finder";
import CountryList from "./components/country-list";
import CountryInfo from "./components/country-info";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");

  useEffect(() => {
    countryService.getAllCountries().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleCountryChange = (event) => {
    setNewCountry(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newCountry.toLowerCase())
  );

  const countriesToShow =
    newCountry === ""
      ? []
      : filteredCountries.length > 10
      ? "Too many matches, please specify another filter."
      : filteredCountries;

  return (
    <>
      <CountryFinder
        countryValue={newCountry}
        onCountryChange={handleCountryChange}
      />
      <CountryList />
      <CountryInfo />
    </>
  );
};

export default App;
