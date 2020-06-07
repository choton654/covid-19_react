import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changableUrl = url;
  if (country) {
    changableUrl = `${url}/countries/${country}`;
  }
  try {
    const res = await axios.get(changableUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((singleData) => ({
      confirmed: singleData.confirmed.total,
      deaths: singleData.deaths.total,
      reportDate: singleData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountry = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
