import { useEffect, useState } from "react";
import CountryFinder from "./components/country-finder";
import CountryList from "./components/country-list";
import CountryInfo from "./components/country-info";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [toggleShow, setToggleShow] = useState(false);

  useEffect(() => {
    countryService.getAllCountries().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleCountryChange = (event) => {
    setNewCountry(event.target.value);
  };

  let countriesToShow;
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newCountry.toLowerCase())
  );
  if (newCountry === "") {
    countriesToShow = [];
  } else if (filteredCountries.length > 10) {
    countriesToShow = "Too many matches, please specify another filter.";
  } else {
    countriesToShow = filteredCountries;
  }

  const handleToggleShow = () => {
    setToggleShow(true);
    console.log("Button Clicked");
  };

  return (
    <>
      <CountryFinder
        countryValue={newCountry}
        onCountryChange={handleCountryChange}
      />
      <CountryList countries={countriesToShow} toggleShow={handleToggleShow} />
      <CountryInfo />
    </>
  );
};

export default App;
