import React, { useState, useEffect } from "react";
import ShowDrinks from "./ShowDrinks";
import SearchForm from "./SearchForm";
import axios from "axios";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [drinkName, setDrinkName] = useState<string>("margarita");

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
      )
      .then((res) => {
        setData(res.data.drinks);
      });
  }, [drinkName]);

  const getDrinkName = (drink: string) => {
    setDrinkName(drink);
  };
  return (
    <div>
      <SearchForm getDrinkName={getDrinkName} />
      <ShowDrinks data={data} />
    </div>
  );
};

export default MainApp;
