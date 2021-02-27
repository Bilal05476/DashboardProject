import { useEffect, useState } from "react";

const CurrencyApi = () => {
  const [currency, setCurrency] = useState([]);
  const api = "http://data.fixer.io/api/latest?access_key=";
  const key = "";
  useEffect(() => {
    async function getRepos() {
      const response = await fetch(`${api}${key}`);
      const data = await response.json();
      setCurrency(data);
    }
    getRepos();
  }, []);
  return <div>{JSON.stringify(currency.rates)}</div>;
};

export default CurrencyApi;
