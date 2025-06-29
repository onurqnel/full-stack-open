/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CountryFinder from "./components/country-finder";
import CountryList from "./components/country-list";
import CountryInfo from "./components/country-info";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryService.getAllCountries().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(countryName.toLowerCase())
  );

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    } else {
      setSelectedCountry(null);
    }
  }, [countryName]);

  let countriesToShow = [];
  if (countryName === "") {
    countriesToShow = [];
  } else if (filteredCountries.length > 10) {
    countriesToShow = "Too many matches, please specify filter.";
  } else {
    countriesToShow = filteredCountries;
  }

  const handleToggleShow = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <CountryFinder
        countryValue={countryName}
        onCountryChange={(event) => setCountryName(event.target.value)}
      />
      {filteredCountries.length > 1 && (
        <CountryList
          countries={countriesToShow}
          toggleShow={handleToggleShow}
        />
      )}
      {<CountryInfo country={selectedCountry} />}
    </>
  );
};

export default App;
