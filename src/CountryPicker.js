import React, { useState, useEffect } from 'react';
import { fetchCountry } from './fetchdata';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
});

export default function CountryPicker(props) {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchCountry();
      setCountries(data);
    };
    fetchApi();
  }, []);

  return (
    <div className={classes.main}>
      <FormControl>
        <NativeSelect
          defaultValue=''
          onChange={(e) => props.handleCountryChange(e.target.value)}>
          <option value=''>Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
